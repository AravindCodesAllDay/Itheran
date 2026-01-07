export const sections = {
  about: {
    title: `About ${import.meta.env.VITE_APP_NAME}`,
    tagline: "Empowering Careers through Innovation",
    description: `${
      import.meta.env.VITE_APP_NAME
    } is more than just a platform; it's your personal career companion. Born from the need to democratize high-level interview coaching and skill mapping."`,
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
};
