import { CirclePlus, Dumbbell, Sparkles } from "lucide-react";
import { Button } from "../ui/button";


interface NavbarProps {
  onOpenChat: () => void;
}

export function Navbar({ onOpenChat }: NavbarProps) {
  return (
    <header className="sticky top-0 z-30 w-full bg-[#f8fafc]/90 backdrop-blur-md border-b border-slate-200/80">
      <div className="w-full grid grid-cols-2 md:grid-cols-3 items-center h-16 px-4 sm:px-8 lg:px-12">
        {/* Left Section - Most Left Side */}
        <div className="flex items-center justify-start">
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-tr from-[#e84826] to-[#f46848] text-white shadow-sm shadow-orange-900/10 group-hover:scale-105 transition-transform">
              <Dumbbell className="size-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              IronPeak Gym
            </span>
          </a>
        </div>

        {/* Center Section - Exact Center */}
        <nav className="hidden md:flex items-center justify-center gap-8 text-sm font-medium text-slate-600">
          <a
            href="#sessions"
            className="hover:text-slate-900 transition-colors"
          >
            Sessions
          </a>
          <a
            href="#memberships"
            className="hover:text-slate-900 transition-colors"
          >
            Memberships
          </a>
          <a
            href="#facilities"
            className="hover:text-slate-900 transition-colors"
          >
            Facilities
          </a>
          <a
            href="#hours"
            className="hover:text-slate-900 transition-colors"
          >
            Hours & Location
          </a>
        </nav>

        {/* Right Section - Most Right Side */}
        <div className="flex items-center justify-end gap-3">
          <Button
            type="button"
            onClick={onOpenChat}
            className="inline-flex h-8 items-center justify-center gap-1.5 rounded-sm border border-orange-200/80 bg-white px-3 text-xs font-semibold text-slate-700 shadow-2xs hover:border-orange-300 hover:bg-orange-50/70 hover:text-orange-950 transition-all cursor-pointer"
          >
            <Sparkles className="size-3.5 shrink-0 text-[#e84826]" />
            <span className="leading-none">AI Assistant</span>
          </Button>
          <a
            href="#memberships"
            className="hidden sm:inline-flex h-8 items-center justify-center gap-1.5 rounded-sm bg-[#e84826] px-3 text-xs font-semibold text-white shadow-sm shadow-sky-500/20 hover:bg-[#e84826]-300 transition-colors cursor-pointer"
          >
            <CirclePlus className="size-4 shrink-0 text-white" />
            <span className="leading-none">Join Now</span>
          </a>
        </div>
      </div>
    </header>
  );
}
