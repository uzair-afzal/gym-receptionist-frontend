import { Check, Sparkles } from "lucide-react";

interface MembershipSectionProps {
  onSelectPrompt: (prompt: string) => void;
}

const PLANS = [
  {
    id: "basic",
    name: "Basic Access",
    price: "$39",
    billing: "/month",
    description: "Ideal for self-guided lifters who train during regular hours.",
    features: [
      "Access to full gym floor & cardio deck",
      "Locker room & private shower access",
      "Complimentary towel service",
      "Access during staffed hours (5am-11pm)",
    ],
    highlighted: false,
    cta: "Ask AI about Basic",
    prompt: "Tell me about the Basic Access membership plan",
  },
  {
    id: "pro",
    name: "Peak Pro",
    price: "$69",
    billing: "/month",
    description: "Our most popular tier with full 24/7 access and recovery perks.",
    features: [
      "24/7 keycard entry 365 days a year",
      "Full access to Infrared Sauna & Cold Plunge",
      "Free quarterly Fitness & Mobility Assessment",
      "2 guest day passes per month",
      "10% discount on smoothies & supplements",
    ],
    highlighted: true,
    cta: "Ask AI about Peak Pro",
    prompt: "Tell me about the Peak Pro membership plan and 24/7 access",
  },
  {
    id: "elite",
    name: "Elite All-Access",
    price: "$99",
    billing: "/month",
    description: "The ultimate transformation experience with 1-on-1 coaching.",
    features: [
      "Everything in Peak Pro included",
      "2 Personal Training sessions every month",
      "Custom monthly nutrition & macros road map",
      "Unlimited guest day passes",
      "Priority booking for recovery amenities",
    ],
    highlighted: false,
    cta: "Ask AI about Elite",
    prompt: "Tell me about the Elite All-Access membership and coaching",
  },
];

export function MembershipSection({ onSelectPrompt }: MembershipSectionProps) {
  return (
    <section id="memberships" className="py-16 md:py-20 bg-[#fbf9f5]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="rounded-sm bg-orange-100/70 px-3 py-1 text-xs font-semibold text-[#e84826] border border-orange-200">
            Simple, Transparent Pricing
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Choose your path to peak fitness
          </h2>
          <p className="mt-2 text-base text-slate-600">
            No long-term locks, no hidden cancellation fees. Change or cancel anytime.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:gap-8 items-stretch">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col justify-between rounded-3xl p-7 transition-all duration-200 ${plan.highlighted
                ? "border-2 border-[#e84826] bg-white shadow-xl shadow-orange-950/5 ring-1 ring-[#e84826]/20"
                : "border border-slate-200 bg-white/80 shadow-xs hover:border-slate-300 hover:shadow-md"
                }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-lg bg-gradient-to-r from-[#e84826] to-[#f46848] px-3.5 py-1 text-[11px] font-bold tracking-wide uppercase text-white shadow-sm flex items-center gap-1">
                  <Sparkles className="size-3" />
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                <p className="mt-2 text-xs text-slate-500 min-h-[32px]">{plan.description}</p>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold tracking-tight text-[#e84826]">
                    {plan.price}
                  </span>
                  <span className="text-sm font-semibold text-slate-500">{plan.billing}</span>
                </div>

                <ul className="mt-6 space-y-3 text-xs text-slate-600">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[#e84826] mt-0.5">
                        <Check className="size-2.5 stroke-[3]" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={() => onSelectPrompt(plan.prompt)}
                  className={`w-full rounded-md py-2.5 px-4 text-xs font-semibold transition-all cursor-pointer ${plan.highlighted
                    ? "bg-[#e84826] text-white shadow-sm hover:bg-[#d43d1c]"
                    : "border border-slate-300 bg-white text-slate-700 hover:border-orange-300 hover:bg-orange-50/50 hover:text-[#e84826]"
                    }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

