import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquareQuote } from "lucide-react";

export default function WelcomeBanner() {
  return (
    <Card className="bg-primary/10 border-primary/20">
      <CardHeader className="flex flex-row items-center gap-4">
        <MessageSquareQuote className="w-8 h-8 text-primary" />
        <div>
          <CardTitle className="font-headline">Welcome to Namma Mitra!</CardTitle>
          <CardDescription className="text-foreground/80">
            Your personal AI assistant for student life in Bengaluru.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-foreground">
          Ready to conquer your day? Just tell me your schedule and what you like in the chat box below, and I&apos;ll create a personalized plan just for you.
        </p>
      </CardContent>
    </Card>
  );
}
