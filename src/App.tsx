
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pricing from "./pages/Pricing";
import Index from "./pages/Index";
import Login from "./pages/Login";
import ArticulosDeInteres from "./pages/ArticulosDeInteres";
import CaseStudies from "./pages/CaseStudies";
import ConsultarMiCrecimiento from "./pages/ConsultarMiCrecimiento";
import NotFound from "./pages/NotFound";
import CaseStudiesWithImageSection from "./pages/CaseStudiesWithImageSection";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/articulos-de-interes" element={<ArticulosDeInteres />} />
        <Route path="/case-studies" element={<CaseStudiesWithImageSection />} />
        <Route path="/consultar-mi-crecimiento" element={<ConsultarMiCrecimiento />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
