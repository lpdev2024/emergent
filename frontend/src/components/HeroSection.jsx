import React from 'react';
import { Button } from './ui/button';
import { Play, Star } from 'lucide-react';
import { heroData } from '../data/mock';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <>
      <section id="home" className="relative min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-orange-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-200 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                  <span className="text-orange-600">{heroData.title.split(' ')[0]}</span>{' '}
                  <span className="text-orange-600">{heroData.title.split(' ')[1]}</span>
                  <br />
                  <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                    {heroData.title.split(' ').slice(2).join(' ')}
                  </span>
                </h1>

                <p className="text-xl sm:text-2xl text-gray-700 font-medium leading-relaxed">
                  {heroData.subtitle}
                </p>

                <p className="text-lg text-gray-600 leading-relaxed">
                  {heroData.description}
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-gray-600">
                  <span className="font-semibold text-orange-600">10.000+</span> famílias transformadas
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                  onClick={() => setShowLeadCapture(true)}
                >
                  <Play className="w-5 h-5 mr-2" />
                  {heroData.ctaText}
                </Button>

                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300"
                  onClick={() => document.getElementById('content').scrollIntoView({ behavior: 'smooth' })}
                >
                  Ver Conteúdo
                </Button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Conteúdo 100% Seguro</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Sem Anúncios</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Download Offline</span>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src={heroData.heroImage}
                  alt="ReinoPlay - Plataforma Cristã" 
                  className="w-full h-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-500"
                />
                
                {/* Floating Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="bg-white/90 backdrop-blur-sm text-orange-600 hover:bg-white hover:text-orange-700 rounded-full p-4 shadow-2xl transition-all duration-300 transform hover:scale-110"
                    onClick={() => setShowLeadCapture(true)}
                  >
                    <Play className="w-8 h-8" />
                  </Button>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full opacity-30 animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-orange-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">300+</div>
              <div className="text-gray-600 text-sm">Histórias Bíblicas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">100+</div>
              <div className="text-gray-600 text-sm">Músicas Cristãs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">1500+</div>
              <div className="text-gray-600 text-sm">Atividades</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">24/7</div>
              <div className="text-gray-600 text-sm">Disponível</div>
            </div>
          </div>
        </div>
      </section>

      <LeadCaptureModal 
        isOpen={showLeadCapture} 
        onClose={() => setShowLeadCapture(false)} 
      />
    </>
  );
};

export default HeroSection;