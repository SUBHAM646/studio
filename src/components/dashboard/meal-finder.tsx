import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UtensilsCrossed } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function MealFinder() {
  const mealImages = PlaceHolderImages.filter(img => img.id.startsWith("meal-"));

  return (
    <Card className="lg:col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <UtensilsCrossed className="w-5 h-5 text-primary" />
          <span>Budget Meal Finder</span>
        </CardTitle>
        <CardDescription>Affordable and tasty eats near you.</CardDescription>
      </CardHeader>
      <CardContent>
        <Carousel opts={{ loop: true }} className="w-full">
          <CarouselContent>
            {mealImages.map((image) => (
              <CarouselItem key={image.id} className="md:basis-1/2">
                <div className="p-1">
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover"
                      data-ai-hint={image.imageHint}
                    />
                    <Badge variant="secondary" className="absolute bottom-2 left-2 bg-accent/90 text-accent-foreground hover:bg-accent">
                      Under ₹150
                    </Badge>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-12" />
          <CarouselNext className="mr-12" />
        </Carousel>
      </CardContent>
    </Card>
  );
}
