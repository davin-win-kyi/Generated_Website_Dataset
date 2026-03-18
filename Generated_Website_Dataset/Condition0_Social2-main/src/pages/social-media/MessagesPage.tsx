import { useState } from "react";
import { Send, Smile, Search } from "lucide-react";
import { PulseLayout } from "@/components/social-media/PulseLayout";

const conversations = [
  { id: 1, name: "Sara Chen", handle: "@sarachen", lastMsg: "That quantum paper is wild!", time: "2m", unread: 2 },
  { id: 2, name: "Marcus Johnson", handle: "@marcusj", lastMsg: "Thanks for the Lisbon tips 🇵🇹", time: "1h", unread: 0 },
  { id: 3, name: "Luna Park", handle: "@lunapark", lastMsg: "Haha exactly my point!", time: "3h", unread: 0 },
  { id: 4, name: "Kai Nakamura", handle: "@kainakamura", lastMsg: "Let's collab on that design system", time: "1d", unread: 1 },
  { id: 5, name: "Dev Sharma", handle: "@devsharma", lastMsg: "PR is ready for review", time: "2d", unread: 0 },
];

const chatMessages = [
  { id: 1, sender: "them", text: "Hey Alex! Did you see that quantum error correction paper?", time: "10:32 AM" },
  { id: 2, sender: "me", text: "Yes! I was just reading it. The implications for scalable computing are huge.", time: "10:34 AM" },
  { id: 3, sender: "them", text: "Right?? The approach to topological codes is really novel.", time: "10:35 AM" },
  { id: 4, sender: "them", text: "I think this could change how we think about fault tolerance entirely.", time: "10:35 AM" },
  { id: 5, sender: "me", text: "Agreed. I'm going to write a thread about it tonight. Want to co-author?", time: "10:38 AM" },
  { id: 6, sender: "them", text: "That quantum paper is wild!", time: "10:40 AM" },
];

export default function MessagesPage() {
  const [activeConvo, setActiveConvo] = useState(conversations[0]);
  const [msgInput, setMsgInput] = useState("");
  const [showConvoList, setShowConvoList] = useState(true);

  return (
    <PulseLayout>
      <div className="flex h-[calc(100vh-3.5rem)] lg:h-screen">
        {/* Conversation List */}
        <div className={`${showConvoList ? "flex" : "hidden"} md:flex flex-col w-full md:w-80 border-r border-border bg-card`}>
          <div className="p-4 border-b border-border">
            <h1 className="text-lg font-display font-bold text-foreground mb-3">Messages</h1>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
              <input
                placeholder="Search messages..."
                className="w-full pl-9 pr-3 py-2 rounded-lg bg-secondary text-xs text-foreground placeholder:text-muted-foreground outline-none"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto scrollbar-thin">
            {conversations.map((c) => (
              <button
                key={c.id}
                onClick={() => { setActiveConvo(c); setShowConvoList(false); }}
                className={`w-full flex items-center gap-3 p-4 hover:bg-secondary/50 transition-colors text-left ${
                  activeConvo.id === c.id ? "bg-secondary" : ""
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-semibold text-sm shrink-0">
                  {c.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-foreground truncate">{c.name}</span>
                    <span className="text-xs text-muted-foreground shrink-0 ml-2">{c.time}</span>
                  </div>
                  <p className="text-xs text-muted-foreground truncate">{c.lastMsg}</p>
                </div>
                {c.unread > 0 && (
                  <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shrink-0">
                    {c.unread}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className={`${!showConvoList ? "flex" : "hidden"} md:flex flex-col flex-1 bg-background`}>
          {/* Chat Header */}
          <div className="flex items-center gap-3 p-4 border-b border-border">
            <button
              onClick={() => setShowConvoList(true)}
              className="md:hidden text-sm text-primary font-medium"
            >
              ← Back
            </button>
            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-semibold text-xs">
              {activeConvo.name[0]}
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">{activeConvo.name}</p>
              <p className="text-xs text-muted-foreground">{activeConvo.handle}</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin">
            {chatMessages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm ${
                    msg.sender === "me"
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : "bg-secondary text-secondary-foreground rounded-bl-md"
                  }`}
                >
                  <p>{msg.text}</p>
                  <p className={`text-xs mt-1 ${msg.sender === "me" ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex items-center gap-2">
              <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                <Smile className="w-5 h-5" />
              </button>
              <input
                value={msgInput}
                onChange={(e) => setMsgInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2.5 rounded-full bg-secondary text-sm text-foreground placeholder:text-muted-foreground outline-none"
              />
              <button className="p-2.5 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </PulseLayout>
  );
}
