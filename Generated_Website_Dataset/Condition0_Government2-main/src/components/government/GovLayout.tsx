import GovHeader from "./GovHeader";
import GovFooter from "./GovFooter";

const GovLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col font-body">
      <GovHeader />
      <main className="flex-1">{children}</main>
      <GovFooter />
    </div>
  );
};

export default GovLayout;
