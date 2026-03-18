import { Download, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import GovLayout from "@/components/government/GovLayout";
import Breadcrumbs from "@/components/government/Breadcrumbs";

const leadership = [
  { name: "Patricia Chen", title: "Mayor", description: "Serving since 2020, Mayor Chen leads the city's strategic vision for sustainable growth and community development." },
  { name: "Robert Martinez", title: "City Manager", description: "Overseeing daily municipal operations and implementing council directives for efficient city management." },
  { name: "Dr. Angela Thompson", title: "Council Member, District 1", description: "Championing education initiatives and neighborhood revitalization programs across District 1." },
  { name: "James O'Brien", title: "Council Member, District 2", description: "Focused on public safety improvements and transportation infrastructure for District 2 residents." },
  { name: "Maria Santos", title: "Council Member, District 3", description: "Advocating for parks expansion and environmental sustainability in District 3." },
  { name: "David Kim", title: "Council Member, District 4", description: "Working on affordable housing and small business support for District 4 communities." },
];

const AboutPage = () => {
  return (
    <GovLayout title="About">
      <Breadcrumbs items={[{ label: "About" }]} />

      <div className="gov-container py-10">
        <h1 className="mb-2 text-3xl font-bold text-foreground">About Lakewood</h1>
        <p className="mb-10 max-w-3xl text-muted-foreground leading-relaxed">
          The City of Lakewood is a thriving municipality serving approximately 160,000 residents. Learn about our history, leadership, and commitment to excellence.
        </p>

        {/* Mission */}
        <section aria-labelledby="mission-heading" className="mb-12 rounded-lg bg-gov-hero p-8 text-gov-hero-foreground">
          <h2 id="mission-heading" className="mb-3 text-2xl font-bold">Our Mission</h2>
          <p className="max-w-3xl text-lg leading-relaxed text-gov-hero-foreground/90">
            To provide exceptional public services that enhance quality of life, foster economic vitality, and promote sustainable growth for all Lakewood residents. We are committed to transparency, innovation, and community engagement in everything we do.
          </p>
        </section>

        {/* History */}
        <section aria-labelledby="history-heading" className="mb-12">
          <h2 id="history-heading" className="mb-4 text-2xl font-bold text-foreground">City History</h2>
          <div className="max-w-3xl space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Founded in 1969, the City of Lakewood was incorporated as a home-rule municipality with a council-manager form of government. What began as a post-war suburban community has grown into one of Colorado's most dynamic cities.
            </p>
            <p>
              Over the decades, Lakewood has transformed from a primarily residential suburb into a diverse community with thriving commercial districts, expansive parks, and world-class recreational facilities. The city's commitment to environmental stewardship led to the preservation of over 7,000 acres of open space.
            </p>
            <p>
              Today, Lakewood is recognized for its innovative approach to municipal governance, award-winning parks system, and dedication to creating an inclusive community where all residents can thrive.
            </p>
          </div>
        </section>

        {/* Leadership */}
        <section aria-labelledby="leadership-heading" className="mb-12">
          <h2 id="leadership-heading" className="mb-6 text-2xl font-bold text-foreground">City Leadership</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((person) => (
              <article key={person.name} className="rounded-lg border border-border bg-card p-5 shadow-sm">
                <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10" aria-hidden="true">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{person.name}</h3>
                <p className="text-sm font-medium text-primary">{person.title}</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{person.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Annual Report */}
        <section aria-labelledby="report-heading" className="rounded-lg border border-border bg-gov-surface p-8">
          <h2 id="report-heading" className="mb-2 text-xl font-bold text-foreground">Annual Report</h2>
          <p className="mb-4 text-muted-foreground">
            Review the City of Lakewood's annual report for a comprehensive overview of our accomplishments, finances, and goals.
          </p>
          <Button variant="outline" asChild>
            <a href="#" aria-label="Download 2023 Annual Report (PDF)">
              <Download className="mr-2 h-4 w-4" aria-hidden="true" />
              Download 2023 Annual Report (PDF)
            </a>
          </Button>
        </section>
      </div>
    </GovLayout>
  );
};

export default AboutPage;
