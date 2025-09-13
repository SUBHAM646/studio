"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AnimatePresence, motion } from "framer-motion";
import { Send, LoaderCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

import { handleGeneratePlan } from "./actions";
import { Logo } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import WelcomeBanner from "@/components/dashboard/welcome-banner";
import CommuteOptions from "@/components/dashboard/commute-options";
import MealFinder from "@/components/dashboard/meal-finder";
import ScheduleView from "@/components/dashboard/schedule-view";
import LocalInfo from "@/components/dashboard/local-info";
import LoadingSkeleton from "@/components/loading-skeleton";
import DailyPlanDisplay from "@/components/daily-plan-display";

const formSchema = z.object({
  schedule: z
    .string()
    .min(20, "Please describe your schedule in a bit more detail."),
  preferences: z
    .string()
    .min(20, "Please tell us more about your preferences."),
});

type FormValues = z.infer<typeof formSchema>;

export default function Home() {
  const [plan, setPlan] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      schedule: "",
      preferences: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsGenerating(true);
    setPlan(null);
    const result = await handleGeneratePlan(data);
    setIsGenerating(false);

    if (result.dailyPlan) {
      setPlan(result.dailyPlan);
    } else {
      console.error(result.error);
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: "There was a problem with generating your plan. Please try again.",
      });
    }
  };

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <header className="p-4 border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto flex items-center gap-2">
          <Logo className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold text-foreground font-headline">
            Namma Mitra
          </h1>
        </div>
      </header>

      <main className="flex-1 container mx-auto p-4 md:p-6 lg:p-8 space-y-6">
        <AnimatePresence mode="wait">
          {isGenerating ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <LoadingSkeleton />
            </motion.div>
          ) : plan ? (
            <motion.div
              key="plan"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <DailyPlanDisplay plan={plan} />
            </motion.div>
          ) : (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <WelcomeBanner />
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <CommuteOptions />
                <MealFinder />
                <ScheduleView />
                <LocalInfo />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="sticky bottom-0 mt-auto bg-background/80 backdrop-blur-sm border-t">
        <div className="container mx-auto p-4">
          <Card className="p-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="schedule"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder="e.g., 'Class from 9am to 1pm at Jayanagar, then library until 5pm. Exam tomorrow.'"
                            className="h-24 resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="preferences"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder="e.g., 'I prefer South Indian food, budget for lunch is 100 Rs. I like to read in the evening.'"
                            className="h-24 resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex justify-end">
                  <Button
                    type="submit"
                    disabled={isGenerating}
                    className="w-full md:w-auto"
                  >
                    {isGenerating ? (
                      <LoaderCircle className="animate-spin" />
                    ) : (
                      <Send />
                    )}
                    <span className="ml-2">Generate My Plan</span>
                  </Button>
                </div>
              </form>
            </Form>
          </Card>
        </div>
      </footer>
    </div>
  );
}
