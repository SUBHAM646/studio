// src/app/chat/page.tsx
'use client';

import { useState } from 'react';
import {
  ArrowLeft,
  MoreHorizontal,
  Paperclip,
  SendHorizontal,
  Bus,
  Utensils,
  Calendar,
  MapPin,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import BottomNav from '@/components/bottom-nav';

const SuggestionChip = ({
  icon: Icon,
  text,
  color,
  textColor,
  borderColor,
}: {
  icon: React.ElementType;
  text: string;
  color: string;
  textColor: string;
  borderColor: string;
}) => (
  <Card
    className={`rounded-xl border-2 ${borderColor}`}
    style={{ backgroundColor: color }}
  >
    <div className="p-3 flex items-center gap-2">
      <Icon className={`w-5 h-5 ${textColor}`} />
      <span className={`font-semibold text-sm ${textColor}`}>{text}</span>
    </div>
  </Card>
);

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "student assistant! 🛍️ I can help you with commute planning, finding budget meals, managing your schedule, and local tips. What would you like to know?",
      time: '10:48 PM',
    },
  ]);

  const suggestionPrompts = [
    'Plan my commute to MG Road',
    'Suggest dinner under ₹100',
    "What's the weather today?",
    'Plan my day tomorrow',
  ];

  return (
    <div className="flex flex-col min-h-dvh bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white border-b p-4 flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <div className="flex items-center gap-2">
            <Avatar className="h-9 w-9 border-2 border-orange-200">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>NM</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-bold">Namma Mitra</p>
              <p className="text-xs text-green-500 font-semibold">Online</p>
            </div>
          </div>
        </div>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="w-6 h-6" />
        </Button>
      </header>

      <main className="flex-1 pt-20 pb-44 px-4 space-y-6 overflow-y-auto">
        {messages.map((msg) => (
          <div key={msg.id} className="flex flex-col items-start gap-2">
            <div className="bg-gray-100 rounded-xl p-4 max-w-sm">
              <p className="text-gray-800">{msg.text}</p>
            </div>
            <span className="text-xs text-gray-400 ml-2">{msg.time}</span>
          </div>
        ))}

        <div className="space-y-3">
          {suggestionPrompts.map((prompt, index) => (
            <Card key={index} className="rounded-xl border bg-white shadow-sm">
              <div className="p-3">
                <p className="text-center text-primary font-medium">
                  {prompt}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </main>

      <div className="fixed bottom-16 left-0 right-0 bg-white p-4 space-y-4 border-t">
        <div className="grid grid-cols-2 gap-3">
          <SuggestionChip
            icon={Bus}
            text="Plan commute"
            color="#E6F2FF"
            textColor="text-blue-600"
            borderColor="border-blue-200"
          />
          <SuggestionChip
            icon={Utensils}
            text="Find food"
            color="#E4F8ED"
            textColor="text-green-600"
            borderColor="border-green-200"
          />
          <SuggestionChip
            icon={Calendar}
            text="My schedule"
            color="#F3EBFF"
            textColor="text-purple-600"
            borderColor="border-purple-200"
          />
          <SuggestionChip
            icon={MapPin}
            text="Local tips"
            color="#FFF4E6"
            textColor="text-orange-600"
            borderColor="border-orange-200"
          />
        </div>
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Input
              placeholder="Ask me anything about your day..."
              className="bg-gray-100 border-transparent rounded-full pl-10 pr-10 h-12"
            />
            <Paperclip className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          </div>
          <Button
            size="icon"
            className="rounded-full bg-primary h-12 w-12 flex-shrink-0"
          >
            <SendHorizontal className="w-6 h-6 text-white" />
          </Button>
        </div>
      </div>

      <footer className="text-center text-gray-500 text-sm py-4 fixed bottom-0 left-0 right-0 bg-white z-20">
            Designed by <span className="font-bold text-purple-600">▲ Readdy</span>
        </footer>

      <BottomNav />
    </div>
  );
}
