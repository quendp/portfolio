import { BrowserRouter } from "react-router-dom";
import EntranceAnimation from "./components/EntranceAnimation/EntranceAnimation";
import HeroSection from "./components/HeroSection/HeroSection";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <BrowserRouter>
      <div className="relative h-screen w-full">
        <EntranceAnimation />
        <HeroSection />
        <Menu />
      </div>
    </BrowserRouter>
  );
}

export default App;
