import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
function App() {
  return (
    <main className="min-h-screen bg-[#080808] text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[140px] rounded-full pointer-events-none" />

      <Navbar />
      <Hero />
      <About />
      <Services />
      <Process />
    </main>
  );
}

export default App;