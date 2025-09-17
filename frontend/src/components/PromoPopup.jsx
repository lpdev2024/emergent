import React, { useState } from 'react';
import { Dialog, DialogContent } from './ui/dialog';
import { Button } from './ui/button';
import { X, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PromoPopup = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleAccessClick = () => {
    onClose();
    navigate('/lead-capture');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white rounded-full p-2 transition-colors shadow-lg"
        >
          <X className="w-4 h-4 text-gray-600" />
        </button>

        <div className="bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 text-white p-8 text-center">
          {/* Header */}
          <div className="mb-6">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Target className="w-4 h-4 mr-2" />
              🎯 Acesso Especial Disponível!
            </div>
            <p className="text-lg leading-relaxed mb-6">
              Preencha um formulário rápido e nossa equipe liberará seu acesso premium hoje mesmo!
            </p>
          </div>

          {/* CTA Button */}
          <div className="space-y-4">
            <Button
              onClick={handleAccessClick}
              className="w-full bg-white text-orange-600 hover:bg-gray-100 font-bold py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🚀 Quero Meu Acesso Agora!
            </Button>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white text-sm underline transition-colors"
            >
              Fechar
            </button>
          </div>

          {/* Trust Badge */}
          <div className="mt-6 text-xs opacity-80">
            🔒 Acesso liberado no mesmo dia • Suporte prioritário via WhatsApp
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PromoPopup;