import { useState } from "react";
import { Image, Smile, MapPin, BarChart2 } from "lucide-react";

export function ContentComposer() {
  const [content, setContent] = useState("");

  return (
    <div className="bg-card border border-border rounded-xl p-4">
      <div className="flex gap-3">
        <div className="h-10 w-10 rounded-full pulse-gradient flex items-center justify-center text-sm font-bold text-primary-foreground shrink-0" aria-hidden="true">
          A
        </div>
        <div className="flex-1 min-w-0">
          <label htmlFor="composer-input" className="sr-only">What's on your mind?</label>
          <textarea
            id="composer-input"
            placeholder="What's on your mind, Alex?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full bg-transparent text-sm resize-none focus:outline-none placeholder:text-muted-foreground min-h-[60px]"
            rows={2}
          />
          <div className="flex items-center justify-between mt-2 pt-2 border-t border-border">
            <div className="flex items-center gap-1">
              <button className="p-2 rounded-md text-primary hover:bg-primary/10 transition-colors" aria-label="Add image">
                <Image className="h-4 w-4" aria-hidden="true" />
              </button>
              <button className="p-2 rounded-md text-primary hover:bg-primary/10 transition-colors" aria-label="Add emoji">
                <Smile className="h-4 w-4" aria-hidden="true" />
              </button>
              <button className="p-2 rounded-md text-primary hover:bg-primary/10 transition-colors" aria-label="Add location">
                <MapPin className="h-4 w-4" aria-hidden="true" />
              </button>
              <button className="p-2 rounded-md text-primary hover:bg-primary/10 transition-colors" aria-label="Create poll">
                <BarChart2 className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
            <button
              disabled={!content.trim()}
              className="pulse-gradient text-primary-foreground text-sm font-semibold px-5 py-1.5 rounded-full disabled:opacity-40 transition-opacity hover:opacity-90"
              aria-label="Publish post"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
