import { ArrowRight, Clock } from "lucide-react";

interface SessionTypesProps {
  onSelectPrompt: (prompt: string) => void;
}

const SESSIONS = [
  {
    id: "tour",
    title: "Free Gym Tour",
    icon: "🏋️",
    price: "Free",
    duration: "30 min",
    description:
      "A guided tour of our weight floor, cardio zone, sauna, and recovery facilities. Includes a complimentary 1-day pass.",
    prompt: "I'd like to book a free gym tour",
    badge: "Recommended",
  },
  {
    id: "training",
    title: "Personal Training",
    icon: "💪",
    price: "$65",
    duration: "60 min",
    description:
      "One-on-one tailored strength, hypertrophy, or conditioning session with a certified CSCS/NASM elite coach.",
    prompt: "Tell me more about booking personal training",
    badge: "Popular",
  },
  {
    id: "assessment",
    title: "Fitness Assessment",
    icon: "📋",
    price: "$25",
    duration: "45 min",
    description:
      "InBody body composition analysis, joint mobility screen, and personalized strength benchmarking road map.",
    prompt: "How does the fitness assessment work?",
    badge: "Free w/ Peak Pro",
  },
  {
    id: "hiit",
    title: "HIIT & Conditioning",
    icon: "🔥",
    price: "$20",
    duration: "45 min",
    description:
      "High-energy metabolic group conditioning blending Concept2 rowers, kettlebells, and functional turf work.",
    prompt: "Tell me about the HIIT and conditioning sessions",
    badge: "Group Session",
  },
];

export function SessionTypes({ onSelectPrompt }: SessionTypesProps) {
  return (
    <section id="sessions" className="py-12 md:py-16 bg-[#faf7f2]/60 border-t border-[#ede7dd]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header matching screenshot */}
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Our session types
          </h2>
          <p className="mt-1 text-base text-slate-500 font-normal">
            One on one sessions with our team.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SESSIONS.map((session) => (
            <div
              key={session.id}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs hover:border-orange-300 hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* Header with icon & badge */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl" role="img" aria-label={session.title}>
                    {session.icon}
                  </span>
                  <span className="rounded-[5px] bg-orange-50 px-2.5 py-0.5 text-[11px] font-semibold text-[#e84826] border border-orange-200/60">
                    {session.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-3.5 text-lg font-bold text-slate-900 group-hover:text-[#e84826] transition-colors">
                  {session.title}
                </h3>

                {/* Price & Duration */}
                <div className="mt-1.5 flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <span className="font-semibold text-slate-800 text-sm">{session.price}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="size-3 text-slate-400" />
                    {session.duration}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-3 text-xs leading-relaxed text-slate-600 line-clamp-3">
                  {session.description}
                </p>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => onSelectPrompt(session.prompt)}
                className="mt-5 flex w-full items-center justify-center gap-1.5 rounded-md border border-orange-100 bg-orange-50/50 py-2 text-xs font-semibold text-[#e84826] group-hover:bg-[#e84826] group-hover:text-white transition-all cursor-pointer"
              >
                <span>Book with AI</span>
                <ArrowRight className="size-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

