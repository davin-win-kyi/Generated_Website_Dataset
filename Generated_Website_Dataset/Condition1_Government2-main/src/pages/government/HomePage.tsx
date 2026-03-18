import { Link } from "react-router-dom";
import { Search, AlertTriangle, CreditCard, AlertCircle, FileText, TreePine, Calendar, ArrowRight, Newspaper } from "lucide-react";
import Layout from "@/components/government/Layout";
import cityHero from "@/assets/city-hero.jpg";
import { useState } from "react";

const quickServices = [
  { icon: CreditCard, label: "Pay a Bill", desc: "Utility payments online", path: "/services/pay-bill" },
  { icon: AlertCircle, label: "Report an Issue", desc: "Potholes, streetlights & more", path: "/contact" },
  { icon: FileText, label: "Apply for a Permit", desc: "Building & business permits", path: "/services/permits" },
  { icon: TreePine, label: "Find a Park", desc: "Parks & recreation info", path: "/services" },
];

const news = [
  { date: "Nov 15, 2025", title: "City Council Approves New Community Center Funding", summary: "A $12M investment will bring a state-of-the-art community center to the Belmar district." },
  { date: "Nov 10, 2025", title: "Winter Snow Removal Schedule Announced", summary: "Learn about priority routes and how to prepare your property for the winter season." },
  { date: "Nov 5, 2025", title: "Lakewood Named Top 20 Best Places to Live", summary: "The city earns recognition for quality of life, parks, and community engagement." },
];

const events = [
  { date: "Nov 22", day: "Sat", title: "Holiday Tree Lighting Ceremony", location: "Belmar Park", time: "5:00 PM" },
  { date: "Nov 28", day: "Thu", title: "Turkey Trot 5K Run", location: "Bear Creek Trail", time: "8:00 AM" },
  { date: "Dec 3", day: "Wed", title: "City Council Meeting", location: "City Hall Chambers", time: "7:00 PM" },
  { date: "Dec 10", day: "Tue", title: "Budget Town Hall", location: "Lakewood Cultural Center", time: "6:30 PM" },
];

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Layout>
      {/* Emergency Alert */}
      <div className="bg-alert-bg border-b-2 border-alert" role="alert">
        <div className="container flex items-start gap-3 py-3">
          <AlertTriangle className="h-5 w-5 text-alert flex-shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="font-semibold text-alert-foreground text-sm">Road Closure Alert</p>
            <p className="text-sm text-alert-foreground/80">Main St between 3rd and 5th Ave is closed until Nov 30 for utility repairs. <a href="#" className="underline font-medium hover:no-underline focus-visible:outline-ring">View detour map →</a></p>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary" aria-label="Welcome to City of Lakewood">
        <img src={cityHero} alt="Aerial view of the City of Lakewood with green parks and downtown buildings" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="relative container py-16 md:py-24">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary-foreground mb-4 max-w-2xl">
            Welcome to the City of Lakewood
          </h1>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl">
            Serving 160,000 residents with transparent, efficient, and accessible city services.
          </p>

          {/* Search */}
          <div className="max-w-xl">
            <label htmlFor="hero-search" className="text-primary-foreground/70 text-sm font-medium mb-2 block">
              How Can We Help You?
            </label>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" aria-hidden="true" />
              <input
                id="hero-search"
                type="search"
                placeholder="Search for services, departments, or information..."
                className="w-full rounded-lg border-0 bg-card py-3.5 pl-12 pr-4 text-foreground shadow-lg placeholder:text-muted-foreground focus-visible:outline-ring"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-12 md:py-16" aria-labelledby="quick-services-heading">
        <div className="container">
          <h2 id="quick-services-heading" className="text-2xl font-serif font-bold text-foreground mb-8 text-center">
            Popular Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickServices.map((svc) => (
              <Link
                key={svc.label}
                to={svc.path}
                className="group flex flex-col items-center text-center p-6 rounded-lg bg-card border shadow-sm hover:shadow-md hover:border-accent transition-all focus-visible:outline-ring"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gov-teal-light text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <svc.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{svc.label}</h3>
                <p className="text-sm text-muted-foreground">{svc.desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline focus-visible:outline-ring">
              View All Services <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* News + Events */}
      <section className="py-12 md:py-16 bg-muted" aria-labelledby="news-heading">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* News */}
            <div className="lg:col-span-2">
              <h2 id="news-heading" className="text-2xl font-serif font-bold text-foreground mb-6 flex items-center gap-2">
                <Newspaper className="h-6 w-6 text-accent" aria-hidden="true" />
                News & Announcements
              </h2>
              <div className="space-y-4">
                {news.map((item) => (
                  <article key={item.title} className="bg-card rounded-lg border p-5 hover:shadow-sm transition-shadow">
                    <time className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{item.date}</time>
                    <h3 className="font-semibold text-foreground mt-1 mb-1">
                      <a href="#" className="hover:text-accent hover:underline focus-visible:outline-ring">{item.title}</a>
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.summary}</p>
                  </article>
                ))}
              </div>
            </div>

            {/* Events */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6 flex items-center gap-2">
                <Calendar className="h-6 w-6 text-accent" aria-hidden="true" />
                Upcoming Events
              </h2>
              <div className="space-y-3">
                {events.map((evt) => (
                  <a key={evt.title} href="#" className="flex gap-4 bg-card rounded-lg border p-4 hover:shadow-sm transition-shadow group focus-visible:outline-ring">
                    <div className="flex flex-col items-center justify-center min-w-[3.5rem] rounded-md bg-secondary px-2 py-1.5 text-center">
                      <span className="text-xs font-semibold text-muted-foreground uppercase">{evt.day}</span>
                      <span className="text-lg font-bold text-foreground leading-tight">{evt.date.split(" ")[1]}</span>
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-foreground text-sm group-hover:text-accent transition-colors">{evt.title}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{evt.location} · {evt.time}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
