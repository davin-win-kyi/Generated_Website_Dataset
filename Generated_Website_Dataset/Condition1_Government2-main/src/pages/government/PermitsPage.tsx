import { useState } from "react";
import Layout from "@/components/government/Layout";
import { FileText, Upload, CheckCircle2, Clock, Search } from "lucide-react";

const projectTypes = [
  "Residential Remodel",
  "New Construction",
  "Commercial Build-Out",
  "Fence/Deck",
  "Electrical Work",
  "Plumbing Work",
  "Demolition",
  "Other",
];

const mockStatuses = [
  { id: "PRM-2025-0847", type: "Residential Remodel", status: "Under Review", date: "Nov 12, 2025", step: 2 },
  { id: "PRM-2025-0831", type: "Fence/Deck", status: "Approved", date: "Nov 1, 2025", step: 4 },
];

const steps = ["Submitted", "Under Review", "Inspection Scheduled", "Approved"];

const PermitsPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [applicantName, setApplicantName] = useState("");
  const [projectType, setProjectType] = useState("");
  const [address, setAddress] = useState("");
  const [trackingId, setTrackingId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="bg-primary py-12" aria-labelledby="permits-heading">
        <div className="container">
          <h1 id="permits-heading" className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground">
            Permits & Licenses
          </h1>
          <p className="text-primary-foreground/80 mt-2 max-w-2xl">
            Apply for building permits, check your application status, and find zoning information.
          </p>
        </div>
      </section>

      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Application Form */}
          <section aria-labelledby="apply-heading">
            <h2 id="apply-heading" className="text-2xl font-serif font-bold text-foreground mb-6 flex items-center gap-2">
              <FileText className="h-6 w-6 text-accent" aria-hidden="true" />
              Online Permit Application
            </h2>

            {submitted ? (
              <div className="bg-gov-teal-light border border-accent/30 rounded-lg p-8 text-center" role="status">
                <CheckCircle2 className="h-12 w-12 text-accent mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">Application Submitted!</h3>
                <p className="text-muted-foreground mb-4">
                  Your permit application has been received. Your tracking number is:
                </p>
                <p className="text-2xl font-bold text-accent mb-4">PRM-2025-0852</p>
                <p className="text-sm text-muted-foreground">
                  You will receive a confirmation email shortly. Use the tracker on this page to check status.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2 rounded-md bg-primary text-primary-foreground font-medium hover:bg-gov-navy-light transition-colors focus-visible:outline-ring"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card border rounded-lg p-6 space-y-5">
                <div>
                  <label htmlFor="applicant-name" className="block text-sm font-medium text-foreground mb-1.5">
                    Applicant Name <span className="text-destructive" aria-label="required">*</span>
                  </label>
                  <input
                    id="applicant-name"
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    className="w-full rounded-md border bg-background px-3 py-2.5 text-foreground placeholder:text-muted-foreground focus-visible:outline-ring"
                    placeholder="Full legal name"
                  />
                </div>

                <div>
                  <label htmlFor="project-type" className="block text-sm font-medium text-foreground mb-1.5">
                    Project Type <span className="text-destructive" aria-label="required">*</span>
                  </label>
                  <select
                    id="project-type"
                    required
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full rounded-md border bg-background px-3 py-2.5 text-foreground focus-visible:outline-ring"
                    aria-label="Select project type"
                  >
                    <option value="">Select a project type</option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="project-address" className="block text-sm font-medium text-foreground mb-1.5">
                    Project Address <span className="text-destructive" aria-label="required">*</span>
                  </label>
                  <input
                    id="project-address"
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full rounded-md border bg-background px-3 py-2.5 text-foreground placeholder:text-muted-foreground focus-visible:outline-ring"
                    placeholder="Street address of the project"
                  />
                </div>

                <div>
                  <label htmlFor="documents" className="block text-sm font-medium text-foreground mb-1.5">
                    Upload Documents
                  </label>
                  <div className="border-2 border-dashed rounded-md p-6 text-center hover:border-accent transition-colors">
                    <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" aria-hidden="true" />
                    <p className="text-sm text-muted-foreground mb-1">Drag & drop files or click to browse</p>
                    <p className="text-xs text-muted-foreground">PDF, JPG, or PNG up to 10MB each</p>
                    <input id="documents" type="file" className="sr-only" multiple accept=".pdf,.jpg,.jpeg,.png" aria-label="Upload project documents" />
                    <label htmlFor="documents" className="mt-3 inline-block px-4 py-2 rounded-md bg-secondary text-secondary-foreground text-sm font-medium cursor-pointer hover:bg-secondary/80 focus-visible:outline-ring">
                      Choose Files
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-md bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity focus-visible:outline-ring"
                >
                  Submit Application
                </button>
              </form>
            )}
          </section>

          {/* Status Tracker */}
          <section aria-labelledby="tracker-heading">
            <h2 id="tracker-heading" className="text-2xl font-serif font-bold text-foreground mb-6 flex items-center gap-2">
              <Clock className="h-6 w-6 text-accent" aria-hidden="true" />
              Application Status Tracker
            </h2>

            <div className="bg-card border rounded-lg p-6 mb-6">
              <label htmlFor="tracking-id" className="block text-sm font-medium text-foreground mb-1.5">
                Look Up by Tracking Number
              </label>
              <div className="flex gap-2">
                <input
                  id="tracking-id"
                  type="text"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  className="flex-1 rounded-md border bg-background px-3 py-2.5 text-foreground placeholder:text-muted-foreground focus-visible:outline-ring"
                  placeholder="e.g. PRM-2025-0847"
                />
                <button className="px-4 py-2.5 rounded-md bg-primary text-primary-foreground font-medium hover:bg-gov-navy-light transition-colors focus-visible:outline-ring" aria-label="Search tracking number">
                  <Search className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <h3 className="font-semibold text-foreground mb-4">Recent Applications</h3>
            <div className="space-y-4">
              {mockStatuses.map((app) => (
                <div key={app.id} className="bg-card border rounded-lg p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="font-mono text-sm font-bold text-accent">{app.id}</span>
                      <p className="text-sm text-muted-foreground">{app.type} · Submitted {app.date}</p>
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      app.status === "Approved"
                        ? "bg-gov-teal-light text-accent"
                        : "bg-alert-bg text-alert-foreground"
                    }`}>
                      {app.status}
                    </span>
                  </div>
                  {/* Progress steps */}
                  <div className="flex items-center gap-1" role="list" aria-label={`Status: ${app.status}`}>
                    {steps.map((step, i) => (
                      <div key={step} className="flex-1 flex flex-col items-center" role="listitem">
                        <div className={`h-2 w-full rounded-full ${
                          i < app.step ? "bg-accent" : "bg-border"
                        }`} />
                        <span className={`text-xs mt-1 ${
                          i < app.step ? "text-foreground font-medium" : "text-muted-foreground"
                        }`}>
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default PermitsPage;
