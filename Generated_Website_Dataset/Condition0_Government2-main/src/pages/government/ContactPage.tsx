import { Link } from "react-router-dom";
import { useState } from "react";
import { Phone, Mail, Clock, MapPin, Send, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import GovLayout from "@/components/government/GovLayout";

const departments = [
  { name: "City Manager's Office", phone: "(555) 123-4567", hours: "Mon–Fri 8AM–5PM" },
  { name: "Public Works", phone: "(555) 123-4568", hours: "Mon–Fri 7AM–4PM" },
  { name: "Parks & Recreation", phone: "(555) 123-4569", hours: "Mon–Sat 6AM–9PM" },
  { name: "Police (Non-Emergency)", phone: "(555) 123-4570", hours: "24/7" },
  { name: "Fire Department", phone: "(555) 123-4571", hours: "24/7" },
  { name: "Permits & Licensing", phone: "(555) 123-4572", hours: "Mon–Fri 8AM–4:30PM" },
  { name: "Water & Utilities", phone: "(555) 123-4573", hours: "Mon–Fri 8AM–5PM" },
  { name: "Community Development", phone: "(555) 123-4574", hours: "Mon–Fri 8AM–5PM" },
];

const deptOptions = departments.map((d) => d.name);

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <GovLayout>
      <div className="bg-primary">
        <div className="gov-container py-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
            Contact Us
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            Get in touch with City of Lakewood departments and staff. We're here to help.
          </p>
        </div>
      </div>

      <div className="bg-muted border-b border-border">
        <div className="gov-container py-3 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-foreground font-medium">Contact</span>
        </div>
      </div>

      <section className="gov-section">
        <div className="gov-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Department Directory */}
            <div className="lg:col-span-2">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">Department Directory</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {departments.map((dept) => (
                  <div key={dept.name} className="gov-card">
                    <h4 className="font-heading text-sm font-bold text-foreground mb-2">{dept.name}</h4>
                    <div className="space-y-1">
                      <p className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="h-3.5 w-3.5 text-secondary shrink-0" />
                        {dept.phone}
                      </p>
                      <p className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-3.5 w-3.5 text-secondary shrink-0" />
                        {dept.hours}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="mt-10">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6">City Hall Location</h3>
                <div className="rounded-xl overflow-hidden border border-border shadow-sm">
                  <iframe
                    title="City Hall Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3069.9!2d-105.13!3d39.71!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQyJzM2LjAiTiAxMDXCsDA3JzQ4LjAiVw!5e0!3m2!1sen!2sus!4v1"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="flex items-center gap-2 mt-3 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-secondary" />
                  480 S. Allison Parkway, Lakewood, CO 80226
                </div>
              </div>
            </div>

            {/* Inquiry Form + Social */}
            <div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">Send an Inquiry</h3>

              {!submitted ? (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="gov-card space-y-4"
                >
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1">Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1">Department</label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary text-sm"
                    >
                      <option value="">Select department</option>
                      {deptOptions.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1">Message</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="How can we help you?"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary text-sm resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>
                </form>
              ) : (
                <div className="gov-card text-center py-10">
                  <Mail className="h-12 w-12 mx-auto text-secondary mb-3" />
                  <h4 className="font-heading text-lg font-bold text-foreground mb-2">Message Sent!</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Thank you for contacting us. We'll respond within 2 business days.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm text-secondary font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              )}

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="font-heading text-lg font-bold text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, label: "Facebook" },
                    { icon: Twitter, label: "Twitter" },
                    { icon: Instagram, label: "Instagram" },
                    { icon: Youtube, label: "YouTube" },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href="#"
                      className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground hover:bg-gov-navy-light transition-colors"
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Emergency */}
              <div className="mt-8 gov-card bg-gov-cream border-l-4 border-l-gov-red">
                <h4 className="font-heading text-sm font-bold text-foreground mb-1">Emergency?</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  For emergencies, please call 911. For non-emergency police matters:
                </p>
                <p className="font-semibold text-foreground">(555) 123-4570</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </GovLayout>
  );
};

export default ContactPage;
