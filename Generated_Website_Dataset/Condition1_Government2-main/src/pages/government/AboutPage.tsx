import Layout from "@/components/government/Layout";
import { Download, BookOpen } from "lucide-react";
import mayorImg from "@/assets/mayor.jpg";
import council1 from "@/assets/council1.jpg";
import council2 from "@/assets/council2.jpg";
import council3 from "@/assets/council3.jpg";
import council4 from "@/assets/council4.jpg";

const leaders = [
  { name: "Patricia M. Henderson", title: "Mayor", img: mayorImg, ward: "" },
  { name: "Robert J. Calloway", title: "Council Member", img: council1, ward: "Ward 1" },
  { name: "Maria L. Gutierrez", title: "Council Member", img: council2, ward: "Ward 2" },
  { name: "William T. Ashford", title: "Council Member", img: council3, ward: "Ward 3" },
  { name: "Denise K. Okafor", title: "Council Member", img: council4, ward: "Ward 4" },
];

const AboutPage = () => {
  return (
    <Layout>
      <section className="bg-primary py-12" aria-labelledby="about-heading">
        <div className="container">
          <h1 id="about-heading" className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground">
            About Lakewood
          </h1>
          <p className="text-primary-foreground/80 mt-2 max-w-2xl">
            Learn about our city's history, leadership, and commitment to our residents.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-12 md:py-16" aria-labelledby="mission-heading">
        <div className="container max-w-4xl">
          <h2 id="mission-heading" className="text-2xl font-serif font-bold text-foreground mb-4 flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-accent" aria-hidden="true" />
            Our Mission
          </h2>
          <blockquote className="border-l-4 border-accent pl-6 text-lg text-muted-foreground italic leading-relaxed">
            "To provide outstanding public services that enhance the quality of life for all Lakewood residents through transparent governance, fiscal responsibility, and community engagement."
          </blockquote>
        </div>
      </section>

      {/* History */}
      <section className="py-12 bg-muted" aria-labelledby="history-heading">
        <div className="container max-w-4xl">
          <h2 id="history-heading" className="text-2xl font-serif font-bold text-foreground mb-6">City History</h2>
          <div className="prose prose-slate max-w-none space-y-4 text-muted-foreground">
            <p>
              Founded in 1969, the City of Lakewood has grown from a small suburban community into one of
              Colorado's most vibrant and diverse cities. With a population of approximately 160,000
              residents, Lakewood spans 44 square miles at the base of the Rocky Mountain foothills.
            </p>
            <p>
              The city is home to more than 100 parks, the renowned Belmar district, and a thriving
              arts and culture scene. Lakewood has consistently been recognized as one of the best
              places to live in the United States, known for its excellent schools, extensive trail
              system, and strong sense of community.
            </p>
            <p>
              Over the decades, Lakewood has balanced thoughtful growth with preservation of its natural
              beauty, investing in sustainable infrastructure, public transit connections, and programs
              that serve residents of all ages and backgrounds.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-12 md:py-16" aria-labelledby="leadership-heading">
        <div className="container">
          <h2 id="leadership-heading" className="text-2xl font-serif font-bold text-foreground mb-8 text-center">
            City Leadership
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {leaders.map((leader) => (
              <div key={leader.name} className="bg-card border rounded-lg overflow-hidden text-center hover:shadow-md transition-shadow">
                <img
                  src={leader.img}
                  alt={`Portrait of ${leader.name}, ${leader.title}${leader.ward ? `, ${leader.ward}` : ""}`}
                  className="w-full aspect-[3/4] object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-foreground text-sm">{leader.name}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{leader.title}</p>
                  {leader.ward && <p className="text-xs text-accent font-medium mt-0.5">{leader.ward}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Report */}
      <section className="py-12 bg-gov-teal-light" aria-labelledby="report-heading">
        <div className="container text-center">
          <h2 id="report-heading" className="text-2xl font-serif font-bold text-foreground mb-3">Annual Report</h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Review our fiscal year 2024 annual report detailing city accomplishments, financial performance, and future plans.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity focus-visible:outline-ring"
          >
            <Download className="h-5 w-5" aria-hidden="true" />
            Download 2024 Annual Report (PDF)
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
