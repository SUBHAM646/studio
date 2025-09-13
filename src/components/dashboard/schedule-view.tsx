import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, BookOpenCheck } from "lucide-react";

const scheduleItems = [
    { time: "09:00 - 13:00", event: "Data Structures Class", icon: BookOpenCheck },
    { time: "14:00 - 16:00", event: "Study Session: Algorithms", icon: BookOpenCheck },
    { time: "18:00 - 19:00", event: "Project Discussion", icon: BookOpenCheck },
];

export default function ScheduleView() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CalendarDays className="w-5 h-5 text-primary" />
          <span>Your Schedule</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          Stay on top of your classes, exams, and study sessions.
        </p>
        <div className="space-y-3">
            {scheduleItems.map((item) => (
                <div key={item.event} className="flex items-start gap-3">
                    <div className="bg-muted p-2 rounded-full mt-1">
                        <item.icon className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div>
                        <p className="font-semibold">{item.event}</p>
                        <p className="text-xs text-muted-foreground">{item.time}</p>
                    </div>
                </div>
            ))}
        </div>
      </CardContent>
    </Card>
  );
}
