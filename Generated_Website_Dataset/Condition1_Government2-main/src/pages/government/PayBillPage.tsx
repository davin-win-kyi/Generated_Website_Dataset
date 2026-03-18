import { useState } from "react";
import Layout from "@/components/government/Layout";
import { CreditCard, Building2, CheckCircle2, Search, DollarSign } from "lucide-react";

type Step = "lookup" | "review" | "payment" | "confirmation";

const PayBillPage = () => {
  const [step, setStep] = useState<Step>("lookup");
  const [accountNumber, setAccountNumber] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("credit");

  const mockAccount = {
    name: "Jane M. Richardson",
    address: "742 Evergreen Terrace, Lakewood",
    accountNum: "LKW-2025-48291",
    currentBalance: 142.37,
    dueDate: "Dec 15, 2025",
    services: [
      { name: "Water Service", amount: 52.10 },
      { name: "Sewer Service", amount: 38.75 },
      { name: "Trash Collection", amount: 31.52 },
      { name: "Stormwater Fee", amount: 20.00 },
    ],
  };

  return (
    <Layout>
      <section className="bg-primary py-12" aria-labelledby="pay-heading">
        <div className="container">
          <h1 id="pay-heading" className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground">
            Pay a Bill
          </h1>
          <p className="text-primary-foreground/80 mt-2 max-w-2xl">
            Pay your utility bills online quickly and securely.
          </p>
        </div>
      </section>

      <div className="container py-12 md:py-16 max-w-2xl">
        {/* Step indicator */}
        <div className="flex items-center mb-10" role="list" aria-label="Payment steps">
          {(["lookup", "review", "payment", "confirmation"] as Step[]).map((s, i) => (
            <div key={s} className="flex-1 flex flex-col items-center" role="listitem">
              <div className={`h-2 w-full rounded-full mb-2 ${
                (["lookup", "review", "payment", "confirmation"] as Step[]).indexOf(step) >= i ? "bg-accent" : "bg-border"
              }`} />
              <span className={`text-xs capitalize ${
                step === s ? "text-foreground font-semibold" : "text-muted-foreground"
              }`}>{s === "lookup" ? "Account" : s}</span>
            </div>
          ))}
        </div>

        {/* Step: Lookup */}
        {step === "lookup" && (
          <div className="bg-card border rounded-lg p-8">
            <h2 className="text-xl font-serif font-bold text-foreground mb-2 flex items-center gap-2">
              <Search className="h-5 w-5 text-accent" aria-hidden="true" />
              Find Your Account
            </h2>
            <p className="text-sm text-muted-foreground mb-6">Enter your utility account number to view your balance.</p>
            <div className="space-y-4">
              <div>
                <label htmlFor="account-num" className="block text-sm font-medium text-foreground mb-1.5">
                  Account Number <span className="text-destructive" aria-label="required">*</span>
                </label>
                <input
                  id="account-num"
                  type="text"
                  required
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  className="w-full rounded-md border bg-background px-3 py-2.5 text-foreground placeholder:text-muted-foreground focus-visible:outline-ring"
                  placeholder="e.g. LKW-2025-48291"
                />
                <p className="text-xs text-muted-foreground mt-1">Find this on your paper bill or previous email statement.</p>
              </div>
              <button
                onClick={() => setStep("review")}
                className="w-full py-3 rounded-md bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity focus-visible:outline-ring"
              >
                Look Up Account
              </button>
            </div>
          </div>
        )}

        {/* Step: Review */}
        {step === "review" && (
          <div className="bg-card border rounded-lg p-8">
            <h2 className="text-xl font-serif font-bold text-foreground mb-6 flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-accent" aria-hidden="true" />
              Account Summary
            </h2>
            <div className="bg-muted rounded-md p-4 mb-6">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div><span className="text-muted-foreground">Account Holder:</span></div>
                <div className="font-medium text-foreground">{mockAccount.name}</div>
                <div><span className="text-muted-foreground">Address:</span></div>
                <div className="font-medium text-foreground">{mockAccount.address}</div>
                <div><span className="text-muted-foreground">Account #:</span></div>
                <div className="font-mono font-medium text-foreground">{mockAccount.accountNum}</div>
                <div><span className="text-muted-foreground">Due Date:</span></div>
                <div className="font-medium text-foreground">{mockAccount.dueDate}</div>
              </div>
            </div>

            <h3 className="font-semibold text-foreground mb-3">Charges</h3>
            <div className="space-y-2 mb-4">
              {mockAccount.services.map((svc) => (
                <div key={svc.name} className="flex justify-between text-sm py-1.5 border-b last:border-0">
                  <span className="text-foreground">{svc.name}</span>
                  <span className="font-medium text-foreground">${svc.amount.toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between font-bold text-lg text-foreground border-t pt-3">
              <span>Total Due</span>
              <span className="text-accent">${mockAccount.currentBalance.toFixed(2)}</span>
            </div>

            <button
              onClick={() => setStep("payment")}
              className="w-full mt-6 py-3 rounded-md bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity focus-visible:outline-ring"
            >
              Proceed to Payment
            </button>
          </div>
        )}

        {/* Step: Payment */}
        {step === "payment" && (
          <div className="bg-card border rounded-lg p-8">
            <h2 className="text-xl font-serif font-bold text-foreground mb-6 flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-accent" aria-hidden="true" />
              Payment Method
            </h2>
            <p className="text-sm text-muted-foreground mb-4">Amount to pay: <span className="font-bold text-foreground">${mockAccount.currentBalance.toFixed(2)}</span></p>

            <fieldset className="mb-6">
              <legend className="text-sm font-medium text-foreground mb-3">Select Payment Method</legend>
              <div className="space-y-3">
                <label className={`flex items-center gap-3 p-4 rounded-md border cursor-pointer transition-colors ${paymentMethod === "credit" ? "border-accent bg-gov-teal-light" : "hover:bg-muted"}`}>
                  <input type="radio" name="payment" value="credit" checked={paymentMethod === "credit"} onChange={(e) => setPaymentMethod(e.target.value)} className="accent-accent" />
                  <CreditCard className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                  <div>
                    <span className="font-medium text-foreground">Credit / Debit Card</span>
                    <p className="text-xs text-muted-foreground">Visa, Mastercard, AMEX accepted</p>
                  </div>
                </label>
                <label className={`flex items-center gap-3 p-4 rounded-md border cursor-pointer transition-colors ${paymentMethod === "bank" ? "border-accent bg-gov-teal-light" : "hover:bg-muted"}`}>
                  <input type="radio" name="payment" value="bank" checked={paymentMethod === "bank"} onChange={(e) => setPaymentMethod(e.target.value)} className="accent-accent" />
                  <Building2 className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                  <div>
                    <span className="font-medium text-foreground">Bank Transfer (ACH)</span>
                    <p className="text-xs text-muted-foreground">Direct withdrawal from checking or savings</p>
                  </div>
                </label>
              </div>
            </fieldset>

            {paymentMethod === "credit" && (
              <div className="space-y-4 mb-6">
                <div>
                  <label htmlFor="card-number" className="block text-sm font-medium text-foreground mb-1.5">Card Number</label>
                  <input id="card-number" type="text" placeholder="•••• •••• •••• ••••" className="w-full rounded-md border bg-background px-3 py-2.5 text-foreground placeholder:text-muted-foreground focus-visible:outline-ring" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="card-expiry" className="block text-sm font-medium text-foreground mb-1.5">Expiry</label>
                    <input id="card-expiry" type="text" placeholder="MM/YY" className="w-full rounded-md border bg-background px-3 py-2.5 text-foreground placeholder:text-muted-foreground focus-visible:outline-ring" />
                  </div>
                  <div>
                    <label htmlFor="card-cvv" className="block text-sm font-medium text-foreground mb-1.5">CVV</label>
                    <input id="card-cvv" type="text" placeholder="•••" className="w-full rounded-md border bg-background px-3 py-2.5 text-foreground placeholder:text-muted-foreground focus-visible:outline-ring" />
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === "bank" && (
              <div className="space-y-4 mb-6">
                <div>
                  <label htmlFor="routing" className="block text-sm font-medium text-foreground mb-1.5">Routing Number</label>
                  <input id="routing" type="text" placeholder="9 digits" className="w-full rounded-md border bg-background px-3 py-2.5 text-foreground placeholder:text-muted-foreground focus-visible:outline-ring" />
                </div>
                <div>
                  <label htmlFor="account-bank" className="block text-sm font-medium text-foreground mb-1.5">Account Number</label>
                  <input id="account-bank" type="text" placeholder="Account number" className="w-full rounded-md border bg-background px-3 py-2.5 text-foreground placeholder:text-muted-foreground focus-visible:outline-ring" />
                </div>
              </div>
            )}

            <button
              onClick={() => setStep("confirmation")}
              className="w-full py-3 rounded-md bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity focus-visible:outline-ring"
            >
              Pay ${mockAccount.currentBalance.toFixed(2)}
            </button>
          </div>
        )}

        {/* Step: Confirmation */}
        {step === "confirmation" && (
          <div className="bg-card border rounded-lg p-8 text-center" role="status">
            <CheckCircle2 className="h-16 w-16 text-accent mx-auto mb-4" aria-hidden="true" />
            <h2 className="text-2xl font-serif font-bold text-foreground mb-2">Payment Successful!</h2>
            <p className="text-muted-foreground mb-6">Your payment of <span className="font-bold text-foreground">${mockAccount.currentBalance.toFixed(2)}</span> has been processed.</p>
            <div className="bg-muted rounded-md p-4 text-sm text-left inline-block mx-auto">
              <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                <span className="text-muted-foreground">Confirmation #:</span>
                <span className="font-mono font-medium text-foreground">TXN-20251115-4829</span>
                <span className="text-muted-foreground">Account:</span>
                <span className="font-medium text-foreground">{mockAccount.accountNum}</span>
                <span className="text-muted-foreground">Date:</span>
                <span className="font-medium text-foreground">Nov 15, 2025</span>
                <span className="text-muted-foreground">Method:</span>
                <span className="font-medium text-foreground capitalize">{paymentMethod === "credit" ? "Credit Card" : "Bank Transfer"}</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-6">A receipt has been sent to your email on file.</p>
            <button
              onClick={() => { setStep("lookup"); setAccountNumber(""); }}
              className="mt-6 px-6 py-2 rounded-md bg-primary text-primary-foreground font-medium hover:bg-gov-navy-light transition-colors focus-visible:outline-ring"
            >
              Make Another Payment
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default PayBillPage;
