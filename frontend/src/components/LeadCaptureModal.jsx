import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { X, Zap, CheckCircle } from 'lucide-react';
import { leadCaptureForm } from '../data/mock';
import { useToast } from '../hooks/use-toast';

const LeadCaptureModal = ({ isOpen, onClose }) => {
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
      description: "Nossa equipe entrará em contato em até 30 minutos!",
      duration: 5000,
    });

    // Reset form and close modal
    setFormData({
      fullName: '',
      email: '',
      whatsapp: '',
      childAge: '',
      interest: '',
      message: ''
    });
    setIsSubmitting(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-orange-600 mb-2">
            {leadCaptureForm.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="text-center">
            <p className="text-gray-700 mb-3">
              {leadCaptureForm.subtitle}
            </p>
            <div className="bg-gradient-to-r from-orange-100 to-amber-100 p-3 rounded-lg border border-orange-200">
              <p className="text-orange-700 font-medium flex items-center justify-center">
                <Zap className="w-4 h-4 mr-2" />
                {leadCaptureForm.urgency}
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Nome Completo */}
            <div>
              <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                Nome Completo *
              </Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Digite seu nome completo"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                required
                className="mt-1"
              />
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Digite seu melhor email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                className="mt-1"
              />
            </div>

            {/* WhatsApp */}
            <div>
              <Label htmlFor="whatsapp" className="text-sm font-medium text-gray-700">
                WhatsApp *
              </Label>
              <Input
                id="whatsapp"
                type="tel"
                placeholder="(11) 99999-9999"
                value={formData.whatsapp}
                onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                required
                className="mt-1"
              />
            </div>

            {/* Idade das Crianças */}
            <div>
              <Label htmlFor="childAge" className="text-sm font-medium text-gray-700">
                Idade das Crianças
              </Label>
              <Select onValueChange={(value) => handleInputChange('childAge', value)}>
                <SelectTrigger className="mt-1">
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
              <Label htmlFor="interest" className="text-sm font-medium text-gray-700">
                Principal Interesse
              </Label>
              <Select onValueChange={(value) => handleInputChange('interest', value)}>
                <SelectTrigger className="mt-1">
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
              <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                Mensagem (Opcional)
              </Label>
              <Textarea
                id="message"
                placeholder="Deixe uma mensagem..."
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className="mt-1"
                rows={3}
              />
            </div>

            {/* Benefits */}
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 text-sm mb-2">
                Ao preencher, você garante:
              </h4>
              <ul className="space-y-1">
                {leadCaptureForm.benefits.map((benefit, index) => (
                  <li key={index} className="text-sm text-green-700 flex items-center">
                    <CheckCircle className="w-3 h-3 mr-2 text-green-500" />
                    {benefit.replace('✅ ', '')}
                  </li>
                ))}
              </ul>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold py-3 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                  Enviando...
                </div>
              ) : (
                leadCaptureForm.ctaText
              )}
            </Button>

            {/* Privacy Text */}
            <p className="text-xs text-gray-500 text-center mt-4">
              {leadCaptureForm.privacyText}
            </p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LeadCaptureModal;