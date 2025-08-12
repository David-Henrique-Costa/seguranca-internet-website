import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, User, Send } from 'lucide-react';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    tipoSeguranca: 'pessoal'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica de envio do formulário
    console.log('Dados do formulário:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        nome: '',
        telefone: '',
        email: '',
        tipoSeguranca: 'pessoal'
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">SecureNet</span>
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="text-white hover:text-blue-300 transition-colors">
                Início
              </Link>
              <Link to="/sobre" className="text-white hover:text-blue-300 transition-colors">
                Sobre
              </Link>
              <Link to="/contato" className="text-blue-300 font-semibold">
                Contato
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Tem dúvidas sobre segurança digital? Precisa de consultoria especializada? 
              Nossa equipe está pronta para ajudar você ou sua empresa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Solicite uma Consultoria</h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="bg-green-500/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Send className="h-8 w-8 text-green-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Mensagem Enviada!</h3>
                  <p className="text-blue-200">
                    Obrigado pelo seu interesse. Nossa equipe entrará em contato em breve.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nome" className="block text-blue-200 text-sm font-medium mb-2">
                      <User className="inline h-4 w-4 mr-2" />
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                      placeholder="Digite seu nome completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefone" className="block text-blue-200 text-sm font-medium mb-2">
                      <Phone className="inline h-4 w-4 mr-2" />
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-blue-200 text-sm font-medium mb-2">
                      <Mail className="inline h-4 w-4 mr-2" />
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="tipoSeguranca" className="block text-blue-200 text-sm font-medium mb-2">
                      <Shield className="inline h-4 w-4 mr-2" />
                      Tipo de Segurança
                    </label>
                    <select
                      id="tipoSeguranca"
                      name="tipoSeguranca"
                      value={formData.tipoSeguranca}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    >
                      <option value="pessoal" className="bg-gray-800">Segurança Pessoal</option>
                      <option value="empresarial" className="bg-gray-800">Segurança Empresarial</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent"
                  >
                    <Send className="inline h-5 w-5 mr-2" />
                    Enviar Solicitação
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">Informações de Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-300" />
                    <span className="text-blue-200">contato@securenet.com.br</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-300" />
                    <span className="text-blue-200">(31) 98765-4321</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">Horário de Atendimento</h3>
                <div className="space-y-2 text-blue-200">
                  <p>Segunda a Sexta: 8h às 18h</p>
                  <p>Sábado: 8h às 12h</p>
                  <p>Domingo: Fechado</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">Tempo de Resposta</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">Segurança Pessoal:</span>
                    <span className="text-white font-semibold">24h</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">Segurança Empresarial:</span>
                    <span className="text-white font-semibold">4h</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">Emergências:</span>
                    <span className="text-white font-semibold">Imediato</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-sm border-t border-white/10 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-blue-200">
            <p>&copy; 2024 SecureNet. Todos os direitos reservados.</p>
            <p className="mt-2 text-sm">Protegendo sua presença digital com excelência.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contato;

