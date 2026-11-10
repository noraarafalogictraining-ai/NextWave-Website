import type { ProductSlug } from "./products";

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "callout"; text: string };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  readingMinutes: number;
  related: ProductSlug[];
  body: ArticleBlock[];
};

/**
 * Thought-leadership articles. They are written as practical guidance and
 * opinion. They deliberately contain no external statistics, quotations or
 * research claims.
 */
export const articles: Article[] = [
  {
    slug: "turning-business-data-into-better-decisions",
    title: "Turning Business Data Into Better Decisions",
    excerpt:
      "Most organizations do not lack data. They lack a reliable path from data to a decision. Here is a practical way to build one.",
    category: "Business Intelligence",
    author: "NextWave Insights Team",
    readingMinutes: 5,
    related: ["insightiq"],
    body: [
      { type: "p", text: "Ask a leadership team whether they have enough data and most will say yes. Ask whether they can answer an important question with confidence before the next meeting, and the answer often changes. The gap between having data and using it well is where many decisions lose time and quality." },
      { type: "h2", text: "Start with the decision, not the dashboard" },
      { type: "p", text: "A common mistake is to begin with the data that is available and build reports around it. A more useful starting point is the decisions people actually make: which customers to prioritize, where to add capacity, which offers to promote. Once the decisions are clear, it becomes much easier to decide which measures matter and which can be left out." },
      { type: "ul", items: [
        "List the recurring decisions each leader makes in a month or quarter.",
        "For each decision, identify the two or three measures that would change the choice.",
        "Agree on one definition for each measure, and who owns it.",
      ] },
      { type: "h2", text: "One version of the numbers" },
      { type: "p", text: "Meetings that begin with a debate about whose figures are correct rarely end with a good decision. Agreeing on shared definitions, and producing reports from a common source, removes that friction. It also builds trust: people act more decisively on information they believe." },
      { type: "h2", text: "Make trends visible early" },
      { type: "p", text: "Monthly totals tell you what happened. Trends tell you what is starting to happen. Visualizing how key measures move over time helps teams notice a change in direction while there is still room to respond, instead of explaining it after the fact." },
      { type: "callout", text: "A good report answers a question someone is already asking. A great one helps them ask a better question next time." },
      { type: "h2", text: "Build the habit, not just the tool" },
      { type: "p", text: "Technology makes information available; habits make it useful. Regular reviews where teams look at the same dashboards, discuss what they see and agree on actions are what turn analytics into better performance. Start small, with one review and a handful of measures, and expand once the routine is working." },
    ],
  },
  {
    slug: "why-customer-visibility-matters",
    title: "Why Customer Visibility Matters",
    excerpt:
      "When every team sees only part of the customer, the customer feels it. Shared visibility is the foundation of a consistent experience.",
    category: "Customer Experience",
    author: "NextWave Customer Success Team",
    readingMinutes: 4,
    related: ["customer360"],
    body: [
      { type: "p", text: "Most business customers deal with several people in a supplier's organization: a sales contact, an account manager, a service team, perhaps a finance contact. Each conversation adds to the relationship. When that knowledge is not shared, customers end up repeating themselves, and commitments made by one team are unknown to another." },
      { type: "h2", text: "The cost of a fragmented view" },
      { type: "ul", items: [
        "Customers explain the same issue to different people.",
        "Account plans are built without knowing about recent service problems.",
        "Opportunities to help are missed because no one connected the signals.",
        "New team members take months to understand an important account.",
      ] },
      { type: "h2", text: "What good visibility looks like" },
      { type: "p", text: "Customer visibility does not mean collecting every possible detail. It means that anyone who works with a customer can quickly understand who they are, what they need, what has happened recently and what has been promised. A clear profile, a shared interaction history and visible next steps cover most of what teams need." },
      { type: "callout", text: "Customers rarely judge a supplier by a single interaction. They judge by whether the organization remembers them." },
      { type: "h2", text: "Visibility supports better commercial decisions" },
      { type: "p", text: "Shared customer knowledge is not only a service topic. It helps commercial teams focus on the right accounts, prepare better proposals and understand where there is real potential to grow a relationship. Decisions grounded in the full relationship history tend to be more realistic and more welcome to the customer." },
      { type: "h2", text: "Where to begin" },
      { type: "p", text: "Start with your most important accounts. Agree on what a complete customer profile should contain, make interaction history easy to record, and review it together before key meetings. Visibility grows quickly once teams experience the benefit in their own conversations." },
    ],
  },
  {
    slug: "improving-operational-efficiency-through-digital-workflows",
    title: "Improving Operational Efficiency Through Digital Workflows",
    excerpt:
      "Efficiency is rarely about working harder. It is about making work visible, clarifying hand-offs and removing the waiting in between.",
    category: "Operations",
    author: "NextWave Product & Operations Team",
    readingMinutes: 5,
    related: ["flowops"],
    body: [
      { type: "p", text: "When operations feel slow, the first instinct is often to ask people to move faster. In practice, most delays happen between tasks rather than within them: a request waiting for approval, a hand-off nobody noticed, a status that has to be chased. Digital workflows address exactly those gaps." },
      { type: "h2", text: "Map the real process" },
      { type: "p", text: "Before digitizing anything, walk through how work actually flows today. Who receives the request? Who needs to approve it? Where does it wait? The answers are often surprising, and simply agreeing on the intended path removes a surprising amount of confusion." },
      { type: "h2", text: "Clarify ownership at every step" },
      { type: "p", text: "Every stage of a workflow should have a clear owner and a clear definition of done. When ownership is visible, follow-up becomes easier and fewer tasks fall between teams." },
      { type: "ul", items: [
        "Define the stages a piece of work moves through.",
        "Assign an owner and an expected timeframe to each stage.",
        "Make the current status visible to everyone involved.",
        "Review where work waits longest and improve that step first.",
      ] },
      { type: "callout", text: "You cannot improve what you cannot see. Visibility comes before efficiency." },
      { type: "h2", text: "Measure flow, not just output" },
      { type: "p", text: "Counting completed tasks says little about how well an operation runs. Looking at how long work takes from start to finish, and where it stalls, gives managers a far better basis for improvement. Operational dashboards make these patterns easy to discuss in regular team reviews." },
      { type: "h2", text: "Improve continuously" },
      { type: "p", text: "Digital workflows are not a one-time project. The most effective teams treat them as living processes: they review them regularly, adjust them when the business changes and celebrate the small improvements that add up over time." },
    ],
  },
  {
    slug: "connecting-customer-experience-with-business-performance",
    title: "Connecting Customer Experience With Business Performance",
    excerpt:
      "Customer experience is sometimes treated as a soft topic. It becomes much more powerful when it is connected to how the business actually performs.",
    category: "Strategy",
    author: "NextWave Insights Team",
    readingMinutes: 5,
    related: ["customer360", "insightiq"],
    body: [
      { type: "p", text: "Most leaders agree that customer experience matters. Fewer can explain clearly how it connects to the results they are accountable for. Making that connection visible changes the conversation: experience stops being a separate initiative and becomes part of how the business is managed." },
      { type: "h2", text: "Experience shows up in everyday operations" },
      { type: "p", text: "Customers experience an organization through its operations: how quickly requests are handled, whether commitments are kept and whether information is consistent. Improving those operational basics is often the most direct way to improve the experience." },
      { type: "h2", text: "Link the signals" },
      { type: "p", text: "Customer interactions, service activity and commercial results usually live in different places. Bringing them together helps teams see patterns, such as which service issues tend to come before a customer reduces their engagement, or which onboarding steps are linked to stronger long-term relationships." },
      { type: "ul", items: [
        "Track customer engagement alongside operational measures.",
        "Review customer feedback and service data in the same meeting as commercial results.",
        "Share insights across Commercial, Operations and Customer Success.",
      ] },
      { type: "callout", text: "When experience and performance are discussed in the same room, better trade-offs follow." },
      { type: "h2", text: "Make it a shared responsibility" },
      { type: "p", text: "Customer experience cannot belong to one department. It is created by sales, delivery and service together. Shared measures and shared visibility help each team understand its part in the outcome, and make collaboration a practical habit rather than a slogan." },
    ],
  },
  {
    slug: "role-of-market-intelligence-in-commercial-strategy",
    title: "The Role of Market Intelligence in Commercial Strategy",
    excerpt:
      "Good commercial strategy depends on understanding the market as it is, not as we would like it to be. Market intelligence makes that possible.",
    category: "Commercial",
    author: "NextWave Commercial Team",
    readingMinutes: 5,
    related: ["insightiq", "customer360"],
    body: [
      { type: "p", text: "Commercial teams make choices every day: which segments to pursue, which opportunities deserve investment and how to position an offer. The quality of those choices depends heavily on how well the team understands its market, its customers and the alternatives customers are considering." },
      { type: "h2", text: "What market intelligence covers" },
      { type: "ul", items: [
        "Customer needs and how they are changing.",
        "Competitor positioning, offers and messages.",
        "Shifts in pricing expectations and buying behavior.",
        "Emerging opportunities in segments or sectors.",
      ] },
      { type: "h2", text: "From information to insight" },
      { type: "p", text: "Collecting information is the easy part. The value comes from interpretation: what does this change mean for our customers, our offers and our priorities? Effective market intelligence always ends with a clear 'so what' that commercial leaders can act on." },
      { type: "callout", text: "Market intelligence is only useful if it reaches the people making decisions in time to matter." },
      { type: "h2", text: "Connect intelligence to the pipeline" },
      { type: "p", text: "Market insight becomes most powerful when it is connected to real opportunities and accounts. Linking market observations to customer conversations and pipeline data helps teams prioritize better and prepare stronger, more relevant proposals." },
      { type: "h2", text: "Build a rhythm" },
      { type: "p", text: "Markets do not change on a quarterly schedule. Regular, lightweight intelligence updates, shared openly across Commercial, Product and Customer Success, keep the whole organization aligned and ready to respond when conditions shift." },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
