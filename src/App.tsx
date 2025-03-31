
import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Pricing from './pages/Pricing';
import CaseStudies from './pages/CaseStudies';
import ArticulosDeInteres from './pages/ArticulosDeInteres';
import ConsultarMiCrecimiento from './pages/ConsultarMiCrecimiento';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/articulos-de-interes" element={<ArticulosDeInteres />} />
      <Route path="/consultar-mi-crecimiento" element={<ConsultarMiCrecimiento />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
