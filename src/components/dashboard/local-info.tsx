import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PartyPopper, CloudSun, ShieldAlert, Info } from "lucide-react";

export default function LocalInfo() {
  return (
    <Card className="lg:col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Info className="w-5 h-5 text-primary" />
          <span>Bengaluru Pulse</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="events">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="events"><PartyPopper className="w-4 h-4 mr-2" />Events</TabsTrigger>
            <TabsTrigger value="weather"><CloudSun className="w-4 h-4 mr-2" />Weather</TabsTrigger>
            <TabsTrigger value="alerts"><ShieldAlert className="w-4 h-4 mr-2" />Alerts</TabsTrigger>
          </TabsList>
          <TabsContent value="events" className="mt-4 text-sm">
            <p className="font-semibold">Weekend Music Fest @ Cubbon Park</p>
            <p className="text-muted-foreground">Sat, 5 PM onwards. Free entry for students!</p>
          </TabsContent>
          <TabsContent value="weather" className="mt-4 text-sm">
            <p className="font-semibold">Partly Cloudy, 28°C</p>
            <p className="text-muted-foreground">Light showers expected in the evening. Carry an umbrella!</p>
          </TabsContent>
          <TabsContent value="alerts" className="mt-4 text-sm">
            <p className="font-semibold">Traffic Advisory: Silk Board</p>
            <p className="text-muted-foreground">Heavy congestion due to metro construction. Avoid if possible.</p>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
