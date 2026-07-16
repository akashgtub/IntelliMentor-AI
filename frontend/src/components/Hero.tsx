function Hero() {
  return (
    <section className="bg-slate-950 text-white min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-blue-400 font-semibold mb-4">
          🚀 AI Powered Learning Platform
        </p>

        <h1 className="text-6xl font-bold leading-tight">
          Master
          <span className="text-blue-500"> DSA </span>
          with
          <br />
          IntelliMentor AI
        </h1>

        <p className="text-gray-400 text-xl mt-6 max-w-2xl">
          Learn concepts, solve coding problems, clear doubts with AI,
          attempt quizzes, track progress and become placement ready —
          all in one platform.
        </p>

        <div className="mt-10 flex gap-5">

          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-semibold">
            Start Learning
          </button>

          <button className="border border-white px-8 py-3 rounded-xl hover:bg-white hover:text-black">
            Explore DSA
          </button>

        </div>

      </div>
    </section>
  );
}

export default Hero;