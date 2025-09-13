import Link from 'next/link';
import { Home, MessageCircle, Bus, Calendar } from 'lucide-react';

const NavItem = ({ href, icon, label, isActive = false }: { href: string; icon: React.ElementType; label: string; isActive?: boolean }) => {
  const Icon = icon;
  return (
    <Link href={href} className={`flex flex-col items-center gap-1 ${isActive ? 'text-primary' : 'text-gray-500'}`}>
      <Icon className="w-6 h-6" />
      <span className="text-xs font-medium">{label}</span>
    </Link>
  );
};

export default function BottomNav() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg">
      <div className="container mx-auto h-16 flex justify-around items-center">
        <NavItem href="/" icon={Home} label="Home" isActive />
        <NavItem href="#" icon={MessageCircle} label="Chat" />
        <NavItem href="#" icon={Bus} label="Commute" />
        <NavItem href="#" icon={Calendar} label="Schedule" />
      </div>
    </footer>
  );
}
