import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
   return (
      <div className="relative">
         <div className="absolute top-0 left-0 w-full z-50">
            <Navbar />
         </div>
         <Hero />
      </div>
   );
}

export default App;
