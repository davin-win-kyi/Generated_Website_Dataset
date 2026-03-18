import { Link } from "react-router-dom";
import { useState } from "react";
import { Upload, CheckCircle2, Clock, FileText, AlertCircle } from "lucide-react";
import GovLayout from "@/components/government/GovLayout";

const projectTypes = [
  "Residential Building Permit",
  "Commercial Building Permit",
  "Electrical Permit",
  "Plumbing Permit",
  "Demolition Permit",
  "Sign Permit",
  "Special Event Permit",
  "Home Occupation Permit",
];

const existingApplications = [
  { id: "PRM-2026-4521", type: "Residential Building", status: "Under Review", date: "Oct 28, 2026", progress: 50 },
  { id: "PRM-2026-4498", type: "Electrical Permit", status: "Approved", date: "Oct 15, 2026", progress: 100 },
  { id: "PRM-2026-4467", type: "Sign Permit", status: "Pending Documents", date: "Oct 5, 2026", progress: 25 },
];

const PermitsPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    projectType: "",
    address: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved": return "bg-secondary/15 text-secondary";
      case "Under Review": return "bg-accent/20 text-accent-foreground";
      case "Pending Documents": return "bg-gov-red/10 text-gov-red";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Approved": return <CheckCircle2 className="h-4 w-4" />;
      case "Under Review": return <Clock className="h-4 w-4" />;
      case "Pending Documents": return <AlertCircle className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <GovLayout>
      <div className="bg-primary">
        <div className="gov-container py-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
            Permits & Licenses
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            Apply for building permits, check application status, and manage your existing permits online.
          </p>
        </div>
      </div>

      <div className="bg-muted border-b border-border">
        <div className="gov-container py-3 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">›</span>
          <Link to="/services" className="hover:text-foreground">Services</Link>
          <span className="mx-2">›</span>
          <span className="text-foreground font-medium">Permits & Licenses</span>
        </div>
      </div>

      <section className="gov-section">
        <div className="gov-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Application Form */}
            <div className="lg:col-span-3">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                Online Permit Application
              </h3>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="gov-card space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Applicant Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder="Enter your full legal name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Project Type
                    </label>
                    <select
                      required
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                    >
                      <option value="">Select a permit type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Project Address
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder="Street address, City, State, ZIP"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Upload Documents
                    </label>
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-secondary transition-colors cursor-pointer">
                      <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-3" />
                      <p className="text-sm text-muted-foreground">
                        Drag and drop files here, or <span className="text-secondary font-medium">browse</span>
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">PDF, JPG, PNG up to 10MB each</p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:brightness-110 transition-all"
                  >
                    Submit Application
                  </button>
                </form>
              ) : (
                <div className="gov-card text-center py-12">
                  <CheckCircle2 className="h-16 w-16 mx-auto text-secondary mb-4" />
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                    Application Submitted!
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Your permit application has been received. Reference number:
                  </p>
                  <p className="text-xl font-bold text-secondary mb-4">PRM-2026-4556</p>
                  <p className="text-sm text-muted-foreground mb-6">
                    You will receive a confirmation email with next steps within 2 business days.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: "", projectType: "", address: "" }); }}
                    className="px-6 py-2 border border-border rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors"
                  >
                    Submit Another Application
                  </button>
                </div>
              )}
            </div>

            {/* Status Tracker */}
            <div className="lg:col-span-2">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                Application Status
              </h3>
              <div className="space-y-4">
                {existingApplications.map((app) => (
                  <div key={app.id} className="gov-card">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-semibold text-muted-foreground">{app.id}</span>
                      <span className={`gov-badge text-xs ${getStatusColor(app.status)}`}>
                        {getStatusIcon(app.status)}
                        <span className="ml-1">{app.status}</span>
                      </span>
                    </div>
                    <h4 className="font-heading text-sm font-bold text-foreground">{app.type}</h4>
                    <p className="text-xs text-muted-foreground mt-1">Submitted {app.date}</p>
                    <div className="mt-3">
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-secondary rounded-full transition-all"
                          style={{ width: `${app.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="gov-card mt-6 bg-gov-cream">
                <h4 className="font-heading text-sm font-bold text-foreground mb-2">Need Help?</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Contact the Permits Division for assistance with your application.
                </p>
                <p className="text-sm font-semibold text-foreground">(555) 123-4567 ext. 200</p>
                <p className="text-sm text-muted-foreground">permits@lakewood.gov</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </GovLayout>
  );
};

export default PermitsPage;
