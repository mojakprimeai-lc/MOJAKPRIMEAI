export const home = {
  audience: "For businesses in Kenya.",
  actionLabel: "Describe the problem",
  secondaryLabel: "How we work",
  situationsHeading: "Where the work gets stuck",
  situations: [
    "Customers get no answer after hours.",
    "Orders or bookings stay stuck in chats and notebooks.",
    "The owner cannot see what happened today.",
  ],
  areasHeading: "What we take on",
  areasNote: "These are kinds of work, not products.",
  journeyHeading: "How an engagement moves",
  journey: [
    {
      title: "Conversation",
      text: "The first conversation covers the problem, how it is handled today, who decides, and what you expect to invest.",
    },
    {
      title: "Discovery",
      text: "Discovery is paid when the problem needs to be understood. The proposal that follows explains the work. It is not an agreement.",
    },
    {
      title: "Commitment",
      text: "Building starts only after an agreement and a defined commitment.",
    },
  ],
  money:
    "The first price is for discovery, a build price comes only after the work is understood, and no package prices are published.",
  boundary: "A free conversation does not include a build.",
  contactHeading: "Nairobi",
} as const;

export const workAreas = [
  {
    id: "web",
    title: "Web and digital solutions",
    summary: "A site can be the way in. It is not the identity of the work.",
    detail:
      "A website can be the first piece MOJAK builds. It is an entry, not the company. It has to help the business attract people and answer them. It is not a set of packages.",
  },
  {
    id: "systems",
    title: "Business systems and applications",
    summary: "A system that records the work is the core.",
    detail:
      "The core is a system around how the business takes an order or booking, takes payment, and keeps the record. MOJAK does not sell this as a named product ladder.",
  },
  {
    id: "automation",
    title: "Automation and integrations",
    summary: "Connect the handoff that people are still doing by hand.",
    detail:
      "When the same detail is copied between chats, notebooks, and software, the work is to connect that handoff. The automation is limited to the step that was agreed. It does not run the business on its own.",
  },
  {
    id: "ai",
    title: "AI and intelligent workflows",
    summary: "Used inside one defined step, then handed to a person.",
    detail:
      "Where a message needs sorting or a reply needs a draft, that step can use AI. A person takes over when a decision, a payment, or an exception needs one. This is not an open-ended assistant, and it is not a separate product line.",
  },
  {
    id: "data",
    title: "Data and operational tools",
    summary: "Look at the record the business already keeps before replacing it.",
    detail:
      "Before a till, a report, or another record is replaced, MOJAK looks at what already runs. A till or eTIMS belongs in that look. It is not a product on a ladder. The aim is that the owner can see what happened.",
  },
] as const;

export const takeOn = {
  title: "What we take on",
  lede: "Five kinds of work. Open one to read what it covers. None of them is a price list.",
} as const;

export const journey = [
  {
    title: "First conversation",
    lines: [
      "MOJAK asks what the problem is, how you handle it today, who decides, and what you expect to invest.",
      "The conversation can be free. It does not include substantial research, design, or building.",
    ],
  },
  {
    title: "Discovery",
    lines: [
      "When the problem needs real analysis, discovery is paid work.",
      "The fee can be credited if the project proceeds. Paying it does not make the business a client yet.",
    ],
  },
  {
    title: "Recommendation and price",
    lines: [
      "MOJAK recommends the work the problem requires and prices that work.",
      "The price is set after the work is understood. No package price is published.",
    ],
  },
  {
    title: "Proposal",
    lines: [
      "The proposal explains the work, the price, and how it would proceed.",
      "A proposal is not an agreement.",
    ],
  },
  {
    title: "Agreement and commitment",
    lines: [
      "An agreement governs the work.",
      "Substantial building starts only after that agreement and a defined commitment.",
    ],
  },
  {
    title: "Build",
    lines: [
      "MOJAK builds the agreed scope.",
      "A small payment does not open unlimited development.",
    ],
  },
  {
    title: "Review and testing",
    lines: [
      "You review the agreed work.",
      "MOJAK tests it against that scope.",
    ],
  },
  {
    title: "Handover",
    lines: [
      "MOJAK hands over what the agreement includes.",
      "That includes the access and credentials needed to run it.",
    ],
  },
  {
    title: "Support",
    lines: [
      "Warranty covers genuine defects in the agreed work for a defined period.",
      "Care, and any new work, are separate agreements.",
    ],
  },
] as const;

export const howWeWork = {
  title: "How we work",
  lede: "Nine steps, from the first conversation to support.",
} as const;

export const ruleGroups = [
  {
    title: "Before building",
    rules: [
      "Understand the problem before building.",
      "Qualify the work before investing substantial time in it.",
      "A free first conversation does not include substantial research.",
      "Discovery comes before a build price.",
      "Paid discovery may be credited if the project proceeds.",
    ],
  },
  {
    title: "What governs the work",
    rules: [
      "A proposal is not an agreement.",
      "Substantial building starts only after agreement and a defined commitment.",
      "A change is scoped and priced before it starts.",
    ],
  },
  {
    title: "After handover",
    rules: [
      "Warranty is not free new work.",
      "Care is a separate agreement.",
      "Messaging and AI usage sit on the client's own accounts.",
    ],
  },
] as const;

export const urgencyOptions = [
  { value: "this-week", label: "This week" },
  { value: "this-month", label: "This month" },
  { value: "later", label: "Later" },
  { value: "not-sure", label: "Not sure" },
] as const;

export const startCopy = {
  title: "Describe the problem",
  lede: "MOJAK will reply on whether the next step is a conversation or paid discovery. This is not a build quote.",
  labels: {
    name: "Your name",
    email: "Email",
    phone: "Phone",
    problem: "The problem",
    current: "How you handle it today",
    decision: "Who decides",
    urgency: "How urgent it is",
    investment: "What you expect to invest",
  },
  hints: {
    contact: "Leave an email or a phone number.",
    investment: "A figure, a range, or not sure.",
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
  unconfigured: "This form cannot send yet. Email the address on this page.",
  invalid: "That did not go through. Use the email address on this page.",
  name: "Give your name.",
  contact: "Leave an email or a phone number.",
  email: "That email address does not look right.",
  phone: "That phone number does not look right.",
  problem: "Describe the problem.",
  current: "Say how you handle it today.",
  decision: "Say who decides.",
  urgency: "Say how urgent it is.",
  investment: "Say what you expect to invest. Not sure is a valid answer.",
  send: "The message did not send. Email the address on this page.",
  network: "The message did not reach MOJAK. Check the connection, or email the address on this page.",
} as const;

export const notFoundCopy = {
  title: "That page is not here.",
  lede: "The public site has four pages.",
  home: "Back to home",
} as const;
