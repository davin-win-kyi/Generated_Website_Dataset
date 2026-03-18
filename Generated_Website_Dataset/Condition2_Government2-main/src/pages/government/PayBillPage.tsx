import { useState, useRef, useEffect } from "react";
import { CreditCard, Building, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import GovLayout from "@/components/government/GovLayout";
import Breadcrumbs from "@/components/government/Breadcrumbs";

type Step = "lookup" | "review" | "payment" | "processing" | "confirmed";

const PayBillPage = () => {
  const [step, setStep] = useState<Step>("lookup");
  const [accountNumber, setAccountNumber] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [lookupError, setLookupError] = useState("");
  const stepRef = useRef<HTMLHeadingElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (step !== "lookup" && stepRef.current) {
      stepRef.current.focus();
    }
  }, [step]);

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!accountNumber.trim()) {
      setLookupError("Account number is required");
      return;
    }
    setLookupError("");
    setStep("review");
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("processing");
    setTimeout(() => setStep("confirmed"), 2000);
  };

  const stepIndicator = (
    <nav aria-label="Payment progress" className="mb-8">
      <ol className="flex items-center gap-2 text-sm">
        {["Account Lookup", "Review", "Payment", "Confirmation"].map((label, i) => {
          const stepIndex = ["lookup", "review", "payment", "confirmed"].indexOf(step);
          const isActive = i <= stepIndex;
          return (
            <li key={label} className="flex items-center gap-2">
              {i > 0 && <span className={`h-px w-6 ${isActive ? "bg-primary" : "bg-border"}`} aria-hidden="true" />}
              <span className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold ${isActive ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`} aria-hidden="true">
                {i + 1}
              </span>
              <span className={`hidden sm:inline ${isActive ? "font-medium text-foreground" : "text-muted-foreground"}`}
                aria-current={i === stepIndex ? "step" : undefined}>
                {label}
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );

  return (
    <GovLayout title="Pay a Bill">
      <Breadcrumbs items={[{ label: "Services", path: "/services" }, { label: "Pay a Bill" }]} />

      <div className="gov-container py-10">
        <h1 className="mb-2 text-3xl font-bold text-foreground">Pay a Bill</h1>
        <p className="mb-8 max-w-2xl text-muted-foreground">
          Pay your utility bill online securely. Enter your account number to get started.
        </p>

        {stepIndicator}

        <div className="mx-auto max-w-2xl">
          {/* Step 1: Lookup */}
          {step === "lookup" && (
            <section aria-labelledby="lookup-heading" className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <h2 id="lookup-heading" ref={stepRef} tabIndex={-1} className="mb-4 text-xl font-bold text-foreground">
                Account Lookup
              </h2>
              <form onSubmit={handleLookup} noValidate>
                <label htmlFor="account-number" className="mb-1.5 block text-sm font-medium text-foreground">
                  Account Number <span className="text-gov-alert" aria-hidden="true">*</span>
                </label>
                <input
                  id="account-number"
                  type="text"
                  className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="e.g., LKW-2024-00001"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  aria-required="true"
                  aria-invalid={!!lookupError}
                  aria-describedby={lookupError ? "lookup-error" : "lookup-hint"}
                />
                {lookupError ? (
                  <p id="lookup-error" role="alert" className="mt-1 text-sm text-gov-alert">{lookupError}</p>
                ) : (
                  <p id="lookup-hint" className="mt-1 text-xs text-muted-foreground">Find your account number on your billing statement.</p>
                )}
                <Button type="submit" className="mt-4">Find Account</Button>
              </form>
            </section>
          )}

          {/* Step 2: Review */}
          {step === "review" && (
            <section aria-labelledby="review-heading" className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <h2 id="review-heading" ref={stepRef} tabIndex={-1} className="mb-6 text-xl font-bold text-foreground">
                Account Summary
              </h2>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-border pb-2">
                  <dt className="text-muted-foreground">Account Number</dt>
                  <dd className="font-medium text-foreground">{accountNumber || "LKW-2024-00001"}</dd>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <dt className="text-muted-foreground">Account Holder</dt>
                  <dd className="font-medium text-foreground">John M. Resident</dd>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <dt className="text-muted-foreground">Service Address</dt>
                  <dd className="font-medium text-foreground">1234 Elm Street, Lakewood</dd>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <dt className="text-muted-foreground">Billing Period</dt>
                  <dd className="font-medium text-foreground">Oct 1 – Oct 31, 2024</dd>
                </div>
                <div className="flex justify-between pt-1">
                  <dt className="text-lg font-bold text-foreground">Current Balance</dt>
                  <dd className="text-lg font-bold text-primary">$147.52</dd>
                </div>
              </dl>
              <div className="mt-6 flex gap-3">
                <Button onClick={() => setStep("payment")}>Proceed to Payment</Button>
                <Button variant="outline" onClick={() => setStep("lookup")}>Back</Button>
              </div>
            </section>
          )}

          {/* Step 3: Payment */}
          {step === "payment" && (
            <section aria-labelledby="payment-heading" className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <h2 id="payment-heading" ref={stepRef} tabIndex={-1} className="mb-6 text-xl font-bold text-foreground">
                Payment Method
              </h2>
              <form onSubmit={handlePayment}>
                <fieldset>
                  <legend className="mb-3 text-sm font-medium text-foreground">Select payment method</legend>
                  <div className="space-y-2">
                    <label className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition-colors ${paymentMethod === "credit-card" ? "border-primary bg-primary/5" : "border-border"}`}>
                      <input
                        type="radio"
                        name="payment-method"
                        value="credit-card"
                        checked={paymentMethod === "credit-card"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="h-4 w-4 accent-primary"
                      />
                      <CreditCard className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                      <div>
                        <span className="text-sm font-medium text-foreground">Credit / Debit Card</span>
                        <span className="block text-xs text-muted-foreground">Visa, Mastercard, Discover</span>
                      </div>
                    </label>
                    <label className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition-colors ${paymentMethod === "bank" ? "border-primary bg-primary/5" : "border-border"}`}>
                      <input
                        type="radio"
                        name="payment-method"
                        value="bank"
                        checked={paymentMethod === "bank"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="h-4 w-4 accent-primary"
                      />
                      <Building className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                      <div>
                        <span className="text-sm font-medium text-foreground">Bank Transfer (ACH)</span>
                        <span className="block text-xs text-muted-foreground">Direct from checking or savings</span>
                      </div>
                    </label>
                  </div>
                </fieldset>

                <div className="mt-6 rounded-md bg-gov-surface p-4 text-sm">
                  <p className="font-medium text-foreground">Payment Amount: <span className="text-primary">$147.52</span></p>
                </div>

                <div className="mt-6 flex gap-3">
                  <Button type="submit">Pay $147.52</Button>
                  <Button variant="outline" onClick={() => setStep("review")}>Back</Button>
                </div>
              </form>
            </section>
          )}

          {/* Processing */}
          {step === "processing" && (
            <div ref={statusRef} role="status" aria-live="polite" className="rounded-lg border border-border bg-card p-12 text-center shadow-sm">
              <Loader2 className="mx-auto h-10 w-10 animate-spin text-primary" aria-hidden="true" />
              <p className="mt-4 text-lg font-medium text-foreground">Processing your payment…</p>
              <p className="mt-1 text-sm text-muted-foreground">Please do not close this page.</p>
            </div>
          )}

          {/* Confirmed */}
          {step === "confirmed" && (
            <div role="status" aria-live="polite" className="rounded-lg border border-border bg-card p-8 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gov-success/10" aria-hidden="true">
                <CheckCircle className="h-7 w-7 text-gov-success" />
              </div>
              <h2 ref={stepRef} tabIndex={-1} className="text-xl font-bold text-foreground">Payment Successful</h2>
              <p className="mt-2 text-muted-foreground">
                Your payment of <strong className="text-foreground">$147.52</strong> has been processed.
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Confirmation #: <strong className="text-foreground">PAY-2024-48291</strong>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">A receipt has been sent to your email on file.</p>
              <Button className="mt-6" onClick={() => { setStep("lookup"); setAccountNumber(""); }}>
                Pay Another Bill
              </Button>
            </div>
          )}
        </div>
      </div>
    </GovLayout>
  );
};

export default PayBillPage;
