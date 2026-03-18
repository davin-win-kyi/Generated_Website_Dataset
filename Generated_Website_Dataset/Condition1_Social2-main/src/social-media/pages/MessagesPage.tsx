import { useState } from "react";
import { Send, Smile, Search } from "lucide-react";

interface Conversation {
  id: string;
  name: string;
  initial: string;
  lastMessage: string;
  time: string;
  unread: number;
  online: boolean;
}

interface Message {
  id: string;
  sender: "me" | "them";
  text: string;
  time: string;
}

const conversations: Conversation[] = [
  { id: "1", name: "Maya Chen", initial: "M", lastMessage: "That sounds amazing! Let me know when...", time: "2m", unread: 2, online: true },
  { id: "2", name: "Jordan Lee", initial: "J", lastMessage: "Haha yeah, the code review was brutal 😅", time: "15m", unread: 0, online: true },
  { id: "3", name: "Sam Patel", initial: "S", lastMessage: "See you at the match!", time: "1h", unread: 1, online: false },
  { id: "4", name: "Luna Torres", initial: "L", lastMessage: "The photos turned out so well!", time: "3h", unread: 0, online: false },
  { id: "5", name: "Dev Sharma", initial: "D", lastMessage: "Can you review my PR when you get a chance?", time: "5h", unread: 0, online: true },
  { id: "6", name: "Aria Kim", initial: "A", lastMessage: "Love the new design direction!", time: "1d", unread: 0, online: false },
];

const chatMessages: Record<string, Message[]> = {
  "1": [
    { id: "a", sender: "them", text: "Hey! Did you see the keynote lineup for ClimateWeek?", time: "10:30 AM" },
    { id: "b", sender: "me", text: "Yes! I'm especially excited about the ocean conservation panel.", time: "10:32 AM" },
    { id: "c", sender: "them", text: "Same! I'm actually presenting my research there on Thursday.", time: "10:33 AM" },
    { id: "d", sender: "me", text: "No way, that's incredible! I'll definitely be in the audience.", time: "10:35 AM" },
    { id: "e", sender: "them", text: "That sounds amazing! Let me know when you arrive and we can grab coffee before.", time: "10:36 AM" },
  ],
  "2": [
    { id: "a", sender: "me", text: "How did the code review go?", time: "9:00 AM" },
    { id: "b", sender: "them", text: "Haha yeah, the code review was brutal 😅", time: "9:15 AM" },
  ],
};

export default function MessagesPage() {
  const [activeChat, setActiveChat] = useState<string>("1");
  const [messageInput, setMessageInput] = useState("");
  const [showChat, setShowChat] = useState(false);

  const activeConvo = conversations.find((c) => c.id === activeChat);
  const messages = chatMessages[activeChat] || [];

  const handleSelectChat = (id: string) => {
    setActiveChat(id);
    setShowChat(true);
  };

  return (
    <div className="flex h-screen max-h-screen">
      {/* Conversation list */}
      <div
        className={`${showChat ? "hidden sm:flex" : "flex"} flex-col w-full sm:w-80 lg:w-96 border-r border-border shrink-0`}
      >
        <header className="px-4 py-4 border-b border-border">
          <h1 className="font-heading text-xl font-bold text-foreground mb-3">Messages</h1>
          <div className="relative">
            <label htmlFor="msg-search" className="sr-only">Search messages</label>
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
            <input
              id="msg-search"
              type="search"
              placeholder="Search conversations"
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-secondary text-foreground text-sm placeholder:text-muted-foreground border-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            />
          </div>
        </header>

        <ul className="flex-1 overflow-y-auto divide-y divide-border" aria-label="Conversations">
          {conversations.map((convo) => (
            <li key={convo.id}>
              <button
                onClick={() => handleSelectChat(convo.id)}
                className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
                  activeChat === convo.id ? "bg-primary/5" : "hover:bg-pulse-hover"
                }`}
                aria-current={activeChat === convo.id ? "true" : undefined}
              >
                <div className="relative shrink-0">
                  <div className="w-11 h-11 rounded-full pulse-gradient flex items-center justify-center text-primary-foreground font-heading font-bold text-sm">
                    {convo.initial}
                  </div>
                  {convo.online && (
                    <span
                      className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-pulse-online border-2 border-card"
                      aria-label="Online"
                    />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-foreground truncate">{convo.name}</span>
                    <span className="text-xs text-muted-foreground shrink-0">{convo.time}</span>
                  </div>
                  <p className="text-xs text-muted-foreground truncate mt-0.5">{convo.lastMessage}</p>
                </div>
                {convo.unread > 0 && (
                  <span className="shrink-0 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center" aria-label={`${convo.unread} unread messages`}>
                    {convo.unread}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Chat panel */}
      <div className={`${showChat ? "flex" : "hidden sm:flex"} flex-col flex-1 min-w-0`}>
        {activeConvo ? (
          <>
            {/* Chat header */}
            <header className="px-4 py-3 border-b border-border flex items-center gap-3">
              <button
                onClick={() => setShowChat(false)}
                className="sm:hidden text-sm text-primary font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                aria-label="Back to conversations"
              >
                ← Back
              </button>
              <div className="relative">
                <div className="w-9 h-9 rounded-full pulse-gradient flex items-center justify-center text-primary-foreground font-heading font-bold text-xs">
                  {activeConvo.initial}
                </div>
                {activeConvo.online && (
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-pulse-online border-2 border-card" aria-label="Online" />
                )}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{activeConvo.name}</p>
                <p className="text-xs text-muted-foreground">
                  {activeConvo.online ? "Active now" : `Last seen ${activeConvo.time} ago`}
                </p>
              </div>
            </header>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3" role="log" aria-label="Chat messages">
              {messages.map((msg) => (
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
                    <time className={`block text-[10px] mt-1 ${msg.sender === "me" ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                      {msg.time}
                    </time>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="border-t border-border px-4 py-3">
              <form
                className="flex items-center gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  setMessageInput("");
                }}
              >
                <button
                  type="button"
                  className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  aria-label="Add emoji"
                >
                  <Smile className="h-5 w-5" aria-hidden="true" />
                </button>
                <label htmlFor="message-input" className="sr-only">Type a message</label>
                <input
                  id="message-input"
                  type="text"
                  placeholder="Type a message..."
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-secondary text-foreground text-sm placeholder:text-muted-foreground border-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                />
                <button
                  type="submit"
                  disabled={!messageInput.trim()}
                  className="p-2.5 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-muted-foreground text-sm">
            Select a conversation to start messaging
          </div>
        )}
      </div>
    </div>
  );
}
