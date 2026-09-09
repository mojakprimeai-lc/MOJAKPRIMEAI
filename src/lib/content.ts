import {
  Building2,
  Car,
  GraduationCap,
  HeartPulse,
  Hotel,
  Leaf,
  type LucideIcon,
  Scissors,
  ShoppingBag,
  Sun,
  Truck,
  Wrench,
} from "lucide-react";

/** The losses a business owner already feels, before we mention technology. */
export const losses = [
  {
    stat: "After 6pm",
    title: "Your business stops answering",
    body: "Customers message in the evening and at the weekend, when you are closed or tired. Whoever replies first gets the sale — and it is rarely the shop that replies on Monday.",
    fix: "An assistant that answers instantly, every hour, from your real prices.",
  },
  {
    stat: "Hours a week",
    title: "Counting and re-counting stock",
    body: "Closing-time counts, a notebook, and a figure nobody fully trusts — while your fast-moving items quietly run out.",
    fix: "Stock that counts itself and warns you before an item finishes.",
  },
  {
    stat: "Every month",
    title: "Money you cannot account for",
    body: "Sales happened, cash moved, but which items actually earned you anything? Most owners find out at month end, roughly, if at all.",
    fix: "Profit per item and a closing summary sent to your phone.",
  },
  {
    stat: "Every enquiry",
    title: "Customers you never speak to again",
    body: "Hundreds of conversations and no list. When you have an offer, a new stock arrival or a holiday special, there is nobody to tell.",
    fix: "An opt-in customer list you own, and offers that go out on their own.",
  },
];

export const process = [
  {
    step: "01",
    title: "A free walkthrough",
    body: "We come to you, or meet on WhatsApp. We look at how you sell today and where the leaks are. No charge, no obligation, no slide deck.",
  },
  {
    step: "02",
    title: "A written quote",
    body: "Exactly what we will build, what it costs, and what it will cost afterwards. On paper before anyone starts.",
  },
  {
    step: "03",
    title: "We build on your information",
    body: "Your prices, products, hours and policies. You see progress as it happens, not after a month of silence.",
  },
  {
    step: "04",
    title: "You test it as a customer",
    body: "On your own phone, before anybody else sees it. Anything that feels wrong, we change.",
  },
  {
    step: "05",
    title: "Launch and train your team",
    body: "We hand over in person, train every person who will use it, and leave you a plain-language guide.",
  },
  {
    step: "06",
    title: "Support when you need it",
    body: "Pay-as-you-go changes with no monthly retainer, or an optional Care Plan if you would rather we handled everything.",
  },
];

export type Industry = {
  icon: LucideIcon;
  name: string;
  body: string;
};

export const industries: Industry[] = [
  {
    icon: ShoppingBag,
    name: "Shops and retail",
    body: "Stock that counts itself, reorder alerts, and a catalogue customers can browse before they travel to town.",
  },
  {
    icon: Hotel,
    name: "Hotels and restaurants",
    body: "Rooms, menus and hall packages online, enquiries captured with a reference, and offers to past guests.",
  },
  {
    icon: Sun,
    name: "Solar, hardware and electricals",
    body: "Technical product advice answered instantly, sizing help, and online ordering with delivery tracking.",
  },
  {
    icon: Truck,
    name: "Distributors and wholesalers",
    body: "Order capture on WhatsApp, stock visibility, and payment confirmations that reconcile themselves.",
  },
  {
    icon: Wrench,
    name: "Garages and workshops",
    body: "Job records, service reminders, quotations and parts tracking, instead of a handwritten book.",
  },
  {
    icon: HeartPulse,
    name: "Clinics and salons",
    body: "Appointment booking and reminders, so fewer no-shows and less time on the phone.",
  },
  {
    icon: Building2,
    name: "Property and real estate",
    body: "Instant replies to listing enquiries, viewing bookings, and follow-up that does not depend on memory.",
  },
  {
    icon: Car,
    name: "Transport and logistics",
    body: "Booking requests, delivery status customers can follow, and coordination that stops living in one person's head.",
  },
  {
    icon: Leaf,
    name: "Agrovets and agriculture",
    body: "Product advice at scale, stock control for seasonal demand, and messaging to farmers who opted in.",
  },
  {
    icon: GraduationCap,
    name: "Schools and training",
    body: "Admission enquiries answered instantly, forms captured properly, and parent communication that goes out on time.",
  },
  {
    icon: Scissors,
    name: "Service businesses",
    body: "Quotes, bookings and reminders handled automatically, so a one-person business can look like a team of five.",
  },
];

export const faqs = [
  {
    q: "Is this affordable for a small business?",
    a: "That is who we build for. An assistant on two channels starts at KES 20,000 as a one-off, and a full website with an assistant, search setup and hosting starts at KES 60,000. There is no compulsory monthly fee — after launch you pay only when you need a change.",
  },
  {
    q: "How long does it take?",
    a: "An assistant is usually live in under a week. A full website with an assistant takes one to three weeks, depending mostly on how quickly we get your photos and prices. Point-of-sale rollouts start with a one-week pilot at a single counter.",
  },
  {
    q: "Will the AI say something wrong to my customer?",
    a: "It answers only from the information you give us. When it does not know, it says so and hands the customer to a person instead of guessing. We would rather it says 'let me get someone' than invent a price you have to honour.",
  },
  {
    q: "My staff are not good with computers. Is that a problem?",
    a: "No. We train every person who will touch the system, in person, and keep the daily screens deliberately simple. If your team cannot use it, it has failed — that is our standard, not yours.",
  },
  {
    q: "What happens when the internet goes down?",
    a: "The website and assistants are hosted online and keep serving your customers even if your own connection drops. For point of sale we plan around outages with you before installation, because a till that cannot sell is worse than no till.",
  },
  {
    q: "Who owns the website, the data and the customer list?",
    a: "You do. The domain is registered in your business name, the content and customer data are yours, and we will export everything to you on request. We do not hold your business hostage.",
  },
  {
    q: "Do you only work in Nairobi?",
    a: "We are based in Nairobi and meet CBD businesses in person. Everything we build works anywhere in Kenya — our hotel client is in Machakos — and we handle upcountry clients over WhatsApp and calls.",
  },
  {
    q: "Can I see something you have actually built?",
    a: "Yes, and you should ask that of anyone selling you software. Two working builds are on our work page — a hotel site with a concierge assistant, and a solar retailer's catalogue with an AI product advisor. Both open on your phone.",
  },
];

/** Honest, no-promises view of what the company is building next. */
export const roadmap = [
  {
    name: "Mojak AI Academy",
    body: "Practical AI training for people who want to use these tools in their own work and businesses. Curriculum drafted, launch date not yet set.",
  },
  {
    name: "Smart farms and smart homes",
    body: "Sensor-based irrigation, water and security monitoring with mobile alerts. In research and prototyping, starting around Nairobi.",
  },
  {
    name: "Customer rewards ecosystem",
    body: "A points and loyalty layer to reward customers and learners across the businesses we work with. In design.",
  },
];
