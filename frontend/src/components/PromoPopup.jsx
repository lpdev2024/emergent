import React, { useState } from 'react';
import { Dialog, DialogContent } from './ui/dialog';
import { Button } from './ui/button';
import { X, Clock, Gift } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const PromoPopup = ({ isOpen, onClose }) => {
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes
  const { toast } = useToast();

  React.useEffect(() => {
    if (!isOpen) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleClaim = () => {
    toast({
      title: "🎉 Oferta especial ativada!",
      description: "Redirecionando para nossos planos com desconto...",
      duration: 3000,
    });
    onClose();
    setTimeout(() => {
      document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg p-0 overflow-hidden">
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
              <Gift className="w-4 h-4 mr-2" />
              OFERTA ESPECIAL
            </div>
            <h2 className="text-2xl font-bold mb-2">
              🔥 Apenas para visitantes de hoje!
            </h2>
            <p className="text-lg opacity-90">
              Acesso VIP ao ReinoPlay com 50% OFF
            </p>
          </div>

          {/* Timer */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
            <div className="flex items-center justify-center mb-3">
              <Clock className="w-5 h-5 mr-2" />
              <span className="font-semibold">Esta oferta expira em:</span>
            </div>
            <div className="text-4xl font-bold font-mono bg-white/20 rounded-lg py-3 px-6 inline-block">
              {formatTime(timeLeft)}
            </div>
            <p className="text-sm opacity-80 mt-2">minutos restantes</p>
          </div>

          {/* Offer Details */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6 text-left">
            <h3 className="font-bold text-lg mb-3 text-center">Você vai receber:</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                300+ Histórias e desenhos bíblicos
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                100+ Músicas cristãs infantis
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                1500+ Atividades e jogos educativos
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Acesso em todos os dispositivos
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Download para assistir offline
              </li>
            </ul>
          </div>

          {/* Pricing */}
          <div className="mb-6">
            <div className="text-sm opacity-80 line-through mb-1">
              De R$ 47,90/mês
            </div>
            <div className="text-3xl font-bold mb-1">
              Por apenas R$ 23,90/mês
            </div>
            <div className="text-sm opacity-90">
              Ou 12x de R$ 19,70 no plano anual
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <Button
              onClick={handleClaim}
              className="w-full bg-white text-orange-600 hover:bg-gray-100 font-bold py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🎯 SIM! Quero Aproveitar Esta Oferta
            </Button>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white text-sm underline transition-colors"
            >
              Não, obrigado. Prefiro pagar o preço normal.
            </button>
          </div>

          {/* Trust Badge */}
          <div className="mt-6 text-xs opacity-80">
            🔒 Pagamento 100% seguro • Garantia de 7 dias • Cancele quando quiser
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PromoPopup;