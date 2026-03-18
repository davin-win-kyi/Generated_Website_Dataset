import { useState, useEffect } from "react";
import { Check, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface PlanFeature {
  name: string;
  free: boolean | string;
  digital: boolean | string;
  allAccess: boolean | string;
}

const features: PlanFeature[] = [
  { name: "Daily newsletter", free: true, digital: true, allAccess: true },
  { name: "Limited articles (5/month)", free: true, digital: "Unlimited", allAccess: "Unlimited" },
  { name: "Ad-free reading", free: false, digital: true, allAccess: true },
  { name: "Full archive access", free: false, digital: true, allAccess: true },
  { name: "Exclusive analysis & reports", free: false, digital: false, allAccess: true },
  { name: "Print edition (weekly)", free: false, digital: false, allAccess: true },
  { name: "Live events & webinars", free: false, digital: false, allAccess: true },
  { name: "Podcast & audio editions", free: false, digital: true, allAccess: true },
];

const faqs = [
  {
    q: "Can I cancel my subscription at any time?",
    a: "Yes, you can cancel your subscription at any time from your account settings. Your access will continue until the end of your current billing period.",
  },
  {
    q: "Is there a student discount?",
    a: "Yes! We offer a 50% discount for students and educators with a valid .edu email address. Contact our support team to verify your eligibility.",
  },
  {
    q: "Can I share my subscription with family members?",
    a: "All-Access subscribers can share their subscription with up to 3 family members living at the same address. Digital subscriptions are individual only.",
  },
  {
    q: "Do you offer refunds?",
    a: "We offer a full refund within the first 14 days of any new subscription. After that, you can cancel to prevent future charges, but previous payments are non-refundable.",
  },
  {
    q: "How do I access the print edition?",
    a: "All-Access subscribers receive our weekly print edition delivered to their mailing address. You can manage your delivery preferences in your account settings.",
  },
];

const testimonials = [
  {
    name: "Dr. Anika Patel",
    role: "Professor of International Relations, Georgetown University",
    text: "The Meridian has become essential reading for my students. The depth of analysis on global affairs is unmatched by any other digital publication.",
  },
  {
    name: "Thomas Eriksson",
    role: "Foreign Policy Advisor, Stockholm",
    text: "In a world of clickbait and shallow takes, The Meridian stands out for its commitment to rigorous, thoughtful journalism. Worth every penny.",
  },
  {
    name: "Maria Santos",
    role: "Environmental Journalist, São Paulo",
    text: "The Meridian's climate coverage is the gold standard. Their reporting has informed and inspired my own work across Latin America.",
  },
];

export default function SubscriptionPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Subscribe | The Meridian";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address (e.g., name@example.com).";
    }
    if (!selectedPlan) {
      newErrors.plan = "Please select a subscription plan.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
    }
  };

  const FeatureCell = ({ value }: { value: boolean | string }) => {
    if (typeof value === "string") {
      return <span className="text-sm font-sans font-semibold text-foreground">{value}</span>;
    }
    return value ? (
      <Check className="h-5 w-5 text-accent mx-auto" aria-label="Included" />
    ) : (
      <X className="h-5 w-5 text-muted-foreground/30 mx-auto" aria-label="Not included" />
    );
  };

  return (
    <div>
      <div className="editorial-container py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-black">
            Support Independent Journalism
          </h1>
          <p className="mt-4 text-lg font-sans text-muted-foreground max-w-2xl mx-auto">
            Your subscription powers the reporting, analysis, and investigations that hold power to account. Choose the plan that's right for you.
          </p>
        </header>

        {/* Pricing tiers */}
        <section aria-label="Subscription plans" className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Free */}
            <div
              role="button"
              tabIndex={0}
              aria-pressed={selectedPlan === "free"}
              onClick={() => setSelectedPlan("free")}
              onKeyDown={(e) => e.key === "Enter" && setSelectedPlan("free")}
              className={`p-6 rounded-sm border-2 cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-ring ${
                selectedPlan === "free" ? "border-accent bg-accent/5" : "border-border bg-card hover:border-accent/40"
              }`}
            >
              <h2 className="font-serif font-bold text-xl">Free</h2>
              <p className="mt-1 text-3xl font-serif font-black">$0<span className="text-sm font-sans font-normal text-muted-foreground">/mo</span></p>
              <p className="mt-3 text-sm font-sans text-muted-foreground">
                Access to 5 articles per month and our daily newsletter.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="text-sm font-sans flex items-center gap-2"><Check className="h-4 w-4 text-accent" /> Daily newsletter</li>
                <li className="text-sm font-sans flex items-center gap-2"><Check className="h-4 w-4 text-accent" /> 5 articles/month</li>
              </ul>
            </div>

            {/* Digital */}
            <div
              role="button"
              tabIndex={0}
              aria-pressed={selectedPlan === "digital"}
              onClick={() => setSelectedPlan("digital")}
              onKeyDown={(e) => e.key === "Enter" && setSelectedPlan("digital")}
              className={`p-6 rounded-sm border-2 cursor-pointer transition-all relative focus:outline-none focus:ring-2 focus:ring-ring ${
                selectedPlan === "digital" ? "border-accent bg-accent/5" : "border-border bg-card hover:border-accent/40"
              }`}
            >
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-accent text-accent-foreground text-xs font-sans font-bold uppercase tracking-wider rounded-sm">
                Most Popular
              </span>
              <h2 className="font-serif font-bold text-xl">Digital</h2>
              <p className="mt-1 text-3xl font-serif font-black">$9.99<span className="text-sm font-sans font-normal text-muted-foreground">/mo</span></p>
              <p className="mt-3 text-sm font-sans text-muted-foreground">
                Unlimited access to all digital content, ad-free.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="text-sm font-sans flex items-center gap-2"><Check className="h-4 w-4 text-accent" /> Unlimited articles</li>
                <li className="text-sm font-sans flex items-center gap-2"><Check className="h-4 w-4 text-accent" /> Ad-free reading</li>
                <li className="text-sm font-sans flex items-center gap-2"><Check className="h-4 w-4 text-accent" /> Full archive</li>
                <li className="text-sm font-sans flex items-center gap-2"><Check className="h-4 w-4 text-accent" /> Audio editions</li>
              </ul>
            </div>

            {/* All-Access */}
            <div
              role="button"
              tabIndex={0}
              aria-pressed={selectedPlan === "all-access"}
              onClick={() => setSelectedPlan("all-access")}
              onKeyDown={(e) => e.key === "Enter" && setSelectedPlan("all-access")}
              className={`p-6 rounded-sm border-2 cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-ring ${
                selectedPlan === "all-access" ? "border-accent bg-accent/5" : "border-border bg-card hover:border-accent/40"
              }`}
            >
              <h2 className="font-serif font-bold text-xl">All-Access</h2>
              <p className="mt-1 text-3xl font-serif font-black">$19.99<span className="text-sm font-sans font-normal text-muted-foreground">/mo</span></p>
              <p className="mt-3 text-sm font-sans text-muted-foreground">
                Everything in Digital, plus print edition and exclusive content.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="text-sm font-sans flex items-center gap-2"><Check className="h-4 w-4 text-accent" /> Everything in Digital</li>
                <li className="text-sm font-sans flex items-center gap-2"><Check className="h-4 w-4 text-accent" /> Weekly print edition</li>
                <li className="text-sm font-sans flex items-center gap-2"><Check className="h-4 w-4 text-accent" /> Exclusive reports</li>
                <li className="text-sm font-sans flex items-center gap-2"><Check className="h-4 w-4 text-accent" /> Live events access</li>
              </ul>
            </div>
          </div>
          {errors.plan && (
            <p className="text-center mt-4 text-sm font-sans text-accent" role="alert">
              {errors.plan}
            </p>
          )}
        </section>

        {/* Feature comparison table */}
        <section aria-labelledby="compare-heading" className="mb-12 max-w-4xl mx-auto">
          <h2 id="compare-heading" className="text-2xl font-serif font-bold mb-6 text-center">
            Compare Plans
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="py-3 pr-4 text-sm font-sans font-bold uppercase tracking-wider text-muted-foreground">Feature</th>
                  <th className="py-3 px-4 text-center text-sm font-sans font-bold uppercase tracking-wider text-muted-foreground">Free</th>
                  <th className="py-3 px-4 text-center text-sm font-sans font-bold uppercase tracking-wider text-muted-foreground">Digital</th>
                  <th className="py-3 px-4 text-center text-sm font-sans font-bold uppercase tracking-wider text-muted-foreground">All-Access</th>
                </tr>
              </thead>
              <tbody>
                {features.map((f) => (
                  <tr key={f.name} className="border-b border-border">
                    <td className="py-3 pr-4 text-sm font-sans">{f.name}</td>
                    <td className="py-3 px-4 text-center"><FeatureCell value={f.free} /></td>
                    <td className="py-3 px-4 text-center"><FeatureCell value={f.digital} /></td>
                    <td className="py-3 px-4 text-center"><FeatureCell value={f.allAccess} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Testimonials */}
        <section aria-labelledby="testimonials-heading" className="mb-12">
          <h2 id="testimonials-heading" className="text-2xl font-serif font-bold mb-6 text-center">
            What Our Readers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="p-5 bg-secondary rounded-sm">
                <p className="text-sm font-sans italic leading-relaxed text-foreground/80">
                  "{t.text}"
                </p>
                <footer className="mt-4">
                  <p className="text-sm font-sans font-semibold">{t.name}</p>
                  <p className="text-xs font-sans text-muted-foreground">{t.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-heading" className="mb-12 max-w-2xl mx-auto">
          <h2 id="faq-heading" className="text-2xl font-serif font-bold mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-sm px-4">
                <AccordionTrigger className="text-left font-sans font-semibold text-sm py-4 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm font-sans text-muted-foreground pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Sign-up form */}
        <section aria-labelledby="signup-heading" className="mb-12 max-w-md mx-auto">
          <h2 id="signup-heading" className="text-2xl font-serif font-bold mb-6 text-center">
            Get Started
          </h2>
          {submitted ? (
            <div aria-live="polite" className="text-center p-8 bg-secondary rounded-sm">
              <h3 className="text-xl font-serif font-bold text-accent">Welcome aboard!</h3>
              <p className="mt-2 font-sans text-muted-foreground">
                Thank you for subscribing to The Meridian. Check your email for confirmation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label htmlFor="sub-name" className="block text-sm font-sans font-semibold mb-1">
                  Full Name <span aria-hidden="true" className="text-accent">*</span>
                </label>
                <input
                  id="sub-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className="w-full px-3 py-2 text-sm font-sans bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
                {errors.name && (
                  <p id="name-error" role="alert" className="mt-1 text-xs font-sans text-accent">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="sub-email" className="block text-sm font-sans font-semibold mb-1">
                  Email Address <span aria-hidden="true" className="text-accent">*</span>
                </label>
                <input
                  id="sub-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className="w-full px-3 py-2 text-sm font-sans bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
                {errors.email && (
                  <p id="email-error" role="alert" className="mt-1 text-xs font-sans text-accent">
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <p className="text-sm font-sans font-semibold mb-1">
                  Selected Plan: {selectedPlan ? selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1) : "None selected"}
                </p>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 text-sm font-sans font-bold uppercase tracking-wider bg-accent text-accent-foreground rounded-sm hover:bg-accent/90 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              >
                Subscribe Now
              </button>
            </form>
          )}
        </section>
      </div>
    </div>
  );
}
