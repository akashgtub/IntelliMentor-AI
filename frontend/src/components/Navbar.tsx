function Navbar() {
  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-blue-400">
          IntelliMentor AI
        </h1>

        <ul className="flex gap-8 font-medium">
          <li className="cursor-pointer hover:text-blue-400">Home</li>
          <li className="cursor-pointer hover:text-blue-400">Roadmap</li>
          <li className="cursor-pointer hover:text-blue-400">Features</li>
          <li className="cursor-pointer hover:text-blue-400">About</li>
        </ul>

        <button className="bg-blue-500 px-5 py-2 rounded-lg hover:bg-blue-600">
          Login
        </button>

      </div>
    </nav>
  );
}

export default Navbar;