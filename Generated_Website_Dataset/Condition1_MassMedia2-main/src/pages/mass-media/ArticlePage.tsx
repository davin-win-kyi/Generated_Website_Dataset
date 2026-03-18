import Layout from "@/components/mass-media/Layout";
import StoryCard from "@/components/mass-media/StoryCard";
import heroImage from "@/assets/mass-media/hero-un-session.jpg";
import redSeaImage from "@/assets/mass-media/hero-red-sea.jpg";
import euImage from "@/assets/mass-media/story-eu.jpg";
import climateImage from "@/assets/mass-media/story-climate.jpg";
import columnist1 from "@/assets/mass-media/columnist-1.jpg";
import { Link } from "react-router-dom";
import { Clock, Share2, Bookmark } from "lucide-react";

const tags = ["Red Sea", "UN Security Council", "Maritime Security", "Geopolitics", "Middle East"];

const ArticlePage = () => {
  return (
    <Layout>
      <article className="container py-8 max-w-4xl mx-auto">
        {/* Article Header */}
        <header>
          <div className="editorial-rule-crimson pt-3 mb-4">
            <Link to="/world" className="text-overline uppercase text-primary font-sans hover:underline">
              World
            </Link>
          </div>

          <h1 className="text-display font-serif mb-4">
            UN Calls Emergency Session as Red Sea Tensions Escalate to Crisis Point
          </h1>

          <p className="text-xl text-muted-foreground font-sans mb-6 leading-relaxed">
            The Security Council convenes amid escalating maritime threats that have disrupted global shipping lanes and raised fears of a wider regional conflict involving multiple state and non-state actors.
          </p>

          {/* Byline */}
          <div className="flex items-center gap-4 pb-6 border-b border-border">
            <img
              src={columnist1}
              alt="Portrait of Helena Ashworth, senior correspondent"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-sans font-semibold">Helena Ashworth</p>
              <p className="text-caption text-muted-foreground font-sans">
                Senior Correspondent, Middle East
              </p>
            </div>
            <div className="ml-auto flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-1 text-caption font-sans">
                <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                <span>8 min read</span>
              </div>
              <time className="text-caption font-sans">March 16, 2026</time>
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex items-center gap-3 py-3 border-b border-border">
            <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors font-sans" aria-label="Share this article">
              <Share2 className="w-4 h-4" />
              Share
            </button>
            <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors font-sans" aria-label="Save this article">
              <Bookmark className="w-4 h-4" />
              Save
            </button>
          </div>
        </header>

        {/* Hero Image */}
        <figure className="my-8">
          <img
            src={heroImage}
            alt="Aerial view of the United Nations General Assembly hall during an emergency session with delegates from around the world seated in semicircular rows"
            className="w-full aspect-[16/9] object-cover"
          />
          <figcaption className="text-caption text-muted-foreground font-sans mt-2 italic">
            The UN General Assembly convenes for an emergency session on the Red Sea crisis. Photograph: The Meridian/Agency Pool
          </figcaption>
        </figure>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none font-sans text-foreground leading-relaxed space-y-6">
          <p>
            The United Nations Security Council convened an emergency session on Sunday amid escalating tensions in the Red Sea, where a series of attacks on commercial shipping vessels has disrupted one of the world's most critical maritime corridors. The session, requested jointly by the United Kingdom and France, marks the first time the Council has met on the issue since hostilities intensified three weeks ago.
          </p>

          <p>
            Diplomats from more than 40 nations gathered in New York as evidence mounted of a coordinated campaign targeting cargo vessels transiting the Bab el-Mandeb strait, a narrow chokepoint through which approximately 12% of global trade passes. The attacks have forced major shipping companies to reroute vessels around the Cape of Good Hope, adding up to two weeks to journey times and significantly increasing fuel costs.
          </p>

          <p>
            "We are witnessing a direct assault on the rules-based international order," said British Ambassador Margaret Thornton-Clarke in her opening remarks. "The freedom of navigation through international waterways is a cornerstone of global commerce, and its disruption affects every nation represented in this chamber."
          </p>

          {/* Pull Quote */}
          <blockquote className="border-l-4 border-primary pl-6 py-4 my-8 bg-muted/50 -mx-4 px-10">
            <p className="text-xl font-serif italic text-foreground leading-relaxed">
              "We are witnessing a direct assault on the rules-based international order. The freedom of navigation through international waterways is a cornerstone of global commerce."
            </p>
            <cite className="text-sm text-muted-foreground font-sans not-italic mt-2 block">
              — Ambassador Margaret Thornton-Clarke, UK Permanent Representative to the UN
            </cite>
          </blockquote>

          <p>
            The economic impact has been substantial. Insurance premiums for vessels transiting the Red Sea have surged by over 300%, while the cost of shipping a standard container from Asia to Europe has nearly doubled. Industry analysts warn that if the disruptions continue, consumers worldwide could face higher prices on everything from electronics to foodstuffs within the coming weeks.
          </p>

          <p>
            Iran has denied any involvement in the attacks, despite intelligence reports shared among Western allies suggesting a coordinated campaign. Tehran's ambassador to the UN, speaking to reporters outside the chamber, described the accusations as "baseless provocations designed to justify military escalation in the region."
          </p>

          <p>
            The session concluded with a commitment to draft a resolution calling for the immediate cessation of attacks and the establishment of a multinational naval patrol. However, diplomatic sources suggest that achieving consensus may prove difficult, with Russia and China expressing reservations about what they characterize as an overly Western-led response to a complex regional issue.
          </p>

          {/* Inline Related */}
          <aside className="bg-muted/50 p-6 rounded-sm my-8 -mx-4" aria-label="Related articles">
            <h3 className="text-overline uppercase text-primary font-sans mb-3">Related</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/article" className="text-sm font-serif font-semibold hover:text-primary transition-colors">
                  Shipping Giants Reroute as Red Sea Attacks Continue
                </Link>
              </li>
              <li>
                <Link to="/article" className="text-sm font-serif font-semibold hover:text-primary transition-colors">
                  Iran Denies Involvement in Maritime Attacks Despite Evidence
                </Link>
              </li>
            </ul>
          </aside>
        </div>

        {/* Tags */}
        <footer className="mt-8 pt-6 border-t border-border">
          <div className="flex flex-wrap gap-2" aria-label="Article tags">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm font-sans bg-muted text-muted-foreground rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </footer>

        {/* Comments Section */}
        <section className="mt-12 pt-8 border-t border-border" aria-label="Comments">
          <h2 className="text-subheadline font-serif mb-6">Comments</h2>
          <div className="bg-muted/50 rounded-sm p-6 mb-6">
            <label htmlFor="comment-input" className="text-sm font-sans font-medium block mb-2">
              Join the discussion
            </label>
            <textarea
              id="comment-input"
              className="w-full p-3 bg-background border border-border rounded-sm text-sm font-sans resize-none focus:outline-none focus:border-primary"
              rows={3}
              placeholder="Share your thoughts..."
            />
            <button className="mt-3 px-5 py-2 bg-primary text-primary-foreground text-sm font-sans font-medium rounded-sm hover:bg-primary/90 transition-colors">
              Post Comment
            </button>
          </div>

          {/* Sample Comments */}
          <div className="space-y-6">
            <div className="border-b border-border pb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-sans font-semibold">ReaderInLondon</span>
                <time className="text-caption text-muted-foreground font-sans">1 hour ago</time>
              </div>
              <p className="text-sm font-sans text-muted-foreground">
                Excellent analysis. The comparison to the Suez Crisis is apt — the economic implications alone should be driving more urgent diplomatic action.
              </p>
            </div>
            <div className="border-b border-border pb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-sans font-semibold">GlobalWatcher</span>
                <time className="text-caption text-muted-foreground font-sans">45 min ago</time>
              </div>
              <p className="text-sm font-sans text-muted-foreground">
                The shipping reroute costs are staggering. We're already seeing price increases at European ports. This needs a multilateral solution fast.
              </p>
            </div>
          </div>
        </section>
      </article>

      {/* More from World */}
      <section className="bg-muted/50 py-10" aria-label="More stories from World">
        <div className="container">
          <div className="editorial-rule-thick mb-4">
            <h2 className="text-overline uppercase text-foreground font-sans pt-2">More from World</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StoryCard
              image={redSeaImage}
              imageAlt="Port at sunset"
              category="Middle East"
              headline="Shipping Giants Reroute as Red Sea Attacks Continue"
              byline="Marcus Chen"
              timestamp="3h ago"
            />
            <StoryCard
              image={euImage}
              imageAlt="EU parliament"
              category="Europe"
              headline="EU Passes Landmark Digital Markets Act"
              byline="Sophie Laurent"
              timestamp="5h ago"
            />
            <StoryCard
              image={climateImage}
              imageAlt="Climate protest"
              category="Climate"
              headline="Global Climate March Draws Record Numbers"
              byline="Amara Diallo"
              timestamp="8h ago"
            />
            <StoryCard
              image={heroImage}
              imageAlt="UN Assembly"
              category="Diplomacy"
              headline="UN Reform Proposals Face Resistance from Major Powers"
              byline="David Okonkwo"
              timestamp="12h ago"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ArticlePage;
