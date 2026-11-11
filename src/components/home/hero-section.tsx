import { MessageSquareText } from "lucide-react";

interface HeroSectionProps {
  onOpenChat: () => void;
}

export function HeroSection({ onOpenChat }: HeroSectionProps) {
  return (
    <section id="hero" className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-16">
      {/* Soft warm radial gradient background */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-b from-orange-100/50 via-amber-50/30 to-transparent blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <div className="text-2xl font-extrabold tracking-tight text-[#e84826] sm:text-5xl md:text-5xl md:leading-[1.12]">
            Stronger starts here
          </div>
          <p className="mt-6 text-sm text-slate-600 sm:text-sm font-normal max-w-2xl leading-relaxed">
            Take your fitness journey to the next level with personalized training, effective workouts, and expert guidance. Build strength, improve endurance, and stay motivated in a supportive environment designed to help you achieve your goals.
          </p>

          {/* Interactive AI Assistant Pill Badge matching screenshot */}

          <div className="mt-8 sm:mt-12">
            <button
              type="button"
              onClick={onOpenChat}
              className="group flex w-full items-center gap-3 rounded-lg border border-orange-200/90 bg-white p-2 text-left text-sm font-medium text-slate-700 shadow-sm transition-all hover:border-orange-300 hover:bg-orange-50/40 hover:text-slate-900 hover:shadow-md cursor-pointer sm:w-fit sm:max-w-full"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-sm bg-orange-100/80 text-[#e84826] transition-transform group-hover:scale-110">
                <MessageSquareText className="size-4.5" />
              </span>

              <span className="min-w-0 leading-relaxed">
                Try the AI assistant in the corner: ask about memberships or book a session
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

