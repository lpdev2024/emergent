import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-orange-50 to-orange-100 border-t border-orange-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <img 
              src="https://media.atomicatpages.net/u/R1g90KSBgndKHioCAMFwid7qMkp1/Pictures/xYoJdj5170164.png?width=1109&height=357" 
              alt="ReinoPlay" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              A única plataforma de entretenimento segura e edificante para sua criança. 
              Histórias e Filmes Bíblicos, Atividades e jogos inspirados na Palavra de Deus!
            </p>
            <div className="flex items-center text-orange-600 text-sm">
              <Heart className="w-4 h-4 mr-1" />
              <span>Feito com ❤️ para sua família!</span>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-600 hover:text-orange-600 transition-colors text-sm">
                  Início
                </a>
              </li>
              <li>
                <a href="#content" className="text-gray-600 hover:text-orange-600 transition-colors text-sm">
                  Conteúdo
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-600 hover:text-orange-600 transition-colors text-sm">
                  Planos
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-orange-600 transition-colors text-sm">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-600 hover:text-orange-600 transition-colors text-sm">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-orange-500 mr-2" />
                <span className="text-gray-600 text-sm">contato@reinoplay.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-orange-500 mr-2" />
                <span className="text-gray-600 text-sm">(11) 99999-9999</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-orange-500 mr-2 mt-0.5" />
                <span className="text-gray-600 text-sm">São Paulo - SP, Brasil</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-orange-200 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 text-sm mb-4 md:mb-0">
              © 2025 ReinoPlay. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6">
              <a href="#privacy" className="text-gray-600 hover:text-orange-600 transition-colors text-sm">
                Política de Privacidade
              </a>
              <a href="#terms" className="text-gray-600 hover:text-orange-600 transition-colors text-sm">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;