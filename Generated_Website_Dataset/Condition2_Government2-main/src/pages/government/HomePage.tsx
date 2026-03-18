import { Link } from "react-router-dom";
import { Search, AlertTriangle, CreditCard, FileText, TreePine, AlertCircle, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import GovLayout from "@/components/government/GovLayout";
import { useState } from "react";

const quickServices = [
  { icon: CreditCard, label: "Pay a Bill", description: "Pay utility bills online", path: "/services/pay-bill" },
  { icon: AlertCircle, label: "Report an Issue", description: "Report potholes, outages & more", path: "/contact" },
  { icon: FileText, label: "Apply for a Permit", description: "Building & business permits", path: "/services/permits" },
  { icon: TreePine, label: "Find a Park", description: "Explore parks & recreation", path: "/services" },
];

const news = [
  { title: "City Council Approves 2024 Budget", date: "November 15, 2024", excerpt: "The Lakewood City Council has approved the municipal budget for fiscal year 2024, including increased funding for infrastructure improvements." },
  { title: "New Community Center Opens in Westside", date: "November 10, 2024", excerpt: "Residents can now enjoy the new 25,000 sq ft community center featuring a gym, meeting rooms, and after-school programs." },
  { title: "Water Conservation Program Launches", date: "November 5, 2024", excerpt: "The city introduces a voluntary water conservation program with rebates for water-efficient appliances and landscaping." },
];

const events = [
  { title: "City Council Meeting", date: "Nov 20, 2024", time: "6:00 PM", location: "City Hall, Council Chambers" },
  { title: "Holiday Tree Lighting Ceremony", date: "Dec 1, 2024", time: "5:30 PM", location: "Civic Center Plaza" },
  { title: "Winter Farmers Market", date: "Dec 8, 2024", time: "9:00 AM – 1:00 PM", location: "Heritage Center" },
];

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <GovLayout title="Home">
      {/* Emergency Alert */}
      <div role="alert" aria-live="assertive" className="border-b-2 border-gov-alert-border bg-gov-alert-bg">
        <div className="gov-container flex items-start gap-3 py-3">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-gov-alert" aria-hidden="true" />
          <div>
            <p className="text-sm font-semibold text-foreground">
              Road Closure: Main St between 3rd and 5th Ave until Nov 30
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Please use alternate routes. <a href="#" className="underline hover:text-foreground">View detour map</a>
            </p>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gov-hero py-16 text-gov-hero-foreground" aria-labelledby="hero-heading">
        <div className="gov-container text-center">
          <h1 id="hero-heading" className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            How Can We Help You?
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gov-hero-foreground/80">
            Access city services, pay bills, and stay informed about your community.
          </p>
          <form
            role="search"
            aria-label="Search city services"
            className="mx-auto flex max-w-xl gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="hero-search" className="sr-only">Search city services</label>
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
              <input
                id="hero-search"
                type="search"
                className="h-12 w-full rounded-lg border border-input bg-card pl-10 pr-4 text-card-foreground shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Search for services, permits, events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button type="submit" className="h-12 px-6" aria-label="Search">
              Search
            </Button>
          </form>
        </div>
      </section>

      {/* Quick Access Services */}
      <section className="bg-gov-surface py-12" aria-labelledby="quick-services-heading">
        <div className="gov-container">
          <h2 id="quick-services-heading" className="mb-8 text-center text-2xl font-bold text-foreground">
            Popular Services
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" role="list">
            {quickServices.map((service) => (
              <li key={service.label}>
                <Link
                  to={service.path}
                  className="group flex flex-col items-center rounded-lg border border-border bg-card p-6 text-center shadow-sm transition-all hover:shadow-md hover:border-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  aria-label={`${service.label} — ${service.description}`}
                >
                  <div className="mb-3 rounded-full bg-primary/10 p-3" aria-hidden="true">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-base font-semibold text-foreground group-hover:text-primary">{service.label}</span>
                  <span className="mt-1 text-sm text-muted-foreground">{service.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-12" aria-labelledby="news-heading">
        <div className="gov-container">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* News */}
            <div className="lg:col-span-2">
              <h2 id="news-heading" className="mb-6 text-2xl font-bold text-foreground">
                News & Announcements
              </h2>
              <div className="space-y-6">
                {news.map((item, index) => (
                  <article key={index} className="rounded-lg border border-border bg-card p-5 shadow-sm">
                    <time className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{item.date}</time>
                    <h3 className="mt-1 text-lg font-bold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.excerpt}</p>
                    <a href="#" className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
                      Read more <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </article>
                ))}
              </div>
            </div>

            {/* Events */}
            <aside aria-labelledby="events-heading">
              <h2 id="events-heading" className="mb-6 text-2xl font-bold text-foreground">
                Upcoming Events
              </h2>
              <ul className="space-y-4" role="list">
                {events.map((event, index) => (
                  <li key={index} className="rounded-lg border border-border bg-card p-4 shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="rounded-md bg-primary/10 p-2" aria-hidden="true">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{event.title}</h3>
                        <p className="mt-0.5 text-sm text-muted-foreground">{event.date} · {event.time}</p>
                        <p className="text-sm text-muted-foreground">{event.location}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>
    </GovLayout>
  );
};

export default HomePage;
