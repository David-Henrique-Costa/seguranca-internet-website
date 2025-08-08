import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Globe, Menu, Home, Info, Phone } from 'lucide-react';

// Importando as imagens
import bgImage1 from '../assets/v6INYxQGG6DG.jpeg';
import bgImage2 from '../assets/EItwjFSVKVBh.jpg';
import bgImage3 from '../assets/7Bg26XsRkF1Q.jpg';
import bgImage4 from '../assets/HiAlxFAeukN7.jpg';

const FloatingButton = ({ icon: Icon, title, description, detailedDescription, position, isExpanded, onToggle, linkTo }) => {
  const handleClick = () => {
    if (linkTo && isExpanded) {
      // Se tem link e está expandido, navega para a página
      return;
    } else {
      // Senão, apenas expande/contrai
      onToggle();
    }
  };

  const ButtonContent = () => (
    <div className={`
      bg-gradient-to-br from-blue-600 to-purple-700 
      rounded-full soft-shadow-lg
      flex flex-col items-center justify-center
      text-white font-semibold
      transition-all duration-500 ease-in-out
      hover:shadow-3xl hover:scale-105
      ${isExpanded ? 'w-72 h-72 p-6 sm:w-80 sm:h-80 md:w-96 md:h-96 md:p-8' : 'w-28 h-28 p-3 sm:w-32 sm:h-32 sm:p-4 md:w-40 md:h-40 md:p-6'}
    `}>
      <Icon className={`mb-2 transition-all duration-300 ${isExpanded ? 'w-10 h-10 sm:w-12 sm:h-12' : 'w-6 h-6 sm:w-8 sm:h-8'}`} />
      <h3 className={`text-center font-bold transition-all duration-300 ${
        isExpanded ? 'text-base sm:text-lg mb-3' : 'text-xs sm:text-sm'
      }`}>
        {title}
      </h3>
      {!isExpanded && (
        <p className="text-xs text-center opacity-80 leading-tight hidden sm:block">
          {description}
        </p>
      )}
      {isExpanded && (
        <div className="text-center">
          <p className="text-sm mb-3 opacity-90 leading-relaxed">
            {description}
          </p>
          <p className="text-xs opacity-80 leading-relaxed mb-4">
            {detailedDescription}
          </p>
          {linkTo && (
            <Link 
              to={linkTo}
              className="inline-block bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              Saiba mais
            </Link>
          )}
        </div>
      )}
    </div>
  );

  return (
    <div 
      className={`absolute transition-all duration-500 ease-in-out cursor-pointer floating-button glow-effect ${position} ${
        isExpanded ? 'scale-110 z-20 expanded' : 'scale-100 z-10'
      }`}
      onClick={handleClick}
      tabIndex={0}
      role="button"
      aria-expanded={isExpanded}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <ButtonContent />
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-white/90 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Shield className="w-8 h-8 text-blue-600" />
          <h1 className="text-xl font-bold text-gray-800">SecureNet</h1>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
            <Home className="w-4 h-4" />
            <span>Início</span>
          </Link>
          <Link to="/sobre" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
            <Info className="w-4 h-4" />
            <span>Sobre</span>
          </Link>
          <Link to="/contato" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
            <Phone className="w-4 h-4" />
            <span>Contato</span>
          </Link>
        </nav>

        <button 
          className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
          <nav className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <Link to="/" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
              <Home className="w-4 h-4" />
              <span>Início</span>
            </Link>
            <Link to="/sobre" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
              <Info className="w-4 h-4" />
              <span>Sobre</span>
            </Link>
            <Link to="/contato" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
              <Phone className="w-4 h-4" />
              <span>Contato</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-30 bg-gray-900/90 backdrop-blur-md text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-medium">SecureNet © 2025</span>
          </div>
          <div className="text-xs text-gray-300 text-center md:text-right">
            <p>Protegendo sua navegação na internet</p>
            <p>Desenvolvido para sua segurança digital</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const HomePage = () => {
  const [expandedButton, setExpandedButton] = useState(null);

  const buttons = [
    {
      id: 'security',
      icon: Shield,
      title: 'Segurança na Internet',
      description: 'Proteja-se online',
      detailedDescription: 'A segurança na internet é fundamental nos dias atuais. Envolve práticas e tecnologias para proteger dados pessoais, evitar fraudes, malware e ataques cibernéticos. Inclui o uso de senhas seguras, autenticação em duas etapas, navegação consciente e manter softwares atualizados.',
      position: 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
      linkTo: null // Botão central não tem link
    },
    {
      id: 'password',
      icon: Lock,
      title: 'Senhas Seguras',
      description: 'Crie senhas fortes',
      detailedDescription: 'Uma senha segura deve ter pelo menos 12 caracteres, combinando letras maiúsculas e minúsculas, números e símbolos. Evite informações pessoais, use senhas únicas para cada conta e considere um gerenciador de senhas. Ative a autenticação em duas etapas sempre que possível.',
      position: 'top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2',
      linkTo: '/senha-segura'
    },
    {
      id: 'browsing',
      icon: Globe,
      title: 'Navegação Segura',
      description: 'Dicas de navegação',
      detailedDescription: 'Para navegar com segurança: verifique se sites usam HTTPS, desconfie de links suspeitos, mantenha o navegador atualizado, use extensões de segurança, evite downloads de fontes desconhecidas e seja cauteloso com informações pessoais em redes sociais.',
      position: 'top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2',
      linkTo: '/dicas-navegacao'
    }
  ];

  const handleButtonToggle = (buttonId) => {
    setExpandedButton(expandedButton === buttonId ? null : buttonId);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background com múltiplas imagens */}
      <div className="absolute inset-0 z-0 parallax-bg">
        <div className="absolute inset-0 animated-gradient z-10"></div>
        <div className="grid grid-cols-2 grid-rows-2 h-full">
          <div 
            className="bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url(${bgImage1})` }}
          ></div>
          <div 
            className="bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url(${bgImage2})` }}
          ></div>
          <div 
            className="bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url(${bgImage3})` }}
          ></div>
          <div 
            className="bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url(${bgImage4})` }}
          ></div>
        </div>
      </div>

      <Header />

      {/* Área principal com botões flutuantes */}
      <main className="relative z-20 floating-buttons-container">
        <div className="relative w-full max-w-6xl mx-auto">
          {/* Layout responsivo para mobile */}
          <div className="block sm:hidden space-y-6">
            {buttons.map((button) => (
              <div key={button.id} className="flex justify-center">
                <FloatingButton
                  icon={button.icon}
                  title={button.title}
                  description={button.description}
                  detailedDescription={button.detailedDescription}
                  position="relative"
                  isExpanded={expandedButton === button.id}
                  onToggle={() => handleButtonToggle(button.id)}
                  linkTo={button.linkTo}
                />
              </div>
            ))}
          </div>
          
          {/* Layout desktop com posicionamento absoluto */}
          <div className="hidden sm:block relative h-96">
            {buttons.map((button) => (
              <FloatingButton
                key={button.id}
                icon={button.icon}
                title={button.title}
                description={button.description}
                detailedDescription={button.detailedDescription}
                position={button.position}
                isExpanded={expandedButton === button.id}
                onToggle={() => handleButtonToggle(button.id)}
                linkTo={button.linkTo}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;

