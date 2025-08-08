import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import SenhaSegura from './pages/SenhaSegura';
import DicasNavegacao from './pages/DicasNavegacao';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/senha-segura" element={<SenhaSegura />} />
        <Route path="/dicas-navegacao" element={<DicasNavegacao />} />
      </Routes>
    </Router>
  );
}

export default App;

