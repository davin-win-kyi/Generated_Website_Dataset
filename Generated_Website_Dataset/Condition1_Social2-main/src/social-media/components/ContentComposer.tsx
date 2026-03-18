import { useState } from "react";
import { Image, Smile, MapPin } from "lucide-react";

export function ContentComposer() {
  const [text, setText] = useState("");

  return (
    <div className="pulse-card p-4 sm:p-5">
      <div className="flex gap-3">
        <div
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full shrink-0 flex items-center justify-center font-heading font-bold text-sm text-primary-foreground pulse-gradient"
          aria-hidden="true"
        >
          A
        </div>
        <div className="flex-1">
          <label htmlFor="compose-input" className="sr-only">
            What's on your mind?
          </label>
          <textarea
            id="compose-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="What's on your mind, Alex?"
            className="w-full bg-transparent text-foreground placeholder:text-muted-foreground text-sm resize-none border-0 outline-none min-h-[80px] focus-visible:outline-none"
            rows={3}
            aria-label="Compose a new post"
          />
          <div className="flex items-center justify-between mt-2 pt-3 border-t border-border">
            <div className="flex items-center gap-1" role="toolbar" aria-label="Post attachments">
              <button
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                aria-label="Add image"
              >
                <Image className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                aria-label="Add emoji"
              >
                <Smile className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                aria-label="Add location"
              >
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <button
              disabled={!text.trim()}
              className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
