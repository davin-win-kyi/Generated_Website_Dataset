import { Link } from "react-router-dom";
import { breakingNews } from "@/mass-media/data/articles";
import { useEffect, useRef, useState } from "react";

export function BreakingNewsTicker() {
  const [isPaused, setIsPaused] = useState(false);
  const tickerRef = useRef<HTMLDivElement>(null);

  const tickerContent = breakingNews.join("  ●  ");

  return (
    <div
      className="ticker-strip py-2 relative overflow-hidden"
      role="marquee"
      aria-label="Breaking news ticker"
      aria-live="off"
    >
      <div className="editorial-container flex items-center gap-4">
        <span className="font-sans font-black text-xs uppercase tracking-widest shrink-0 bg-primary text-primary-foreground px-2 py-0.5">
          Breaking
        </span>
        <div className="overflow-hidden flex-1 relative">
          <div
            ref={tickerRef}
            className={`ticker-animate flex whitespace-nowrap ${isPaused ? "[animation-play-state:paused]" : ""}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <span className="font-sans text-sm font-medium pr-16">{tickerContent}</span>
            <span className="font-sans text-sm font-medium pr-16">{tickerContent}</span>
          </div>
        </div>
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="shrink-0 text-xs font-sans font-bold uppercase tracking-wider hover:underline focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-accent rounded px-1"
          aria-label={isPaused ? "Resume breaking news ticker" : "Pause breaking news ticker"}
        >
          {isPaused ? "▶ Play" : "❚❚ Pause"}
        </button>
      </div>
    </div>
  );
}
