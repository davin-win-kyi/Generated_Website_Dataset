import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, Shield, ChevronDown, ChevronUp, Star } from "lucide-react";
import Layout from "@/components/edu-portal/Layout";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    desc: "Get started with limited course access.",
    features: ["5 free courses", "Community forums", "Mobile access", "Basic progress tracking"],
    notIncluded: ["Full course library", "Certificates", "Offline downloads", "Priority support"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    desc: "Full access to the entire learning library.",
    features: ["Full course library", "Certificates of completion", "Offline downloads", "Priority support", "Learning paths", "Practice exercises"],
    notIncluded: [],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Teams",
    price: "$49",
    period: "/seat/month",
    desc: "Scale learning across your organization.",
    features: ["Everything in Pro", "Admin dashboard", "Team analytics", "Custom learning paths", "SSO integration", "Dedicated account manager"],
    notIncluded: [],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const faqs = [
  { q: "Can I cancel anytime?", a: "Yes, you can cancel your subscription at any time. Your access continues until the end of the billing period." },
  { q: "Is there a free trial?", a: "Yes! Pro plans come with a 7-day free trial. No credit card required to start." },
  { q: "Do certificates expire?", a: "No, certificates you earn are yours to keep forever and can be shared on LinkedIn." },
  { q: "Can I switch plans?", a: "Absolutely. You can upgrade or downgrade at any time from your account settings." },
  { q: "What payment methods do you accept?", a: "We accept all major credit cards, PayPal, and bank transfers for Teams plans." },
];

const testimonials = [
  { name: "Jordan K.", role: "Software Engineer", text: "LearnPath Pro changed my career. I went from junior to senior in 18 months." },
  { name: "Maria S.", role: "Product Manager", text: "The structured learning paths saved me hours of figuring out what to learn next." },
  { name: "David L.", role: "Data Analyst", text: "Worth every penny. The quality of instructors is unmatched." },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">
            Choose Your Learning Plan
          </h1>
          <p className="text-primary-foreground/80 mt-3 max-w-md mx-auto">
            Start free, upgrade when you're ready. All plans include a 30-day money-back guarantee.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-xl border p-6 ${
                plan.highlighted
                  ? "border-primary bg-card shadow-elevated ring-2 ring-primary/20 scale-105"
                  : "border-border bg-card shadow-card"
              }`}
            >
              {plan.highlighted && (
                <div className="text-xs font-bold text-primary mb-3 uppercase tracking-wider">Most Popular</div>
              )}
              <h3 className="font-display font-bold text-xl text-foreground">{plan.name}</h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-4xl font-display font-extrabold text-foreground">{plan.price}</span>
                <span className="text-sm text-muted-foreground">{plan.period}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">{plan.desc}</p>
              <Button
                className="w-full mt-5"
                variant={plan.highlighted ? "default" : "outline"}
                asChild
              >
                <Link to="/dashboard">{plan.cta}</Link>
              </Button>
              <ul className="mt-5 space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Money-back badge */}
      <div className="container mx-auto px-4 py-10 flex justify-center">
        <div className="flex items-center gap-3 px-5 py-3 rounded-full border border-border bg-card shadow-card">
          <Shield className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium text-foreground">30-day money-back guarantee</span>
        </div>
      </div>

      {/* Feature comparison */}
      <section className="surface-sunken py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-display font-bold text-foreground text-center mb-8">Compare Plans</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 text-muted-foreground font-medium">Feature</th>
                  <th className="text-center py-3 font-display font-semibold text-foreground w-28">Free</th>
                  <th className="text-center py-3 font-display font-semibold text-primary w-28">Pro</th>
                  <th className="text-center py-3 font-display font-semibold text-foreground w-28">Teams</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Course access", "5 courses", "Unlimited", "Unlimited"],
                  ["Certificates", "—", "✓", "✓"],
                  ["Offline downloads", "—", "✓", "✓"],
                  ["Learning paths", "—", "✓", "✓"],
                  ["Admin dashboard", "—", "—", "✓"],
                  ["Team analytics", "—", "—", "✓"],
                  ["SSO integration", "—", "—", "✓"],
                  ["Priority support", "—", "✓", "✓"],
                ].map((row) => (
                  <tr key={row[0]}>
                    <td className="py-3 text-foreground">{row[0]}</td>
                    <td className="py-3 text-center text-muted-foreground">{row[1]}</td>
                    <td className="py-3 text-center text-primary font-medium">{row[2]}</td>
                    <td className="py-3 text-center text-muted-foreground">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-display font-bold text-foreground text-center mb-8">What Learners Say</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="p-5 rounded-xl border border-border bg-card">
              <div className="flex gap-0.5 mb-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-4 w-4 text-star fill-star" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground italic">"{t.text}"</p>
              <div className="mt-3">
                <p className="text-sm font-medium text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="surface-sunken py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-2xl font-display font-bold text-foreground text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-border rounded-lg bg-card overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
                >
                  <span className="text-sm font-medium text-foreground">{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4">
                    <p className="text-sm text-muted-foreground">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
