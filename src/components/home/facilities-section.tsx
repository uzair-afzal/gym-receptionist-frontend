import { ShieldCheck, Flame, Compass, HeartPulse } from "lucide-react";

export function FacilitiesSection() {
  const features = [
    {
      icon: Compass,
      title: "24/7 Smart Keycard Entry",
      description:
        "Train on your own terms. Seamless digital entry for Peak Pro and Elite members 365 days a year.",
    },
    {
      icon: Flame,
      title: "Olympic Lifting & Power Platforms",
      description:
        "Eleiko competition barbells, calibrated bumper plates, and deadlift platforms built for heavy lifts.",
    },
    {
      icon: HeartPulse,
      title: "Infrared Sauna & Contrast Plunge",
      description:
        "Accelerate muscle recovery, soothe joints, and flush inflammation with premium heat and ice therapy.",
    },
    {
      icon: ShieldCheck,
      title: "Certified Coaching Team",
      description:
        "Guidance from CSCS and NASM certified specialists who care about proper form, safety, and longevity.",
    },
  ];

  return (
    <section id="facilities" className="py-16 md:py-20 bg-white border-y border-[#ede7dd]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#e84826]">
            World-Class Amenities
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Built for those who take training seriously
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Every square foot is engineered with intention — from championship-grade strength equipment to restorative recovery spaces.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feat, i) => (
            <div key={i} className="flex flex-col items-start">
              <div className="flex size-12 items-center justify-center rounded-lg bg-orange-100/70 text-[#e84826] border border-orange-200/60 shadow-2xs">
                <feat.icon className="size-6" />
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900">{feat.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">{feat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

