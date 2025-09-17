import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star } from 'lucide-react';
import { testimonials } from '../data/mock';

const TestimonialCard = ({ testimonial }) => (
  <Card className="bg-white border border-orange-100 hover:border-orange-200 transition-all duration-300 hover:shadow-lg">
    <CardContent className="p-6">
      {/* Rating */}
      <div className="flex items-center mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 leading-relaxed mb-6 italic">
        "{testimonial.text}"
      </p>

      {/* Author */}
      <div className="flex items-center">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-orange-200"
        />
        <div>
          <div className="font-semibold text-gray-800">{testimonial.name}</div>
          <div className="text-sm text-gray-600">{testimonial.location}</div>
        </div>
      </div>
    </CardContent>
  </Card>
);

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Quem Adquiriu Amou!
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Veja os depoimentos de famílias que já transformaram a educação cristã dos seus filhos
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              O REINOPLAY NÃO SE TRATA
            </h3>
            <p className="text-3xl font-bold mb-4">
              "APENAS DE FILMES"
            </p>
            <p className="text-lg leading-relaxed">
              E sim uma plataforma intuitiva que irá cuidar por completo da educação da sua criança 
              da melhor maneira possível! Desenvolvida por profissionais da área, 
              <span className="font-semibold"> Pedagogos e Psicólogos Cristãos!</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;