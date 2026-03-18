import MeridianHeader from "./MeridianHeader";
import MeridianFooter from "./MeridianFooter";

const MeridianLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <MeridianHeader />
      <main className="flex-1">{children}</main>
      <MeridianFooter />
    </div>
  );
};

export default MeridianLayout;
