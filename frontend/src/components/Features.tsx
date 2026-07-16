function Features() {
  const features = [
    {
      title: "DSA Learning",
      description: "Master Data Structures & Algorithms with structured roadmaps.",
      icon: "📘",
    },
    {
      title: "AI Mentor",
      description: "Ask doubts anytime and get instant AI-powered explanations.",
      icon: "🤖",
    },
    {
      title: "Online Compiler",
      description: "Practice Java, Python, C++, and JavaScript in your browser.",
      icon: "💻",
    },
    {
      title: "Daily Challenge",
      description: "Solve one coding problem every day to maintain your streak.",
      icon: "🔥",
    },
    {
      title: "Quiz",
      description: "Test your understanding after every topic.",
      icon: "📝",
    },
    {
      title: "Progress Tracker",
      description: "Track your learning journey with analytics and streaks.",
      icon: "📊",
    },
  ];

  return (
    <section className="bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Everything You Need
        </h2>

        <p className="text-gray-400 text-center mb-12">
          One platform for learning, practicing, and becoming placement ready.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-slate-800 rounded-2xl p-6 hover:scale-105 transition duration-300"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>

              <h3 className="text-2xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;