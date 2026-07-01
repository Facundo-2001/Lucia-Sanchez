import { Routes, Route } from 'react-router-dom';
import './App.css'

// Importa el Layout principal
import Layout from './componentes/layout/Layout.jsx';

// Importa las páginas
import Arfw from './pages/arfw/Arfw';
import SobreMi from './pages/sobre-mi/SobreMi.jsx';
import Portfolio from './pages/portfolio/Portfolio.jsx';
import Contacto from './pages/contacto/Contacto.jsx';
import VideosProgramas from './pages/videos-y-programas/VideosProgramas.jsx';
import Eventos from './pages/eventos/Eventos.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Arfw />} />
        <Route path="sobre-mi" element={<SobreMi />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="videos-y-programas" element={<VideosProgramas />} />
        <Route path="eventos" element={<Eventos />} />
      </Route>
    </Routes>
  )
}

export default App
