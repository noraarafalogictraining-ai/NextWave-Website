# Content requiring approval

The brief was cross-checked against the content inside the internal platform's source code (`src/ScoreSimulation.jsx`, Version 18, `SIM_CONFIG`). The live reference site could not be opened from the build environment. Each item below names what the website uses now and where to change it.

## 1. Conflicts between the brief and the existing internal platform (decide first)

| Item | Website uses | Brief | Internal platform v18 | Where to change |
|---|---|---|---|---|
| **Products** | FlowOps, Customer360, InsightIQ | FlowOps, Customer360, InsightIQ | NEXTWAVE ONE (Business Management Platform), NEXTWAVE INSIGHTS (Data & AI Solution), NEXTWAVE SOLUTIONS (Customized Technology Solutions) | `src/lib/products.ts` |
| **Slogan** | "Smarter Business. Better Experiences." | "Smarter Systems. Stronger Business." (proposed, to be used only if no approved slogan exists) | "Smarter Business. Better Experiences." | `company.slogan` in `src/lib/site.ts` |
| **Values** | Customer First · Own the Outcome · Better Together · Keep Evolving | Customer Focus · Innovation · Collaboration · Accountability · Continuous Improvement (proposed) | Customer First · Own the Outcome · Better Together · Keep Evolving | `values` in `src/lib/site.ts` |
| **Mission** | Brief wording | "To simplify business complexity through practical technology solutions…" | "To help organizations manage their operations, customers and data more effectively through smart technology that improves performance and creates lasting customer value." | `company.mission` |
| **Vision** | Brief wording | "To become a trusted digital technology partner…" | "To shape the future of business through smarter, connected digital experiences." | `company.vision` |
| **Competitor** | Not named publicly | Elevate | Valtora | Not displayed |

Notes:
- **Products:** the brief names these products and requires them, so the website uses them. If v18 is still the live version, its product names differ, and participants will see two different product sets. Either rename the products on the website or update the internal platform.
- **Slogan and values:** the brief says to keep the existing approved versions when they exist, so the website uses the internal platform's wording.
- **Mission and vision:** the brief states these without a fallback rule, so the website uses the brief's wording. They differ from v18 and should be aligned.
- **Competitor:** a public corporate website would not name a competitor, so neither name appears.

## 2. Facts deliberately left off the website

The internal platform lists **Founded 2017**, **Headquarters Cairo, Egypt**, **approximately 650 employees** and **Egypt and selected MENA markets**. The brief says not to publish founding dates or office locations, so none of these appear. Add them only once approved.

## 3. Contact details and form delivery

- The website shows **no** address, phone number or email address.
- The contact form runs in demonstration mode until `NEXT_PUBLIC_CONTACT_ENDPOINT` is set (see README).

## 4. Generated content to review

- **Product content:** features follow the brief exactly. The overview text, business challenges and example use cases were written for the site and make no technical, integration or certification claims.
- **Industries:** four sectors with generic challenges. No named customers and no partnerships.
- **Insights:** five articles credited to team bylines ("NextWave Insights Team", "NextWave Customer Success Team" and so on), not to named people. They contain no statistics, external research or quotations.
- **Careers:** shows "There are no open positions listed at the moment."
- **Visuals:** abstract SVG and CSS illustrations only. There is no stock photography, and no illustration shows real people or numbers. Department "photography" can replace `DeptIllustration` later.
- **Logo:** the official NextWave logo (on-dark and on-light versions), taken unchanged from the internal platform's assets. The favicon is the "N" mark cropped from that logo.

## 5. Confidentiality check

The public site does not mention any of the following: employee names, ratings, performance records, Employee Pulse, KPI records, coaching conversations, internal emails, stakeholder conflicts, the Valtora event, strategy targets or commercial results. The words "simulation", "SCORE", "training" and "gamification" do not appear in any page text. The only public mention of the internal platform's name is "NextWave Performance Hub", in the footer's Employee Access block.
