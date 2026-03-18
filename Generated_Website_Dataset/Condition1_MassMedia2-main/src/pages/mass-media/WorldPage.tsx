import { useState } from "react";
import Layout from "@/components/mass-media/Layout";
import StoryCard from "@/components/mass-media/StoryCard";
import heroImage from "@/assets/mass-media/hero-un-session.jpg";
import redSeaImage from "@/assets/mass-media/hero-red-sea.jpg";
import euImage from "@/assets/mass-media/story-eu.jpg";
import techImage from "@/assets/mass-media/story-tech.jpg";
import cultureImage from "@/assets/mass-media/story-culture.jpg";
import climateImage from "@/assets/mass-media/story-climate.jpg";

const filters = ["All", "Asia", "Europe", "Americas", "Middle East", "Africa"];

const stories = [
  { image: redSeaImage, imageAlt: "Port at sunset", category: "Middle East", headline: "Shipping Giants Reroute as Red Sea Attacks Continue", byline: "Marcus Chen", timestamp: "3h ago", summary: "Major shipping companies announce diversions adding weeks to delivery times." },
  { image: euImage, imageAlt: "EU parliament building", category: "Europe", headline: "EU Passes Landmark Digital Markets Act Enforcement Package", byline: "Sophie Laurent", timestamp: "5h ago", summary: "Brussels moves to enforce stricter regulations on tech giants." },
  { image: climateImage, imageAlt: "Climate protest march", category: "Americas", headline: "Latin American Nations Form New Climate Coalition", byline: "Amara Diallo", timestamp: "6h ago", summary: "Ten countries pledge binding emissions targets ahead of COP summit." },
  { image: techImage, imageAlt: "Tech campus", category: "Asia", headline: "Japan's Semiconductor Revival Plan Gains International Backing", byline: "Yuki Tanaka", timestamp: "7h ago", summary: "Tokyo secures $15B in foreign investment for chip fabrication." },
  { image: cultureImage, imageAlt: "Art gallery", category: "Africa", headline: "African Union Summit Addresses Regional Security Challenges", byline: "Kwame Asante", timestamp: "8h ago", summary: "Leaders discuss peacekeeping operations and governance reforms." },
  { image: heroImage, imageAlt: "UN assembly", category: "Middle East", headline: "Iran Denies Involvement in Maritime Attacks Despite Evidence", byline: "Nadia Hashemi", timestamp: "9h ago", summary: "Intelligence reports suggest coordinated campaign disrupting trade." },
  { image: redSeaImage, imageAlt: "Port city", category: "Asia", headline: "India-China Border Talks Resume After Two-Year Hiatus", byline: "Priya Sharma", timestamp: "10h ago", summary: "Diplomatic channels reopen amid shifting regional alliances." },
  { image: euImage, imageAlt: "Government building", category: "Europe", headline: "France Proposes EU-Wide Digital Tax Overhaul", byline: "Pierre Moreau", timestamp: "11h ago", summary: "Plan would restructure how tech profits are taxed across member states." },
];

const WorldPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All" ? stories : stories.filter(s => s.category === activeFilter);

  return (
    <Layout>
      <div className="container py-8">
        {/* Section Header */}
        <div className="editorial-rule-crimson mb-6">
          <h1 className="text-headline font-serif pt-3">World</h1>
          <p className="text-base text-muted-foreground font-sans mt-1 mb-4">
            Global affairs, diplomacy, and international developments from The Meridian's worldwide network of correspondents.
          </p>
        </div>

        {/* Filter Bar */}
        <nav className="flex flex-wrap gap-2 mb-8" aria-label="Topic filters">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-sm font-sans font-medium rounded-sm transition-colors ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </nav>

        {/* Lead Story */}
        <section aria-label="Lead story" className="mb-10">
          <StoryCard
            image={heroImage}
            imageAlt="UN General Assembly hall during an emergency session"
            category="World"
            headline="UN Calls Emergency Session as Red Sea Tensions Escalate to Crisis Point"
            byline="Helena Ashworth"
            timestamp="2 hours ago"
            summary="The UN Security Council has convened an extraordinary session following a series of maritime incidents in the Red Sea that have disrupted international shipping lanes and raised fears of a wider regional conflict."
            variant="hero"
          />
        </section>

        {/* Story Grid */}
        <section aria-label="World stories">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((story, i) => (
              <StoryCard key={i} {...story} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default WorldPage;
