import Layout from "@/components/mass-media/Layout";
import { Link } from "react-router-dom";
import columnist1 from "@/assets/mass-media/columnist-1.jpg";
import columnist2 from "@/assets/mass-media/columnist-2.jpg";
import columnist3 from "@/assets/mass-media/columnist-3.jpg";

const columnists = [
  {
    name: "Helena Ashworth",
    title: "Foreign Affairs Columnist",
    image: columnist1,
    imageAlt: "Portrait of Helena Ashworth",
  },
  {
    name: "James Park",
    title: "Technology & Society",
    image: columnist2,
    imageAlt: "Portrait of James Park",
  },
  {
    name: "Robert Hargrove",
    title: "Politics & Policy",
    image: columnist3,
    imageAlt: "Portrait of Robert Hargrove",
  },
];

const featuredEssay = {
  author: columnists[0],
  headline: "The Red Sea Crisis Exposes the Fragility of Globalization",
  summary: "We built a world economy on the assumption that maritime trade routes would remain open and secure. That assumption is now being tested in ways that should alarm us all — and force a fundamental rethinking of how we manage collective security.",
  date: "March 16, 2026",
  readTime: "12 min read",
};

const recentOpinions = [
  { author: columnists[1], headline: "AI Won't Replace Journalists — But It Will Change Everything About How We Work", date: "March 15, 2026" },
  { author: columnists[2], headline: "The Case for Electoral Reform Has Never Been Stronger", date: "March 14, 2026" },
  { author: columnists[0], headline: "Why Diplomacy Still Matters in an Age of Digital Warfare", date: "March 13, 2026" },
  { author: columnists[1], headline: "Silicon Valley's Reckoning: When Innovation Outpaces Ethics", date: "March 12, 2026" },
  { author: columnists[2], headline: "The Middle Class Squeeze: Policy Failures We Can No Longer Ignore", date: "March 11, 2026" },
  { author: columnists[0], headline: "Europe's Defense Identity Crisis and What It Means for NATO", date: "March 10, 2026" },
];

const letters = [
  { author: "Dr. Sarah Mitchell, Cambridge", text: "Helena Ashworth's analysis of the Red Sea situation was incisive but overlooked the critical role of regional actors in de-escalation. The emphasis on Western-led responses risks alienating the very nations whose cooperation is essential." },
  { author: "Thomas Okafor, Lagos", text: "Your coverage of the African Union summit failed to capture the significant progress made on intra-continental trade agreements. I'd encourage more dedicated Africa desk reporting." },
  { author: "Patricia Wong, Singapore", text: "James Park's piece on AI regulation was timely and well-argued. However, the suggestion that self-regulation could work seems optimistic given the industry's track record." },
];

const OpinionPage = () => {
  return (
    <Layout>
      <div className="container py-8">
        {/* Page Header */}
        <div className="editorial-rule-crimson mb-8">
          <h1 className="text-headline font-serif pt-3">Opinion</h1>
          <p className="text-base text-muted-foreground font-sans mt-1">
            Analysis, commentary, and debate from The Meridian's columnists and guest contributors.
          </p>
        </div>

        {/* Featured Essay */}
        <section className="mb-12" aria-label="Featured opinion">
          <div className="bg-muted/50 p-6 md:p-10 rounded-sm">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={featuredEssay.author.image}
                alt={featuredEssay.author.imageAlt}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="text-lg font-serif font-bold">{featuredEssay.author.name}</p>
                <p className="text-sm text-muted-foreground font-sans">{featuredEssay.author.title}</p>
              </div>
            </div>
            <Link to="/article" className="group">
              <h2 className="text-headline md:text-display font-serif mb-4 group-hover:text-primary transition-colors">
                {featuredEssay.headline}
              </h2>
            </Link>
            <p className="text-lg text-muted-foreground font-sans leading-relaxed mb-4 max-w-3xl">
              {featuredEssay.summary}
            </p>
            <div className="flex items-center gap-3 text-caption text-muted-foreground font-sans">
              <time>{featuredEssay.date}</time>
              <span aria-hidden="true">·</span>
              <span>{featuredEssay.readTime}</span>
            </div>
          </div>
        </section>

        {/* Columnists */}
        <section className="mb-12" aria-label="Our columnists">
          <div className="editorial-rule-thick mb-6">
            <h2 className="text-overline uppercase text-foreground font-sans pt-2">Our Columnists</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {columnists.map((col) => (
              <div key={col.name} className="text-center p-6 bg-muted/30 rounded-sm">
                <img
                  src={col.image}
                  alt={col.imageAlt}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-lg font-serif font-bold">{col.name}</h3>
                <p className="text-sm text-muted-foreground font-sans">{col.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Opinions by Columnist */}
        <section className="mb-12" aria-label="Recent opinion pieces">
          <div className="editorial-rule-thick mb-6">
            <h2 className="text-overline uppercase text-foreground font-sans pt-2">Recent Opinions</h2>
          </div>
          <div className="space-y-0">
            {recentOpinions.map((op, i) => (
              <Link to="/article" key={i} className="flex items-center gap-4 py-4 border-b border-border group">
                <img
                  src={op.author.image}
                  alt={op.author.imageAlt}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-serif font-semibold group-hover:text-primary transition-colors line-clamp-2">
                    {op.headline}
                  </h3>
                  <div className="flex items-center gap-2 text-caption text-muted-foreground font-sans mt-1">
                    <span>{op.author.name}</span>
                    <span aria-hidden="true">·</span>
                    <time>{op.date}</time>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Letters to the Editor */}
        <section aria-label="Letters to the editor">
          <div className="editorial-rule-crimson mb-6">
            <h2 className="text-subheadline font-serif pt-3">Letters to the Editor</h2>
          </div>
          <div className="space-y-6">
            {letters.map((letter, i) => (
              <div key={i} className="border-b border-border pb-6">
                <p className="text-sm font-sans text-foreground leading-relaxed italic">
                  "{letter.text}"
                </p>
                <p className="text-caption text-muted-foreground font-sans mt-2">
                  — {letter.author}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default OpinionPage;
