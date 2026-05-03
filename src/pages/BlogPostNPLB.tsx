import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";

const A = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-accent hover:underline"
  >
    {children}
  </a>
);

const BlogPostNPLB = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-2xl mx-auto px-6 pt-4 pb-16 animate-fade-in">

        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors mb-6"
        >
          <ArrowLeft size={15} />
          Back
        </Link>

        <article>
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-foreground leading-tight mb-3">
              What is the cost of saying no to first-generation Alzheimer's therapies?
            </h1>
            <p className="text-sm text-muted-foreground">May 3rd, 2026</p>
          </header>

          <figure className="mb-10">
            <img
              src="/brain_scans.jpeg"
              alt="Brain scans"
              className="w-full h-auto rounded-lg"
            />
            <figcaption className="text-xs text-muted-foreground mt-2 text-center">
              National Cancer Institute on Unsplash, 2021
            </figcaption>
          </figure>

          <div className="space-y-5 text-base leading-relaxed blog-body">

            <p>
              In January,{" "}
              <A href="https://www.alzheimer-europe.org/news/nice-reconsider-lecanemab-and-donanemab-following-successful-appeals">appeal panels</A>{" "}
              reviewing a major NHS Alzheimer's Disease (AD) drug rejection found that NICE had unreasonably underestimated the burden that AD places on the family members who give up their jobs, their savings, and sometimes their own health to care for someone with the disease.
            </p>

            <p>
              The decision in question was the rejection of lecanemab and donanemab. As the BBC reported in June 2025, these are the first two medicines ever{" "}
              <A href="https://www.ddw-online.com/nice-rejects-alzheimers-drugs-for-lack-of-cost-effectiveness-35411-202506/">shown to slow AD</A>, by 4 to 6 months. Far from a cure, but enough to delay the transition from mild to moderate dementia, resulting in more time driving, recognising faces, and simply being present. The BBC headline was blunt when they said these drugs were a poor use of taxpayers' money. 7 months later, its appeal process conceded that the case hadn't been properly heard.
            </p>

            <p className="font-bold text-foreground">
              Britain's approach to valuing AD shuts out 70,000 patients, signalling to the potential investors behind tomorrow's cures that the R&amp;D isn't worth the risk.
            </p>

            <p>
              To be clear, NICE is not the villain. They ran{" "}
              <A href="https://www.alzheimer-europe.org/news/nice-reconsider-lecanemab-and-donanemab-following-successful-appeals">3 full appraisals</A>{" "}
              of both drugs, and acknowledged the "disappointing" result. They're not looking to say no, but they're constrained by a system that undervalues medicines.
            </p>

            <p>
              To decide whether a drug is worth funding, NICE calculates a cost per quality-adjusted life year. But this measure only asks about the patient in the clinic. It doesn't ask about the daughter who quit her job to become a full-time carer, or the family home sold to fund care facilities. When you slow AD by even a few months, you delay when families are forced to reorganise their life around the care of their loved one, not a small burden. In fact, dementia{" "}
              <A href="https://www.alzheimers.org.uk/sites/default/files/2024-05/the-annual-costs-of-dementia.pdf">costs the UK economy around £21bn/year in unpaid care alone</A>, which is roughly the entire annual budget of several NHS trusts combined.
            </p>

            <p>
              The appeal panels saw this, and found that the questionnaire, EQ-5D, grossly{" "}
              <A href="https://pharmaceutical-journal.com/article/news/nice-opens-consultation-on-previously-rejected-alzheimers-treatments-donanemab-and-lecanemab">underestimated</A>{" "}
              the impact of dementia on unpaid carers, and that NICE had been given{" "}
              <A href="https://pharmaceutical-journal.com/article/news/nice-opens-consultation-on-previously-rejected-alzheimers-treatments-donanemab-and-lecanemab">inadequate opportunity</A>{" "}
              to scrutinise NHS England's own infusion cost estimates before the final decision was made.
            </p>

            <p>
              This matters because affordability is a valuation problem, beyond manufacturing or chemistry.
            </p>

            <p>
              Meanwhile, the drugs are available, but only for customers with deep pockets. A full 18-month course can set you back{" "}
              <A href="https://www.drchanneurology.com/donanemab-and-lecanemab">as much as £100,000</A>, with no reimbursement even with private insurance. For reference, around{" "}
              <A href="https://www.nice.org.uk/news/articles/benefits-of-new-alzheimer-s-treatment-lecanemab-are-too-small-to-justify-the-cost-to-the-nhs">70,000 people in England qualify</A>{" "}
              for these treatments, according to the BBC's reporting. How many of those 70,000 can write a 6-figure check?
            </p>

            <p>
              Societal value is what a medicine is actually worth when you count patients, carers, and future generations who will take the generic. Only around{" "}
              <A href="https://www.nopatientleftbehind.org/protect-american-competitiveness-from-price-controls">10% of healthcare costs go toward drugs</A>, most of the rest is composed of doctors' appointments, procedures, and hospital stays. This relatively small fraction is an investment into future generic drugs that will reduce spending on hospitals and services. Once patents on medicines expire, cheap copies flood the market, often cutting prices by 90%. These are called generic drugs. The implication for AD is that hospitals and nursing homes don't go generic, their costs only rise. A drug that delays the transition to full-time care, even by months, is in the most literal sense buying society a cheaper future.
            </p>

            <p>
              All countries outside the US contribute a large fraction of patients to global clinical trials, and{" "}
              <A href="https://medium.com/the-biotech-social-contract/https-medium-com-the-biotech-social-contract-kolchinsky-tbsc-6-5d40244738e5">roughly half of the profits necessary to meet drug companies' return</A>{" "}
              on investments, ultimately allowing America to enjoy lower drug prices than if it were the only country on Earth. This arrangement works because other countries, although paying less than the US, are still paying something. Unfortunately, many wealthy countries (e.g. the UK, France, Germany, Japan) underpay for innovative medicines by{" "}
              <A href="https://www.nopatientleftbehind.org/resource-materials/no-more-freeriding">as much as 60% below fair market value</A>{" "}
              when adjusted for income.
            </p>

            <p>
              By blocking access to the drug after failed negotiations, the UK effectively waits out the patent period of the drug, knowing that generics will be available one day, while other countries pay a disproportionate price. The UK hence declines to participate in the pharmaceutical innovation market altogether, and alienates the internationally-funded R&amp;D that produced lecanemab and donanemab. A UK population absent from NPV calculations makes fewer drugs appear as viable investments, which weakens the economics that fund the next generation of drugs across all disease areas.
            </p>

            <p>
              There are currently{" "}
              <A href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12131090/">138 dementia medicines being tested</A>{" "}
              in clinical trials around the world. As NICE runs its fourth appraisal, the scientists, companies, and investors of these 138 drugs, and most importantly the patients, will be watching carefully.
            </p>

            <p className="italic text-sm border-t border-border pt-6 mt-8 text-muted-foreground">
              I'm an undergraduate at the University of Cambridge, with research experience in neurodegeneration at Cambridge and Harvard Medical School. This piece was inspired by my fellowship with No Patient Left Behind. With thanks to Harrison Bergeron, Elena Solopova and Peter Kolchinsky for their support and guidance.
            </p>

            <p className="text-sm mt-4">
              <a
                href="/NPLB_blog.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Download PDF
              </a>
            </p>

          </div>
        </article>
      </main>
    </div>
  );
};

export default BlogPostNPLB;
