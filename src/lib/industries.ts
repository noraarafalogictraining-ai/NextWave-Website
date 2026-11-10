import type { ProductSlug } from "./products";

export type Industry = {
  id: string;
  name: string;
  icon: "ShoppingBag" | "Briefcase" | "RadioTower" | "ConciergeBell";
  intro: string;
  challenges: string[];
  solutions: { product: ProductSlug; how: string }[];
};

export const industries: Industry[] = [
  {
    id: "retail",
    name: "Retail and Consumer Services",
    icon: "ShoppingBag",
    intro:
      "Retail and consumer service businesses compete on experience. Customers expect to be recognized across every channel, and store and service teams need to execute the same standards every day.",
    challenges: [
      "Customer information is split between stores, online channels and service teams.",
      "Store and branch routines are executed inconsistently across locations.",
      "Performance data arrives too late to adjust promotions, staffing or stock decisions.",
    ],
    solutions: [
      { product: "customer360", how: "Builds a single view of customers and their interactions across channels." },
      { product: "flowops", how: "Standardizes store and service routines and tracks completion across locations." },
      { product: "insightiq", how: "Shows sales, service and operational trends by location, category and period." },
    ],
  },
  {
    id: "professional-services",
    name: "Professional Services",
    icon: "Briefcase",
    intro:
      "Consulting, advisory and service firms sell expertise and trust. Their success depends on strong client relationships, well-coordinated engagements and a clear view of how the business is performing.",
    challenges: [
      "Client knowledge sits with individual partners and account leads.",
      "Engagements involve many hand-offs between specialists and support teams.",
      "Leaders struggle to see utilization, pipeline and delivery performance together.",
    ],
    solutions: [
      { product: "customer360", how: "Keeps client history, stakeholders and opportunities in one shared record." },
      { product: "flowops", how: "Coordinates engagement tasks, approvals and deliverables across teams." },
      { product: "insightiq", how: "Brings pipeline, delivery and client measures into management dashboards." },
    ],
  },
  {
    id: "technology-telecom",
    name: "Technology and Telecommunications",
    icon: "RadioTower",
    intro:
      "Technology and telecom providers manage large customer bases, complex service operations and fast-moving markets. Small improvements in coordination and customer understanding can make a visible difference.",
    challenges: [
      "Large volumes of service requests must be routed and resolved quickly.",
      "Business customers expect account teams to understand their full relationship.",
      "Market and customer trends change quickly and need early attention.",
    ],
    solutions: [
      { product: "flowops", how: "Routes and tracks service and provisioning workflows end to end." },
      { product: "customer360", how: "Gives account and service teams a complete view of each business customer." },
      { product: "insightiq", how: "Monitors service, customer and commercial trends to support planning." },
    ],
  },
  {
    id: "hospitality",
    name: "Hospitality and Service Operations",
    icon: "ConciergeBell",
    intro:
      "Hospitality and service-led organizations deliver experiences in real time. Teams need clear daily coordination, a memory of guest and client preferences, and visibility into what drives satisfaction.",
    challenges: [
      "Daily operations depend on many small tasks across shifts and departments.",
      "Guest and client preferences are not consistently captured or shared.",
      "Managers lack a timely view of service quality and operational performance.",
    ],
    solutions: [
      { product: "flowops", how: "Coordinates daily tasks, shift hand-overs and service requests." },
      { product: "customer360", how: "Captures preferences and interaction history to personalize service." },
      { product: "insightiq", how: "Highlights service and operational patterns across sites and periods." },
    ],
  },
];
