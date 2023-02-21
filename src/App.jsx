import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import EntranceAnimation from "./components/EntranceAnimation/EntranceAnimation";
import HeroSection from "./components/HeroSection/HeroSection";
import Menu from "./components/Menu/Menu";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const endEntAnimation = () => {
    setIsLoading(false);
  };

  return (
    <BrowserRouter>
      <div className="custom-body-wrapper relative h-screen w-full overflow-hidden">
        <EntranceAnimation endEntAnimation={endEntAnimation} />
        <HeroSection isLoading={isLoading} />
        <Menu isLoading={isLoading} />
      </div>
    </BrowserRouter>
  );
}

export default App;
