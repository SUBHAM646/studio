import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bus, TramFront, Car } from "lucide-react";

const commuteOptions = [
  { name: "Bus", icon: Bus, details: "Extensive network coverage" },
  { name: "Metro", icon: TramFront, details: "Fast & air-conditioned" },
  { name: "Auto", icon: Car, details: "For last-mile connectivity" },
];

export default function CommuteOptions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bus className="w-5 h-5 text-primary" />
          <span>Commute Optimizer</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          Find the fastest and cheapest routes across Bengaluru.
        </p>
        <div className="space-y-3">
          {commuteOptions.map((option) => (
            <div key={option.name} className="flex items-center gap-3">
              <div className="bg-muted p-2 rounded-md">
                <option.icon className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <p className="font-semibold">{option.name}</p>
                <p className="text-xs text-muted-foreground">{option.details}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
