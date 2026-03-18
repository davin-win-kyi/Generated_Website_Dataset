import Layout from "@/components/mass-media/Layout";
import StoryCard from "@/components/mass-media/StoryCard";
import heroImage from "@/assets/mass-media/hero-un-session.jpg";
import redSeaImage from "@/assets/mass-media/hero-red-sea.jpg";
import euImage from "@/assets/mass-media/story-eu.jpg";
import techImage from "@/assets/mass-media/story-tech.jpg";
import cultureImage from "@/assets/mass-media/story-culture.jpg";
import climateImage from "@/assets/mass-media/story-climate.jpg";

const mostRead = [
  { title: "Inside the Red Sea Crisis: What It Means for Global Shipping", time: "4h ago" },
  { title: "The AI Election: How Deepfakes Are Reshaping Democracy", time: "6h ago" },
  { title: "Climate Talks Collapse as Major Powers Walk Out", time: "8h ago" },
  { title: "The Hidden Cost of Fast Fashion's Return Policies", time: "10h ago" },
  { title: "Why Gen Z Is Abandoning Social Media for Newsletters", time: "12h ago" },
];

const HomePage = () => {
  return (
    <Layout>
      <div className="container py-8">
        {/* Hero Section */}
        <section aria-label="Top story">
          <StoryCard
            image={heroImage}
            imageAlt="Aerial view of the United Nations General Assembly hall during an emergency session with delegates seated in semicircular rows"
            category="World"
            headline="UN Calls Emergency Session as Red Sea Tensions Escalate to Crisis Point"
            byline="Helena Ashworth"
            timestamp="2 hours ago"
            summary="The UN Security Council has convened an extraordinary session following a series of maritime incidents in the Red Sea that have disrupted international shipping lanes and raised fears of a wider regional conflict."
            variant="hero"
          />
        </section>

        {/* Secondary Stories Grid */}
        <section className="mt-10" aria-label="Top stories">
          <div className="editorial-rule-thick mb-4">
            <h2 className="text-overline uppercase text-foreground font-sans pt-2">Top Stories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StoryCard
              image={redSeaImage}
              imageAlt="Cargo ships at sunset in a Middle Eastern port city along the Red Sea"
              category="World"
              headline="Shipping Giants Reroute as Red Sea Attacks Continue"
              byline="Marcus Chen"
              timestamp="3 hours ago"
              summary="Major shipping companies announce diversions around the Cape of Good Hope, adding weeks to delivery times."
            />
            <StoryCard
              image={euImage}
              imageAlt="European Union parliament building with flags flying"
              category="Politics"
              headline="EU Passes Landmark Digital Markets Act Enforcement Package"
              byline="Sophie Laurent"
              timestamp="5 hours ago"
              summary="Brussels moves to enforce stricter regulations on tech giants with potential fines of up to 20% of global revenue."
            />
            <StoryCard
              image={techImage}
              imageAlt="Modern glass tech campus buildings with people walking in bright sunlight"
              category="Technology"
              headline="OpenAI Rivals Emerge as AI Race Enters New Phase"
              byline="James Park"
              timestamp="6 hours ago"
              summary="A new wave of AI startups challenges Silicon Valley's dominance with open-source alternatives."
            />
            <StoryCard
              image={climateImage}
              imageAlt="Aerial view of a massive climate change protest march through a city"
              category="Climate"
              headline="Global Climate March Draws Record Numbers Across 150 Cities"
              byline="Amara Diallo"
              timestamp="8 hours ago"
              summary="Millions take to the streets demanding urgent action ahead of the next round of climate negotiations."
            />
          </div>
        </section>

        {/* Section Strips + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {/* Main Content Strips */}
          <div className="lg:col-span-2 space-y-10">
            {/* World Strip */}
            <section aria-label="World news">
              <div className="editorial-rule-crimson mb-4">
                <h2 className="text-overline uppercase text-primary font-sans pt-2">World</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <StoryCard
                  image={redSeaImage}
                  imageAlt="Port city at sunset"
                  category="Middle East"
                  headline="Iran Denies Involvement in Maritime Attacks Despite Evidence"
                  byline="Nadia Hashemi"
                  timestamp="4h ago"
                />
                <StoryCard
                  image={euImage}
                  imageAlt="European government building"
                  category="Europe"
                  headline="France Proposes EU-Wide Digital Tax Overhaul"
                  byline="Pierre Moreau"
                  timestamp="7h ago"
                />
              </div>
            </section>

            {/* Culture Strip */}
            <section aria-label="Culture news">
              <div className="editorial-rule-crimson mb-4">
                <h2 className="text-overline uppercase text-primary font-sans pt-2">Culture</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <StoryCard
                  image={cultureImage}
                  imageAlt="Gallery exhibition with visitors viewing paintings"
                  category="Arts"
                  headline="Venice Biennale Preview: The Artists Redefining Contemporary Art"
                  byline="Clara Finch"
                  timestamp="5h ago"
                />
                <StoryCard
                  image={techImage}
                  imageAlt="Modern city buildings"
                  category="Film"
                  headline="Cannes 2026: First Wave of Selections Signals Bold Lineup"
                  byline="Daniel Osei"
                  timestamp="9h ago"
                />
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1" aria-label="Most read articles">
            <div className="editorial-rule-thick mb-4">
              <h2 className="text-overline uppercase text-foreground font-sans pt-2">Most Read</h2>
            </div>
            <ol className="space-y-4">
              {mostRead.map((item, i) => (
                <li key={i} className="flex gap-3 group">
                  <span className="text-2xl font-serif font-bold text-primary/40 flex-shrink-0 w-8">
                    {i + 1}
                  </span>
                  <div className="flex-1 border-b border-border pb-4">
                    <a href="/article" className="text-sm font-serif font-semibold leading-snug group-hover:text-primary transition-colors">
                      {item.title}
                    </a>
                    <p className="text-caption text-muted-foreground font-sans mt-1">{item.time}</p>
                  </div>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
