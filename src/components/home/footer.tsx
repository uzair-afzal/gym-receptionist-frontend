import { Dumbbell, Phone, MapPin, Clock, Mail } from "lucide-react";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer id="hours" className="bg-[#121820] text-slate-400 py-12 border-t border-slate-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="flex size-8 items-center justify-center rounded-lg bg-[#e84826] text-white">
                <Dumbbell className="size-4" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">IronPeak Gym</span>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-slate-400">
              Modern equipment, expert trainers, and an inspiring fitness community built to push you further.
            </p>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center gap-1.5">
              <Clock className="size-3.5 text-[#e84826]" />
              Staffed Hours
            </h4>
            <ul className="mt-3 space-y-1.5 text-xs">
              <li className="flex justify-between">
                <span>Mon – Fri:</span>
                <span className="text-slate-200">5:00 AM – 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sat – Sun:</span>
                <span className="text-slate-200">6:00 AM – 9:00 PM</span>
              </li>
              <li className="pt-2 text-[11px] text-[#e84826] font-medium">
                ★ 24/7 Keycard Access for Peak Pro & Elite members
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center gap-1.5">
              <MapPin className="size-3.5 text-[#e84826]" />
              Location & Contact
            </h4>
            <ul className="mt-3 space-y-2 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="size-3.5 shrink-0 text-slate-500 mt-0.5" />
                <span>742 Evergreen Terrace, IronPeak District</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-3.5 shrink-0 text-slate-500" />
                <a href="tel:5559876543" className="hover:text-white transition-colors">
                  (555) 987-6543
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-3.5 shrink-0 text-slate-500" />
                <a href="mailto:hello@ironpeakgym.com" className="hover:text-white transition-colors">
                  hello@ironpeakgym.com
                </a>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Quick Links
            </h4>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <a href="#sessions" className="hover:text-white transition-colors">
                  Session Types
                </a>
              </li>
              <li>
                <a href="#memberships" className="hover:text-white transition-colors">
                  Membership Plans
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-white transition-colors">
                  Facilities & Amenities
                </a>
              </li>
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Back to Top
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-3">
          <p>© {CURRENT_YEAR} IronPeak Gym. All rights reserved. Portfolio demonstration.</p>
          <p>AI assistant powered by IronPeak intelligent virtual agent.</p>
        </div>
      </div>
    </footer>
  );
}
