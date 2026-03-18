import { Link } from "react-router-dom";
import { Droplets, FileText, Shield, Bus, TreePine, Heart, ArrowRight } from "lucide-react";
import GovLayout from "@/components/government/GovLayout";
import Breadcrumbs from "@/components/government/Breadcrumbs";

const categories = [
  {
    icon: Droplets,
    title: "Utilities & Billing",
    description: "Water, sewer, trash, and recycling services. Pay bills and manage your account.",
    path: "/services/pay-bill",
    services: ["Pay Utility Bill", "Start/Stop Service", "Water Quality Reports", "Recycling Schedule"],
  },
  {
    icon: FileText,
    title: "Permits & Licenses",
    description: "Apply for building permits, business licenses, and special event permits.",
    path: "/services/permits",
    services: ["Building Permits", "Business Licenses", "Special Event Permits", "Zoning Requests"],
  },
  {
    icon: Shield,
    title: "Public Safety",
    description: "Police, fire, and emergency services for the Lakewood community.",
    path: "/services",
    services: ["Report a Crime", "Fire Safety Inspections", "Emergency Preparedness", "Neighborhood Watch"],
  },
  {
    icon: Bus,
    title: "Transportation",
    description: "Roads, public transit, traffic management, and parking services.",
    path: "/services",
    services: ["Road Conditions", "Bus Schedules", "Parking Permits", "Traffic Signals"],
  },
  {
    icon: TreePine,
    title: "Parks & Recreation",
    description: "Parks, trails, recreation centers, and community programs.",
    path: "/services",
    services: ["Park Reservations", "Recreation Programs", "Trail Maps", "Community Gardens"],
  },
  {
    icon: Heart,
    title: "Social Services",
    description: "Housing assistance, senior services, youth programs, and community support.",
    path: "/services",
    services: ["Housing Assistance", "Senior Programs", "Youth Services", "Food Assistance"],
  },
];

const ServicesPage = () => {
  return (
    <GovLayout title="Services">
      <Breadcrumbs items={[{ label: "Services" }]} />

      <section className="py-10" aria-labelledby="services-heading">
        <div className="gov-container">
          <h1 id="services-heading" className="mb-2 text-3xl font-bold text-foreground">
            City Services
          </h1>
          <p className="mb-10 max-w-2xl text-muted-foreground">
            Browse our full range of services organized by category. Click any category to learn more and access online tools.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <article key={cat.title} className="flex flex-col rounded-lg border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
                <div className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2.5" aria-hidden="true">
                      <cat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-xl font-bold text-foreground">{cat.title}</h2>
                  </div>
                  <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{cat.description}</p>
                  <ul className="mb-4 space-y-1.5" aria-label={`${cat.title} services`}>
                    {cat.services.map((service) => (
                      <li key={service} className="flex items-center gap-2 text-sm text-foreground">
                        <span className="h-1 w-1 rounded-full bg-primary" aria-hidden="true" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto border-t border-border p-4">
                  <Link
                    to={cat.path}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                    aria-label={`View ${cat.title} services`}
                  >
                    View Services <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </GovLayout>
  );
};

export default ServicesPage;
