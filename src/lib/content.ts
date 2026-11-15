/**
 * Single source of company content for the NextWave Digital website.
 *
 * Source of record: the "NextWave Company Profile" document. Facts, mission,
 * vision, products, business roles, customers, the 2027 business context and
 * objectives, values and the competitive landscape use its wording.
 * Text written for the website (for example competency descriptions) is listed
 * in APPROVALS.md.
 */

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://nextwave-website-beta.vercel.app").replace(/\/$/, "");

export const company = {
  name: "NextWave Digital",
  slogan: "Smarter Business. Better Experiences.",
  // "Who We Are"
  plain: "NextWave Digital is a technology company helping organizations manage their operations, customers and data.",
  history:
    "Founded in 2017, it began with customized technology solutions and expanded into business platforms, data analytics and AI-enabled services.",
  // "Our Customers"
  customers:
    "We serve primarily mid-sized and large organizations in banking, telecommunications, retail, hospitality and professional services.",
  mission:
    "To help organizations manage their operations, customers and data more effectively through smart technology that improves performance and creates lasting customer value.",
  vision: "To shape the future of business through smarter, connected digital experiences.",
};

export const facts = [
  { id: "founded", label: "Founded", value: 2017, display: "2017", kind: "year" as const },
  { id: "hq", label: "Headquarters", display: "Cairo, Egypt", kind: "text" as const },
  { id: "employees", label: "Size", value: 650, prefix: "≈", display: "Approximately 650 employees", kind: "number" as const },
  { id: "markets", label: "Markets", display: "Egypt and selected MENA markets", kind: "text" as const },
];

export const customerSectors = ["Banking", "Telecommunications", "Retail", "Hospitality", "Professional services"];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/solutions", label: "Our Solutions" },
  { href: "/strategy", label: "Our Strategy" },
] as const;

/* ------------------------------------------------------------------ products */

export type ProductId = "nextwave-one" | "nextwave-insights" | "nextwave-solutions";

export type ProductTab = { id: string; label: string; title: string; body: string };

export type Product = {
  id: ProductId;
  name: string;
  sub: string;
  /** "What it helps customers do" in the profile. */
  body: string;
  /** "Business role" in the profile. */
  role: string;
  accent: "cyan" | "violet" | "blue";
  tabs: ProductTab[];
};

export const products: Product[] = [
  {
    id: "nextwave-one",
    name: "NextWave One",
    sub: "Business Management Platform",
    body: "Manage customers, daily operations and workflows in one place.",
    role: "Protect the core business",
    accent: "cyan",
    tabs: [
      { id: "operations", label: "Operations overview", title: "See daily operations in one place", body: "A shared view of the work in progress across teams, so managers can see what is moving and what needs attention." },
      { id: "workflows", label: "Workflow management", title: "Run workflows the same way every time", body: "Workflows with clear stages and owners help requests move from one step to the next without being lost between teams." },
      { id: "customers", label: "Customer management", title: "Keep customers and operations connected", body: "Customer records sit alongside the work being done for them, so service and delivery stay aligned." },
    ],
  },
  {
    id: "nextwave-insights",
    name: "NextWave Insights",
    sub: "Data & AI Solution",
    body: "Analyze data, identify trends and make better decisions.",
    role: "Build future growth through data and AI",
    accent: "violet",
    tabs: [
      { id: "analytics", label: "Business analytics", title: "Analyze business data", body: "Bring business data together and explore it from different angles to understand what is happening." },
      { id: "trends", label: "Trend identification", title: "Identify trends early", body: "Follow how key measures develop over time to spot changes in direction while there is still time to act." },
      { id: "decisions", label: "Decision insights", title: "Support better decisions", body: "Clear, visual insight that helps leaders focus on the information that matters for the decision in front of them." },
    ],
  },
  {
    id: "nextwave-solutions",
    name: "NextWave Solutions",
    sub: "Customized Technology Solutions",
    body: "Address specific needs and connect existing systems with NextWave products.",
    role: "Capture high-value opportunities",
    accent: "blue",
    tabs: [
      { id: "integrations", label: "System connections", title: "Connect existing systems", body: "Link the systems a customer already relies on with NextWave products, so information flows where it is needed." },
      { id: "workflows", label: "Connected workflows", title: "Connect work across systems", body: "Design workflows that span connected systems, so processes run end to end instead of stopping at system boundaries." },
      { id: "custom", label: "Customized solutions", title: "Solve specific needs", body: "Shape solutions around a customer's particular requirements when a standard product alone is not the right fit." },
    ],
  },
];

/* -------------------------------------------------------------------- values */

export const values = [
  {
    id: "customer-first",
    name: "Customer First",
    icon: "HeartHandshake",
    body: "We start with the customer's business problem, not with our product. Every release, proposal and service conversation is judged by the value it creates for the people who use it.",
  },
  {
    id: "own-the-outcome",
    name: "Own the Outcome",
    icon: "Target",
    body: "We take responsibility for results, not just tasks. When something goes wrong we raise it early, fix it properly and learn from it.",
  },
  {
    id: "better-together",
    name: "Better Together",
    icon: "Users",
    body: "Our best work happens across teams. We share information openly and make decisions together.",
  },
  {
    id: "keep-evolving",
    name: "Keep Evolving",
    icon: "RefreshCw",
    body: "Markets and customer needs change quickly. We improve our products, our processes and ourselves a little every day.",
  },
] as const;

/* -------------------------------------------------------------- competencies */

export const competencies = [
  { id: "communication", name: "Communication", icon: "MessagesSquare", body: "Sharing information clearly and at the right time, listening actively, and adapting the message to the audience." },
  { id: "problem-solving", name: "Problem Solving", icon: "Lightbulb", body: "Understanding the real problem, using evidence to analyze it, and turning that analysis into practical solutions." },
  { id: "coaching", name: "Coaching", icon: "GraduationCap", body: "Helping others grow through honest feedback, guidance and opportunities to build their capabilities." },
  { id: "adaptability", name: "Adaptability & Flexibility", icon: "Shuffle", body: "Responding constructively to change, adjusting priorities and approaches while keeping quality and goals in sight." },
  { id: "accountability", name: "Accountability & Ownership", icon: "ShieldCheck", body: "Owning commitments and results, raising issues early and following through until the work is done." },
  { id: "time-management", name: "Time Management", icon: "Clock", body: "Planning and prioritizing work so that commitments are delivered on time without compromising quality." },
] as const;

/* ------------------------------------------------------------------ strategy */

export const strategy = {
  title: "2027 Strategy",
  challenge: "Scale Without Losing What Made Us Successful",
  // "The Business Context: 2027"
  context:
    "NextWave enters 2027 with growth opportunities and increasing operational pressure. Winning new business, keeping existing customers, delivering reliably and strengthening internal capability must happen together.",
  // "Competitive Landscape"
  competitor: {
    name: "Valtora Technologies",
    text: "Valtora Technologies is a growing competitor known for faster implementation, competitive pricing and increasingly AI-enabled solutions. Its presence influences customer expectations and sales conversations.",
  },
};

export type Priority = {
  key: "GROW" | "RETAIN" | "SCALE" | "BUILD";
  title: string;
  text: string;
  target?: { from?: string; to: string; label: string };
  focus: string[];
  why: string;
  accent: string;
};

export const priorities: Priority[] = [
  {
    key: "GROW",
    title: "Win new business",
    text: "Achieve 18% revenue growth.",
    target: { to: "18%", label: "Revenue growth" },
    focus: ["Revenue growth"],
    why: "Winning new business is one of four things that must happen together as NextWave enters 2027 with growth opportunities and increasing operational pressure.",
    accent: "#26D5F5",
  },
  {
    key: "RETAIN",
    title: "Keep existing customers",
    text: "Improve customer retention from 88% to 93%.",
    target: { from: "88%", to: "93%", label: "Customer retention" },
    focus: ["Customer retention"],
    why: "Keeping existing customers must happen together with winning new business, delivering reliably and strengthening internal capability.",
    accent: "#A995FF",
  },
  {
    key: "SCALE",
    title: "Deliver reliably",
    text: "Improve on-time delivery from 82% to 92%.",
    target: { from: "82%", to: "92%", label: "On-time delivery" },
    focus: ["On-time delivery"],
    why: "NextWave enters 2027 with increasing operational pressure, so delivering reliably must keep pace with growth.",
    accent: "#5B8CFF",
  },
  {
    key: "BUILD",
    title: "Strengthen internal capability",
    text: "Strengthen critical capabilities, succession readiness and the talent pipeline; reduce key-person dependency.",
    focus: ["Critical capabilities", "Succession readiness", "Talent pipeline", "Reduce key-person dependency"],
    why: "Strengthening internal capability must happen together with winning new business, keeping existing customers and delivering reliably.",
    accent: "#F5B84A",
  },
];
