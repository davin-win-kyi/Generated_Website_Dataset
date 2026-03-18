import { useState } from "react";
import Layout from "@/components/mass-media/Layout";
import { Check, ChevronDown } from "lucide-react";

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Stay informed with essential coverage",
    features: ["5 articles per month", "Daily newsletter", "Breaking news alerts", "Public comments"],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Digital",
    price: "$9.99",
    period: "/month",
    description: "Unlimited access to all digital content",
    features: ["Unlimited articles", "All newsletters", "Ad-free experience", "Exclusive analysis", "Podcast access", "Archive access"],
    highlighted: true,
    cta: "Start Free Trial",
  },
  {
    name: "All-Access",
    price: "$19.99",
    period: "/month",
    description: "The complete Meridian experience",
    features: ["Everything in Digital", "Print edition (weekly)", "Events & webinars", "Columnist Q&A sessions", "Early access to features", "Gift articles (10/mo)"],
    highlighted: false,
    cta: "Start Free Trial",
  },
];

const comparisonFeatures = [
  { feature: "Monthly articles", free: "5", digital: "Unlimited", all: "Unlimited" },
  { feature: "Daily newsletter", free: "✓", digital: "✓", all: "✓" },
  { feature: "Breaking news", free: "✓", digital: "✓", all: "✓" },
  { feature: "Ad-free", free: "—", digital: "✓", all: "✓" },
  { feature: "Exclusive analysis", free: "—", digital: "✓", all: "✓" },
  { feature: "Podcast access", free: "—", digital: "✓", all: "✓" },
  { feature: "Archive access", free: "—", digital: "✓", all: "✓" },
  { feature: "Print edition", free: "—", digital: "—", all: "✓" },
  { feature: "Events & webinars", free: "—", digital: "—", all: "✓" },
  { feature: "Gift articles", free: "—", digital: "—", all: "10/mo" },
];

const testimonials = [
  { quote: "The Meridian has become my indispensable morning read. The depth of analysis is unmatched.", author: "Dr. Katherine Wells", title: "Professor of International Relations, Georgetown" },
  { quote: "In an age of clickbait, The Meridian stands out for its commitment to substantive journalism.", author: "Michael Torres", title: "Media Critic, Columbia Journalism Review" },
  { quote: "Worth every penny. The All-Access events alone justify the subscription.", author: "Priya Nair", title: "Technology Executive, Singapore" },
];

const faqs = [
  { q: "Can I cancel anytime?", a: "Yes. You can cancel your subscription at any time from your account settings. You'll continue to have access until the end of your billing period." },
  { q: "Is there a student discount?", a: "Yes! Students with a valid .edu email address receive 50% off all paid plans. Contact our support team to apply the discount." },
  { q: "What payment methods do you accept?", a: "We accept all major credit cards, PayPal, and Apple Pay. Annual subscriptions can also be paid by bank transfer." },
  { q: "Can I share my subscription?", a: "Individual subscriptions are for single use. All-Access members can share up to 10 gift articles per month. For team or institutional access, contact our enterprise sales team." },
  { q: "Do you offer refunds?", a: "We offer a full refund within the first 14 days of any new subscription. After that, you can cancel but won't receive a prorated refund." },
];

const SubscribePage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      <div className="container py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-display font-serif mb-4">Support Independent Journalism</h1>
          <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
            Your subscription powers the reporting that holds power to account. Choose the plan that's right for you.
          </p>
        </div>

        {/* Pricing Tiers */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" aria-label="Subscription plans">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`p-6 rounded-sm border-2 ${
                tier.highlighted
                  ? "border-primary bg-muted/50 relative"
                  : "border-border"
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-primary text-primary-foreground text-overline uppercase font-sans rounded-sm">
                  Most Popular
                </span>
              )}
              <h2 className="text-subheadline font-serif mb-1">{tier.name}</h2>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl font-serif font-bold">{tier.price}</span>
                <span className="text-sm text-muted-foreground font-sans">{tier.period}</span>
              </div>
              <p className="text-sm text-muted-foreground font-sans mb-6">{tier.description}</p>
              <ul className="space-y-2 mb-6" aria-label={`${tier.name} plan features`}>
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm font-sans">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 text-sm font-sans font-medium rounded-sm transition-colors ${
                  tier.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </section>

        {/* Comparison Table */}
        <section className="mb-16" aria-label="Feature comparison">
          <h2 className="text-subheadline font-serif text-center mb-8">Compare Plans</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-sans">
              <thead>
                <tr className="border-b-2 border-foreground">
                  <th className="text-left py-3 pr-4 font-semibold" scope="col">Feature</th>
                  <th className="text-center py-3 px-4 font-semibold" scope="col">Free</th>
                  <th className="text-center py-3 px-4 font-semibold" scope="col">Digital</th>
                  <th className="text-center py-3 px-4 font-semibold" scope="col">All-Access</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row) => (
                  <tr key={row.feature} className="border-b border-border">
                    <td className="py-3 pr-4">{row.feature}</td>
                    <td className="py-3 px-4 text-center text-muted-foreground">{row.free}</td>
                    <td className="py-3 px-4 text-center">{row.digital}</td>
                    <td className="py-3 px-4 text-center">{row.all}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16" aria-label="Subscriber testimonials">
          <h2 className="text-subheadline font-serif text-center mb-8">What Readers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <blockquote key={i} className="bg-muted/50 p-6 rounded-sm">
                <p className="text-sm font-sans italic text-foreground leading-relaxed mb-4">
                  "{t.quote}"
                </p>
                <footer>
                  <p className="text-sm font-sans font-semibold">{t.author}</p>
                  <p className="text-caption text-muted-foreground font-sans">{t.title}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-2xl mx-auto mb-16" aria-label="Frequently asked questions">
          <h2 className="text-subheadline font-serif text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-border">
                <button
                  className="w-full flex items-center justify-between py-4 text-left text-base font-sans font-medium hover:text-primary transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  {faq.q}
                  <ChevronDown
                    className={`w-4 h-4 flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                {openFaq === i && (
                  <div className="pb-4">
                    <p className="text-sm text-muted-foreground font-sans leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Sign-up Form */}
        <section className="max-w-md mx-auto text-center" aria-label="Sign up">
          <h2 className="text-subheadline font-serif mb-4">Ready to Subscribe?</h2>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="signup-name" className="sr-only">Full name</label>
              <input
                id="signup-name"
                type="text"
                placeholder="Full name"
                className="w-full px-4 py-3 border border-border rounded-sm text-sm font-sans bg-background focus:outline-none focus:border-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="signup-email" className="sr-only">Email address</label>
              <input
                id="signup-email"
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 border border-border rounded-sm text-sm font-sans bg-background focus:outline-none focus:border-primary"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-primary text-primary-foreground text-sm font-sans font-medium rounded-sm hover:bg-primary/90 transition-colors"
            >
              Start Your Free Trial
            </button>
            <p className="text-caption text-muted-foreground font-sans">
              14-day free trial. Cancel anytime. No commitment.
            </p>
          </form>
        </section>
      </div>
    </Layout>
  );
};

export default SubscribePage;
