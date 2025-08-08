import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Award, Clock } from 'lucide-react';

const Sobre = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">SecureNet</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="text-white hover:text-blue-300 transition-colors">
                Início
              </Link>
              <Link to="/sobre" className="text-blue-300 font-semibold">
                Sobre
              </Link>
              <Link to="/contato" className="text-white hover:text-blue-300 transition-colors">
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
              Sobre a SecureNet
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Protegendo sua presença digital há mais de uma década, oferecendo soluções 
              completas de segurança na internet para pessoas físicas e empresas.
            </p>
          </div>

          {/* Company Info */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">Nossa Missão</h2>
              <p className="text-blue-100 leading-relaxed">
                Democratizar o acesso à informação sobre segurança digital, capacitando 
                indivíduos e organizações a navegar com segurança no mundo digital. 
                Acreditamos que a educação é a primeira linha de defesa contra ameaças cibernéticas.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">Nossa Visão</h2>
              <p className="text-blue-100 leading-relaxed">
                Ser a principal referência em educação e consultoria de segurança digital 
                no Brasil, criando um ambiente online mais seguro para todos através do 
                conhecimento e das melhores práticas de segurança.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <div className="bg-blue-500/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-blue-300" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">50k+</div>
              <div className="text-blue-200 text-sm">Usuários Protegidos</div>
            </div>

            <div className="text-center">
              <div className="bg-purple-500/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-purple-300" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">1000+</div>
              <div className="text-blue-200 text-sm">Empresas Atendidas</div>
            </div>

            <div className="text-center">
              <div className="bg-green-500/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-green-300" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-blue-200 text-sm">Prêmios Recebidos</div>
            </div>

            <div className="text-center">
              <div className="bg-orange-500/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-orange-300" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">12+</div>
              <div className="text-blue-200 text-sm">Anos de Experiência</div>
            </div>
          </div>

          {/* Services */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Nossos Serviços</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-300 mb-4">Segurança Pessoal</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>• Consultoria em proteção de dados pessoais</li>
                  <li>• Treinamentos sobre senhas seguras</li>
                  <li>• Orientações sobre navegação segura</li>
                  <li>• Proteção contra phishing e golpes online</li>
                  <li>• Configuração de autenticação em duas etapas</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-300 mb-4">Segurança Empresarial</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>• Auditoria de segurança de sistemas</li>
                  <li>• Implementação de políticas de segurança</li>
                  <li>• Treinamento de equipes</li>
                  <li>• Monitoramento de ameaças</li>
                  <li>• Planos de resposta a incidentes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Team */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Nossa Equipe</h2>
            <p className="text-blue-200 max-w-2xl mx-auto mb-8">
              Contamos com uma equipe multidisciplinar de especialistas em segurança da informação, 
              desenvolvedores e educadores, todos comprometidos em oferecer o melhor conteúdo e 
              serviços de segurança digital.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold text-white mb-2">Dr. Ana Silva</h3>
                <p className="text-blue-300 text-sm mb-2">CEO & Especialista em Segurança</p>
                <p className="text-blue-200 text-sm">PhD em Segurança da Informação com 15 anos de experiência.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold text-white mb-2">Carlos Santos</h3>
                <p className="text-blue-300 text-sm mb-2">CTO & Arquiteto de Segurança</p>
                <p className="text-blue-200 text-sm">Especialista em infraestrutura segura e resposta a incidentes.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold text-white mb-2">Maria Oliveira</h3>
                <p className="text-blue-300 text-sm mb-2">Diretora de Educação</p>
                <p className="text-blue-200 text-sm">Responsável por desenvolver conteúdos educativos e treinamentos.</p>
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

export default Sobre;

