import { Link } from "react-router-dom";
import { Droplets, FileText, Shield, Car, TreePine, Heart, ArrowRight } from "lucide-react";
import Layout from "@/components/government/Layout";

const categories = [
  {
    icon: Droplets,
    title: "Utilities & Billing",
    desc: "Water, sewer, trash services, and online bill payment.",
    links: [
      { label: "Pay Your Bill Online", path: "/services/pay-bill" },
      { label: "Start/Stop Service", path: "#" },
      { label: "Billing FAQ", path: "#" },
    ],
  },
  {
    icon: FileText,
    title: "Permits & Licenses",
    desc: "Building permits, business licenses, and zoning applications.",
    links: [
      { label: "Apply for a Permit", path: "/services/permits" },
      { label: "Check Application Status", path: "/services/permits" },
      { label: "Zoning Information", path: "#" },
    ],
  },
  {
    icon: Shield,
    title: "Public Safety",
    desc: "Police, fire, emergency management, and community safety programs.",
    links: [
      { label: "Report a Crime", path: "#" },
      { label: "Fire Safety Resources", path: "#" },
      { label: "Emergency Preparedness", path: "#" },
    ],
  },
  {
    icon: Car,
    title: "Transportation",
    desc: "Roads, transit, bike infrastructure, and traffic management.",
    links: [
      { label: "Road Closures & Detours", path: "#" },
      { label: "Public Transit Routes", path: "#" },
      { label: "Report a Pothole", path: "/contact" },
    ],
  },
  {
    icon: TreePine,
    title: "Parks & Recreation",
    desc: "Parks, trails, recreation centers, and community programs.",
    links: [
      { label: "Find a Park", path: "#" },
      { label: "Recreation Programs", path: "#" },
      { label: "Reserve a Facility", path: "#" },
    ],
  },
  {
    icon: Heart,
    title: "Social Services",
    desc: "Housing assistance, senior services, and community resources.",
    links: [
      { label: "Housing Assistance", path: "#" },
      { label: "Senior Programs", path: "#" },
      { label: "Community Resources", path: "#" },
    ],
  },
];

const ServicesPage = () => {
  return (
    <Layout>
      <section className="bg-primary py-12" aria-labelledby="services-heading">
        <div className="container">
          <h1 id="services-heading" className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground">
            City Services
          </h1>
          <p className="text-primary-foreground/80 mt-2 max-w-2xl">
            Browse all services offered by the City of Lakewood. Find what you need by category or use the search on our homepage.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16" aria-label="Service categories">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.title} className="bg-card border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gov-teal-light text-accent">
                    <cat.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h2 className="font-serif font-bold text-lg text-foreground">{cat.title}</h2>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{cat.desc}</p>
                <ul className="space-y-2">
                  {cat.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.path}
                        className="inline-flex items-center gap-1.5 text-sm text-accent font-medium hover:underline focus-visible:outline-ring"
                      >
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
