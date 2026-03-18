import { useState } from "react";
import { EduLayout } from "@/components/edu/EduLayout";
import { Check, ChevronDown, ChevronUp, Shield } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    desc: "Explore free courses and get a taste of LearnPath.",
    cta: "Get Started",
    highlight: false,
    features: ["Access to 50+ free courses", "Basic community access", "Course previews", "Limited quiz access"],
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    desc: "Full access to our entire course library with certificates.",
    cta: "Start Free Trial",
    highlight: true,
    features: ["Unlimited course access", "Certificates of completion", "Offline downloads", "Priority support", "Practice exercises", "Learning paths"],
  },
  {
    name: "Teams",
    price: "$49",
    period: "/seat/month",
    desc: "Empower your team with admin controls and analytics.",
    cta: "Contact Sales",
    highlight: false,
    features: ["Everything in Pro", "Admin dashboard", "Team analytics", "Custom learning paths", "SSO integration", "Dedicated success manager"],
  },
];

const comparisonFeatures = [
  { name: "Course access", free: "50+ free", pro: "Unlimited", teams: "Unlimited" },
  { name: "Certificates", free: "—", pro: "✓", teams: "✓" },
  { name: "Offline access", free: "—", pro: "✓", teams: "✓" },
  { name: "Practice exercises", free: "Limited", pro: "✓", teams: "✓" },
  { name: "Priority support", free: "—", pro: "✓", teams: "✓" },
  { name: "Admin dashboard", free: "—", pro: "—", teams: "✓" },
  { name: "Team analytics", free: "—", pro: "—", teams: "✓" },
  { name: "SSO", free: "—", pro: "—", teams: "✓" },
];

const faqs = [
  { q: "Can I cancel anytime?", a: "Yes! You can cancel your subscription at any time. You'll continue to have access until the end of your billing period." },
  { q: "Is there a free trial?", a: "Yes, Pro plans come with a 7-day free trial. No credit card required to start." },
  { q: "Can I switch plans?", a: "Absolutely. You can upgrade or downgrade your plan at any time from your account settings." },
  { q: "Do you offer refunds?", a: "We offer a 30-day money-back guarantee on all paid plans. No questions asked." },
  { q: "What payment methods do you accept?", a: "We accept all major credit cards, PayPal, and bank transfers for Teams plans." },
];

const testimonials = [
  { name: "Sarah M.", role: "Software Developer", text: "LearnPath helped me transition from marketing to tech. The structured courses made all the difference." },
  { name: "James T.", role: "Team Lead at Stripe", text: "We use LearnPath Teams to upskill our engineering team. The analytics dashboard is incredibly useful." },
  { name: "Priya R.", role: "UX Designer", text: "The UX courses are world-class. I got my first design job within 3 months of completing the learning path." },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<Set<number>>(new Set());

  const toggleFaq = (idx: number) => {
    setOpenFaq((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  return (
    <EduLayout title="Pricing & Plans">
      {/* Hero */}
      <section className="py-16 md:py-20 text-center" aria-labelledby="pricing-heading">
        <div className="container">
          <h1 id="pricing-heading" className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto">
            Choose the plan that fits your learning goals. Start free, upgrade anytime.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="pb-16" aria-label="Pricing plans">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`rounded-2xl border p-6 flex flex-col ${
                  plan.highlight
                    ? "border-secondary bg-card shadow-lg shadow-secondary/10 ring-2 ring-secondary relative"
                    : "border-border bg-card"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h2 className="font-display text-xl font-bold text-foreground">{plan.name}</h2>
                <div className="mt-4 mb-2">
                  <span className="font-display text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">{plan.desc}</p>
                <button className={plan.highlight ? "btn-hero-primary w-full mb-6" : "btn-hero-outline w-full mb-6"}>
                  {plan.cta}
                </button>
                <ul className="space-y-3 flex-1" role="list">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground">
                      <Check className="h-4 w-4 text-success mt-0.5 shrink-0" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Money-back guarantee */}
      <section className="py-8 bg-surface-sunken border-y border-border" aria-label="Money-back guarantee">
        <div className="container flex items-center justify-center gap-3">
          <Shield className="h-6 w-6 text-success" aria-hidden="true" />
          <p className="text-sm font-medium text-foreground">30-Day Money-Back Guarantee — No questions asked</p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16" aria-labelledby="compare-heading">
        <div className="container max-w-4xl">
          <h2 id="compare-heading" className="section-heading text-center mb-8">Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 font-display font-semibold text-foreground">Feature</th>
                  <th className="text-center py-3 px-4 font-display font-semibold text-foreground">Free</th>
                  <th className="text-center py-3 px-4 font-display font-semibold text-secondary">Pro</th>
                  <th className="text-center py-3 px-4 font-display font-semibold text-foreground">Teams</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row) => (
                  <tr key={row.name} className="border-b border-border/50">
                    <td className="py-3 pr-4 text-foreground">{row.name}</td>
                    <td className="py-3 px-4 text-center text-muted-foreground">{row.free}</td>
                    <td className="py-3 px-4 text-center text-foreground font-medium">{row.pro}</td>
                    <td className="py-3 px-4 text-center text-muted-foreground">{row.teams}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-primary" aria-labelledby="testimonials-heading">
        <div className="container">
          <h2 id="testimonials-heading" className="font-display text-2xl font-bold text-primary-foreground text-center mb-10">What Learners Say</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 p-6">
                <p className="text-sm text-primary-foreground/80 mb-4">"{t.text}"</p>
                <footer className="text-sm">
                  <span className="font-semibold text-primary-foreground">{t.name}</span>
                  <span className="text-primary-foreground/50 ml-2">{t.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16" aria-labelledby="faq-heading">
        <div className="container max-w-2xl">
          <h2 id="faq-heading" className="section-heading text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-2" role="list">
            {faqs.map((faq, i) => {
              const isOpen = openFaq.has(i);
              return (
                <div key={i} className="border border-border rounded-xl overflow-hidden" role="listitem">
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                  >
                    <span className="font-display font-semibold text-sm text-foreground">{faq.q}</span>
                    {isOpen ? <ChevronUp className="h-4 w-4 text-muted-foreground shrink-0" aria-hidden="true" /> : <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" aria-hidden="true" />}
                  </button>
                  {isOpen && (
                    <div id={`faq-${i}`} className="px-4 pb-4 text-sm text-muted-foreground">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </EduLayout>
  );
}
