import { Link } from "react-router-dom";
import { useState } from "react";
import { CreditCard, Building2, CheckCircle2, Search, DollarSign } from "lucide-react";
import GovLayout from "@/components/government/GovLayout";

type Step = "lookup" | "balance" | "payment" | "confirmation";

const PayBillPage = () => {
  const [step, setStep] = useState<Step>("lookup");
  const [accountNumber, setAccountNumber] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const mockAccount = {
    name: "Jane M. Richardson",
    address: "1425 Oak Street, Lakewood, CO 80226",
    accountNumber: "LKW-2026-78432",
    currentBalance: 142.37,
    dueDate: "Dec 15, 2026",
    services: [
      { name: "Water Service", amount: 52.18 },
      { name: "Sewer Service", amount: 38.50 },
      { name: "Trash Collection", amount: 32.00 },
      { name: "Stormwater Fee", amount: 12.69 },
      { name: "City Tax", amount: 7.00 },
    ],
  };

  return (
    <GovLayout>
      <div className="bg-primary">
        <div className="gov-container py-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
            Pay a Bill
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            Pay your utility bills online securely. Look up your account and make a payment in minutes.
          </p>
        </div>
      </div>

      <div className="bg-muted border-b border-border">
        <div className="gov-container py-3 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">›</span>
          <Link to="/services" className="hover:text-foreground">Services</Link>
          <span className="mx-2">›</span>
          <span className="text-foreground font-medium">Pay a Bill</span>
        </div>
      </div>

      <section className="gov-section">
        <div className="gov-container max-w-3xl">
          {/* Progress steps */}
          <div className="flex items-center justify-between mb-10">
            {(["lookup", "balance", "payment", "confirmation"] as Step[]).map((s, i) => {
              const labels = ["Account Lookup", "Review Balance", "Payment", "Confirmation"];
              const stepIndex = ["lookup", "balance", "payment", "confirmation"].indexOf(step);
              const isActive = i <= stepIndex;
              return (
                <div key={s} className="flex items-center flex-1 last:flex-initial">
                  <div className="flex flex-col items-center">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                      isActive ? "bg-secondary text-secondary-foreground" : "bg-muted text-muted-foreground"
                    }`}>
                      {i + 1}
                    </div>
                    <span className={`text-xs mt-2 font-medium hidden sm:block ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                      {labels[i]}
                    </span>
                  </div>
                  {i < 3 && (
                    <div className={`flex-1 h-0.5 mx-2 ${i < stepIndex ? "bg-secondary" : "bg-border"}`} />
                  )}
                </div>
              );
            })}
          </div>

          {/* Step: Lookup */}
          {step === "lookup" && (
            <div className="gov-card">
              <h3 className="font-heading text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Search className="h-5 w-5 text-secondary" />
                Account Lookup
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Enter your account number to look up your current balance. You can find your account number on any previous utility bill.
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Account Number</label>
                  <input
                    type="text"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    placeholder="e.g., LKW-2026-78432"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
                <button
                  onClick={() => setStep("balance")}
                  className="w-full py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:brightness-110 transition-all"
                >
                  Look Up Account
                </button>
              </div>
            </div>
          )}

          {/* Step: Balance */}
          {step === "balance" && (
            <div className="gov-card">
              <h3 className="font-heading text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-secondary" />
                Account Balance
              </h3>
              <div className="bg-gov-light rounded-lg p-6 mb-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="font-semibold text-foreground">{mockAccount.name}</p>
                    <p className="text-sm text-muted-foreground">{mockAccount.address}</p>
                    <p className="text-xs text-muted-foreground mt-1 font-mono">{mockAccount.accountNumber}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Amount Due</p>
                    <p className="text-3xl font-bold text-foreground">${mockAccount.currentBalance.toFixed(2)}</p>
                    <p className="text-sm text-gov-red font-medium">Due {mockAccount.dueDate}</p>
                  </div>
                </div>
              </div>

              <h4 className="font-heading text-sm font-bold text-foreground mb-3 uppercase tracking-wider">Charges Breakdown</h4>
              <div className="space-y-2 mb-6">
                {mockAccount.services.map((s) => (
                  <div key={s.name} className="flex justify-between py-2 border-b border-border last:border-0">
                    <span className="text-sm text-foreground">{s.name}</span>
                    <span className="text-sm font-semibold text-foreground">${s.amount.toFixed(2)}</span>
                  </div>
                ))}
                <div className="flex justify-between py-2 font-bold">
                  <span className="text-foreground">Total</span>
                  <span className="text-foreground">${mockAccount.currentBalance.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep("lookup")}
                  className="flex-1 py-3 border border-border rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep("payment")}
                  className="flex-1 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:brightness-110 transition-all"
                >
                  Pay Now
                </button>
              </div>
            </div>
          )}

          {/* Step: Payment */}
          {step === "payment" && (
            <div className="gov-card">
              <h3 className="font-heading text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-secondary" />
                Payment Method
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Paying: <span className="font-bold text-foreground">${mockAccount.currentBalance.toFixed(2)}</span>
              </p>

              <div className="space-y-4 mb-6">
                {[
                  { id: "credit", icon: CreditCard, label: "Credit or Debit Card", desc: "Visa, Mastercard, Discover" },
                  { id: "bank", icon: Building2, label: "Bank Transfer (ACH)", desc: "Direct from checking or savings" },
                ].map((method) => (
                  <label
                    key={method.id}
                    className={`flex items-center gap-4 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                      paymentMethod === method.id ? "border-secondary bg-secondary/5" : "border-border hover:border-muted-foreground/30"
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method.id}
                      checked={paymentMethod === method.id}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="sr-only"
                    />
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                      paymentMethod === method.id ? "bg-secondary text-secondary-foreground" : "bg-muted text-muted-foreground"
                    }`}>
                      <method.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{method.label}</p>
                      <p className="text-xs text-muted-foreground">{method.desc}</p>
                    </div>
                  </label>
                ))}
              </div>

              {paymentMethod === "credit" && (
                <div className="space-y-4 mb-6 p-4 bg-gov-light rounded-lg">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1">Card Number</label>
                    <input type="text" placeholder="•••• •••• •••• ••••" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-1">Expiration</label>
                      <input type="text" placeholder="MM/YY" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-1">CVV</label>
                      <input type="text" placeholder="•••" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary" />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === "bank" && (
                <div className="space-y-4 mb-6 p-4 bg-gov-light rounded-lg">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1">Routing Number</label>
                    <input type="text" placeholder="9-digit routing number" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1">Account Number</label>
                    <input type="text" placeholder="Account number" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary" />
                  </div>
                </div>
              )}

              <div className="flex gap-3">
                <button
                  onClick={() => setStep("balance")}
                  className="flex-1 py-3 border border-border rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep("confirmation")}
                  disabled={!paymentMethod}
                  className="flex-1 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Submit Payment
                </button>
              </div>
            </div>
          )}

          {/* Step: Confirmation */}
          {step === "confirmation" && (
            <div className="gov-card text-center py-12">
              <CheckCircle2 className="h-16 w-16 mx-auto text-secondary mb-4" />
              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Payment Successful!</h3>
              <p className="text-muted-foreground mb-2">
                Your payment of <span className="font-bold text-foreground">${mockAccount.currentBalance.toFixed(2)}</span> has been processed.
              </p>
              <p className="text-sm text-muted-foreground mb-1">Confirmation #: <span className="font-mono font-bold text-foreground">PAY-2026-88214</span></p>
              <p className="text-sm text-muted-foreground mb-6">A receipt has been sent to your email on file.</p>
              <div className="flex gap-3 justify-center">
                <button className="px-6 py-2 border border-border rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors">
                  Print Receipt
                </button>
                <Link
                  to="/"
                  className="px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:brightness-110 transition-all text-sm"
                >
                  Return Home
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </GovLayout>
  );
};

export default PayBillPage;
