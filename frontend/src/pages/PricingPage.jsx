import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Check } from 'lucide-react';
import { pricingPlans, faqData } from '../data/mock';
import { useToast } from '../hooks/use-toast';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

const PricingCard = ({ plan, onSelect }) => {
  const isPopular = plan.popular;
  
  return (
    <Card className={`relative transform transition-all duration-300 hover:scale-105 ${
      isPopular 
        ? 'border-2 border-orange-400 shadow-xl bg-gradient-to-b from-orange-50 to-white' 
        : 'border border-gray-200 hover:border-orange-300 hover:shadow-lg'
    }`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-1 text-sm font-semibold">
            {plan.badge}
          </Badge>
        </div>
      )}
      
      <CardHeader className="text-center pb-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h3>
        
        <div className="mb-2">
          {plan.price.installments ? (
            <div>
              <div className="text-sm text-gray-500 line-through">
                De {plan.price.currency}{plan.price.originalPrice.toFixed(2)}
              </div>
              <div className="text-3xl font-bold text-orange-600">
                {plan.price.installments.count}x de {plan.price.currency}
                <span className="text-4xl">{plan.price.installments.amount.toFixed(2)}</span>
              </div>
              <div className="text-sm text-gray-600 mt-1">
                Ou {plan.price.currency}{plan.price.fullPrice.toFixed(2)} à vista
              </div>
            </div>
          ) : (
            <div>
              <div className="text-3xl font-bold text-orange-600">
                {plan.price.currency}
                <span className="text-5xl">{plan.price.monthly.toFixed(2)}</span>
              </div>
            </div>
          )}
        </div>
        
        <div className="text-sm text-gray-600">
          <div>{plan.billing}</div>
          {plan.cancellation && <div>{plan.cancellation}</div>}
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <ul className="space-y-3 mb-6">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-700">
              <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          className={`w-full py-3 font-semibold text-sm rounded-full transition-all duration-300 transform hover:scale-105 ${
            isPopular
              ? 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg'
              : 'border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white'
          }`}
          variant={isPopular ? 'default' : 'outline'}
          onClick={() => onSelect(plan)}
        >
          {plan.cta}
        </Button>

        {plan.validUntil && (
          <p className="text-xs text-gray-500 text-center mt-3 italic">
            Oferta válida até {plan.validUntil}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

const PricingPage = () => {
  const { toast } = useToast();

  const handlePlanSelect = (plan) => {
    toast({
      title: "🎉 Plano selecionado!",
      description: `Você escolheu o ${plan.name}. Redirecionando para pagamento...`,
      duration: 3000,
    });

    // Simulate redirect to payment
    setTimeout(() => {
      console.log('Redirecting to payment for plan:', plan.id);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-16">
            <img 
              src="https://media.atomicatpages.net/u/R1g90KSBgndKHioCAMFwid7qMkp1/Pictures/xYoJdj5170164.png?width=1109&height=357" 
              alt="ReinoPlay" 
              className="h-10 w-auto"
            />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            QUANTO VALE A VIDA ESPIRITUAL E PSICOLÓGICA DO SEU FILHO(A)?
          </div>
          
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Aposto que você respondeu:
          </h1>
          
          <p className="text-3xl font-bold text-orange-600 mb-6">
            "NÃO TEM PREÇO" Correto??
          </p>
          
          <div className="bg-gradient-to-r from-orange-100 to-amber-100 p-6 rounded-2xl border border-orange-200 max-w-4xl mx-auto">
            <p className="text-xl font-semibold text-gray-800 mb-2">
              POR ESSE MOTIVO ESTAMOS LIBERANDO OS
            </p>
            <p className="text-2xl font-bold text-orange-600 mb-2">
              ACESSOS POR UMA TAXA SIMBÓLICA
            </p>
            <p className="text-lg font-semibold text-gray-700">
              ESCOLHA O PLANO <span className="text-orange-600">IDEAL PARA VOCÊ</span>
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {pricingPlans.map((plan) => (
            <PricingCard 
              key={plan.id} 
              plan={plan} 
              onSelect={handlePlanSelect}
            />
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Perguntas Frequentes
            </span>
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={`item-${faq.id}`}
                className="border border-orange-100 rounded-lg px-6 hover:border-orange-200 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-orange-600 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Agora é a hora de agir
            </h3>
            <p className="text-lg mb-6">
              Tudo isso por apenas
            </p>
            <div className="text-3xl font-bold mb-2">
              12x de R$19,70
            </div>
            <p className="text-lg mb-8">
              Ou R$197 à vista no PIX ou cartão
            </p>
            
            <Button 
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => handlePlanSelect(pricingPlans.find(p => p.popular))}
            >
              QUERO APROVEITAR AGORA
            </Button>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="text-center mt-16 max-w-3xl mx-auto">
          <div className="bg-green-50 border border-green-200 p-6 rounded-2xl">
            <h4 className="text-xl font-bold text-green-800 mb-3">
              🛡️ Garantia de 7 Dias
            </h4>
            <p className="text-green-700 leading-relaxed">
              A única maneira de você saber se a plataforma é para você ou não é estando por dentro. 
              E para tornar essa decisão ainda mais fácil, te damos total liberdade para juntar-se a nós 
              e caso você não aprove, nós te devolveremos seu dinheiro!
            </p>
            <p className="text-green-800 font-semibold mt-3">
              Você não tem o que perder, não é mesmo?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;