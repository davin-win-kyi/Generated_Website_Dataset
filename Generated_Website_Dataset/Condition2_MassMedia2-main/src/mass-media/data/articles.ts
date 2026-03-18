import heroUn from "@/assets/hero-un-session.jpg";
import storyEurope from "@/assets/story-europe.jpg";
import storyTech from "@/assets/story-tech.jpg";
import storyCulture from "@/assets/story-culture.jpg";
import storyPolitics from "@/assets/story-politics.jpg";
import storyClimate from "@/assets/story-climate.jpg";
import storyRedsea from "@/assets/story-redsea.jpg";
import columnist1 from "@/assets/columnist-1.jpg";
import columnist2 from "@/assets/columnist-2.jpg";
import columnist3 from "@/assets/columnist-3.jpg";

export interface Article {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  region?: string;
  author: string;
  authorAvatar?: string;
  date: string;
  readTime: string;
  image: string;
  imageCaption?: string;
  summary: string;
  body?: string[];
  pullQuote?: string;
  tags?: string[];
}

export interface Columnist {
  name: string;
  title: string;
  avatar: string;
  bio: string;
}

export const columnists: Columnist[] = [
  {
    name: "Eleanor Vance",
    title: "Senior Foreign Affairs Correspondent",
    avatar: columnist1,
    bio: "Eleanor Vance has covered international diplomacy for over two decades, reporting from conflict zones and summit halls across six continents.",
  },
  {
    name: "Marcus Chen",
    title: "Technology & Society Editor",
    avatar: columnist2,
    bio: "Marcus Chen explores the intersection of emerging technology and human rights, with a focus on AI governance and digital privacy.",
  },
  {
    name: "Robert Ashford",
    title: "Political Commentator",
    avatar: columnist3,
    bio: "Robert Ashford is a veteran political analyst whose columns on democratic institutions have earned multiple press awards.",
  },
];

export const articles: Article[] = [
  {
    id: "un-emergency-red-sea",
    title: "UN Calls Emergency Session as Red Sea Tensions Escalate to Crisis Point",
    subtitle: "Security Council convenes amid fears of broader regional conflict as shipping disruptions threaten global trade",
    category: "World",
    region: "Middle East",
    author: "Eleanor Vance",
    authorAvatar: columnist1,
    date: "March 14, 2026",
    readTime: "8 min read",
    image: heroUn,
    imageCaption: "The United Nations General Assembly hall during a special session on Red Sea security — UN Photo / Manuel Elías",
    summary: "The United Nations Security Council has convened an emergency session as escalating military confrontations in the Red Sea threaten to disrupt global shipping routes and risk a broader regional conflict.",
    body: [
      "The United Nations Security Council convened an emergency session Thursday evening as escalating military confrontations in the Red Sea threatened to spiral into a broader regional conflict. Delegates from 15 member states gathered in the iconic assembly hall, their faces drawn with concern as satellite imagery displayed on overhead screens showed the extent of recent naval engagements.",
      "Secretary-General António Guterres opened the session with a stark warning: 'We are standing at a precipice. The disruption of one of the world's most critical shipping corridors is not merely an economic inconvenience — it is a humanitarian emergency in the making.' His words echoed through the chamber, met with murmurs of agreement from several delegations.",
      "The crisis has been building for months, with armed groups targeting commercial vessels transiting the Bab el-Mandeb strait. Over 120 ships have been attacked or diverted since January, causing insurance premiums for Red Sea transit to surge by 400 percent. Major shipping companies have begun rerouting vessels around the Cape of Good Hope, adding two weeks and significant costs to journeys between Asia and Europe.",
      "Dr. Amira Hassan, a maritime security analyst at the International Crisis Group, told The Meridian that the situation represents 'the most significant threat to freedom of navigation since the Tanker War of the 1980s.' She added that the economic ramifications extend far beyond shipping, potentially affecting energy prices, food supplies, and manufacturing chains across the developing world.",
      "The United States and its allies have proposed a multinational naval coalition to protect commercial shipping, but the initiative has drawn sharp criticism from several nations who view it as an escalatory measure. China and Russia have called for diplomatic engagement with all parties to the conflict, while regional powers have expressed concern about the militarization of waterways.",
      "As the session continued into the early hours of Friday morning, delegates worked on a draft resolution calling for an immediate cessation of attacks on commercial vessels and the establishment of a humanitarian corridor. The outcome of these negotiations could determine whether the Red Sea crisis remains a regional flashpoint or becomes a catalyst for wider confrontation.",
    ],
    pullQuote: "We are standing at a precipice. The disruption of one of the world's most critical shipping corridors is not merely an economic inconvenience — it is a humanitarian emergency in the making.",
    tags: ["United Nations", "Red Sea", "Maritime Security", "Geopolitics", "Global Trade"],
  },
  {
    id: "eu-digital-sovereignty",
    title: "EU Passes Landmark Digital Sovereignty Act, Reshaping Tech Regulation",
    subtitle: "New legislation requires data localization and algorithmic transparency for all platforms operating in Europe",
    category: "World",
    region: "Europe",
    author: "Marcus Chen",
    authorAvatar: columnist2,
    date: "March 13, 2026",
    readTime: "6 min read",
    image: storyEurope,
    imageCaption: "The European Parliament building in Strasbourg — Reuters",
    summary: "The European Parliament has approved sweeping new digital sovereignty legislation that will require technology companies to store European user data on EU soil and provide full transparency into their recommendation algorithms.",
    tags: ["European Union", "Tech Regulation", "Digital Privacy", "Data Sovereignty"],
  },
  {
    id: "ai-consciousness-debate",
    title: "The Consciousness Question: Scientists Clash Over AI Sentience Claims",
    subtitle: "A new wave of research reignites the debate on whether artificial systems can truly experience awareness",
    category: "Technology",
    region: "Americas",
    author: "Marcus Chen",
    authorAvatar: columnist2,
    date: "March 12, 2026",
    readTime: "10 min read",
    image: storyTech,
    imageCaption: "Advances in AI have sparked renewed debate about machine consciousness — Getty Images",
    summary: "Leading neuroscientists and AI researchers are locked in an increasingly heated debate after a team at MIT published findings suggesting certain large language models exhibit patterns consistent with rudimentary self-awareness.",
    tags: ["Artificial Intelligence", "Neuroscience", "Ethics", "Research"],
  },
  {
    id: "global-art-renaissance",
    title: "From Lagos to Lima: A New Global Art Renaissance Takes Shape",
    subtitle: "Emerging artists from the Global South are reshaping the contemporary art world with bold new visions",
    category: "Culture",
    author: "Eleanor Vance",
    authorAvatar: columnist1,
    date: "March 11, 2026",
    readTime: "7 min read",
    image: storyCulture,
    imageCaption: "Street art in São Paulo reflects a growing global movement — AP Photo",
    summary: "A new generation of artists from Africa, Latin America, and Southeast Asia is challenging Western-centric narratives in contemporary art, bringing fresh perspectives on identity, migration, and climate justice to the world stage.",
    tags: ["Art", "Culture", "Global South", "Contemporary Art"],
  },
  {
    id: "democracy-crossroads-2026",
    title: "Democracy at the Crossroads: What 2026's Elections Mean for the World",
    subtitle: "With over 40 nations heading to the polls this year, the future of democratic governance hangs in the balance",
    category: "Politics",
    author: "Robert Ashford",
    authorAvatar: columnist3,
    date: "March 10, 2026",
    readTime: "9 min read",
    image: storyPolitics,
    imageCaption: "A debate stage prepared for the upcoming national elections — AP Photo",
    summary: "This year will see more people vote than in any previous year in history. Political analysts warn that the outcomes could reshape the global balance between democratic and authoritarian governance for a generation.",
    tags: ["Elections", "Democracy", "Global Politics", "Analysis"],
  },
  {
    id: "climate-tipping-points",
    title: "Five Climate Tipping Points We May Have Already Crossed",
    subtitle: "New research suggests several critical Earth systems may have passed the point of no return",
    category: "World",
    region: "Europe",
    author: "Eleanor Vance",
    authorAvatar: columnist1,
    date: "March 9, 2026",
    readTime: "11 min read",
    image: storyClimate,
    imageCaption: "Climate activists march in Berlin demanding urgent policy action — Reuters",
    summary: "A comprehensive study published in Nature this week identifies five critical tipping points in the Earth's climate system that scientists believe may have already been breached, with cascading consequences for ecosystems worldwide.",
    tags: ["Climate Change", "Environment", "Science", "Tipping Points"],
  },
  {
    id: "red-sea-shipping-impact",
    title: "Red Sea Crisis Sends Shockwaves Through Global Supply Chains",
    subtitle: "Manufacturers and retailers brace for delays and price increases as shipping reroutes continue",
    category: "World",
    region: "Middle East",
    author: "Marcus Chen",
    authorAvatar: columnist2,
    date: "March 8, 2026",
    readTime: "5 min read",
    image: storyRedsea,
    imageCaption: "Container ships navigate alternative routes around the Cape of Good Hope — Maritime Tracker",
    summary: "The ongoing disruption to Red Sea shipping routes is causing cascading effects across global supply chains, with manufacturers reporting delays of up to three weeks and cost increases that are expected to be passed on to consumers.",
    tags: ["Supply Chain", "Red Sea", "Global Trade", "Economics"],
  },
  {
    id: "asia-semiconductor-race",
    title: "Asia's Semiconductor Race Intensifies as New Fabs Break Ground",
    subtitle: "Japan, South Korea, and India announce massive investments in chip manufacturing",
    category: "Technology",
    region: "Asia",
    author: "Marcus Chen",
    authorAvatar: columnist2,
    date: "March 7, 2026",
    readTime: "6 min read",
    image: storyTech,
    imageCaption: "A semiconductor fabrication facility under construction — Bloomberg",
    summary: "The global race for semiconductor supremacy is accelerating as Japan, South Korea, and India announce combined investments exceeding $120 billion in new chip fabrication facilities, challenging Taiwan and the United States for dominance.",
    tags: ["Semiconductors", "Asia", "Technology", "Manufacturing"],
  },
  {
    id: "african-union-summit",
    title: "African Union Summit Sets Ambitious 2030 Continental Free Trade Goals",
    subtitle: "Leaders pledge to eliminate remaining trade barriers and create a single digital market",
    category: "World",
    region: "Africa",
    author: "Eleanor Vance",
    authorAvatar: columnist1,
    date: "March 6, 2026",
    readTime: "5 min read",
    image: storyEurope,
    imageCaption: "Delegates at the African Union summit in Addis Ababa — AU Commission",
    summary: "African heads of state have committed to an accelerated timeline for implementing the African Continental Free Trade Area, with new provisions for a unified digital marketplace and harmonized regulatory frameworks.",
    tags: ["African Union", "Free Trade", "Africa", "Economics"],
  },
];

export const opinionArticles: Article[] = [
  {
    id: "opinion-diplomacy-failure",
    title: "The Failure of Quiet Diplomacy in an Age of Spectacle",
    category: "Opinion",
    author: "Eleanor Vance",
    authorAvatar: columnist1,
    date: "March 14, 2026",
    readTime: "7 min read",
    image: heroUn,
    summary: "Diplomacy once thrived in back channels and private meetings. But in a world of live-streamed summits and performative outrage, the art of quiet negotiation is dying — and we are all worse off for it.",
    body: [
      "There was a time when the most consequential diplomatic breakthroughs happened far from cameras and microphones. The Camp David Accords, the back-channel negotiations that preceded the fall of the Berlin Wall, the secret talks that led to the Iran nuclear deal — all were products of quiet, patient diplomacy conducted away from the glare of public scrutiny.",
      "Today, that tradition is in crisis. The rise of social media, 24-hour news cycles, and the performative politics of the digital age have transformed diplomacy from an art of discretion into a theater of spectacle. Leaders now negotiate not with each other, but with their domestic audiences, each statement calibrated for maximum impact on platforms that reward provocation over nuance.",
      "The consequences are devastating. When every diplomatic exchange becomes a public performance, compromise becomes politically toxic. Leaders who might privately acknowledge the legitimacy of an adversary's concerns cannot do so publicly without risking a social media firestorm. The space for creative problem-solving — the very essence of effective diplomacy — shrinks to nothing.",
      "Consider the current Red Sea crisis. Despite shared interests in maintaining freedom of navigation, the involved parties have been unable to reach even a preliminary agreement, in part because each side's negotiating positions have been publicly staked out in press conferences and social media posts. Walking back from maximalist demands becomes impossible when millions of followers are watching.",
      "The solution is not to abandon transparency — democratic accountability demands that citizens understand the commitments made in their name. Rather, we need to rebuild institutional protections for the diplomatic process itself, creating spaces where difficult conversations can happen without the constant pressure of the news cycle.",
      "The United Nations, for all its flaws, was designed to provide exactly this kind of space. It is time we remembered that, and allowed it to fulfill its original purpose.",
    ],
    pullQuote: "When every diplomatic exchange becomes a public performance, compromise becomes politically toxic.",
    tags: ["Diplomacy", "International Relations", "Opinion"],
  },
  {
    id: "opinion-ai-regulation",
    title: "We're Regulating AI Wrong — And It Might Be Too Late to Fix It",
    category: "Opinion",
    author: "Marcus Chen",
    authorAvatar: columnist2,
    date: "March 12, 2026",
    readTime: "8 min read",
    image: storyTech,
    summary: "Current AI regulation focuses on specific applications rather than systemic risks. By the time lawmakers understand the technology they're trying to govern, it will have already outpaced their frameworks.",
    tags: ["AI", "Regulation", "Technology", "Opinion"],
  },
  {
    id: "opinion-democracy-resilience",
    title: "The Case for Democratic Resilience Over Democratic Expansion",
    category: "Opinion",
    author: "Robert Ashford",
    authorAvatar: columnist3,
    date: "March 10, 2026",
    readTime: "9 min read",
    image: storyPolitics,
    summary: "For decades, the West focused on spreading democracy abroad. Perhaps it's time to focus on strengthening the democratic institutions we already have — before they crumble from within.",
    tags: ["Democracy", "Politics", "Institutions", "Opinion"],
  },
  {
    id: "opinion-climate-justice",
    title: "Climate Justice Cannot Wait for Climate Science to Catch Up",
    category: "Opinion",
    author: "Eleanor Vance",
    authorAvatar: columnist1,
    date: "March 8, 2026",
    readTime: "6 min read",
    image: storyClimate,
    summary: "While scientists debate precise tipping points and emission targets, communities in the Global South are already drowning. The moral imperative for action does not require another peer-reviewed study.",
    tags: ["Climate", "Justice", "Global South", "Opinion"],
  },
  {
    id: "opinion-cultural-appropriation",
    title: "Beyond Appropriation: Toward a New Ethics of Cultural Exchange",
    category: "Opinion",
    author: "Marcus Chen",
    authorAvatar: columnist2,
    date: "March 6, 2026",
    readTime: "7 min read",
    image: storyCulture,
    summary: "The appropriation debate has reached a dead end. What we need is not less cultural exchange, but a more honest and equitable framework for how cultures learn from and inspire one another.",
    tags: ["Culture", "Ethics", "Globalization", "Opinion"],
  },
];

export const breakingNews = [
  "BREAKING: UN Emergency Session Called Over Red Sea Tensions",
  "EU Digital Sovereignty Act Passes with Historic Majority",
  "MIT Study Reignites AI Consciousness Debate",
  "African Union Sets 2030 Free Trade Deadline",
  "Five Climate Tipping Points May Have Been Crossed, Study Warns",
];

export const mostRead = [
  { id: "un-emergency-red-sea", title: "UN Calls Emergency Session as Red Sea Tensions Escalate", rank: 1 },
  { id: "ai-consciousness-debate", title: "Scientists Clash Over AI Sentience Claims", rank: 2 },
  { id: "climate-tipping-points", title: "Five Climate Tipping Points We May Have Already Crossed", rank: 3 },
  { id: "democracy-crossroads-2026", title: "Democracy at the Crossroads: What 2026 Means", rank: 4 },
  { id: "eu-digital-sovereignty", title: "EU Passes Landmark Digital Sovereignty Act", rank: 5 },
];
