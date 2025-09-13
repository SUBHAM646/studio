// src/app/schedule/page.tsx
'use client';

import {
  ArrowLeft,
  Bell,
  Book,
  Cloud,
  FlaskConical,
  GraduationCap,
  Lightbulb,
  Plus,
  Users,
  Utensils,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BottomNav from '@/components/bottom-nav';
import React from 'react';

const scheduleItems = [
  {
    time: '9:00 AM',
    title: 'Mathematics Lecture',
    location: 'Room 301, Block A',
    duration: '1h 30m',
    instructor: 'Dr. Sharma',
    icon: Book,
    iconBgColor: 'bg-blue-100',
    iconColor: 'text-blue-500',
  },
  {
    time: '11:00 AM',
    title: 'Physics Lab',
    location: 'Lab 2, Block B',
    duration: '2h',
    instructor: 'Prof. Kumar',
    icon: FlaskConical,
    iconBgColor: 'bg-purple-100',
    iconColor: 'text-purple-500',
  },
  {
    time: '1:00 PM',
    title: 'Lunch Break',
    location: 'Cafeteria',
    duration: '1h',
    instructor: '',
    icon: Utensils,
    iconBgColor: 'bg-green-100',
    iconColor: 'text-green-500',
  },
  {
    time: '2:30 PM',
    title: 'Computer Science',
    location: 'Room 205, Block C',
    duration: '1h 30m',
    instructor: 'Dr. Patel',
    icon: GraduationCap,
    iconBgColor: 'bg-blue-100',
    iconColor: 'text-blue-500',
  },
  {
    time: '5:00 PM',
    title: 'Study Group - DSA',
    location: 'Library, 2nd Floor',
    duration: '2h',
    instructor: '',
    icon: Users,
    iconBgColor: 'bg-orange-100',
    iconColor: 'text-orange-500',
  },
];

const ScheduleItem = ({ item }: { item: (typeof scheduleItems)[0] }) => (
  <Card className="shadow-md border-gray-100">
    <CardContent className="p-4 flex gap-4">
      <div className="w-16 text-center">
        <p className="font-bold text-gray-800">{item.time.split(' ')[0]}</p>
        <p className="text-sm text-gray-500">{item.time.split(' ')[1]}</p>
      </div>
      <div className="flex-1 space-y-2">
        <div className="flex items-start gap-3">
          <div className={`p-2 rounded-lg ${item.iconBgColor}`}>
            <item.icon className={`w-5 h-5 ${item.iconColor}`} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.location}</p>
          </div>
          <Bell className="w-5 h-5 text-gray-400 ml-auto" />
        </div>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span>&#128337; {item.duration}</span>
          {item.instructor && <span>{item.instructor}</span>}
          <Button variant="outline" size="sm" className="ml-auto rounded-lg">
            Details
          </Button>
        </div>
      </div>
    </CardContent>
  </Card>
);

const StudyTip = ({ text }: { text: string }) => (
  <li className="text-purple-900/80 text-sm">{text}</li>
);

export default function SchedulePage() {
    const studyTips = [
        'Use travel time for quick revision (flashcards)',
        'Study in 25-minute focused sessions (Pomodoro)',
        'Form study groups for difficult subjects',
        "Use campus library's quiet zones during peak hours",
      ];
  return (
    <div className="flex flex-col min-h-dvh bg-gray-50">
       <header className="fixed top-0 left-0 right-0 bg-white border-b p-4 flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h2 className="text-lg font-bold">My Schedule</h2>
        </div>
        <Button variant="ghost" size="icon">
          <Plus className="w-6 h-6" />
        </Button>
      </header>
      <main className="flex-1 space-y-6 pt-20 pb-24 p-4">
        <header className="flex justify-between items-start">
          <div>
            <h1 className="text-xl font-bold text-gray-800">
              Saturday, September 13
            </h1>
            <p className="text-gray-500">5 classes today</p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2">
              <p className="text-2xl font-bold text-blue-500">23°C</p>
              <Cloud className="w-8 h-8 text-blue-400" />
            </div>
            <p className="text-sm text-gray-500">Partly cloudy</p>
          </div>
        </header>

        <Tabs defaultValue="today" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-gray-200/60 rounded-xl">
            <TabsTrigger value="today" className="rounded-lg">Today</TabsTrigger>
            <TabsTrigger value="upcoming" className="rounded-lg">Upcoming</TabsTrigger>
          </TabsList>
          <TabsContent value="today" className="mt-6 space-y-4">
            {scheduleItems.map((item, index) => (
              <ScheduleItem key={index} item={item} />
            ))}
          </TabsContent>
          <TabsContent value="upcoming">
            <p className='text-center text-gray-500 py-8'>Upcoming schedule will be shown here.</p>
          </TabsContent>
        </Tabs>
        
        <div className="grid grid-cols-2 gap-4">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-6 rounded-2xl text-base">
                <Plus className='mr-2'/>
                Add Event
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-6 rounded-2xl text-base">
                <Bell className='mr-2'/>
                Set Reminder
            </Button>
        </div>

        <div className="bg-purple-100/50 border border-purple-200 rounded-xl p-4 space-y-2">
            <h3 className="font-semibold text-purple-900 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Study Tips
            </h3>
            <ul className="list-disc list-inside space-y-1 pl-2">
              {studyTips.map((tip, index) => (
                <StudyTip key={index} text={tip} />
              ))}
            </ul>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
