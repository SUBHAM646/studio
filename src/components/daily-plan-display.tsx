import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ClipboardList,
  Clock,
  Utensils,
  Bus,
  BookOpen,
  Coffee,
  Bed,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface DailyPlanDisplayProps {
  plan: string;
}

const getIconForLine = (line: string): LucideIcon => {
  const lowerLine = line.toLowerCase();
  if (lowerLine.includes("breakfast")) return Utensils;
  if (lowerLine.includes("lunch")) return Utensils;
  if (lowerLine.includes("dinner")) return Utensils;
  if (lowerLine.includes("commute")) return Bus;
  if (lowerLine.includes("class")) return BookOpen;
  if (lowerLine.includes("study")) return BookOpen;
  if (lowerLine.includes("break")) return Coffee;
  if (lowerLine.includes("evening") || lowerLine.includes("relax") || lowerLine.includes("sleep")) return Bed;
  return Clock;
};

export default function DailyPlanDisplay({ plan }: DailyPlanDisplayProps) {
  const planItems = plan.split("\n").filter((line) => line.trim() !== "");

  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <ClipboardList className="w-6 h-6 text-primary" />
          <span className="font-headline">Your Personalized Daily Plan</span>
        </CardTitle>
        <CardDescription>
          Here&apos;s a suggested plan to help you make the most of your day in Bengaluru.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {planItems.map((item, index) => {
            const Icon = getIconForLine(item);
            return (
              <div key={index} className="flex items-start gap-4">
                <div className="mt-1 bg-primary/10 text-primary p-2 rounded-full">
                  <Icon className="w-5 h-5" />
                </div>
                <p className="flex-1 text-sm pt-1.5">{item.replace(/^- /, "")}</p>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
