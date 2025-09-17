import React, { useState } from 'react';
import { Dialog, DialogContent } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { X, AlertTriangle, Gift } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const ExitIntentPopup = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "🎉 Desconto garantido!",
      description: "Enviamos seu cupom de 30% OFF para seu email!",
      duration: 5000,
    });

    setEmail('');
    setIsSubmitting(false);
    onClose();
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

        <div className="bg-gradient-to-br from-red-500 via-pink-500 to-red-600 text-white p-8 text-center">
          {/* Header */}
          <div className="mb-6">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <AlertTriangle className="w-4 h-4 mr-2" />
              ESPERE!
            </div>
            <h2 className="text-2xl font-bold mb-2">
              Não vá embora ainda! 😢
            </h2>
            <p className="text-lg opacity-90 mb-4">
              Que tal um desconto especial antes de sair?
            </p>
          </div>

          {/* Offer */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
            <div className="flex items-center justify-center mb-4">
              <Gift className="w-8 h-8 mr-2" />
              <span className="text-3xl font-bold">30% OFF</span>
            </div>
            <p className="text-lg font-semibold mb-2">
              Cupom de desconto exclusivo!
            </p>
            <p className="text-sm opacity-90">
              Digite seu melhor email e receba um cupom de 30% de desconto 
              para usar em qualquer plano do ReinoPlay
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 mb-6">
            <Input
              type="email"
              placeholder="Digite seu melhor email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/20 border-white/30 text-white placeholder:text-white/70 rounded-full px-6 py-3"
            />
            
            <Button
              type="submit"
              disabled={isSubmitting || !email}
              className="w-full bg-white text-red-600 hover:bg-gray-100 font-bold py-3 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-red-600 border-t-transparent mr-2"></div>
                  Enviando cupom...
                </div>
              ) : (
                '🎁 Quero Meu Desconto de 30%!'
              )}
            </Button>
          </form>

          {/* Alternative */}
          <div className="space-y-2">
            <button
              onClick={() => {
                onClose();
                window.open('/pricing', '_self');
              }}
              className="text-white/90 hover:text-white text-sm underline transition-colors"
            >
              Ou ver planos sem desconto
            </button>
            <br />
            <button
              onClick={onClose}
              className="text-white/70 hover:text-white/90 text-xs transition-colors"
            >
              Não, obrigado. Quero sair mesmo.
            </button>
          </div>

          {/* Trust Badge */}
          <div className="mt-6 text-xs opacity-70">
            Não fazemos spam • Seus dados estão seguros
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;