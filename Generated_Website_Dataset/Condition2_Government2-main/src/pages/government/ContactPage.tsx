import { useState, useRef } from "react";
import { Phone, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import GovLayout from "@/components/government/GovLayout";
import Breadcrumbs from "@/components/government/Breadcrumbs";

const departments = [
  { name: "City Manager's Office", phone: "(555) 555-0101", hours: "Mon–Fri 8AM–5PM" },
  { name: "Public Works", phone: "(555) 555-0102", hours: "Mon–Fri 7AM–4PM" },
  { name: "Parks & Recreation", phone: "(555) 555-0103", hours: "Mon–Sat 8AM–6PM" },
  { name: "Police Department (non-emergency)", phone: "(555) 555-0104", hours: "24/7" },
  { name: "Fire Department (non-emergency)", phone: "(555) 555-0105", hours: "24/7" },
  { name: "Planning & Development", phone: "(555) 555-0106", hours: "Mon–Fri 8AM–5PM" },
  { name: "Water & Utilities", phone: "(555) 555-0107", hours: "Mon–Fri 7:30AM–4:30PM" },
];

const departmentOptions = [
  "General Inquiry",
  "City Manager's Office",
  "Public Works",
  "Parks & Recreation",
  "Police Department",
  "Fire Department",
  "Planning & Development",
  "Water & Utilities",
];

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", department: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const confirmRef = useRef<HTMLHeadingElement>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Please enter a valid email address";
    if (!formData.department) newErrors.department = "Please select a department";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 10) newErrors.message = "Message must be at least 10 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setTimeout(() => confirmRef.current?.focus(), 100);
    }
  };

  return (
    <GovLayout title="Contact">
      <Breadcrumbs items={[{ label: "Contact" }]} />

      <div className="gov-container py-10">
        <h1 className="mb-2 text-3xl font-bold text-foreground">Contact Us</h1>
        <p className="mb-10 max-w-2xl text-muted-foreground">
          Reach out to City of Lakewood departments or submit an inquiry. We're here to help.
        </p>

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Inquiry Form */}
          <section className="lg:col-span-3" aria-labelledby="inquiry-heading">
            <h2 id="inquiry-heading" className="mb-6 text-xl font-bold text-foreground">Send an Inquiry</h2>

            {!submitted ? (
              <form onSubmit={handleSubmit} noValidate className="space-y-5 rounded-lg border border-border bg-card p-6 shadow-sm">
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-foreground">
                    Name <span className="text-gov-alert" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "cname-error" : undefined}
                  />
                  {errors.name && <p id="cname-error" role="alert" className="mt-1 text-sm text-gov-alert">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-foreground">
                    Email <span className="text-gov-alert" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "cemail-error" : undefined}
                  />
                  {errors.email && <p id="cemail-error" role="alert" className="mt-1 text-sm text-gov-alert">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="contact-dept" className="mb-1.5 block text-sm font-medium text-foreground">
                    Department <span className="text-gov-alert" aria-hidden="true">*</span>
                  </label>
                  <select
                    id="contact-dept"
                    className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    aria-required="true"
                    aria-invalid={!!errors.department}
                    aria-describedby={errors.department ? "cdept-error" : undefined}
                  >
                    <option value="">Select a department</option>
                    {departmentOptions.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                  {errors.department && <p id="cdept-error" role="alert" className="mt-1 text-sm text-gov-alert">{errors.department}</p>}
                </div>

                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-foreground">
                    Message <span className="text-gov-alert" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "cmsg-error" : undefined}
                  />
                  {errors.message && <p id="cmsg-error" role="alert" className="mt-1 text-sm text-gov-alert">{errors.message}</p>}
                </div>

                <Button type="submit">Submit Inquiry</Button>
              </form>
            ) : (
              <div role="status" aria-live="polite" className="rounded-lg border border-border bg-card p-8 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gov-success/10" aria-hidden="true">
                  <CheckCircle className="h-7 w-7 text-gov-success" />
                </div>
                <h3 ref={confirmRef} tabIndex={-1} className="text-xl font-bold text-foreground">Inquiry Submitted</h3>
                <p className="mt-2 text-muted-foreground">
                  Thank you for contacting the City of Lakewood. We will respond within 2–3 business days.
                </p>
                <Button className="mt-6" onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", department: "", message: "" }); setErrors({}); }}>
                  Send Another Inquiry
                </Button>
              </div>
            )}

            {/* Map */}
            <section aria-labelledby="map-heading" className="mt-8">
              <h2 id="map-heading" className="mb-4 text-xl font-bold text-foreground">Find City Hall</h2>
              <div className="overflow-hidden rounded-lg border border-border">
                <iframe
                  title="City Hall location map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-105.095%2C39.71%2C-105.075%2C39.73&layer=mapnik&marker=39.72%2C-105.085"
                  className="h-64 w-full border-0"
                  loading="lazy"
                  aria-label="Map showing City Hall at 480 S Allison Pkwy, Lakewood, CO 80226"
                />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                480 S Allison Pkwy, Lakewood, CO 80226 · <a href="https://maps.google.com/?q=480+S+Allison+Pkwy+Lakewood+CO+80226" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Get Directions (Google Maps)</a>
              </p>
            </section>

            {/* Social Media */}
            <section aria-labelledby="social-heading" className="mt-8">
              <h2 id="social-heading" className="mb-4 text-xl font-bold text-foreground">Follow Us</h2>
              <nav aria-label="Social media links">
                <ul className="flex flex-wrap gap-3" role="list">
                  {["Facebook", "Twitter", "Instagram", "YouTube", "Nextdoor"].map((platform) => (
                    <li key={platform}>
                      <a
                        href="#"
                        className="inline-block rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        aria-label={`Follow City of Lakewood on ${platform}`}
                      >
                        {platform}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </section>
          </section>

          {/* Department Directory */}
          <aside className="lg:col-span-2" aria-labelledby="directory-heading">
            <h2 id="directory-heading" className="mb-6 text-xl font-bold text-foreground">Department Directory</h2>
            <ul className="space-y-3" role="list">
              {departments.map((dept) => (
                <li key={dept.name} className="rounded-lg border border-border bg-card p-4 shadow-sm">
                  <h3 className="font-semibold text-foreground">{dept.name}</h3>
                  <div className="mt-2 space-y-1">
                    <p className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      <a href={`tel:${dept.phone.replace(/[^\d+]/g, "")}`} className="hover:text-foreground hover:underline">
                        {dept.phone}
                      </a>
                    </p>
                    <p className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      {dept.hours}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </GovLayout>
  );
};

export default ContactPage;
