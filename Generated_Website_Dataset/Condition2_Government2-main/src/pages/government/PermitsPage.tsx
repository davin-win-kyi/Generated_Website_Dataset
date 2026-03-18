import { useState, useRef, useEffect } from "react";
import { Upload, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import GovLayout from "@/components/government/GovLayout";
import Breadcrumbs from "@/components/government/Breadcrumbs";

const projectTypes = [
  "Residential Building Permit",
  "Commercial Building Permit",
  "Electrical Permit",
  "Plumbing Permit",
  "Demolition Permit",
  "Special Event Permit",
  "Business License",
];

const existingApplications = [
  { id: "PRM-2024-0847", type: "Residential Building", status: "Under Review", submitted: "Oct 15, 2024" },
  { id: "PRM-2024-0732", type: "Electrical Permit", status: "Approved", submitted: "Sep 28, 2024" },
  { id: "PRM-2024-0691", type: "Business License", status: "Additional Info Required", submitted: "Sep 10, 2024" },
];

const statusColors: Record<string, string> = {
  "Under Review": "bg-gov-info/10 text-gov-info",
  "Approved": "bg-gov-success/10 text-gov-success",
  "Additional Info Required": "bg-secondary text-secondary-foreground",
};

const PermitsPage = () => {
  const [step, setStep] = useState<"form" | "submitted">("form");
  const [formData, setFormData] = useState({ name: "", projectType: "", address: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const confirmRef = useRef<HTMLHeadingElement>(null);
  const stepHeadingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (step === "submitted" && confirmRef.current) {
      confirmRef.current.focus();
    }
  }, [step]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Applicant name is required";
    if (!formData.projectType) newErrors.projectType = "Please select a project type";
    if (!formData.address.trim()) newErrors.address = "Project address is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setStep("submitted");
    }
  };

  return (
    <GovLayout title="Permits & Licenses">
      <Breadcrumbs items={[{ label: "Services", path: "/services" }, { label: "Permits & Licenses" }]} />

      <div className="gov-container py-10">
        <h1 className="mb-2 text-3xl font-bold text-foreground">Permits & Licenses</h1>
        <p className="mb-10 max-w-2xl text-muted-foreground">
          Apply for building permits, business licenses, and other permits online. Track the status of existing applications below.
        </p>

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Application Form */}
          <section className="lg:col-span-3" aria-labelledby="apply-heading">
            <h2 id="apply-heading" ref={stepHeadingRef} className="mb-6 text-xl font-bold text-foreground">
              Online Permit Application
            </h2>

            {step === "form" ? (
              <form onSubmit={handleSubmit} noValidate className="space-y-5 rounded-lg border border-border bg-card p-6 shadow-sm">
                {/* Name */}
                <div>
                  <label htmlFor="applicant-name" className="mb-1.5 block text-sm font-medium text-foreground">
                    Applicant Name <span className="text-gov-alert" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="applicant-name"
                    type="text"
                    className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" role="alert" className="mt-1 text-sm text-gov-alert">{errors.name}</p>
                  )}
                </div>

                {/* Project Type */}
                <div>
                  <label htmlFor="project-type" className="mb-1.5 block text-sm font-medium text-foreground">
                    Project Type <span className="text-gov-alert" aria-hidden="true">*</span>
                  </label>
                  <select
                    id="project-type"
                    className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    aria-required="true"
                    aria-invalid={!!errors.projectType}
                    aria-describedby={errors.projectType ? "type-error" : undefined}
                  >
                    <option value="">Select a project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  {errors.projectType && (
                    <p id="type-error" role="alert" className="mt-1 text-sm text-gov-alert">{errors.projectType}</p>
                  )}
                </div>

                {/* Address */}
                <div>
                  <label htmlFor="project-address" className="mb-1.5 block text-sm font-medium text-foreground">
                    Project Address <span className="text-gov-alert" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="project-address"
                    type="text"
                    className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    aria-required="true"
                    aria-invalid={!!errors.address}
                    aria-describedby={errors.address ? "address-error" : undefined}
                  />
                  {errors.address && (
                    <p id="address-error" role="alert" className="mt-1 text-sm text-gov-alert">{errors.address}</p>
                  )}
                </div>

                {/* File Upload */}
                <div>
                  <label htmlFor="doc-upload" className="mb-1.5 block text-sm font-medium text-foreground">
                    Supporting Documents (optional)
                  </label>
                  <div className="flex items-center gap-3">
                    <label
                      htmlFor="doc-upload"
                      className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-within:ring-2 focus-within:ring-ring"
                    >
                      <Upload className="h-4 w-4" aria-hidden="true" />
                      Choose Files
                      <input id="doc-upload" type="file" className="sr-only" multiple accept=".pdf,.jpg,.png,.doc,.docx" />
                    </label>
                    <span className="text-sm text-muted-foreground">PDF, JPG, PNG, DOC accepted</span>
                  </div>
                </div>

                <Button type="submit" className="w-full sm:w-auto">
                  Submit Permit Application
                </Button>
              </form>
            ) : (
              <div className="rounded-lg border border-border bg-card p-8 text-center shadow-sm" role="status">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gov-success/10" aria-hidden="true">
                  <CheckCircle className="h-7 w-7 text-gov-success" />
                </div>
                <h3 ref={confirmRef} tabIndex={-1} className="text-xl font-bold text-foreground">
                  Application Submitted Successfully
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Your permit application has been received. Your reference number is <strong className="text-foreground">PRM-2024-0912</strong>.
                </p>
                <p className="mt-1 text-sm text-muted-foreground">You will receive a confirmation email shortly.</p>
                <Button className="mt-6" onClick={() => { setStep("form"); setFormData({ name: "", projectType: "", address: "" }); setErrors({}); }}>
                  Submit Another Application
                </Button>
              </div>
            )}
          </section>

          {/* Status Tracker */}
          <aside className="lg:col-span-2" aria-labelledby="tracker-heading">
            <h2 id="tracker-heading" className="mb-6 text-xl font-bold text-foreground">Application Status</h2>
            <div className="space-y-3">
              {existingApplications.map((app) => (
                <div key={app.id} className="rounded-lg border border-border bg-card p-4 shadow-sm">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-semibold text-foreground">{app.id}</p>
                      <p className="text-sm text-muted-foreground">{app.type}</p>
                    </div>
                    <span className={`inline-block whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColors[app.status] || "bg-muted text-muted-foreground"}`}>
                      {app.status}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">Submitted: {app.submitted}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </GovLayout>
  );
};

export default PermitsPage;
