import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Textarea } from '../components/ui/textarea';
import { CheckCircle, Zap } from 'lucide-react';
import { leadCaptureForm } from '../data/mock';
import { useToast } from '../hooks/use-toast';
import { useNavigate } from 'react-router-dom';

const LeadCapturePage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    childAge: '',
    interest: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleInputChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Show success message
    toast({
      title: "🎉 Solicitação enviada com sucesso!",
      description: "Redirecionando para nossos planos...",
      duration: 3000,
    });

    setIsSubmitting(false);
    
    // Redirect to pricing page
    setTimeout(() => {
      navigate('/pricing');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
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

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl border border-orange-100 overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-center px-8 py-12">
            <h1 className="text-3xl font-bold mb-4">
              {leadCaptureForm.title}
            </h1>
            <p className="text-lg mb-4 opacity-90">
              {leadCaptureForm.subtitle}
            </p>
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg border border-white/30">
              <p className="font-medium flex items-center justify-center">
                <Zap className="w-5 h-5 mr-2" />
                {leadCaptureForm.urgency}
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome Completo */}
              <div>
                <Label htmlFor="fullName" className="text-sm font-medium text-gray-700 mb-2 block">
                  Nome Completo *
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Digite seu nome completo"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  required
                  className="w-full"
                />
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Digite seu melhor email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                  className="w-full"
                />
              </div>

              {/* WhatsApp */}
              <div>
                <Label htmlFor="whatsapp" className="text-sm font-medium text-gray-700 mb-2 block">
                  WhatsApp *
                </Label>
                <Input
                  id="whatsapp"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={formData.whatsapp}
                  onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                  required
                  className="w-full"
                />
              </div>

              {/* Idade das Crianças */}
              <div>
                <Label htmlFor="childAge" className="text-sm font-medium text-gray-700 mb-2 block">
                  Idade das Crianças
                </Label>
                <Select onValueChange={(value) => handleInputChange('childAge', value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione a faixa etária" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-2">0-2 anos</SelectItem>
                    <SelectItem value="3-5">3-5 anos</SelectItem>
                    <SelectItem value="6-8">6-8 anos</SelectItem>
                    <SelectItem value="9-12">9-12 anos</SelectItem>
                    <SelectItem value="13+">13+ anos</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Principal Interesse */}
              <div>
                <Label htmlFor="interest" className="text-sm font-medium text-gray-700 mb-2 block">
                  Principal Interesse
                </Label>
                <Select onValueChange={(value) => handleInputChange('interest', value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="O que mais te interessa?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="drawings">Desenhos Bíblicos</SelectItem>
                    <SelectItem value="songs">Músicas Cristãs</SelectItem>
                    <SelectItem value="activities">Atividades Educativas</SelectItem>
                    <SelectItem value="all">Todo o conteúdo</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Mensagem */}
              <div>
                <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2 block">
                  Mensagem (Opcional)
                </Label>
                <Textarea
                  id="message"
                  placeholder="Deixe uma mensagem..."
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="w-full"
                  rows={4}
                />
              </div>

              {/* Benefits */}
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 text-lg mb-4 text-center">
                  Ao preencher, você garante:
                </h4>
                <ul className="space-y-3">
                  {leadCaptureForm.benefits.map((benefit, index) => (
                    <li key={index} className="text-green-700 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                      <span>{benefit.replace('✅ ', '')}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent mr-3"></div>
                    Enviando...
                  </div>
                ) : (
                  leadCaptureForm.ctaText
                )}
              </Button>

              {/* Privacy Text */}
              <p className="text-sm text-gray-500 text-center">
                {leadCaptureForm.privacyText}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadCapturePage;