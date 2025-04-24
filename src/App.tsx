
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import ArticulosDeInteres from './pages/ArticulosDeInteres';
import CaseStudies from './pages/CaseStudies';
import ConsultarMiCrecimiento from './pages/ConsultarMiCrecimiento';
import Login from './pages/Login';
import Pricing from './pages/Pricing';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/articulos-de-interes" element={<ArticulosDeInteres />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/consultar-mi-crecimiento" element={<ConsultarMiCrecimiento />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
