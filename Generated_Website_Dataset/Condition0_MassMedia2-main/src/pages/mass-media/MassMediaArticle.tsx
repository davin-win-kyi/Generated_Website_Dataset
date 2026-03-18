import MeridianLayout from "@/components/mass-media/MeridianLayout";
import StoryCard from "@/components/mass-media/StoryCard";
import { Link } from "react-router-dom";
import heroMain from "@/assets/mass-media/hero-main.jpg";
import worldLead from "@/assets/mass-media/world-lead.jpg";
import climateStory from "@/assets/mass-media/climate-story.jpg";
import columnist1 from "@/assets/mass-media/columnist-1.jpg";

const relatedStories = [
  { image: worldLead, category: "World", headline: "Security Council Deadlocked as Red Sea Crisis Deepens", author: "Elena Vasquez", time: "2h ago" },
  { image: climateStory, category: "World", headline: "Global South Leaders Demand Climate Reparations", author: "A. Okafor", time: "6h ago" },
  { image: heroMain, category: "World", headline: "Pacific Island Nations Form New Security Alliance", author: "R. Tanaka", time: "5h ago" },
];

const MassMediaArticle = () => {
  return (
    <MeridianLayout>
      <article className="meridian-container py-10">
        {/* Article header */}
        <div className="max-w-3xl mx-auto">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-meridian-accent">
            Global Affairs
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight mt-3 mb-4">
            The New Cold War: How Great Power Rivalry Is Reshaping the Global Order
          </h1>
          <p className="font-serif text-xl text-muted-foreground leading-relaxed mb-6">
            As diplomatic fault lines deepen across three continents, a generation of leaders navigates an era of strategic competition unseen since the fall of the Berlin Wall.
          </p>

          {/* Byline */}
          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-meridian-rule">
            <img src={columnist1} alt="Catherine Mercer" className="w-12 h-12 rounded-full object-cover" />
            <div>
              <div className="font-sans text-sm font-semibold">Catherine Mercer</div>
              <div className="font-sans text-xs text-muted-foreground">
                March 15, 2026 · 8 min read
              </div>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="max-w-4xl mx-auto mb-10">
          <img src={heroMain} alt="City skyline at dusk" className="w-full h-auto" />
          <p className="font-sans text-xs text-muted-foreground mt-2 italic">
            A view of the financial district at dusk. The shifting global order has profound implications for international commerce. Photo: The Meridian / Archive
          </p>
        </div>

        {/* Article body */}
        <div className="max-w-3xl mx-auto">
          <div className="prose-meridian font-sans text-lg leading-relaxed space-y-6">
            <p>
              The old world order, built painstakingly over decades of post-war cooperation, is fraying at an alarming pace. What began as isolated trade disputes and diplomatic skirmishes has evolved into something far more consequential: a structural realignment of global power that threatens the very foundations of the international system.
            </p>
            <p>
              In Washington, policymakers speak openly of "strategic competition" as the defining challenge of the era. In Beijing, the language is different — "multipolarity" and "common destiny" — but the underlying calculus is remarkably similar. Both capitals are preparing for a world in which cooperation is transactional and trust is a luxury neither can afford.
            </p>

            {/* Pull quote */}
            <blockquote className="border-l-4 border-meridian-accent pl-6 my-10 italic font-serif text-2xl leading-snug text-foreground/80">
              "We are witnessing not the end of diplomacy, but its transformation into something our post-war institutions were never designed to handle."
              <footer className="font-sans text-sm text-muted-foreground mt-3 not-italic">
                — Dr. Amara Osei, Director of the Institute for Global Strategy
              </footer>
            </blockquote>

            <p>
              The implications extend far beyond the corridors of power. For ordinary citizens in dozens of countries, the new rivalry manifests in rising energy costs, disrupted supply chains, and an information environment increasingly shaped by competing narratives. The "rules-based order" — once a reassuring mantra of Western diplomacy — is now viewed with skepticism by much of the Global South.
            </p>
            <p>
              Europe finds itself in a particularly uncomfortable position. Caught between its transatlantic alliance and its economic dependence on Asian markets, the European Union has struggled to articulate an independent foreign policy. The continent's response to successive crises — from Ukraine to the Red Sea — has exposed deep divisions between member states.
            </p>

            {/* Inline related article */}
            <div className="bg-secondary border-l-4 border-meridian-blue p-5 my-8">
              <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-meridian-blue">Related</span>
              <Link to="/mass-media/article" className="font-serif text-base font-bold mt-1 block hover:text-meridian-accent transition-colors">
                NATO Expands Arctic Defense Posture Amid Russian Build-Up →
              </Link>
            </div>

            <p>
              In Africa and Latin America, a new generation of leaders is exploiting the rivalry to extract better terms from all sides. Brazil's recent trade agreement with the African Union — negotiated explicitly as an alternative to Western-dominated frameworks — represents a model that other nations are eager to replicate.
            </p>
            <p>
              The question that haunts diplomats and strategists alike is whether this new competition can be managed peacefully, or whether the centrifugal forces now at work will prove impossible to contain. History offers few reassurances: every previous era of great power transition has been marked by conflict, miscalculation, and suffering on a massive scale.
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-meridian-rule">
            {["Global Affairs", "Geopolitics", "Diplomacy", "NATO", "Trade", "China", "United States"].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground font-sans text-xs font-medium rounded-sm">
                {tag}
              </span>
            ))}
          </div>

          {/* Comments section */}
          <div className="mt-14">
            <div className="meridian-rule-heavy mb-6" />
            <h3 className="font-serif text-2xl font-bold mb-6">Comments</h3>
            <div className="space-y-6">
              {[
                { name: "Thomas K.", time: "1h ago", text: "Excellent analysis. The parallel to pre-WWI great power dynamics is chilling but apt. I'd love to see a follow-up piece on how smaller nations are navigating this." },
                { name: "Amara S.", time: "2h ago", text: "Important piece, but I think it underestimates the agency of the Global South. The Brazil–AU deal you mention is just the tip of the iceberg." },
                { name: "Henrik M.", time: "3h ago", text: "As someone working in European trade policy, the section on the EU's strategic ambiguity resonates deeply. We're watching this unfold in real time." },
              ].map((comment, i) => (
                <div key={i} className="border-b border-meridian-rule pb-6 last:border-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-sans text-sm font-semibold">{comment.name}</span>
                    <span className="font-sans text-xs text-muted-foreground">{comment.time}</span>
                  </div>
                  <p className="font-sans text-sm text-foreground/80 leading-relaxed">{comment.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <textarea
                placeholder="Join the conversation..."
                className="w-full p-4 border border-meridian-rule bg-card font-sans text-sm rounded-sm focus:outline-none focus:border-meridian-accent resize-none h-24"
              />
              <button className="mt-3 px-6 py-2.5 bg-meridian-ink text-primary-foreground font-sans font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-meridian-ink/90 transition-colors">
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* More from World */}
      <div className="meridian-container pb-10">
        <div className="meridian-rule-accent mb-6" />
        <h3 className="font-serif text-2xl font-bold mb-6">More from World</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {relatedStories.map((story) => (
            <StoryCard key={story.headline} {...story} />
          ))}
        </div>
      </div>
    </MeridianLayout>
  );
};

export default MassMediaArticle;
