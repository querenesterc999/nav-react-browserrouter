
import Inicio from './components/Inicio';
import Sobre from './components/Sobre';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Servicos from './components/Servicos';
import Footer from './components/Footer';

export default function App() {
  return (
    <> 
      <Header >
        <nav>
         <Link to="/">Início</Link> |{" "}
         <Link to="/sobre">Sobre</Link> |{" "}
         <Link to="/sobre/servicos">Servico</Link> |{" "}
        </nav>
       </Header>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/sobre/servicos" element={<Servicos />} />
        </Routes>
        <Footer year="2026" companyName="PFE 2026.2-Thiago" />
    </>
  );
}

