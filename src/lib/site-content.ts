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
  boundary: "A free first conversation does not include substantial research, design, or building.",
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
      "When information, approvals, and records make work harder than they should, MOJAK can design an application around the process your team actually needs to run.",
  },
  {
    id: "automation",
    title: "Automation & integrations",
    outcome: "Cut repeated copying between the tools your team already uses.",
    detail:
      "MOJAK looks for useful handoffs between your existing tools before recommending a replacement. The aim is to remove avoidable repetition while keeping the right people in control.",
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
      "Before changing a report, till, eTIMS process, or internal record, MOJAK looks at what already works. The goal is clearer information and better operational control, not change for its own sake.",
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
} as const;

export const workPhases = [
  {
    title: "First conversation",
    text: "We begin with the business problem, how it is handled today, who decides, and what you expect to invest. Early conversations may be free.",
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
  "A free first conversation does not include substantial research, design, or development.",
  "Discovery comes before a real build price, and may be credited if the project proceeds.",
  "A change is assessed, priced, and agreed before the work starts.",
  "Warranty covers genuine defects in agreed functionality. Care and new work are separate agreements.",
] as const;

export const urgencyOptions = ["This week", "This month", "Later", "Not sure"] as const;

export const startCopy = {
  title: "Describe the problem",
  lede: "MOJAK will reply on whether the next step is a conversation or paid discovery. This is not a build quote.",
  labels: {
    name: "Your name",
    email: "Email",
    phone: "Phone",
    problem: "What needs to work better?",
    current: "How do you handle it today?",
    decision: "Who decides?",
    urgency: "How soon does this need attention?",
    investment: "What do you expect to invest?",
  },
  hints: {
    contact: "Leave an email, a phone number, or both.",
    investment: "A figure, a range, or “not sure” all help.",
  },
  submit: "Send",
  sending: "Sending",
  sentTitle: "MOJAK has this.",
  sentBody:
    "MOJAK will reply on whether the next step is a conversation or paid discovery. This is not a build quote.",
  another: "Describe another problem",
  direct: "Or email",
} as const;

export const formErrors = {
  invalid: "That did not go through. Use the email address on this page.",
  name: "Give your name.",
  contact: "Leave an email address, a phone number, or both.",
  email: "That email address does not look right.",
  phone: "That phone number does not look right.",
  urgency: "Say how soon this needs attention.",
  problem: "Describe what needs to work better.",
  current: "Say how you handle it today.",
  decision: "Say who decides.",
  investment: "Say what you expect to invest. “Not sure” is a valid answer.",
  send: "The message did not send. Email the address on this page.",
  network: "The message did not reach MOJAK. Check the connection, or email the address on this page.",
} as const;

export const notFoundCopy = {
  title: "That page is not here.",
  lede: "The public site has four pages.",
  home: "Back to home",
} as const;
