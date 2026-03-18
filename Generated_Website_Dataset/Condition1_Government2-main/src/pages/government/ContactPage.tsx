import { useState } from "react";
import Layout from "@/components/government/Layout";
import { Phone, Mail, Clock, MapPin, Send, CheckCircle2, Facebook, Twitter, Youtube } from "lucide-react";

const departments = [
  { name: "City Clerk", phone: "(555) 555-0101", hours: "Mon–Fri 8AM–5PM" },
  { name: "Planning & Development", phone: "(555) 555-0102", hours: "Mon–Fri 8AM–5PM" },
  { name: "Public Works", phone: "(555) 555-0103", hours: "Mon–Fri 7AM–4PM" },
  { name: "Parks & Recreation", phone: "(555) 555-0104", hours: "Mon–Fri 8AM–6PM" },
  { name: "Police (Non-Emergency)", phone: "(555) 555-0105", hours: "24/7" },
  { name: "Fire Department", phone: "(555) 555-0106", hours: "24/7" },
  { name: "Utilities & Billing", phone: "(555) 555-0107", hours: "Mon–Fri 8AM–5PM" },
  { name: "Human Resources", phone: "(555) 555-0108", hours: "Mon–Fri 8AM–5PM" },
];

const deptOptions = ["General Inquiry", ...departments.map((d) => d.name)];

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dept, setDept] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="bg-primary py-12" aria-labelledby="contact-heading">
        <div className="container">
          <h1 id="contact-heading" className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground">
            Contact Us
          </h1>
          <p className="text-primary-foreground/80 mt-2 max-w-2xl">
            Reach out to city departments or send us a message. We're here to help.
          </p>
        </div>
      </section>

      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Inquiry Form */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6 flex items-center gap-2">
              <Send className="h-5 w-5 text-accent" aria-hidden="true" />
              Send an Inquiry
            </h2>

            {submitted ? (
              <div className="bg-gov-teal-light border border-accent/30 rounded-lg p-8 text-center" role="status">
                <CheckCircle2 className="h-12 w-12 text-accent mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">Thank you for contacting us. We'll respond within 2 business days.</p>
                <button onClick={() => { setSubmitted(false); setName(""); setEmail(""); setDept(""); setMessage(""); }} className="mt-6 px-6 py-2 rounded-md bg-primary text-primary-foreground font-medium hover:bg-gov-navy-light transition-colors focus-visible:outline-ring">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card border rounded-lg p-6 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-foreground mb-1.5">
                      Name <span className="text-destructive" aria-label="required">*</span>
                    </label>
                    <input id="contact-name" type="text" required value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-md border bg-background px-3 py-2.5 text-foreground placeholder:text-muted-foreground focus-visible:outline-ring" placeholder="Your full name" />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-foreground mb-1.5">
                      Email <span className="text-destructive" aria-label="required">*</span>
                    </label>
                    <input id="contact-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-md border bg-background px-3 py-2.5 text-foreground placeholder:text-muted-foreground focus-visible:outline-ring" placeholder="you@example.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-dept" className="block text-sm font-medium text-foreground mb-1.5">
                    Department <span className="text-destructive" aria-label="required">*</span>
                  </label>
                  <select id="contact-dept" required value={dept} onChange={(e) => setDept(e.target.value)} className="w-full rounded-md border bg-background px-3 py-2.5 text-foreground focus-visible:outline-ring">
                    <option value="">Select a department</option>
                    {deptOptions.map((d) => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-foreground mb-1.5">
                    Message <span className="text-destructive" aria-label="required">*</span>
                  </label>
                  <textarea id="contact-message" required rows={5} value={message} onChange={(e) => setMessage(e.target.value)} className="w-full rounded-md border bg-background px-3 py-2.5 text-foreground placeholder:text-muted-foreground focus-visible:outline-ring resize-y" placeholder="How can we help you?" />
                </div>
                <button type="submit" className="w-full py-3 rounded-md bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity focus-visible:outline-ring">
                  Submit Inquiry
                </button>
              </form>
            )}

            {/* Map */}
            <div className="mt-10">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-accent" aria-hidden="true" />
                City Hall Location
              </h2>
              <div className="bg-muted rounded-lg overflow-hidden border" style={{ height: 300 }}>
                <iframe
                  title="City Hall Location Map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-105.09%2C39.70%2C-105.07%2C39.72&layer=mapnik&marker=39.71%2C-105.08"
                  className="w-full h-full border-0"
                  loading="lazy"
                  aria-label="Map showing City Hall at 480 S. Allison Parkway, Lakewood, CO"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-2">480 S. Allison Parkway, Lakewood, CO 80226</p>
            </div>

            {/* Social Media */}
            <div className="mt-10">
              <h2 className="text-xl font-serif font-bold text-foreground mb-4">Follow Us</h2>
              <div className="flex gap-3">
                <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-md border hover:bg-muted transition-colors focus-visible:outline-ring text-sm font-medium text-foreground">
                  <Facebook className="h-4 w-4 text-accent" aria-hidden="true" /> Facebook
                </a>
                <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-md border hover:bg-muted transition-colors focus-visible:outline-ring text-sm font-medium text-foreground">
                  <Twitter className="h-4 w-4 text-accent" aria-hidden="true" /> Twitter
                </a>
                <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-md border hover:bg-muted transition-colors focus-visible:outline-ring text-sm font-medium text-foreground">
                  <Youtube className="h-4 w-4 text-accent" aria-hidden="true" /> YouTube
                </a>
              </div>
            </div>
          </div>

          {/* Department Directory */}
          <aside aria-labelledby="directory-heading">
            <h2 id="directory-heading" className="text-2xl font-serif font-bold text-foreground mb-6 flex items-center gap-2">
              <Phone className="h-5 w-5 text-accent" aria-hidden="true" />
              Department Directory
            </h2>
            <div className="space-y-3">
              {departments.map((dept) => (
                <div key={dept.name} className="bg-card border rounded-lg p-4">
                  <h3 className="font-semibold text-foreground text-sm">{dept.name}</h3>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <Phone className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
                    <a href={`tel:${dept.phone.replace(/\D/g, "")}`} className="text-sm text-accent hover:underline focus-visible:outline-ring">{dept.phone}</a>
                  </div>
                  <div className="flex items-center gap-1.5 mt-1">
                    <Clock className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
                    <span className="text-xs text-muted-foreground">{dept.hours}</span>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
