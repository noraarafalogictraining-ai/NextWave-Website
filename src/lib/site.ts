/**
 * Central company content for the NextWave Digital public website.
 * Everything that must stay consistent with the internal Performance Hub
 * lives here, so approvals and later edits happen in one place.
 * See APPROVALS.md for the source of each item.
 */

/** Internal employee platform. Opened in a new tab; never embedded. */
export const EMPLOYEE_PORTAL_URL = "https://score-simulation.vercel.app/";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://nextwave-digital.vercel.app").replace(/\/$/, "");

export const company = {
  name: "NextWave Digital",
  shortName: "NextWave",
  // Approved tagline used in the existing NextWave brand materials.
  slogan: "Smarter Business. Better Experiences.",
  industry: "B2B Digital Technology and Enterprise Software",
  summary:
    "NextWave Digital is a growing B2B technology company. We build subscription software and deliver enterprise technology services that help organizations simplify operations, understand their customers and make better decisions with data.",
  mission:
    "To simplify business complexity through practical technology solutions that connect operations, customer relationships, and business intelligence.",
  vision:
    "To become a trusted digital technology partner that helps organizations work smarter, adapt faster, and grow sustainably.",
};

/** Company values as they appear in the existing NextWave brand materials. */
export const values = [
  {
    name: "Customer First",
    body: "We start with the customer's business problem, not with our product. Every release, proposal and service conversation is judged by the value it creates for the people who use it.",
    icon: "HeartHandshake",
  },
  {
    name: "Own the Outcome",
    body: "We take responsibility for results, not just tasks. When something goes wrong we raise it early, fix it properly and learn from it.",
    icon: "Target",
  },
  {
    name: "Better Together",
    body: "Our best work happens across teams. Commercial, Product & Operations and Customer Success share information openly and make decisions together.",
    icon: "Users",
  },
  {
    name: "Keep Evolving",
    body: "Markets and customer needs change quickly. We improve our products, our processes and ourselves a little every day.",
    icon: "RefreshCw",
  },
] as const;

export const departments = [
  {
    id: "commercial",
    name: "Commercial",
    lead: "Finding and winning the right business.",
    body: "Responsible for business growth, customer acquisition, market intelligence, proposals and commercial relationships.",
    focus: ["Business growth", "Customer acquisition", "Market intelligence", "Proposals", "Commercial relationships"],
  },
  {
    id: "product-operations",
    name: "Product & Operations",
    lead: "Building and running reliable solutions.",
    body: "Responsible for product development, service delivery, operational reliability and continuous improvement.",
    focus: ["Product development", "Service delivery", "Operational reliability", "Continuous improvement"],
  },
  {
    id: "customer-success",
    name: "Customer Success",
    lead: "Turning adoption into long-term value.",
    body: "Responsible for customer onboarding, product adoption, customer relationships and long-term customer value.",
    focus: ["Customer onboarding", "Product adoption", "Customer relationships", "Long-term customer value"],
  },
] as const;

export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/insights", label: "Insights" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
] as const;
