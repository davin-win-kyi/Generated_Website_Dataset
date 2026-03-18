import MeridianLayout from "@/components/mass-media/MeridianLayout";
import StoryCard from "@/components/mass-media/StoryCard";
import { useState } from "react";
import worldLead from "@/assets/mass-media/world-lead.jpg";
import heroMain from "@/assets/mass-media/hero-main.jpg";
import climateStory from "@/assets/mass-media/climate-story.jpg";
import politicsStory from "@/assets/mass-media/politics-story.jpg";
import economyStory from "@/assets/mass-media/economy-story.jpg";
import techStory from "@/assets/mass-media/tech-story.jpg";
import cultureStory from "@/assets/mass-media/culture-story.jpg";
import aiStory from "@/assets/mass-media/ai-story.jpg";

const filters = ["All", "Asia", "Europe", "Americas", "Middle East", "Africa"];

const stories = [
  { image: worldLead, category: "Middle East", headline: "Red Sea Crisis: Shipping Giants Reroute as Attacks Intensify", summary: "Major carriers announce indefinite suspension of Red Sea transits, adding weeks to global supply chains.", author: "Elena Vasquez", time: "2h ago" },
  { image: heroMain, category: "Europe", headline: "NATO Expands Arctic Defense Posture Amid Russian Build-Up", summary: "Alliance deploys new rapid response units to Norway and Finland as geopolitical tensions heat up in the High North.", author: "Anders Bjørnsen", time: "3h ago" },
  { image: climateStory, category: "Asia", headline: "Bangladesh Faces Worst Flooding in a Decade", summary: "Over 4 million displaced as monsoon rains overwhelm infrastructure in low-lying delta regions.", author: "Priya Sharma", time: "4h ago" },
  { image: politicsStory, category: "Europe", headline: "France Announces Sweeping Pension Reform Reversal", summary: "President bows to months of protests, signaling major political realignment ahead of European elections.", author: "Sophie Mercier", time: "5h ago" },
  { image: economyStory, category: "Americas", headline: "Brazil's Lula Strikes Historic Trade Deal with African Union", summary: "South-South cooperation agreement covers agriculture, mining, and renewable energy partnerships.", author: "Carlos Mendes", time: "6h ago" },
  { image: techStory, category: "Asia", headline: "Japan Unveils Next-Generation Bullet Train with Zero Emissions", summary: "The hydrogen-powered Shinkansen prototype signals Japan's commitment to green transport innovation.", author: "Yuki Tanaka", time: "7h ago" },
  { image: aiStory, category: "Africa", headline: "Kenya's Tech Hub Attracts Record $2B in Foreign Investment", summary: "Nairobi cements its status as Africa's Silicon Savannah with new wave of AI and fintech startups.", author: "Grace Wanjiku", time: "8h ago" },
  { image: cultureStory, category: "Middle East", headline: "Saudi Arabia Opens New Arts District in Riyadh", summary: "The $3 billion cultural complex aims to position the kingdom as a global arts destination.", author: "Omar Al-Rashid", time: "9h ago" },
];

const MassMediaWorld = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All" ? stories : stories.filter((s) => s.category === activeFilter);

  return (
    <MeridianLayout>
      <div className="meridian-container py-10">
        {/* Section header */}
        <div className="meridian-rule-accent mb-6" />
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-2">World</h1>
        <p className="font-sans text-base text-muted-foreground mb-8 max-w-2xl">
          Comprehensive coverage of international affairs, conflicts, diplomacy, and the forces shaping our interconnected world.
        </p>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 font-sans text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors ${
                activeFilter === f
                  ? "bg-meridian-ink text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-meridian-ink/10"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Lead story */}
        {filtered.length > 0 && (
          <div className="mb-10">
            <StoryCard {...filtered[0]} size="large" />
          </div>
        )}

        {/* Story grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.slice(1).map((story) => (
            <StoryCard key={story.headline} {...story} />
          ))}
        </div>
      </div>
    </MeridianLayout>
  );
};

export default MassMediaWorld;
