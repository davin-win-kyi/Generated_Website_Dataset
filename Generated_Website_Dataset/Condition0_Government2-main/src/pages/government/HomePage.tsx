import { Link } from "react-router-dom";
import { Search, AlertTriangle, CreditCard, AlertCircle, FileText, TreePine, Calendar, ArrowRight, Newspaper } from "lucide-react";
import { useState } from "react";
import GovLayout from "@/components/government/GovLayout";
import cityHero from "@/assets/city-hero.jpg";

const quickServices = [
  { icon: CreditCard, label: "Pay a Bill", description: "Utility & tax payments", path: "/services/pay-bill" },
  { icon: AlertCircle, label: "Report an Issue", description: "Potholes, streetlights & more", path: "/contact" },
  { icon: FileText, label: "Apply for a Permit", description: "Building & business permits", path: "/services/permits" },
  { icon: TreePine, label: "Find a Park", description: "Parks & recreation info", path: "/services" },
];

const newsItems = [
  {
    date: "Nov 15, 2026",
    title: "City Council Approves New Community Center Funding",
    excerpt: "The Lakewood City Council voted unanimously to allocate $12M for a new community center in the Belmar district.",
  },
  {
    date: "Nov 12, 2026",
    title: "Winter Road Maintenance Schedule Announced",
    excerpt: "Public Works has released the 2026-27 snow removal priority routes and salt distribution plan.",
  },
  {
    date: "Nov 8, 2026",
    title: "Water Conservation Program Receives State Award",
    excerpt: "Lakewood's innovative water recycling initiative has been recognized by the Colorado Department of Natural Resources.",
  },
];

const events = [
  { date: "Nov 22", title: "Community Town Hall Meeting", location: "City Hall Auditorium", time: "6:30 PM" },
  { date: "Nov 25", title: "Holiday Tree Lighting Ceremony", location: "Belmar Park", time: "5:00 PM" },
  { date: "Dec 1", title: "Winter Farmers Market Opening", location: "Lakewood Cultural Center", time: "9:00 AM" },
  { date: "Dec 5", title: "City Council Regular Session", location: "Council Chambers", time: "7:00 PM" },
];

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <GovLayout>
      {/* Emergency Alert */}
      <div className="bg-gov-red">
        <div className="gov-container flex items-center gap-3 py-3 text-sm font-medium text-destructive-foreground">
          <AlertTriangle className="h-5 w-5 shrink-0" />
          <span>
            <strong>Road Closure:</strong> Main St between 3rd and 5th Ave until Nov 30. 
            <a href="#" className="underline ml-1">View detour map →</a>
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0">
          <img src={cityHero} alt="City of Lakewood aerial view" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/75" />
        </div>
        <div className="relative gov-container py-20 md:py-32 text-primary-foreground">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 max-w-2xl leading-tight">
            How Can We Help You?
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-xl">
            Find city services, pay bills, report issues, and stay connected with your community.
          </p>
          <div className="flex max-w-xl">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for services, permits, events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-l-lg text-foreground bg-card border-0 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <button className="px-6 bg-accent text-accent-foreground font-semibold rounded-r-lg hover:brightness-110 transition-all">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="gov-section bg-background">
        <div className="gov-container">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2 text-center">
            Popular Services
          </h2>
          <p className="text-muted-foreground text-center mb-10">Quick access to the most used city services</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickServices.map((service) => (
              <Link
                key={service.label}
                to={service.path}
                className="gov-card group flex flex-col items-center text-center"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-1">{service.label}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-secondary font-semibold hover:underline"
            >
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="gov-section bg-gov-light">
        <div className="gov-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* News */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Newspaper className="h-5 w-5 text-secondary" />
                <h2 className="font-heading text-2xl font-bold text-foreground">News & Announcements</h2>
              </div>
              <div className="space-y-6">
                {newsItems.map((item, i) => (
                  <article key={i} className="gov-card">
                    <span className="text-xs font-semibold text-secondary uppercase tracking-wider">{item.date}</span>
                    <h3 className="font-heading text-lg font-bold text-foreground mt-1 mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.excerpt}</p>
                    <a href="#" className="inline-block mt-3 text-sm text-secondary font-medium hover:underline">
                      Read more →
                    </a>
                  </article>
                ))}
              </div>
            </div>

            {/* Events */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="h-5 w-5 text-secondary" />
                <h2 className="font-heading text-2xl font-bold text-foreground">Upcoming Events</h2>
              </div>
              <div className="space-y-4">
                {events.map((event, i) => (
                  <div key={i} className="gov-card flex gap-4">
                    <div className="flex flex-col items-center justify-center bg-primary text-primary-foreground rounded-lg px-3 py-2 min-w-[60px]">
                      <span className="text-xs font-medium uppercase">{event.date.split(" ")[0]}</span>
                      <span className="text-xl font-bold">{event.date.split(" ")[1]}</span>
                    </div>
                    <div>
                      <h4 className="font-heading text-sm font-bold text-foreground">{event.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{event.location}</p>
                      <p className="text-xs text-secondary font-medium mt-1">{event.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </GovLayout>
  );
};

export default HomePage;
