import MeridianLayout from "@/components/mass-media/MeridianLayout";
import StoryCard from "@/components/mass-media/StoryCard";
import { Link } from "react-router-dom";
import heroMain from "@/assets/mass-media/hero-main.jpg";
import worldLead from "@/assets/mass-media/world-lead.jpg";
import techStory from "@/assets/mass-media/tech-story.jpg";
import politicsStory from "@/assets/mass-media/politics-story.jpg";
import cultureStory from "@/assets/mass-media/culture-story.jpg";
import climateStory from "@/assets/mass-media/climate-story.jpg";
import economyStory from "@/assets/mass-media/economy-story.jpg";
import aiStory from "@/assets/mass-media/ai-story.jpg";

const secondaryStories = [
  {
    image: worldLead,
    category: "World",
    headline: "Security Council Deadlocked as Red Sea Crisis Deepens",
    summary: "Diplomatic efforts stall as major powers fail to agree on enforcement measures in critical shipping lanes.",
    author: "Elena Vasquez",
    time: "2h ago",
  },
  {
    image: techStory,
    category: "Tech",
    headline: "Silicon Valley's Latest AI Startup Valued at $12 Billion Before Launch",
    summary: "The pre-revenue valuation raises fresh concerns about a new tech bubble forming in artificial intelligence.",
    author: "James Nakamura",
    time: "3h ago",
  },
  {
    image: politicsStory,
    category: "Politics",
    headline: "EU Summit Yields Historic Climate Finance Agreement",
    summary: "After marathon negotiations, European leaders commit €500 billion to green transition fund.",
    author: "Sofia Lindström",
    time: "4h ago",
  },
];

const sectionStories: Record<string, Array<{ image: string; category: string; headline: string; author: string; time: string }>> = {
  World: [
    { image: worldLead, category: "World", headline: "Pacific Island Nations Form New Security Alliance", author: "R. Tanaka", time: "5h ago" },
    { image: climateStory, category: "World", headline: "Global South Leaders Demand Climate Reparations", author: "A. Okafor", time: "6h ago" },
  ],
  Politics: [
    { image: politicsStory, category: "Politics", headline: "Senate Committee Advances Landmark Digital Privacy Bill", author: "M. Chen", time: "3h ago" },
    { image: heroMain, category: "Politics", headline: "State Elections Signal Shifting Urban–Rural Divide", author: "J. Brooks", time: "7h ago" },
  ],
  Tech: [
    { image: aiStory, category: "Tech", headline: "New AI Regulation Framework Divides European Parliament", author: "L. Schmidt", time: "1h ago" },
    { image: techStory, category: "Tech", headline: "Quantum Computing Milestone: 1,000-Qubit Processor Achieved", author: "P. Gupta", time: "4h ago" },
  ],
  Culture: [
    { image: cultureStory, category: "Culture", headline: "Venice Biennale Opens with Bold Statement on Migration", author: "C. Moretti", time: "8h ago" },
    { image: economyStory, category: "Culture", headline: "The Forgotten Art of Slow Journalism", author: "D. Park", time: "10h ago" },
  ],
};

const mostRead = [
  "Red Sea Tensions: What You Need to Know",
  "Opinion: The Case for Universal Digital Identity",
  "How AI Is Reshaping Newsrooms Worldwide",
  "EU Climate Deal: Winners and Losers",
  "The Rise of Micro-Nations in the Pacific",
];

const MassMediaHome = () => {
  return (
    <MeridianLayout>
      {/* Hero */}
      <StoryCard
        image={heroMain}
        category="Global Affairs"
        headline="The New Cold War: How Great Power Rivalry Is Reshaping the Global Order"
        summary="As diplomatic fault lines deepen across three continents, a generation of leaders navigates an era of strategic competition unseen since the fall of the Berlin Wall."
        author="Catherine Mercer"
        time="1h ago"
        size="large"
      />

      <div className="meridian-container">
        {/* Secondary stories grid */}
        <div className="meridian-rule-heavy mt-0 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {secondaryStories.map((story) => (
              <StoryCard key={story.headline} {...story} />
            ))}
          </div>
        </div>

        {/* Section strips */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
          <div>
            {Object.entries(sectionStories).map(([section, stories]) => (
              <div key={section} className="mb-10">
                <div className="meridian-rule-accent mb-4 pt-0" />
                <div className="flex items-center justify-between mb-5">
                  <h2 className="font-serif text-2xl font-bold">{section}</h2>
                  <Link
                    to="/mass-media/world"
                    className="font-sans text-xs font-semibold uppercase tracking-widest text-meridian-accent hover:text-meridian-accent-dark transition-colors"
                  >
                    See all →
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {stories.map((story) => (
                    <StoryCard key={story.headline} {...story} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Most Read sidebar */}
          <aside className="lg:border-l lg:border-meridian-rule lg:pl-8">
            <div className="meridian-rule-heavy mb-4" />
            <h3 className="font-serif text-xl font-bold mb-6">Most Read</h3>
            <ol className="space-y-0">
              {mostRead.map((title, i) => (
                <li key={i} className="border-b border-meridian-rule last:border-0">
                  <Link
                    to="/mass-media/article"
                    className="flex gap-4 py-4 group"
                  >
                    <span className="font-serif text-3xl font-bold text-meridian-accent/30 leading-none shrink-0 w-8">
                      {i + 1}
                    </span>
                    <span className="font-serif text-sm font-bold leading-snug group-hover:text-meridian-accent transition-colors">
                      {title}
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </div>
    </MeridianLayout>
  );
};

export default MassMediaHome;
