import { Route, Routes } from "react-router-dom";
import { ProdactPage } from "./pages/ProdactPage";
import { AboutPage } from "./pages/AboutPage";
import { Navigation } from "./conmponents/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<ProdactPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
