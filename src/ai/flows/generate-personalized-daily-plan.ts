'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating a personalized daily plan for students.
 *
 * The flow takes student's schedule, preferences, and local tips as input and uses an LLM to generate a personalized daily plan.
 * The file exports:
 *   - generatePersonalizedDailyPlan: The function to trigger the flow.
 *   - GeneratePersonalizedDailyPlanInput: The input type for the flow.
 *   - GeneratePersonalizedDailyPlanOutput: The output type for the flow.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePersonalizedDailyPlanInputSchema = z.object({
  schedule: z.string().describe('The student schedule for the day.'),
  preferences: z.string().describe('The student preferences for activities and meals.'),
  localTips: z.string().describe('Local tips relevant to the student location.'),
});

export type GeneratePersonalizedDailyPlanInput = z.infer<
  typeof GeneratePersonalizedDailyPlanInputSchema
>;

const GeneratePersonalizedDailyPlanOutputSchema = z.object({
  dailyPlan: z.string().describe('The generated personalized daily plan.'),
});

export type GeneratePersonalizedDailyPlanOutput = z.infer<
  typeof GeneratePersonalizedDailyPlanOutputSchema
>;

export async function generatePersonalizedDailyPlan(
  input: GeneratePersonalizedDailyPlanInput
): Promise<GeneratePersonalizedDailyPlanOutput> {
  return generatePersonalizedDailyPlanFlow(input);
}

const generatePersonalizedDailyPlanPrompt = ai.definePrompt({
  name: 'generatePersonalizedDailyPlanPrompt',
  input: {schema: GeneratePersonalizedDailyPlanInputSchema},
  output: {schema: GeneratePersonalizedDailyPlanOutputSchema},
  prompt: `You are a personal assistant for students in Bengaluru. Generate a personalized daily plan based on the following information:

Student Schedule: {{{schedule}}}
Student Preferences: {{{preferences}}}
Local Tips: {{{localTips}}}

The daily plan should include commute suggestions, meal suggestions, study reminders, and relevant local tips. The plan should be concise and easy to follow.`,
});

const generatePersonalizedDailyPlanFlow = ai.defineFlow(
  {
    name: 'generatePersonalizedDailyPlanFlow',
    inputSchema: GeneratePersonalizedDailyPlanInputSchema,
    outputSchema: GeneratePersonalizedDailyPlanOutputSchema,
  },
  async input => {
    const {output} = await generatePersonalizedDailyPlanPrompt(input);
    return output!;
  }
);
