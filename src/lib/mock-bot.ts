// Domain-specific knowledge base for IronPeak Gym AI Assistant

const TOUR_REPLY = `I'd love to help you book a free tour! 🏋️

Here is what's included:
• 30-minute guided walkthrough of our gym floor, cardio deck & recovery lounge
• Complimentary 1-day pass so you can test out our equipment right after
• Quick goal-setting session with one of our certified trainers

We have tour slots available today and tomorrow between 8:00 AM and 7:30 PM. 

What day and time works best for you? (You can also reply with your phone number and name to reserve right away!)`;

const SESSIONS_REPLY = `Here are our 1-on-1 and coaching session options at IronPeak:

• 🏋️ Free Gym Tour: $0 (30 min) — Walkthrough + free day workout pass
• 💪 Personal Training: $65/session (or 4 sessions for $240) — Customized strength & conditioning with an elite coach
• 📋 Fitness Assessment: $25 (Included free with Peak Pro) — InBody body composition scan, mobility screen & personalized road map
• 🔥 HIIT & Conditioning: $20/class — Coached high-intensity small group session

Would you like to reserve a slot for any of these, or should I tell you more about our trainers?`;

const MEMBERSHIP_REPLY = `We offer 3 flexible membership tiers with no long-term lock-in contracts:

1. Basic Access — $39/month
   • Full access to main gym floor during standard staffed hours
   • Locker room, showers & towel service included

2. Peak Pro — $69/month (Most Popular ⭐)
   • 24/7 keycard access 365 days a year
   • Free quarterly Fitness & Mobility Assessment
   • Unlimited access to our Infrared Sauna & Cold Plunge lounge
   • 2 guest day-passes per month

3. Elite All-Access — $99/month
   • Everything in Peak Pro +
   • 2 complimentary 1-on-1 Personal Training sessions each month
   • Unlimited guest passes & premium nutrition coaching

Would you like me to help you get signed up with the Peak Pro pass or answer any questions?`;

const HOURS_REPLY = `Here are the opening hours for IronPeak Gym:

🕒 Staffed Facility Hours:
• Monday – Friday: 5:00 AM – 11:00 PM
• Saturday – Sunday: 6:00 AM – 9:00 PM

🔑 24/7 Member Access:
Members with Peak Pro or Elite tiers have 24/7 keycard entry, 365 days a year — even on holidays!

Staff is always on site during staffed hours. Would you like to schedule a visit?`;

const TRAINER_REPLY = `Our coaching staff includes certified CSCS, NASM, and Olympic lifting specialists:

• Coach Marcus Vance — Head Strength & Powerlifting Coach
• Coach Elena Rostova — Functional Mobility & HIIT Specialist
• Coach David Chen — Athletic Conditioning & Body Transformation

All sessions are 1-on-1 and tailored to your current fitness level. Would you like to book an intro consultation?`;

const AMENITIES_REPLY = `IronPeak Gym features state-of-the-art facilities:

• Eleiko Olympic lifting platforms & competition bumper plates
• Full Hammer Strength plate-loaded machine suite
• High-performance cardio deck (Concept2 rowers, SkiErgs, assault bikes)
• Infrared sauna and cold plunge recovery suites
• Luxury locker rooms with private showers and complimentary towels
• Healthy smoothie & protein fuel bar

Would you like to come see it in person with a free tour?`;

const CONTACT_REPLY = `You can reach our front desk anytime:

📍 Address: 742 Evergreen Terrace, IronPeak District
📞 Phone: (555) 987-6543
✉️ Email: hello@ironpeakgym.com
🕒 Front Desk: Mon-Fri 5am-11pm, Sat-Sun 6am-9pm

Let me know if you'd like to book a tour or ask about our memberships!`;

export function getBotReply(prompt: string): Promise<string> {
  const query = prompt.toLowerCase().trim();

  let reply = "";

  if (query.includes("tour") || query.includes("visit") || query.includes("walkthrough") || query.includes("free tour")) {
    reply = TOUR_REPLY;
  } else if (
    query.includes("session") ||
    query.includes("price") ||
    query.includes("cost") ||
    query.includes("personal train") ||
    query.includes("assessment") ||
    query.includes("pt")
  ) {
    reply = SESSIONS_REPLY;
  } else if (query.includes("membership") || query.includes("plan") || query.includes("join") || query.includes("tier") || query.includes("sign up")) {
    reply = MEMBERSHIP_REPLY;
  } else if (query.includes("hour") || query.includes("open") || query.includes("close") || query.includes("time") || query.includes("schedule")) {
    reply = HOURS_REPLY;
  } else if (query.includes("trainer") || query.includes("coach") || query.includes("instructor")) {
    reply = TRAINER_REPLY;
  } else if (query.includes("amenit") || query.includes("equipment") || query.includes("sauna") || query.includes("shower") || query.includes("locker")) {
    reply = AMENITIES_REPLY;
  } else if (query.includes("location") || query.includes("address") || query.includes("phone") || query.includes("contact") || query.includes("where")) {
    reply = CONTACT_REPLY;
  } else if (query.includes("hello") || query.includes("hi") || query.includes("hey") || query.includes("sup")) {
    reply = `Hey there! 👋 Welcome to IronPeak Gym. I can help you check out membership plans, look up session prices, find our opening hours, or book a free 30-minute tour. What can I do for you today?`;
  } else if (query.includes("thank") || query.includes("great") || query.includes("awesome") || query.includes("perfect")) {
    reply = `You're very welcome! If there's anything else you need — from booking your tour to finding out about coaches — I'm right here. You can also give our front desk a ring at (555) 987-6543! 🏋️`;
  } else {
    reply = `Thanks for asking! At IronPeak Gym, we're dedicated to helping you reach your peak performance with modern equipment, elite coaching, and a welcoming community.

You can ask me about:
• 🏋️ Booking a free tour
• 💳 Membership tiers ($39 – $99/mo)
• 💪 Personal training & session prices
• 🕒 Opening hours & 24/7 keycard access

How can I help you get started?`;
  }

  return new Promise((resolve) =>
    setTimeout(() => resolve(reply), 600 + Math.random() * 400)
  );
}
