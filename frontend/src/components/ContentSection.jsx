import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Play, Clock, Lock } from 'lucide-react';
import { biblicalDrawings, christianSongs } from '../data/mock';
import LeadCaptureModal from './LeadCaptureModal';

const ContentCard = ({ item, type, onUnlock }) => (
  <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white border border-orange-100 hover:border-orange-200">
    <CardContent className="p-0">
      <div className="relative">
        <img 
          src={item.thumbnail} 
          alt={item.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        
        {/* Premium Badge */}
        {item.isPremium && (
          <Badge className="absolute top-2 right-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white">
            Premium
          </Badge>
        )}

        {/* Duration */}
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center">
          <Clock className="w-3 h-3 mr-1" />
          {item.duration}
        </div>

        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-t-lg flex items-center justify-center">
          <Button
            size="sm"
            className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 text-orange-600 hover:bg-white hover:text-orange-700 rounded-full p-3"
            onClick={onUnlock}
          >
            {item.isPremium ? <Lock className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </Button>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-800 text-sm leading-snug mb-2 group-hover:text-orange-600 transition-colors">
          {item.title}
        </h3>
        
        {item.isPremium && (
          <Button
            size="sm"
            variant="outline"
            className="w-full text-xs border-orange-200 text-orange-600 hover:bg-orange-50"
            onClick={onUnlock}
          >
            Desbloquear Conteúdo
          </Button>
        )}
      </div>
    </CardContent>
  </Card>
);

const ContentSection = () => {
  const [showLeadCapture, setShowLeadCapture] = useState(false);

  const handleUnlock = () => {
    setShowLeadCapture(true);
  };

  return (
    <>
      <section id="content" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Fé em Movimento
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Descubra histórias bíblicas incríveis, músicas que tocam o coração e atividades 
              divertidas que fortalecem a fé das crianças. Uma jornada de amor, alegria e aprendizado cristão.
            </p>
          </div>

          {/* Biblical Drawings Section */}
          <div className="mb-20">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800">Desenhos Bíblicos</h3>
              <Button 
                variant="outline"
                className="border-orange-200 text-orange-600 hover:bg-orange-50"
                onClick={handleUnlock}
              >
                Ver Todos
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {biblicalDrawings.slice(0, 8).map((item) => (
                <ContentCard 
                  key={item.id} 
                  item={item} 
                  type="drawing"
                  onUnlock={handleUnlock}
                />
              ))}
            </div>

            {/* Unlock All CTA */}
            <div className="text-center mt-8">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                onClick={handleUnlock}
              >
                Desbloquear Todo Conteúdo
              </Button>
            </div>
          </div>

          {/* Christian Songs Section */}
          <div>
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800">Músicas Cristãs</h3>
              <Button 
                variant="outline"
                className="border-orange-200 text-orange-600 hover:bg-orange-50"
                onClick={handleUnlock}
              >
                Ver Todas
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {christianSongs.map((item) => (
                <ContentCard 
                  key={item.id} 
                  item={item} 
                  type="song"
                  onUnlock={handleUnlock}
                />
              ))}
            </div>

            {/* Unlock All CTA */}
            <div className="text-center mt-8">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                onClick={handleUnlock}
              >
                Desbloquear Todas as Músicas
              </Button>
            </div>
          </div>

          {/* Call to Action Banner */}
          <div className="mt-20 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">
              Quanto vale a vida espiritual do seu filho(a)?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Aposto que você respondeu: "NÃO TEM PREÇO" Correto?
            </p>
            <p className="text-xl font-semibold mb-8">
              POR ESSE MOTIVO ESTAMOS LIBERANDO OS ACESSOS POR UMA TAXA SIMBÓLICA
            </p>
            <Button 
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Planos e Preços
            </Button>
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

export default ContentSection;