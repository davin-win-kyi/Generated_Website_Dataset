import { Link } from "react-router-dom";
import { Download, ArrowRight } from "lucide-react";
import GovLayout from "@/components/government/GovLayout";
import cityHall from "@/assets/city-hall.jpg";
import mayorImg from "@/assets/mayor-portrait.jpg";
import council1 from "@/assets/council-1.jpg";
import council2 from "@/assets/council-2.jpg";
import council3 from "@/assets/council-3.jpg";
import council4 from "@/assets/council-4.jpg";

const leaders = [
  { name: "Robert J. Harrison", title: "Mayor", img: mayorImg, since: "2022" },
  { name: "Patricia Woodward", title: "Council Member, Ward 1", img: council1, since: "2020" },
  { name: "Marcus Thompson", title: "Council Member, Ward 2", img: council2, since: "2018" },
  { name: "Sofia Ramirez", title: "Council Member, Ward 3", img: council3, since: "2024" },
  { name: "David Chen", title: "Council Member, Ward 4", img: council4, since: "2019" },
];

const AboutPage = () => {
  return (
    <GovLayout>
      <div className="bg-primary">
        <div className="gov-container py-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
            About Lakewood
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            Learn about our city's rich history, dedicated leadership, and vision for the future.
          </p>
        </div>
      </div>

      <div className="bg-muted border-b border-border">
        <div className="gov-container py-3 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-foreground font-medium">About</span>
        </div>
      </div>

      {/* Mission */}
      <section className="gov-section">
        <div className="gov-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="gov-badge bg-secondary/15 text-secondary font-semibold text-xs mb-4 inline-block">Our Mission</span>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 leading-snug">
                Building a vibrant, safe, and sustainable community for all residents.
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The City of Lakewood is committed to delivering excellent public services, fostering economic growth, and preserving the quality of life that makes our community a wonderful place to live, work, and play. We serve approximately 160,000 residents across 44 square miles of diverse neighborhoods.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 1969 through a citizen-led incorporation effort, Lakewood has grown from a collection of unincorporated communities into one of Colorado's largest and most dynamic cities. Our council-manager form of government ensures professional, responsive administration guided by elected representatives.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img src={cityHall} alt="Lakewood City Hall" className="w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="gov-section bg-gov-light">
        <div className="gov-container">
          <h3 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">Our History</h3>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { year: "1889", text: "First settlers establish homesteads in the area west of Denver, attracted by fertile land and mountain views." },
              { year: "1969", text: "Citizens vote to incorporate as the City of Lakewood, unifying dozens of small communities under one municipal government." },
              { year: "1985", text: "Lakewood becomes Colorado's fourth-largest city, investing in modern infrastructure, parks, and public services." },
              { year: "2003", text: "The Belmar redevelopment transforms the former Villa Italia mall site into a vibrant mixed-use downtown district." },
              { year: "2026", text: "Lakewood continues to grow as a leader in sustainability, innovation, and community-centered governance." },
            ].map((item) => (
              <div key={item.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">
                    {item.year}
                  </div>
                  <div className="w-0.5 flex-1 bg-border mt-2" />
                </div>
                <p className="text-muted-foreground pb-6 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="gov-section">
        <div className="gov-container">
          <h3 className="font-heading text-2xl font-bold text-foreground mb-2 text-center">City Leadership</h3>
          <p className="text-muted-foreground text-center mb-10">Meet the elected officials serving the City of Lakewood</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {leaders.map((leader) => (
              <div key={leader.name} className="gov-card text-center">
                <img
                  src={leader.img}
                  alt={leader.name}
                  className="w-28 h-28 rounded-full mx-auto mb-4 object-cover shadow-md"
                />
                <h4 className="font-heading text-sm font-bold text-foreground">{leader.name}</h4>
                <p className="text-xs text-secondary font-semibold mt-1">{leader.title}</p>
                <p className="text-xs text-muted-foreground mt-1">Since {leader.since}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Report */}
      <section className="gov-section bg-gov-cream">
        <div className="gov-container text-center">
          <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Annual Report</h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Review the City's achievements, financial performance, and goals in our latest annual report.
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:brightness-110 transition-all">
            <Download className="h-4 w-4" />
            Download 2025 Annual Report (PDF)
          </button>
        </div>
      </section>
    </GovLayout>
  );
};

export default AboutPage;
