import { useState } from "react";
import { SocialLayout } from "@/components/social-media/SocialLayout";
import { Send, Smile, ArrowLeft } from "lucide-react";

interface Conversation {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: number;
}

interface Message {
  id: string;
  sender: "me" | "them";
  text: string;
  time: string;
}

const conversations: Conversation[] = [
  { id: "1", name: "Maya Rodriguez", avatar: "https://i.pravatar.cc/40?img=5", lastMessage: "That sounds amazing! Let me check my schedule.", time: "2m", unread: 2 },
  { id: "2", name: "Jordan Park", avatar: "https://i.pravatar.cc/40?img=12", lastMessage: "Did you see the new design system?", time: "1h", unread: 0 },
  { id: "3", name: "Lena Kim", avatar: "https://i.pravatar.cc/40?img=20", lastMessage: "Thanks for the recommendation!", time: "3h", unread: 1 },
  { id: "4", name: "Marcus Webb", avatar: "https://i.pravatar.cc/40?img=33", lastMessage: "We should collab on that project.", time: "1d", unread: 0 },
  { id: "5", name: "Priya Sharma", avatar: "https://i.pravatar.cc/40?img=25", lastMessage: "Happy to help anytime 😊", time: "2d", unread: 0 },
];

const chatMessages: Message[] = [
  { id: "1", sender: "them", text: "Hey Alex! I loved your latest post about quantum computing.", time: "10:15 AM" },
  { id: "2", sender: "me", text: "Thanks Maya! It's such a fascinating field. Have you read the new paper from MIT?", time: "10:18 AM" },
  { id: "3", sender: "them", text: "Not yet! Can you send me the link?", time: "10:20 AM" },
  { id: "4", sender: "me", text: "Sure, I'll DM it to you. Also, are you going to the tech conference next month?", time: "10:22 AM" },
  { id: "5", sender: "them", text: "That sounds amazing! Let me check my schedule.", time: "10:25 AM" },
];

export default function MessagesPage() {
  const [selectedConvo, setSelectedConvo] = useState<string>("1");
  const [messageInput, setMessageInput] = useState("");
  const [showChat, setShowChat] = useState(false);

  const activeConvo = conversations.find((c) => c.id === selectedConvo);

  const handleSelectConvo = (id: string) => {
    setSelectedConvo(id);
    setShowChat(true);
  };

  return (
    <SocialLayout>
      <div className="flex h-[calc(100vh-5rem)] lg:h-screen">
        {/* Conversation list */}
        <section
          className={`w-full sm:w-80 border-r border-border flex flex-col ${showChat ? "hidden sm:flex" : "flex"}`}
          aria-label="Conversation list"
        >
          <div className="p-4 border-b border-border">
            <h1 className="font-heading text-2xl font-bold">Messages</h1>
          </div>
          <ul className="flex-1 overflow-y-auto" role="list">
            {conversations.map((c) => (
              <li key={c.id}>
                <button
                  onClick={() => handleSelectConvo(c.id)}
                  className={`w-full flex items-center gap-3 p-4 text-left transition-colors ${
                    selectedConvo === c.id ? "bg-primary/5" : "hover:bg-secondary/50"
                  }`}
                  aria-label={`Conversation with ${c.name}${c.unread ? `, ${c.unread} unread messages` : ""}`}
                >
                  <img src={c.avatar} alt={`${c.name}'s avatar`} className="h-10 w-10 rounded-full object-cover shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold truncate">{c.name}</p>
                      <span className="text-xs text-muted-foreground shrink-0">{c.time}</span>
                    </div>
                    <p className="text-xs text-muted-foreground truncate">{c.lastMessage}</p>
                  </div>
                  {c.unread > 0 && (
                    <span className="h-5 w-5 rounded-full pulse-gradient flex items-center justify-center text-[10px] font-bold text-primary-foreground shrink-0" aria-hidden="true">
                      {c.unread}
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </section>

        {/* Chat panel */}
        <section
          className={`flex-1 flex flex-col ${showChat ? "flex" : "hidden sm:flex"}`}
          aria-label={`Chat with ${activeConvo?.name || "no one selected"}`}
        >
          {activeConvo ? (
            <>
              {/* Chat header */}
              <div className="flex items-center gap-3 p-4 border-b border-border">
                <button onClick={() => setShowChat(false)} className="sm:hidden p-1 text-muted-foreground hover:text-foreground" aria-label="Back to conversations">
                  <ArrowLeft className="h-5 w-5" aria-hidden="true" />
                </button>
                <img src={activeConvo.avatar} alt={`${activeConvo.name}'s avatar`} className="h-9 w-9 rounded-full object-cover" />
                <div>
                  <h2 className="font-heading font-semibold text-sm">{activeConvo.name}</h2>
                  <p className="text-xs text-muted-foreground">Online</p>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {chatMessages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm ${
                      msg.sender === "me"
                        ? "pulse-gradient text-primary-foreground rounded-br-md"
                        : "bg-secondary rounded-bl-md"
                    }`}>
                      <p>{msg.text}</p>
                      <time className={`block text-[10px] mt-1 ${msg.sender === "me" ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{msg.time}</time>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <button className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-secondary" aria-label="Insert emoji">
                    <Smile className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <label htmlFor="message-input" className="sr-only">Type a message</label>
                  <input
                    id="message-input"
                    type="text"
                    placeholder="Type a message..."
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    className="flex-1 bg-secondary rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground"
                  />
                  <button
                    disabled={!messageInput.trim()}
                    className="p-2.5 rounded-xl pulse-gradient text-primary-foreground disabled:opacity-40 transition-opacity hover:opacity-90"
                    aria-label="Send message"
                  >
                    <Send className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-muted-foreground">
              Select a conversation to start chatting
            </div>
          )}
        </section>
      </div>
    </SocialLayout>
  );
}
