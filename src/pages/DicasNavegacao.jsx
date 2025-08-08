import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Globe, Lock, AlertTriangle, CheckCircle, Eye, Wifi, Download, Mail } from 'lucide-react';

const DicasNavegacao = () => {
  const [urlTeste, setUrlTeste] = useState('');

  const verificarURL = (url) => {
    if (!url) return null;
    
    const criterios = {
      https: url.startsWith('https://'),
      dominio: !url.includes('bit.ly') && !url.includes('tinyurl') && !url.includes('t.co'),
      suspeito: !/[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/.test(url) && 
                !/[a-z0-9-]{20,}/.test(url.replace('https://', '').replace('http://', '')),
      extensao: !url.includes('.exe') && !url.includes('.zip') && !url.includes('.rar')
    };

    const pontuacao = Object.values(criterios).filter(Boolean).length;
    return { criterios, pontuacao };
  };

  const resultadoURL = verificarURL(urlTeste);

  const getNivelConfianca = (pontuacao) => {
    if (!pontuacao) return null;
    if (pontuacao <= 2) return { nivel: 'Suspeita', cor: 'text-red-400', bg: 'bg-red-500/20' };
    if (pontuacao <= 3) return { nivel: 'Cuidado', cor: 'text-yellow-400', bg: 'bg-yellow-500/20' };
    return { nivel: 'Confiável', cor: 'text-green-400', bg: 'bg-green-500/20' };
  };

  const nivelConfianca = resultadoURL ? getNivelConfianca(resultadoURL.pontuacao) : null;

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
            <Globe className="h-16 w-16 text-blue-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Dicas para Navegar Mais Seguramente
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Aprenda a identificar ameaças online e proteger-se contra golpes, phishing e malware. 
              Navegue com confiança e mantenha seus dados seguros.
            </p>
          </div>

          {/* URL Checker */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Verificador de URL</h2>
            <div className="space-y-4">
              <input
                type="url"
                value={urlTeste}
                onChange={(e) => setUrlTeste(e.target.value)}
                placeholder="Cole uma URL para verificar sua segurança..."
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />

              {nivelConfianca && (
                <div className="space-y-4">
                  <div className={`p-4 rounded-lg ${nivelConfianca.bg} border border-white/20`}>
                    <div className="flex items-center space-x-2">
                      <Eye className={`h-5 w-5 ${nivelConfianca.cor}`} />
                      <span className={`font-semibold ${nivelConfianca.cor}`}>
                        Nível de Confiança: {nivelConfianca.nivel}
                      </span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className={`flex items-center space-x-2 ${resultadoURL.criterios.https ? 'text-green-400' : 'text-red-400'}`}>
                        {resultadoURL.criterios.https ? <CheckCircle className="h-4 w-4" /> : <AlertTriangle className="h-4 w-4" />}
                        <span className="text-sm">Usa HTTPS</span>
                      </div>
                      <div className={`flex items-center space-x-2 ${resultadoURL.criterios.dominio ? 'text-green-400' : 'text-red-400'}`}>
                        {resultadoURL.criterios.dominio ? <CheckCircle className="h-4 w-4" /> : <AlertTriangle className="h-4 w-4" />}
                        <span className="text-sm">Domínio confiável</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className={`flex items-center space-x-2 ${resultadoURL.criterios.suspeito ? 'text-green-400' : 'text-red-400'}`}>
                        {resultadoURL.criterios.suspeito ? <CheckCircle className="h-4 w-4" /> : <AlertTriangle className="h-4 w-4" />}
                        <span className="text-sm">Estrutura normal</span>
                      </div>
                      <div className={`flex items-center space-x-2 ${resultadoURL.criterios.extensao ? 'text-green-400' : 'text-red-400'}`}>
                        {resultadoURL.criterios.extensao ? <CheckCircle className="h-4 w-4" /> : <AlertTriangle className="h-4 w-4" />}
                        <span className="text-sm">Sem arquivos suspeitos</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Main Tips */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Lock className="h-6 w-6 text-green-400 mr-3" />
                Navegação Segura
              </h3>
              <ul className="space-y-4 text-blue-100">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Sempre verifique se o site usa HTTPS (cadeado verde)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Mantenha seu navegador sempre atualizado</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Use extensões de segurança confiáveis</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Evite clicar em pop-ups suspeitos</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Desconfie de ofertas "boas demais para ser verdade"</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <AlertTriangle className="h-6 w-6 text-red-400 mr-3" />
                Sinais de Alerta
              </h3>
              <ul className="space-y-4 text-blue-100">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>URLs com muitos números ou caracteres estranhos</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Sites que pedem informações pessoais desnecessárias</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Erros de português ou design amador</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Pressão para agir rapidamente</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Downloads automáticos não solicitados</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Phishing Protection */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Mail className="h-6 w-6 text-blue-400 mr-3" />
              Proteção contra Phishing
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-blue-300 mb-4">Como Identificar</h4>
                <ul className="space-y-3 text-blue-100">
                  <li>• Remetente desconhecido ou suspeito</li>
                  <li>• Urgência excessiva na mensagem</li>
                  <li>• Links que não correspondem ao texto</li>
                  <li>• Solicitação de dados pessoais por email</li>
                  <li>• Anexos não solicitados</li>
                  <li>• Erros de gramática e ortografia</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-300 mb-4">Como se Proteger</h4>
                <ul className="space-y-3 text-blue-100">
                  <li>• Verifique sempre o remetente</li>
                  <li>• Passe o mouse sobre links antes de clicar</li>
                  <li>• Acesse sites diretamente pelo navegador</li>
                  <li>• Nunca forneça dados por email</li>
                  <li>• Use filtros de spam</li>
                  <li>• Mantenha-se informado sobre golpes atuais</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Wi-Fi Security */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Wifi className="h-6 w-6 text-purple-400 mr-3" />
              Segurança em Wi-Fi Público
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-red-500/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <AlertTriangle className="h-8 w-8 text-red-300" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Evite</h4>
                <ul className="text-blue-200 text-sm space-y-1">
                  <li>• Acessar bancos</li>
                  <li>• Fazer compras online</li>
                  <li>• Inserir senhas</li>
                  <li>• Acessar dados sensíveis</li>
                </ul>
              </div>

              <div className="text-center">
                <div className="bg-yellow-500/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Eye className="h-8 w-8 text-yellow-300" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Verifique</h4>
                <ul className="text-blue-200 text-sm space-y-1">
                  <li>• Nome da rede</li>
                  <li>• Autenticidade</li>
                  <li>• Criptografia WPA2/WPA3</li>
                  <li>• Certificados SSL</li>
                </ul>
              </div>

              <div className="text-center">
                <div className="bg-green-500/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-green-300" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Use VPN</h4>
                <ul className="text-blue-200 text-sm space-y-1">
                  <li>• Criptografia adicional</li>
                  <li>• Oculta sua localização</li>
                  <li>• Protege dados</li>
                  <li>• Acesso seguro</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Downloads */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Download className="h-6 w-6 text-orange-400 mr-3" />
              Downloads Seguros
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-green-300 mb-4">Fontes Confiáveis</h4>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Sites oficiais dos desenvolvedores</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Lojas de aplicativos oficiais</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Repositórios verificados</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Sites com boa reputação</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-red-300 mb-4">Cuidados</h4>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-center space-x-2">
                    <AlertTriangle className="h-4 w-4 text-red-400" />
                    <span>Sempre escaneie com antivírus</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <AlertTriangle className="h-4 w-4 text-red-400" />
                    <span>Verifique assinaturas digitais</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <AlertTriangle className="h-4 w-4 text-red-400" />
                    <span>Leia avaliações e comentários</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <AlertTriangle className="h-4 w-4 text-red-400" />
                    <span>Desconfie de downloads automáticos</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Browser Security */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Configurações de Segurança do Navegador</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-blue-300 mb-4">Privacidade</h4>
                <ul className="space-y-2 text-blue-100 text-sm">
                  <li>• Bloqueie cookies de terceiros</li>
                  <li>• Use modo incógnito quando necessário</li>
                  <li>• Limpe dados regularmente</li>
                  <li>• Desative rastreamento</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-300 mb-4">Extensões</h4>
                <ul className="space-y-2 text-blue-100 text-sm">
                  <li>• Use bloqueadores de anúncios</li>
                  <li>• Instale extensões de segurança</li>
                  <li>• Remova extensões desnecessárias</li>
                  <li>• Mantenha extensões atualizadas</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-300 mb-4">Atualizações</h4>
                <ul className="space-y-2 text-blue-100 text-sm">
                  <li>• Ative atualizações automáticas</li>
                  <li>• Verifique versão regularmente</li>
                  <li>• Use versões estáveis</li>
                  <li>• Reinicie após atualizações</li>
                </ul>
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

export default DicasNavegacao;

