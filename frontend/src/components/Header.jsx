import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-orange-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="https://media.atomicatpages.net/u/R1g90KSBgndKHioCAMFwid7qMkp1/Pictures/xYoJdj5170164.png?width=1109&height=357" 
              alt="ReinoPlay" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-orange-600 hover:text-orange-700 font-medium transition-colors">
              Início
            </a>
            <a href="#content" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Conteúdo
            </a>
            <a href="/pricing" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Planos
            </a>
            <a href="#about" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Sobre
            </a>
            <a href="#contact" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Contato
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button 
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => window.open('/pricing', '_self')}
            >
              Assinar Agora
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-orange-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-orange-100 bg-white/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="/"
                className="block px-3 py-2 text-orange-600 font-medium hover:bg-orange-50 rounded-md transition-colors"
                onClick={toggleMenu}
              >
                Início
              </a>
              <a
                href="#content"
                className="block px-3 py-2 text-gray-700 hover:text-orange-600 font-medium hover:bg-orange-50 rounded-md transition-colors"
                onClick={toggleMenu}
              >
                Conteúdo
              </a>
              <a
                href="/pricing"
                className="block px-3 py-2 text-gray-700 hover:text-orange-600 font-medium hover:bg-orange-50 rounded-md transition-colors"
                onClick={toggleMenu}
              >
                Planos
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-700 hover:text-orange-600 font-medium hover:bg-orange-50 rounded-md transition-colors"
                onClick={toggleMenu}
              >
                Sobre
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-orange-600 font-medium hover:bg-orange-50 rounded-md transition-colors"
                onClick={toggleMenu}
              >
                Contato
              </a>
              <div className="px-3 py-2">
                <Button 
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 shadow-lg"
                  onClick={() => {
                    toggleMenu();
                    window.open('#pricing', '_self');
                  }}
                >
                  Assinar Agora
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;