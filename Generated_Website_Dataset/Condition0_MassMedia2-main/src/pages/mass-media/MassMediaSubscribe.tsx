import MeridianLayout from "@/components/mass-media/MeridianLayout";
import { Check } from "lucide-react";
import { useState } from "react";

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Stay informed with essential coverage.",
    features: [
      "5 articles per month",
      "Daily headlines newsletter",
      "Access to breaking news",
      "Community comments",
    ],
    missing: ["Unlimited articles", "Exclusive investigations", "Podcast access", "Print edition", "Ad-free experience"],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Digital",
    price: "$9.99",
    period: "/mo",
    description: "Full access to The Meridian's journalism.",
    features: [
      "Unlimited articles",
      "Exclusive investigations",
      "All newsletters",
      "Podcast access",
      "Ad-free experience",
      "Community comments",
    ],
    missing: ["Print edition"],
    cta: "Start Free Trial",
    featured: true,
  },
  {
    name: "All-Access",
    price: "$19.99",
    period: "/mo",
    description: "The complete Meridian experience.",
    features: [
      "Everything in Digital",
      "Weekly print edition",
      "Exclusive events & briefings",
      "Gift articles (20/month)",
      "Early access to features",
      "Priority support",
      "Annual subscriber gift",
    ],
    missing: [],
    cta: "Start Free Trial",
    featured: false,
  },
];

const testimonials = [
  { text: "The Meridian has become my indispensable morning read. Nuanced, fair, and genuinely independent.", name: "Sarah Chen", role: "University Professor, Boston" },
  { text: "In a world of clickbait, The Meridian is a rare beacon of serious journalism. Worth every penny.", name: "Marcus Okafor", role: "Policy Analyst, London" },
  { text: "The depth of reporting here rivals publications ten times its size. Truly remarkable work.", name: "Ingrid Larsen", role: "Diplomat, Oslo" },
];

const faqs = [
  { q: "Can I cancel anytime?", a: "Yes. You can cancel your subscription at any time from your account settings. Your access continues until the end of your billing period." },
  { q: "Is there a student discount?", a: "Yes! Students receive 50% off all subscription tiers with a valid .edu email address. Contact our support team to activate your discount." },
  { q: "Can I share my subscription?", a: "All-Access subscribers can share up to 20 gift articles per month. Family plans are coming soon." },
  { q: "What payment methods do you accept?", a: "We accept all major credit cards, PayPal, and Apple Pay. Annual subscriptions are also available at a 20% discount." },
];

const MassMediaSubscribe = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <MeridianLayout>
      <div className="meridian-container py-14">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Support Independent Journalism
          </h1>
          <p className="font-sans text-lg text-muted-foreground leading-relaxed">
            Quality journalism costs money. Your subscription funds the investigations, analysis, and reporting that hold power to account.
          </p>
        </div>

        {/* Pricing tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative border rounded-sm p-8 flex flex-col ${
                tier.featured
                  ? "border-meridian-accent bg-card shadow-lg scale-[1.02]"
                  : "border-meridian-rule bg-card"
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-meridian-accent text-accent-foreground font-sans text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-sm">
                  Most Popular
                </div>
              )}
              <h3 className="font-serif text-2xl font-bold mb-1">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="font-serif text-4xl font-bold">{tier.price}</span>
                <span className="font-sans text-sm text-muted-foreground">{tier.period}</span>
              </div>
              <p className="font-sans text-sm text-muted-foreground mb-6">{tier.description}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 font-sans text-sm">
                    <Check size={16} className="text-meridian-accent shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 font-sans font-semibold text-sm uppercase tracking-wider rounded-sm transition-colors ${
                  tier.featured
                    ? "bg-meridian-accent text-accent-foreground hover:bg-meridian-accent-dark"
                    : "bg-meridian-ink text-primary-foreground hover:bg-meridian-ink/90"
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="meridian-rule-heavy mb-8" />
        <h2 className="font-serif text-2xl font-bold mb-8 text-center">What Our Readers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card border border-meridian-rule p-6 rounded-sm">
              <p className="font-sans text-sm leading-relaxed italic mb-4">"{t.text}"</p>
              <div className="font-sans text-sm font-semibold">{t.name}</div>
              <div className="font-sans text-xs text-muted-foreground">{t.role}</div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto mb-20">
          <h2 className="font-serif text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-meridian-rule">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left"
                >
                  <span className="font-sans text-sm font-semibold">{faq.q}</span>
                  <span className="font-sans text-xl text-muted-foreground ml-4">
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="pb-5 pr-8">
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Sign-up form */}
        <div className="max-w-lg mx-auto bg-card border border-meridian-rule p-8 rounded-sm text-center">
          <h3 className="font-serif text-2xl font-bold mb-2">Start Your Subscription</h3>
          <p className="font-sans text-sm text-muted-foreground mb-6">
            7-day free trial. Cancel anytime.
          </p>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full name"
              className="w-full px-4 py-3 border border-meridian-rule bg-background font-sans text-sm rounded-sm focus:outline-none focus:border-meridian-accent"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 border border-meridian-rule bg-background font-sans text-sm rounded-sm focus:outline-none focus:border-meridian-accent"
            />
            <button className="w-full py-3 bg-meridian-accent text-accent-foreground font-sans font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-meridian-accent-dark transition-colors">
              Start Free Trial
            </button>
          </div>
          <p className="font-sans text-[10px] text-muted-foreground mt-4">
            By subscribing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </MeridianLayout>
  );
};

export default MassMediaSubscribe;
