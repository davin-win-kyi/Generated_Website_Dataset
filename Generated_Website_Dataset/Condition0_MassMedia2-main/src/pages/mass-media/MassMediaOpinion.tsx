import MeridianLayout from "@/components/mass-media/MeridianLayout";
import { Link } from "react-router-dom";
import columnist1 from "@/assets/mass-media/columnist-1.jpg";
import columnist2 from "@/assets/mass-media/columnist-2.jpg";
import columnist3 from "@/assets/mass-media/columnist-3.jpg";
import heroMain from "@/assets/mass-media/hero-main.jpg";

const columnists = [
  { name: "Thomas Hartwell", role: "Foreign Affairs Columnist", image: columnist1, pieces: [
    { title: "The Case for Strategic Patience in the Pacific", time: "2h ago" },
    { title: "Why Europe's Defense Spending Debate Misses the Point", time: "2 days ago" },
    { title: "Rethinking Deterrence in the Age of Hypersonics", time: "5 days ago" },
  ]},
  { name: "Maria Santos", role: "Technology & Society", image: columnist2, pieces: [
    { title: "AI Won't Replace Journalists — But It Will Change Journalism Forever", time: "4h ago" },
    { title: "The Digital Divide Is a Democracy Divide", time: "3 days ago" },
    { title: "Silicon Valley's Accountability Problem", time: "1 week ago" },
  ]},
  { name: "Eleanor Ashworth", role: "Economics & Policy", image: columnist3, pieces: [
    { title: "Universal Basic Income: The Idea Whose Time Has Come", time: "6h ago" },
    { title: "Why Central Banks Are Running Out of Tools", time: "4 days ago" },
    { title: "The Hidden Cost of Free Trade", time: "1 week ago" },
  ]},
];

const letters = [
  { author: "Dr. Margaret Liu, Singapore", text: "Thomas Hartwell's analysis of Pacific alliances overlooks the crucial role of ASEAN in mediating great power competition. The region's diplomatic tradition of consensus-building deserves more attention." },
  { author: "James Okoro, Lagos", text: "Maria Santos correctly identifies the digital divide as a threat to democracy, but the solutions she proposes remain too Western-centric. African nations need infrastructure investment, not regulatory frameworks designed for Silicon Valley." },
  { author: "Prof. Anna Bergström, Stockholm", text: "Eleanor Ashworth's piece on UBI fails to address the fundamental question: who pays? Scandinavian welfare states offer a model, but the political economy of implementation in larger, more diverse societies remains an open question." },
];

const MassMediaOpinion = () => {
  return (
    <MeridianLayout>
      <div className="meridian-container py-10">
        <div className="meridian-rule-accent mb-6" />
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-2">Opinion</h1>
        <p className="font-sans text-base text-muted-foreground mb-10 max-w-2xl">
          Commentary, analysis, and debate from The Meridian's columnists and guest contributors.
        </p>

        {/* Featured opinion */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 mb-14 bg-card p-0 lg:p-0">
          <div className="overflow-hidden">
            <img src={heroMain} alt="Featured opinion" className="w-full h-full min-h-[300px] object-cover" />
          </div>
          <div className="flex flex-col justify-center py-6 lg:py-10 lg:pr-10">
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-meridian-accent mb-3">
              Featured Essay
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-4">
              The Case for Strategic Patience in the Pacific
            </h2>
            <p className="font-sans text-base text-muted-foreground mb-6 leading-relaxed">
              As tensions rise across the Indo-Pacific, the temptation to escalate is strong. But history teaches us that the most durable solutions emerge from restraint, not reaction.
            </p>
            <div className="flex items-center gap-4">
              <img src={columnist1} alt="Thomas Hartwell" className="w-14 h-14 rounded-full object-cover" />
              <div>
                <div className="font-sans text-sm font-bold">Thomas Hartwell</div>
                <div className="font-sans text-xs text-muted-foreground">Foreign Affairs Columnist · 2h ago</div>
              </div>
            </div>
          </div>
        </div>

        {/* Columnists grid */}
        <div className="meridian-rule-heavy mb-6" />
        <h2 className="font-serif text-2xl font-bold mb-8">Our Columnists</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">
          {columnists.map((col) => (
            <div key={col.name}>
              <div className="flex items-center gap-4 mb-5">
                <img src={col.image} alt={col.name} className="w-16 h-16 rounded-full object-cover" />
                <div>
                  <div className="font-sans text-sm font-bold">{col.name}</div>
                  <div className="font-sans text-xs text-muted-foreground">{col.role}</div>
                </div>
              </div>
              <div className="space-y-0">
                {col.pieces.map((piece, i) => (
                  <Link
                    key={i}
                    to="/mass-media/article"
                    className="block py-3 border-b border-meridian-rule last:border-0 group"
                  >
                    <h4 className="font-serif text-sm font-bold leading-snug group-hover:text-meridian-accent transition-colors">
                      {piece.title}
                    </h4>
                    <span className="font-sans text-[10px] text-muted-foreground uppercase tracking-wider mt-1 block">
                      {piece.time}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Letters to the Editor */}
        <div className="meridian-rule-accent mb-6" />
        <h2 className="font-serif text-2xl font-bold mb-6">Letters to the Editor</h2>
        <div className="space-y-6 max-w-3xl">
          {letters.map((letter, i) => (
            <div key={i} className="border-b border-meridian-rule pb-6 last:border-0">
              <p className="font-sans text-sm leading-relaxed text-foreground/80 italic mb-2">
                "{letter.text}"
              </p>
              <span className="font-sans text-xs font-semibold text-muted-foreground">
                — {letter.author}
              </span>
            </div>
          ))}
        </div>
      </div>
    </MeridianLayout>
  );
};

export default MassMediaOpinion;
