// src/components/bottom-nav.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, MessageCircle, Bus, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

const NavItem = ({ href, icon, label }: { href: string; icon: React.ElementType; label: string; }) => {
  const Icon = icon;
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={cn("flex flex-col items-center gap-1 transition-colors", isActive ? 'text-primary' : 'text-gray-400 hover:text-gray-600')}>
      <Icon className="w-6 h-6" />
      <span className={cn("text-xs font-medium", isActive && "font-bold")}>{label}</span>
      {isActive && <div className="h-1 w-1 bg-primary rounded-full mt-1"></div>}
    </Link>
  );
};

export default function BottomNav() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-20">
      <div className="container mx-auto h-16 flex justify-around items-center">
        <NavItem href="/" icon={Home} label="Home" />
        <NavItem href="/chat" icon={MessageCircle} label="Chat" />
        <NavItem href="/commute" icon={Bus} label="Commute" />
        <NavItem href="/schedule" icon={Calendar} label="Schedule" />
      </div>
    </footer>
  );
}
