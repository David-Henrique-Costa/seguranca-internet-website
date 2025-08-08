import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Key, Eye, EyeOff, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

const SenhaSegura = () => {
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const verificarSenha = (senha) => {
    const criterios = {
      tamanho: senha.length >= 12,
      maiuscula: /[A-Z]/.test(senha),
      minuscula: /[a-z]/.test(senha),
      numero: /\d/.test(senha),
      especial: /[!@#$%^&*(),.?":{}|<>]/.test(senha),
      semSequencia: !/123|abc|qwe/i.test(senha)
    };

    const pontuacao = Object.values(criterios).filter(Boolean).length;
    return { criterios, pontuacao };
  };

  const { criterios, pontuacao } = verificarSenha(senha);

  const getNivelSeguranca = (pontuacao) => {
    if (pontuacao <= 2) return { nivel: 'Fraca', cor: 'text-red-400', bg: 'bg-red-500/20' };
    if (pontuacao <= 4) return { nivel: 'Média', cor: 'text-yellow-400', bg: 'bg-yellow-500/20' };
    return { nivel: 'Forte', cor: 'text-green-400', bg: 'bg-green-500/20' };
  };

  const nivelSeguranca = getNivelSeguranca(pontuacao);

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
            <Key className="h-16 w-16 text-blue-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Como Criar uma Senha Segura
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Aprenda a criar senhas robustas que protegem suas contas contra ataques cibernéticos. 
              Uma senha forte é sua primeira linha de defesa na internet.
            </p>
          </div>

          {/* Password Tester */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Teste sua Senha</h2>
            <div className="space-y-4">
              <div className="relative">
                <input
                  type={mostrarSenha ? 'text' : 'password'}
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  placeholder="Digite uma senha para testar..."
                  className="w-full px-4 py-3 pr-12 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => setMostrarSenha(!mostrarSenha)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-300 hover:text-white"
                >
                  {mostrarSenha ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>

              {senha && (
                <div className="space-y-4">
                  <div className={`p-4 rounded-lg ${nivelSeguranca.bg} border border-white/20`}>
                    <div className="flex items-center space-x-2">
                      <Shield className={`h-5 w-5 ${nivelSeguranca.cor}`} />
                      <span className={`font-semibold ${nivelSeguranca.cor}`}>
                        Nível de Segurança: {nivelSeguranca.nivel}
                      </span>
                    </div>
                    <div className="mt-2 bg-white/10 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-300 ${
                          pontuacao <= 2 ? 'bg-red-500' : 
                          pontuacao <= 4 ? 'bg-yellow-500' : 'bg-green-500'
                        }`}
                        style={{ width: `${(pontuacao / 6) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className={`flex items-center space-x-2 ${criterios.tamanho ? 'text-green-400' : 'text-red-400'}`}>
                        {criterios.tamanho ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                        <span className="text-sm">Pelo menos 12 caracteres</span>
                      </div>
                      <div className={`flex items-center space-x-2 ${criterios.maiuscula ? 'text-green-400' : 'text-red-400'}`}>
                        {criterios.maiuscula ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                        <span className="text-sm">Letra maiúscula</span>
                      </div>
                      <div className={`flex items-center space-x-2 ${criterios.minuscula ? 'text-green-400' : 'text-red-400'}`}>
                        {criterios.minuscula ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                        <span className="text-sm">Letra minúscula</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className={`flex items-center space-x-2 ${criterios.numero ? 'text-green-400' : 'text-red-400'}`}>
                        {criterios.numero ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                        <span className="text-sm">Número</span>
                      </div>
                      <div className={`flex items-center space-x-2 ${criterios.especial ? 'text-green-400' : 'text-red-400'}`}>
                        {criterios.especial ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                        <span className="text-sm">Caractere especial</span>
                      </div>
                      <div className={`flex items-center space-x-2 ${criterios.semSequencia ? 'text-green-400' : 'text-red-400'}`}>
                        {criterios.semSequencia ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                        <span className="text-sm">Sem sequências óbvias</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Guidelines */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
                O que Fazer
              </h3>
              <ul className="space-y-4 text-blue-100">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Use pelo menos 12 caracteres (quanto mais, melhor)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Combine letras maiúsculas e minúsculas</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Inclua números e símbolos especiais</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Use uma senha única para cada conta</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Considere usar um gerenciador de senhas</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Ative a autenticação em duas etapas quando possível</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <XCircle className="h-6 w-6 text-red-400 mr-3" />
                O que Evitar
              </h3>
              <ul className="space-y-4 text-blue-100">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Informações pessoais (nome, data de nascimento, etc.)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Sequências óbvias (123456, abcdef, qwerty)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Palavras do dicionário sem modificações</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Reutilizar senhas em múltiplas contas</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Compartilhar senhas com outras pessoas</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Salvar senhas em locais não seguros</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Methods */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Métodos para Criar Senhas Fortes</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-blue-300 mb-4">Método da Frase</h4>
                <p className="text-blue-100 mb-4">
                  Crie uma frase memorável e use as primeiras letras de cada palavra, 
                  adicionando números e símbolos.
                </p>
                <div className="bg-black/20 p-4 rounded-lg">
                  <p className="text-blue-200 text-sm mb-2">Exemplo:</p>
                  <p className="text-white">"Eu amo pizza com 4 queijos todos os dias!"</p>
                  <p className="text-blue-300 mt-2">→ EapcQ4qtod!</p>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-300 mb-4">Método da Substituição</h4>
                <p className="text-blue-100 mb-4">
                  Pegue uma palavra familiar e substitua letras por números e símbolos similares.
                </p>
                <div className="bg-black/20 p-4 rounded-lg">
                  <p className="text-blue-200 text-sm mb-2">Exemplo:</p>
                  <p className="text-white">"Segurança"</p>
                  <p className="text-blue-300 mt-2">→ S3gur@nç@2024!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Warning */}
          <div className="bg-orange-500/20 border border-orange-500/30 rounded-2xl p-6 mb-12">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-6 w-6 text-orange-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-orange-300 mb-2">Importante!</h3>
                <p className="text-orange-100">
                  Nunca use informações pessoais reais em suas senhas. Os exemplos acima são apenas 
                  para demonstração. Sempre crie senhas únicas e personalizadas para suas contas.
                </p>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Ferramentas Recomendadas</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-500/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Key className="h-8 w-8 text-blue-300" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Gerenciadores de Senha</h4>
                <p className="text-blue-200 text-sm">
                  1Password, Bitwarden, LastPass para gerar e armazenar senhas seguras.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-500/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-purple-300" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Autenticação 2FA</h4>
                <p className="text-blue-200 text-sm">
                  Google Authenticator, Authy para adicionar uma camada extra de segurança.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-500/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-green-300" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Verificadores</h4>
                <p className="text-blue-200 text-sm">
                  Have I Been Pwned para verificar se suas senhas foram comprometidas.
                </p>
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

export default SenhaSegura;

