import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import CurriculumVitae from "./pages/CurriculumVitae/CurriculumVitae";
import Experience from "./pages/Experience/Experience";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Portfolio from "./pages/Portfolio/Portfolio";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const endEntAnimation = () => {
    setIsLoading(false);
  };

  const router = createBrowserRouter([
    {
      element: (
        <Layout isLoading={isLoading} endEntAnimation={endEntAnimation} />
      ),
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <Home isLoading={isLoading} />,
        },
        {
          path: "/about",
          element: <About isLoading={isLoading} />,
        },
        {
          path: "/portfolio",
          element: <Portfolio isLoading={isLoading} />,
        },
        {
          path: "/curriculum-vitae",
          element: <CurriculumVitae isLoading={isLoading} />,
        },
        {
          path: "/experience",
          element: <Experience isLoading={isLoading} />,
        },
        {
          path: "/contact",
          element: <Contact isLoading={isLoading} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
