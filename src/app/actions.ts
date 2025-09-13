'use server';

import { generatePersonalizedDailyPlan } from '@/ai/flows/generate-personalized-daily-plan';
import { z } from 'zod';

const formSchema = z.object({
  schedule: z.string().min(20, 'Please describe your schedule in a bit more detail.'),
  preferences: z.string().min(20, 'Please tell us more about your preferences.'),
});

// A placeholder for what would be a dynamic data fetch.
const BENGALURU_TIPS = `
- Traffic is heavy during peak hours (8-10 AM, 5-8 PM). Plan commutes accordingly.
- The Blue Line (KR Pura to Airport) of the Namma Metro is partially operational.
- Popular student-friendly food areas include Koramangala, Indiranagar, and Malleshwaram.
- Weather is generally pleasant, but expect rain during monsoon season (June-October).
`;

type ActionResult = {
    dailyPlan?: string;
    error?: {
        schedule?: string[];
        preferences?: string[];
        _root?: string[];
    } | null;
}

export async function handleGeneratePlan(data: unknown): Promise<ActionResult> {
  const parsedData = formSchema.safeParse(data);
  if (!parsedData.success) {
    return { error: parsedData.error.flatten().fieldErrors };
  }

  try {
    const result = await generatePersonalizedDailyPlan({
      schedule: parsedData.data.schedule,
      preferences: parsedData.data.preferences,
      localTips: BENGALURU_TIPS,
    });
    return { dailyPlan: result.dailyPlan };
  } catch (e) {
    console.error(e);
    return { error: { _root: ['An unexpected error occurred. Please try again.'] } };
  }
}
