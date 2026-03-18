import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 font-serif text-4xl font-bold">The Meridian</h1>
        <p className="text-lg text-muted-foreground mb-8">Digital News Portal</p>
        <Link
          to="/mass-media"
          className="inline-block px-8 py-3 bg-meridian-accent text-accent-foreground font-sans font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-meridian-accent-dark transition-colors"
        >
          Enter The Meridian →
        </Link>
      </div>
    </div>
  );
};

export default Index;
