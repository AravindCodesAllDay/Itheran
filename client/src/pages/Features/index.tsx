import Sidebar from "../../components/Sidebar";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { sections } from "./features";

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
    <main className="pt-24 min-h-screen bg-primary transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex gap-12">
        <Sidebar
          activeId={activeSection}
          onSelect={(id) => navigate(`/features/${id}`)}
        />

        <div className="flex-1 pb-24">
          <div className="reveal">
            <h1 className="text-4xl lg:text-6xl font-bold text-(--light) mb-4">
              {current.title}
            </h1>
            <p className="text-(--secondary) text-xl font-medium mb-8">
              {current.tagline}
            </p>

            <div className="glass p-8 rounded-3xl mb-12 border border-white/5 bg-surface/5">
              <p className="text-(--muted) text-lg leading-relaxed">
                {current.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {current.points.map((point, i) => (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-surface border border-white/5 hover:border-secondary/30 transition-all duration-300 hover:shadow-glow group"
                >
                  <h3 className="text-xl font-bold text-(--light) mb-3 group-hover:text-(--secondary) transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-(--muted) leading-relaxed">{point.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
