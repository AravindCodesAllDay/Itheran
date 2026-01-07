import Sidebar from "../../components/Sidebar";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { sections } from "./features";
import { StarBurst, Squiggle } from "../../components/FunElements";

export default function Features() {
  const { featureId } = useParams();
  const navigate = useNavigate();

  const activeSection = featureId || "about";
  const current = sections[activeSection as keyof typeof sections];

  // If invalid section, redirect to default
  if (!current) {
    return <Navigate to="/features/about" replace />;
  }

  return (
    <main className="pt-28 min-h-screen bg-primary transition-colors duration-300 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-12 relative z-10">
        <Sidebar
          activeId={activeSection}
          onSelect={(id) => navigate(`/features/${id}`)}
        />

        <div className="flex-1 pb-24">
          <div className="reveal">
            {/* Header */}
            <div className="relative mb-8">
              <StarBurst className="text-accent absolute -top-8 -left-8 w-12 h-12 animate-spin-slow opacity-80" />
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-light mb-4 drop-shadow-sm">
                {current.title}
              </h1>
              <p className="text-secondary text-2xl font-display font-medium relative inline-block">
                {current.tagline}
                <Squiggle className="text-accent w-full -bottom-2 left-0 h-4" />
              </p>
            </div>

            {/* Main Description Card */}
            <div className="bg-surface dark:bg-white/5 p-8 rounded-[2.5rem] mb-12 border-2 border-primary/10 dark:border-white/10 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)]">
              <p className="text-muted dark:text-light/90 text-lg leading-relaxed font-medium">
                {current.description}
              </p>
            </div>

            {/* Feature Points Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {current.points?.map((point, i) => (
                <div
                  key={i}
                  className="p-8 rounded-4xl bg-white dark:bg-white/5 border-2 border-primary/5 dark:border-white/10 hover:border-secondary dark:hover:border-secondary hover:translate-x-1 hover:-translate-y-1 transition-all duration-300 hover:shadow-[6px_6px_0px_0px_var(--color-secondary)] group cursor-default"
                >
                  <h3 className="text-xl font-display font-bold text-light mb-3 group-hover:text-secondary transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-muted dark:text-light/70 leading-relaxed font-medium">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
