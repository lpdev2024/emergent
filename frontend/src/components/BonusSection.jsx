import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Gift } from 'lucide-react';
import { bonusFeatures } from '../data/mock';

const BonusCard = ({ bonus, index }) => (
  <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white border border-orange-100 hover:border-orange-200">
    <CardContent className="p-6">
      <div className="text-center">
        {/* Bonus Image */}
        <div className="mb-6">
          <img 
            src={bonus.image} 
            alt={bonus.title}
            className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300"
          />
        </div>

        {/* Bonus Badge */}
        <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white mb-3">
          BÔNUS {index + 1}
        </Badge>

        {/* Bonus Title */}
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors">
          {bonus.title}
        </h3>

        {/* Bonus Description */}
        <p className="text-gray-600 leading-relaxed">
          {bonus.description}
        </p>
      </div>
    </CardContent>
  </Card>
);

const BonusSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 border border-green-200 text-green-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <Gift className="w-4 h-4 mr-2" />
            BÔNUS ESPECIAIS
          </div>
          
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              VOCÊ VAI RECEBER:
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            <span className="font-semibold text-orange-600">Plataforma completa com +300 filmes e desenhos animados</span> com histórias bíblicas;
            <br />
            <span className="font-semibold text-orange-600">+100 histórias bíblicas para leitura</span> (formato PDF);
            <br />
            <span className="font-semibold text-orange-600">Aplicativo com Jogos didáticos</span>
          </p>

          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-2">
              ADQUIRINDO HOJE, VOCÊ RECEBERÁ TODOS ESSES
            </h3>
            <p className="text-3xl font-bold">
              BÔNUS GRATUITAMENTE ⬇️
            </p>
          </div>
        </div>

        {/* Bonus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {bonusFeatures.map((bonus, index) => (
            <BonusCard key={bonus.id} bonus={bonus} index={index} />
          ))}
        </div>

        {/* Additional Bonus Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-200 p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              E TEM MAIS...
            </h3>
            <h4 className="text-3xl font-bold text-orange-600 mb-6">
              VOCÊ VAI RECEBER MAIS DE 100 MÚSICAS CRISTÃS 
              <br />
              QUE ENSINAM SOBRE A PALAVRA DE DEUS!
            </h4>
            <div className="bg-white p-6 rounded-xl border border-orange-200">
              <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-3">
                BÔNUS 4
              </Badge>
              <h5 className="text-xl font-bold text-gray-800 mb-3">
                MÚSICAS BÍBLICAS INFANTIS
              </h5>
              <p className="text-gray-600">
                Ajudam os pequenos a aprender sobre Deus enquanto se divertem e memorizam com facilidade
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed italic">
              Em um mundo cada vez mais conectado, é essencial equilibrar o aprendizado offline com as experiências. 
              Você está investindo não apenas em uma educação espiritual, mas também em uma experiência única ao seu filho.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;