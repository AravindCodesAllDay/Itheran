import Sidebar from "../components/Sidebar";
import { useParams, useNavigate, Navigate } from "react-router-dom";

export default function Features() {
  const { featureId } = useParams();
  const navigate = useNavigate();

  const sections = {
    "ai-interview": {
      title: "AI Interactive Interview",
      tagline: "Emotion-Aware Conversational Intelligence",
      description:
        "Experience the next generation of job preparation with our advanced AI interview system. Unlike traditional mock interviews, our model doesn't just ask pre-set questions—it engages in a real-time, dynamic conversation.",
      points: [
        {
          title: "Facial & Voice Data Analysis",
          text: "Our AI analyzes micro-expressions, eye contact, and vocal tonality to assess your confidence and stress levels.",
        },
        {
          title: "Adaptive Questioning",
          text: "Questions are dynamically formed based on your previous answers, emotional state, and subtle behavioral cues.",
        },
        {
          title: "Comprehensive Results",
          text: "Receive a detailed breakdown of your performance, including technical accuracy, soft skills, and body language analysis.",
        },
      ],
      image: "🤖",
    },
    "skill-training": {
      title: "Skill Training Ecosystem",
      tagline: "Bridge the Gap with Targeted Learning",
      description:
        "Identify your weaknesses and turn them into strengths. Our platform maps your current skills against industry requirements to create a personalized growth roadmap.",
      points: [
        {
          title: "Gap Analysis",
          text: "Automatic identification of missing skills based on your dream job description.",
        },
        {
          title: "Curated Resources",
          text: "Direct access to the best courses, documentation, and hands-on projects.",
        },
        {
          title: "Progress Tracking",
          text: "Visual milestones and skill-check assessments to validate your learning journey.",
        },
      ],
      image: "🧠",
    },
    "resume-gen": {
      title: "Resume Generation",
      tagline: "ATS-Optimized, Human-Centric Design",
      description:
        "Your resume is your first impression. We ensure it's a lasting one. Our AI crafts resumes that pass the bots and impress the recruiters.",
      points: [
        {
          title: "Dynamic Optimization",
          text: "Tailor your resume for specific job descriptions in seconds using our AI engine.",
        },
        {
          title: "Professional Templates",
          text: "Choose from high-conversion, modern templates designed for visual impact.",
        },
        {
          title: "Quantifiable Impact",
          text: "Our AI helps frame your experience with action verbs and measurable results.",
        },
      ],
      image: "📄",
    },
    about: {
      title: "About Itheran",
      tagline: "Empowering Careers through Innovation",
      description:
        "Itheran is more than just a platform; it's your personal career companion. Born from the need to democratize high-level interview coaching and skill mapping.",
      points: [
        {
          title: "Our Mission",
          text: "To provide every job seeker with the tools usually reserved for elite candidates.",
        },
        {
          title: "Our Technology",
          text: "Leveraging state-of-the-art LLMs and computer vision to simulate real-world scenarios.",
        },
        {
          title: "Our Vision",
          text: "Building a world where talent, not just preparation, determines success.",
        },
      ],
      image: "🏢",
    },
  };

  const activeSection = featureId || "ai-interview";
  const current = sections[activeSection as keyof typeof sections];

  // If invalid section, redirect to default
  if (!current) {
    return <Navigate to="/features/ai-interview" replace />;
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
            <div className="text-6xl mb-6">{current.image}</div>
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
