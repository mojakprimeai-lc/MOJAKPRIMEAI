export const home = {
  eyebrow: "For businesses in Kenya",
  headline: "MOJAK helps businesses turn operational problems into practical digital systems.",
  lede:
    "We start with how your business works today, then work out what should be improved, connected, automated, or built.",
  actionLabel: "Describe the problem",
  secondaryLabel: "How we work",
  signsHeading: "When the current way of working gets in the way",
  signs: [
    "Customers or staff cannot get the information they need when they need it.",
    "Important work moves between messages, notes, spreadsheets, and systems without a clear handoff.",
    "The team repeats work or cannot see what needs attention.",
  ],
  areasHeading: "Ways MOJAK may help",
  areasLede: "The right answer may be a website, a better workflow, an integration, or a controlled AI step.",
  journeyHeading: "A clear way to begin",
  price:
    "MOJAK prices work after the problem and scope are understood, then sets it out clearly in a proposal.",
  boundary: "The first conversation is free. Design and building start only when the work is defined and agreed.",
} as const;

export const workAreas = [
  {
    id: "web",
    title: "Web & digital solutions",
    outcome: "Help people understand what you do and take the next step.",
    detail:
      "A clear digital presence can make it easier for people to understand your business, find the right information, and make contact. MOJAK starts with the role that presence needs to play in your wider workflow.",
  },
  {
    id: "systems",
    title: "Business systems & applications",
    outcome: "Keep day-to-day work, records, and handoffs in one place.",
    detail:
      "When information, approvals, and records make work harder than they should, MOJAK can design an application around the process your team actually needs to run. For example, when orders and customer records move across WhatsApp chats, paper notebooks, and spreadsheets without a single record.",
  },
  {
    id: "automation",
    title: "Automation & integrations",
    outcome: "Cut repeated copying between the tools your team already uses.",
    detail:
      "MOJAK looks for useful handoffs between your existing tools before recommending a replacement. The aim is to remove avoidable repetition while keeping the right people in control. For example, when daily M-Pesa Till or Paybill statements are matched to orders by hand, so the same payment is typed in twice.",
  },
  {
    id: "ai",
    title: "AI & intelligent workflows",
    outcome: "Speed up defined tasks, with people still in control.",
    detail:
      "AI can help sort information, draft a response, find relevant detail, or summarize work inside a defined workflow. It is used where it helps, with human handover for decisions and exceptions.",
  },
  {
    id: "operations",
    title: "Operational visibility & data tools",
    outcome: "See the information behind the business and act on it.",
    detail:
      "Before changing a report, till, eTIMS process, or internal record, MOJAK looks at what already works. The goal is clearer information and better operational control, not change for its own sake. For example, when sales records are entered in a till and typed again for eTIMS or owner reporting.",
  },
] as const;

export const takeOn = {
  title: "What we take on",
  lede: "Start with what needs to work better, not a pre-set product.",
} as const;

export const engagementSteps = [
  {
    title: "Conversation",
    text: "We discuss the problem, current process, decision-maker, and next step.",
  },
  {
    title: "Discovery",
    text: "Paid discovery when the work needs deeper understanding.",
  },
  {
    title: "Proposal",
    text: "A clear recommendation, scope, price, and next step.",
  },
  {
    title: "Agreement",
    text: "Agreement and commitment before substantial building.",
  },
  {
    title: "Build",
    text: "Build, review, handover, then any separate continuing care.",
  },
] as const;

export const howWeWork = {
  title: "How we work",
  lede: "A clear path from the first conversation to support.",
  expectationsHeading: "What you can count on",
} as const;

export const whatsappPrefill = "Hello MOJAK, I would like to discuss our workflow.";

export const workPhases = [
  {
    title: "First conversation",
    text: "We begin with the business problem, how it is handled today, who decides, and what you expect to invest. The first conversation is free.",
  },
  {
    title: "Discovery",
    text: "Where meaningful analysis is needed, discovery is paid work. It covers the process, current systems, needs, constraints, and desired outcome.",
  },
  {
    title: "Recommendation & proposal",
    text: "MOJAK assesses what the work requires, then gives you a specific recommendation, price, scope, and proposed way forward.",
  },
  {
    title: "Agreement & commitment",
    text: "A proposal explains the work; an agreement governs it. Substantial building begins only after the agreed commitment is received.",
  },
  {
    title: "Build, review & support",
    text: "MOJAK builds the agreed scope, reviews it with you, hands it over, and separates warranty, care, and future work clearly.",
  },
] as const;

export const boundaries = [
  "The first conversation is for understanding the problem. Research, design, and building are scoped separately.",
  "You see the price only after the work is understood. If you continue, the discovery fee can come off the project.",
  "Extra work is priced and agreed before it starts, so the original price does not quietly grow.",
  "Defects in the agreed work are corrected under warranty. New work or ongoing care is a separate agreement.",
] as const;

export const urgencyOptions = ["This week", "This month", "Later", "Not sure"] as const;

export const startCopy = {
  title: "Describe the problem",
  lede: "Tell us what is broken in your workflow. MOJAK will reply on whether the next step is a short conversation or paid discovery. A price for building comes later in a proposal, once the work is understood.",
  direct: "Prefer a direct conversation?",
  labels: {
    name: "Your name",
    email: "Email",
    phone: "Phone",
    problem: "What needs to work better?",
    current: "How do you handle it today?",
    urgency: "How soon does this need attention?",
  },
  hints: {
    contact: "Leave an email, a phone number, or both.",
    optional: "Optional.",
  },
  submit: "Send",
  sending: "Sending",
  sentTitle: "MOJAK has this.",
  sentBody:
    "MOJAK will review your problem and reply within one business day on whether the next step is a short conversation or paid discovery.",
  another: "Describe another problem",
} as const;

export const formErrors = {
  invalid: "That did not go through. Use the email address on this page.",
  name: "Give your name.",
  contact: "Leave an email address, a phone number, or both.",
  email: "That email address does not look right.",
  phone: "That phone number does not look right.",
  urgency: "Say how soon this needs attention.",
  problem: "Describe what needs to work better.",
  send: "The message did not send. Email the address on this page.",
  network: "The message did not reach MOJAK. Check the connection, or email the address on this page.",
} as const;

export const notFoundCopy = {
  title: "That page is not here.",
  lede: "The public site has four pages.",
  home: "Back to home",
} as const;
