export type ProductSlug = "flowops" | "customer360" | "insightiq";

export type Product = {
  slug: ProductSlug;
  name: string;
  category: string;
  tagline: string;
  role: string;
  summary: string;
  overview: string[];
  features: { title: string; body: string }[];
  challenges: string[];
  benefits: { title: string; body: string }[];
  useCases: { title: string; body: string }[];
  accent: "blue" | "cyan" | "violet";
};

export const products: Product[] = [
  {
    slug: "flowops",
    name: "FlowOps",
    category: "Operations Management Software",
    tagline: "Simplify Operations. Improve Performance.",
    role: "Manages business operations",
    summary:
      "FlowOps helps businesses organize everyday operations, coordinate workflows, monitor tasks and improve operational efficiency.",
    overview: [
      "Most operational problems are not caused by a lack of effort. They come from work that is hard to see: requests sitting in inboxes, hand-offs that depend on memory, and status updates that arrive after the moment to act has passed.",
      "FlowOps brings that work into one place. Teams define how work should flow, coordinate tasks across functions and track progress on shared dashboards, so managers can spot delays early and teams can execute consistently.",
    ],
    features: [
      { title: "Workflow management", body: "Design repeatable workflows with clear stages, owners and hand-offs, so every request follows an agreed path." },
      { title: "Task coordination", body: "Assign, prioritize and follow up on tasks across teams, with shared visibility of who is doing what and by when." },
      { title: "Operational dashboards", body: "See workload, progress and bottlenecks at a glance, from the team level up to the whole operation." },
      { title: "Process tracking", body: "Follow each process from start to finish and understand where time is spent and where work stalls." },
      { title: "Team collaboration", body: "Keep comments, files and decisions attached to the work itself instead of scattered across email and chat." },
      { title: "Performance reporting", body: "Report on throughput, timeliness and consistency to support regular operational reviews." },
    ],
    challenges: [
      "Work is tracked in spreadsheets, inboxes and personal notes, so nobody has a reliable view of status.",
      "Hand-offs between teams cause delays and repeated follow-up.",
      "Managers learn about problems after deadlines have already been missed.",
      "The same process is executed differently by different people and locations.",
    ],
    benefits: [
      { title: "Better visibility over operations", body: "One shared view of work in progress, ownership and priorities." },
      { title: "Fewer delays", body: "Bottlenecks surface early, while there is still time to act." },
      { title: "Improved team coordination", body: "Clear owners and hand-offs reduce rework and follow-up." },
      { title: "More consistent execution", body: "Agreed workflows help every team deliver to the same standard." },
    ],
    useCases: [
      { title: "Service request handling", body: "Route incoming service requests to the right team, track response progress and keep requesters informed." },
      { title: "Project and delivery coordination", body: "Coordinate implementation tasks across functions with shared milestones and visible dependencies." },
      { title: "Multi-site operations", body: "Standardize routines across branches or locations and compare execution through common dashboards." },
    ],
    accent: "blue",
  },
  {
    slug: "customer360",
    name: "Customer360",
    category: "Customer Relationship and Experience Management",
    tagline: "Know Your Customers. Build Stronger Relationships.",
    role: "Connects customer relationships",
    summary:
      "Customer360 helps organizations manage customer information, monitor interactions, track customer needs and improve the overall customer experience.",
    overview: [
      "Customer knowledge is often spread across sales, service and account teams. Each holds part of the picture, and customers notice when they have to repeat themselves or when commitments are lost between departments.",
      "Customer360 creates one shared, up-to-date view of every customer. Teams can see the full relationship history, understand current needs and coordinate their next step, so every interaction builds on the last one.",
    ],
    features: [
      { title: "Centralized customer profiles", body: "Bring contacts, accounts, products and key details together in a single, shared customer record." },
      { title: "Customer interaction history", body: "See meetings, requests, conversations and outcomes in one timeline, across every team that works with the customer." },
      { title: "Account management", body: "Plan and manage accounts with clear ownership, next steps and visibility of open opportunities and requests." },
      { title: "Customer engagement tracking", body: "Follow how customers engage over time, so teams can act early when engagement changes." },
      { title: "Customer insights", body: "Understand needs, preferences and priorities to tailor service and commercial conversations." },
      { title: "Reporting dashboards", body: "Monitor relationships, service activity and account health through clear, shareable dashboards." },
    ],
    challenges: [
      "Customer information is fragmented across teams, tools and personal files.",
      "Service quality depends on which employee the customer happens to speak to.",
      "Account teams lack a complete picture before important customer conversations.",
      "Commercial decisions are made without a clear view of the relationship history.",
    ],
    benefits: [
      { title: "Better customer understanding", body: "A complete, shared picture of each customer and their needs." },
      { title: "Stronger customer relationships", body: "Consistent follow-through builds trust over time." },
      { title: "Improved service consistency", body: "Every team works from the same information and history." },
      { title: "More informed commercial decisions", body: "Account plans and proposals grounded in real relationship data." },
    ],
    useCases: [
      { title: "Key account management", body: "Give account teams a full view of stakeholders, history and open needs before every planning session." },
      { title: "Service and support coordination", body: "Let service teams see previous interactions instantly, so customers never have to repeat themselves." },
      { title: "Customer onboarding", body: "Track onboarding steps, contacts and early engagement to start new relationships on the right foot." },
    ],
    accent: "cyan",
  },
  {
    slug: "insightiq",
    name: "InsightIQ",
    category: "Business Intelligence and Analytics",
    tagline: "Turn Data Into Better Decisions.",
    role: "Turns business information into actionable insights",
    summary:
      "InsightIQ helps organizations transform business data into meaningful insights through reporting, analytics and performance dashboards.",
    overview: [
      "Many organizations have more data than ever, yet leaders still wait days for reports or debate whose numbers are right. The data exists; turning it into a clear answer in time is the hard part.",
      "InsightIQ gives decision-makers a reliable, visual view of business performance. It brings information together into dashboards and reports that show what is happening, how it is trending and where attention is needed.",
    ],
    features: [
      { title: "Business dashboards", body: "Clear, role-based dashboards that show the measures each team and leader cares about most." },
      { title: "Data visualization", body: "Charts and visual summaries that make patterns and exceptions easy to see." },
      { title: "Performance analytics", body: "Analyze results against goals across teams, products, regions and time periods." },
      { title: "Business reporting", body: "Build consistent, repeatable reports for management reviews and planning cycles." },
      { title: "Trend monitoring", body: "Follow how key measures develop over time and spot changes in direction early." },
      { title: "Decision-support insights", body: "Highlight the information that matters for the decision at hand, not just more data." },
    ],
    challenges: [
      "Reports are assembled manually and arrive too late to influence decisions.",
      "Different teams present different numbers for the same question.",
      "Leaders lack a simple view of performance against plan.",
      "Emerging trends are noticed only after they have affected results.",
    ],
    benefits: [
      { title: "Faster decision-making", body: "The right information is available when the decision is made." },
      { title: "Better visibility into performance", body: "One consistent view of results across the organization." },
      { title: "Clearer business insights", body: "Visuals and analysis that explain what the numbers mean." },
      { title: "Improved planning", body: "Plans grounded in trends rather than assumptions." },
    ],
    useCases: [
      { title: "Management performance reviews", body: "Replace manual monthly packs with live dashboards that everyone reviews from the same source." },
      { title: "Commercial and pipeline analysis", body: "Understand which markets, segments and offers are performing, and where to focus next." },
      { title: "Operational trend monitoring", body: "Track service levels and delivery measures over time to plan capacity and improvements." },
    ],
    accent: "violet",
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
