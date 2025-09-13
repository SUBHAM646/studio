// src/app/commute/page.tsx
'use client';

import { ArrowLeft, ArrowUpDown, MapPin, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import BottomNav from '@/components/bottom-nav';

const DestinationChip = ({ text }: { text: string }) => (
  <Button variant="outline" className="rounded-full bg-white border-gray-200 text-gray-700">
    {text}
  </Button>
);

const CommuteTip = ({ text }: { text: string }) => (
  <li className="text-blue-900/80 text-sm">{text}</li>
);

export default function CommutePage() {
  const popularDestinations = [
    'MG Road',
    'Brigade Road',
    'Koramangala',
    'Indiranagar',
    'Whitefield',
    'Electronic City',
    'Marathahalli',
    'JP Nagar',
    'Jayanagar',
    'BTM Layout',
    'HSR Layout',
    'Banashankari',
    'Rajajinagar',
    'Malleshwaram',
    'Hebbal',
  ];

  const commuteTips = [
    'Metro is fastest during peak hours (8-10 AM, 6-8 PM)',
    'Student passes offer 50% discount on metro/bus',
    'Check live traffic before choosing route',
    'Carpooling apps can save 60% on costs',
  ];

  return (
    <div className="flex flex-col min-h-dvh bg-blue-50/50">
      <main className="flex-1 space-y-4 pb-24">
        <section className="bg-white p-6 pb-20">
          <h1 className="text-2xl font-bold text-gray-800">Plan Your Journey</h1>
          <p className="text-gray-500 mb-6">Find the fastest and most affordable route</p>

          <div className="flex flex-col items-center gap-2">
            <div className='w-full'>
              <label className="text-sm font-medium text-gray-600">From</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Enter pickup location"
                  className="pl-10 h-12 rounded-xl border-gray-300"
                />
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="bg-blue-100/80 border-blue-200 text-blue-600 rounded-full h-9 w-9 my-1"
            >
              <ArrowUpDown className="w-5 h-5" />
            </Button>

            <div className='w-full'>
              <label className="text-sm font-medium text-gray-600">To</label>
               <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Enter destination"
                  className="pl-10 h-12 rounded-xl border-gray-300"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-t-3xl -mt-16 p-6 space-y-6 shadow-2xl shadow-gray-500/10">
            <div className="flex items-center justify-between">
                <Button variant="ghost" size="icon">
                    <ArrowLeft className="w-6 h-6" />
                </Button>
                <h2 className="text-lg font-bold">Smart Commute</h2>
                <div className="w-10"></div>
            </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Popular Destinations</h3>
            <div className="flex flex-wrap gap-2">
              {popularDestinations.map((dest) => (
                <DestinationChip key={dest} text={dest} />
              ))}
            </div>
          </div>

          <Button className="w-full bg-gray-200 text-gray-700 font-semibold h-12 rounded-xl hover:bg-gray-300">
            <Search className="mr-2" />
            Plan My Commute
          </Button>

          <div className="bg-blue-100/50 border border-blue-200 rounded-xl p-4 space-y-2">
            <h3 className="font-semibold text-blue-900 flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Commute Tips
            </h3>
            <ul className="list-disc list-inside space-y-1">
              {commuteTips.map((tip, index) => (
                <CommuteTip key={index} text={tip} />
              ))}
            </ul>
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
