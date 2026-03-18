import { Link } from "react-router-dom";
import { Droplets, FileText, Shield, Bus, TreePine, Heart, ArrowRight } from "lucide-react";
import GovLayout from "@/components/government/GovLayout";

const categories = [
  {
    icon: Droplets,
    title: "Utilities & Billing",
    description: "Water, sewer, trash collection services and online bill payment options for Lakewood residents.",
    services: ["Water Service", "Sewer & Drainage", "Trash & Recycling", "Utility Bill Payment"],
    link: "/services/pay-bill",
  },
  {
    icon: FileText,
    title: "Permits & Licenses",
    description: "Apply for building permits, business licenses, and special event permits online.",
    services: ["Building Permits", "Business Licenses", "Special Event Permits", "Zoning Applications"],
    link: "/services/permits",
  },
  {
    icon: Shield,
    title: "Public Safety",
    description: "Police, fire, and emergency services information for the City of Lakewood.",
    services: ["Police Department", "Fire Department", "Emergency Preparedness", "Crime Prevention"],
    link: "/services",
  },
  {
    icon: Bus,
    title: "Transportation",
    description: "Roads, public transit, traffic management, and transportation improvement projects.",
    services: ["Road Maintenance", "Public Transit", "Traffic Signals", "Bike Lanes & Paths"],
    link: "/services",
  },
  {
    icon: TreePine,
    title: "Parks & Recreation",
    description: "City parks, recreation centers, sports programs, and community activities.",
    services: ["Park Reservations", "Recreation Programs", "Sports Leagues", "Community Gardens"],
    link: "/services",
  },
  {
    icon: Heart,
    title: "Social Services",
    description: "Community support programs, housing assistance, senior services, and youth programs.",
    services: ["Housing Assistance", "Senior Services", "Youth Programs", "Food Assistance"],
    link: "/services",
  },
];

const ServicesPage = () => {
  return (
    <GovLayout>
      {/* Page Header */}
      <div className="bg-primary">
        <div className="gov-container py-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
            City Services
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            Browse all services offered by the City of Lakewood. Find what you need by category or use the search feature.
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-muted border-b border-border">
        <div className="gov-container py-3 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-foreground font-medium">Services</span>
        </div>
      </div>

      {/* Categories Grid */}
      <section className="gov-section">
        <div className="gov-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <div key={cat.title} className="gov-card flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                    <cat.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground">{cat.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{cat.description}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {cat.services.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
                <Link
                  to={cat.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:underline mt-auto"
                >
                  Explore {cat.title} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </GovLayout>
  );
};

export default ServicesPage;
