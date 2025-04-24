
import { Routes, Route } from "react-router-dom";
import MainNav from "./components/ui/MainNav";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import CaseStudies from "./pages/CaseStudies";
import NotFound from "./pages/NotFound";
import ConsultarMiCrecimiento from "./pages/ConsultarMiCrecimiento";
import ArticulosDeInteres from "./pages/ArticulosDeInteres";
import "@/App.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/consultar-mi-crecimiento" element={<ConsultarMiCrecimiento />} />
        <Route path="/articulos-de-interes" element={<ArticulosDeInteres />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
