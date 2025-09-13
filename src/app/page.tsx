"use client";

import Link from "next/link";
import {
  Car,
  Heart,
  MessageCircle,
  Bus,
  FileText,
  LocateIcon,
  Bot,
  CookingPot,
  Sparkles,
  Search,
  BookUser,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import BottomNav from "@/components/bottom-nav";

const FeatureCard = ({
  icon,
  title,
  subtitle,
  bgColor = "bg-white",
}: {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  bgColor?: string;
}) => {
  const Icon = icon;
  return (
    <Card className={`shadow-lg ${bgColor}`}>
      <CardContent className="p-4 flex items-center gap-4">
        <div className="p-3 bg-white rounded-lg">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="font-bold">{title}</h3>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const AskMeCard = ({
  icon,
  text,
  subtext,
  bgColor,
}: {
  icon: React.ElementType;
  text: string;
  subtext: string;
  bgColor: string;
}) => {
  const Icon = icon;
  return (
    <Card className={`${bgColor} bg-opacity-20 border-0`}>
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className={`p-2 rounded-lg ${bgColor} bg-opacity-30`}>
            <Icon className="w-5 h-5 text-gray-800" />
          </div>
          <div>
            <p className="font-semibold text-gray-800">&quot;{text}&quot;</p>
            <p className="text-sm text-gray-600">{subtext}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-gradient-to-b from-orange-50 to-rose-50">
      <header className="sticky top-0 z-10 flex justify-between items-center p-4 bg-white/80 backdrop-blur-sm border-b border-gray-200/80">
        <h1 className="text-2xl font-bold text-primary">Namma Mitra</h1>
        <Button variant="ghost" size="icon">
          <Info className="h-6 w-6" />
        </Button>
      </header>
      <main className="flex-1 container mx-auto p-4 md:p-6 lg:p-8 space-y-8 pb-24">
        <section className="text-center py-8">
          <div className="inline-block p-4 bg-orange-200/50 rounded-full relative mb-4">
            <div className="p-3 bg-white rounded-full">
              <Bot className="w-10 h-10 text-orange-400" />
            </div>
            <Heart className="w-6 h-6 text-red-500 absolute bottom-2 right-1 bg-white rounded-full p-0.5" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">
            Your Bengaluru Student Assistant
          </h1>
          <p className="text-gray-600 mt-2 max-w-md mx-auto">
            Beat traffic, save money, and manage your student life with
            AI-powered daily planning
          </p>
        </section>

        <section>
          <Link href="/chat">
            <Card className="bg-gradient-to-br from-orange-500 to-red-500 p-6 rounded-2xl text-center text-white shadow-xl">
              <MessageCircle className="w-8 h-8 mx-auto mb-2 bg-white/30 p-1.5 rounded-lg" />
              <h2 className="text-xl font-bold">Start Chatting</h2>
              <p className="text-sm">
                Ask me anything about your day in Bengaluru!
              </p>
            </Card>
          </Link>
        </section>

        <section className="grid grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="p-2 inline-block bg-blue-100 rounded-lg">
                <Bus className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="font-bold mt-2">Smart Commute</h3>
              <p className="text-sm text-gray-500">Best routes & transport</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="p-2 inline-block bg-green-100 rounded-lg">
                <CookingPot className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="font-bold mt-2">Budget Meals</h3>
              <p className="text-sm text-gray-500">Affordable food options</p>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-gray-800">How I Help You</h2>
          <FeatureCard
            icon={Sparkles}
            title="Natural Conversations"
            subtitle="Chat naturally about your day"
            bgColor="bg-orange-100/50"
          />
        </section>

        <section className="space-y-4">
            <FeatureCard icon={FileText} title="Budget Management" subtitle="Find affordable options" />
            <FeatureCard icon={LocateIcon} title="Local Context" subtitle="Bengaluru-specific insights" />
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-gray-800">Try Asking Me</h2>
          <AskMeCard
            icon={Search}
            text="Plan my commute to MG Road"
            subtext="Get fastest routes with cost comparison"
            bgColor="bg-orange-200"
          />
          <AskMeCard
            icon={Search}
            text="Suggest dinner under ₹100"
            subtext="Find nearby affordable eateries"
            bgColor="bg-green-200"
          />
          <AskMeCard
            icon={Search}
            text="Plan my day tomorrow"
            subtext="Complete schedule with reminders"
            bgColor="bg-blue-200"
          />
        </section>

      </main>
      <BottomNav />
    </div>
  );
}
