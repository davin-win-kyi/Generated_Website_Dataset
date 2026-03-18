import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, ShieldCheck, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with limited access to our course library.",
    features: [
      "Access to 50+ free courses",
      "Community forums",
      "Course previews",
      "Basic progress tracking",
    ],
    missing: ["Full course library", "Certificates", "Offline access", "Priority support"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "Full access to every course, certificate, and learning tool.",
    features: [
      "Full course library (500+ courses)",
      "Certificates of completion",
      "Offline downloads",
      "Priority support",
      "Learning paths & roadmaps",
      "Practice exercises & quizzes",
    ],
    missing: [],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Teams",
    price: "$49",
    period: "/seat/month",
    description: "Everything in Pro, plus team management and analytics.",
    features: [
      "Everything in Pro",
      "Admin dashboard",
      "Team progress analytics",
      "Custom learning paths",
      "SSO & integrations",
      "Dedicated account manager",
    ],
    missing: [],
    cta: "Contact Sales",
    popular: false,
  },
];

const faqs = [
  { q: "Can I switch plans at any time?", a: "Yes, you can upgrade, downgrade, or cancel your plan at any time from your account settings." },
  { q: "Is there a free trial for Pro?", a: "Yes! You get a 7-day free trial with full access when you sign up for Pro. No credit card required." },
  { q: "Do you offer student discounts?", a: "Absolutely. Verified students get 50% off Pro. Contact support with your student email for verification." },
  { q: "What payment methods do you accept?", a: "We accept all major credit cards, PayPal, and Apple Pay." },
  { q: "What's your refund policy?", a: "We offer a 30-day money-back guarantee on all paid plans. No questions asked." },
];

const testimonials = [
  { name: "Jordan R.", role: "Software Developer", text: "LearnPath's Pro plan paid for itself in the first week. The quality of instruction is outstanding." },
  { name: "Maria S.", role: "Product Manager", text: "Our entire team uses LearnPath Teams. The analytics dashboard helps us track skill development across the organization." },
  { name: "David C.", role: "Career Changer", text: "I went from zero coding experience to a junior developer role in 6 months, thanks to LearnPath's structured learning paths." },
];

export default function PricingPage() {
  return (
    <PageLayout>
      <section className="bg-background py-16 md:py-20" aria-labelledby="pricing-heading">
        <div className="container text-center">
          <motion.h1
            id="pricing-heading"
            className="font-display text-4xl text-foreground md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Simple, Transparent Pricing
          </motion.h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Choose the plan that fits your learning goals. All plans include access to our community and basic features.
          </p>

          {/* Plans grid */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`relative flex flex-col rounded-xl border p-8 text-left transition-shadow ${
                  plan.popular
                    ? "border-secondary bg-card shadow-elevated"
                    : "border-border bg-card shadow-card"
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground">
                    Most Popular
                  </Badge>
                )}
                <h2 className="font-display text-2xl text-foreground">{plan.name}</h2>
                <div className="mt-3">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{plan.description}</p>

                <ul className="my-6 flex-1 space-y-3" role="list">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden="true" />
                      {feat}
                    </li>
                  ))}
                  {plan.missing.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm text-muted-foreground/50 line-through">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 opacity-30" aria-hidden="true" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "cta" : "outline"}
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <Link to={plan.name === "Teams" ? "#" : "/dashboard"}>{plan.cta}</Link>
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Money-back guarantee */}
          <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-success/20 bg-success/5 px-5 py-2 text-sm text-success">
            <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            30-Day Money-Back Guarantee
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted py-16" aria-labelledby="testimonials-heading">
        <div className="container">
          <h2 id="testimonials-heading" className="mb-10 text-center font-display text-3xl text-foreground">
            What Our Learners Say
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-lg border border-border bg-card p-6 shadow-card">
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className="h-4 w-4 fill-star text-star" aria-hidden="true" />
                  ))}
                </div>
                <p className="mb-4 text-sm text-muted-foreground">"{t.text}"</p>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background py-16" aria-labelledby="faq-heading">
        <div className="container max-w-2xl">
          <h2 id="faq-heading" className="mb-8 text-center font-display text-3xl text-foreground">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible>
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-sm font-medium">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </PageLayout>
  );
}
