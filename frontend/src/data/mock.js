// Mock data for ReinoPlay streaming platform

export const heroData = {
  title: "SEU FILHO PRÓXIMO DE DEUS",
  subtitle: "Histórias e Filmes Bíblicos, Atividades e jogos inspirados na Palavra de Deus!",
  description: "A única plataforma de entretenimento segura e edificante para sua criança",
  ctaText: "Acessar plataforma",
  heroImage: "https://media.atomicatpages.net/u/R1g90KSBgndKHioCAMFwid7qMkp1/Pictures/bMYpFA7154953.webp"
};

export const biblicalDrawings = [
  {
    id: 1,
    title: "A Criação do Mundo – Os 7 dias da criação",
    thumbnail: "https://vihbozcatcwtyxbccvoy.supabase.co/storage/v1/object/public/thumbnails/0.34432262192970164.png",
    isPremium: true,
    duration: "12 min"
  },
  {
    id: 2,
    title: "Adão e Eva no Jardim",
    thumbnail: "https://vihbozcatcwtyxbccvoy.supabase.co/storage/v1/object/public/thumbnails/0.5789507624407744.png",
    isPremium: true,
    duration: "10 min"
  },
  {
    id: 3,
    title: "Noé e a Arca",
    thumbnail: "https://vihbozcatcwtyxbccvoy.supabase.co/storage/v1/object/public/thumbnails/0.7948399371300853.png",
    isPremium: true,
    duration: "15 min"
  },
  {
    id: 4,
    title: "Moisés no Rio",
    thumbnail: "https://vihbozcatcwtyxbccvoy.supabase.co/storage/v1/object/public/thumbnails/0.9483546870978465.png",
    isPremium: true,
    duration: "13 min"
  },
  {
    id: 5,
    title: "Moisés e a Sarça Ardente",
    thumbnail: "https://vihbozcatcwtyxbccvoy.supabase.co/storage/v1/object/public/thumbnails/0.6372320179875853.png",
    isPremium: true,
    duration: "11 min"
  },
  {
    id: 6,
    title: "Jesus o Bom Pastor",
    thumbnail: "https://vihbozcatcwtyxbccvoy.supabase.co/storage/v1/object/public/thumbnails/0.34432262192970164.png",
    isPremium: true,
    duration: "14 min"
  }
];

export const christianSongs = [
  {
    id: 1,
    title: "Jesus é meu melhor amigo",
    thumbnail: "https://vihbozcatcwtyxbccvoy.supabase.co/storage/v1/object/public/thumbnails/0.03711717451088514.png",
    isPremium: true,
    duration: "3 min"
  },
  {
    id: 2,
    title: "Obrigado, Deus, pelo sol que brilha!",
    thumbnail: "https://vihbozcatcwtyxbccvoy.supabase.co/storage/v1/object/public/thumbnails/0.7237781715797583.png",
    isPremium: true,
    duration: "4 min"
  },
  {
    id: 3,
    title: "Jesus quer plantar em mim",
    thumbnail: "https://vihbozcatcwtyxbccvoy.supabase.co/storage/v1/object/public/thumbnails/0.6068125657687349.png",
    isPremium: true,
    duration: "3 min"
  },
  {
    id: 4,
    title: "Vou falar com Deus agora!",
    thumbnail: "https://vihbozcatcwtyxbccvoy.supabase.co/storage/v1/object/public/thumbnails/0.17573440278242014.png",
    isPremium: true,
    duration: "3 min"
  },
  {
    id: 5,
    title: "Vou obedecer papai e mamãe!",
    thumbnail: "https://vihbozcatcwtyxbccvoy.supabase.co/storage/v1/object/public/thumbnails/0.0913085495037359.png",
    isPremium: true,
    duration: "4 min"
  }
];

export const pricingPlans = [
  {
    id: "basic",
    name: "PLANO BÁSICO",
    price: {
      monthly: 27.90,
      currency: "R$"
    },
    billing: "Plano Mensal",
    cancellation: "Cancele quando quiser",
    features: [
      "100 Histórias e desenhos bíblicos",
      "Filmes bíblicos",
      "100 músicas bíblicas",
      "Histórias para leitura",
      "Jogos bíblicos e quizzes",
      "Atividades sobre a bíblia",
      "Episódios novos todos os dias no whatsapp"
    ],
    cta: "ASSINAR PLANO BÁSICO",
    popular: false,
    validUntil: "18/09/2025"
  },
  {
    id: "premium",
    name: "PLANO PREMIUM",
    price: {
      monthly: 47.90,
      currency: "R$"
    },
    billing: "Plano Mensal",
    cancellation: "Cancele quando quiser",
    features: [
      "300 Histórias e desenhos bíblicos",
      "Filmes bíblicos",
      "100 músicas bíblicas",
      "Histórias para leitura",
      "Jogos bíblicos e quizzes",
      "Atividades sobre a bíblia",
      "Episódios novos todos os dias no whatsapp"
    ],
    cta: "ASSINAR PLANO PREMIUM",
    popular: false,
    validUntil: "18/09/2025"
  },
  {
    id: "lifetime",
    name: "PLANO PREMIUM VITALÍCIO",
    price: {
      installments: {
        amount: 23.43,
        count: 12
      },
      fullPrice: 227.90,
      originalPrice: 574.00,
      currency: "R$"
    },
    billing: "Pagamento único e acesso para sempre",
    cancellation: "",
    features: [
      "300 Histórias e desenhos bíblicos",
      "Filmes bíblicos",
      "100 músicas bíblicas",
      "Histórias para leitura",
      "Jogos bíblicos e quizzes",
      "Atividades sobre a bíblia",
      "Episódios novos todos os dias no whatsapp"
    ],
    cta: "ESCOLHER PLANO VITALÍCIO",
    popular: true,
    badge: "MAIS RECOMENDADO",
    validUntil: "18/09/2025"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Ana Paula",
    location: "São Paulo - SP",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    text: "Minha filha de 5 anos adora as histórias bíblicas! É incrível ver como ela aprende sobre Deus de forma divertida."
  },
  {
    id: 2,
    name: "Carlos Roberto",
    location: "Rio de Janeiro - RJ",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    text: "O conteúdo é excelente e seguro. Finalmente uma plataforma que posso deixar meus filhos assistirem sem preocupação."
  },
  {
    id: 3,
    name: "Mariana Silva",
    location: "Belo Horizonte - MG",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    text: "As músicas cristãs são lindas e meu filho já decorou várias. É educativo e edificante!"
  }
];

export const bonusFeatures = [
  {
    id: 1,
    title: "ATIVIDADES E JOGOS BÍBLICOS",
    description: "Mais de 1.500 atividades e jogos bíblicos para educação infantil",
    image: "https://media.atomicatpages.net/u/R1g90KSBgndKHioCAMFwid7qMkp1/Pictures/DQdRhl7526117.webp"
  },
  {
    id: 2,
    title: "Quizzes Bíblicos",
    description: "Quizzes interativos sobre histórias da Bíblia para testar e reforçar o aprendizado",
    image: "https://media.atomicatpages.net/u/R1g90KSBgndKHioCAMFwid7qMkp1/Pictures/yHMWjK7538741.webp"
  },
  {
    id: 3,
    title: "GRUPO VIP",
    description: "História bíblica nova todos os dias em seu Whatsapp",
    image: "https://media.atomicatpages.net/u/R1g90KSBgndKHioCAMFwid7qMkp1/Pictures/metiru7549951.webp"
  },
  {
    id: 4,
    title: "MÚSICAS BÍBLICAS INFANTIS",
    description: "Ajudam os pequenos a aprender sobre Deus enquanto se divertem e memorizam com facilidade",
    image: "https://media.atomicatpages.net/u/R1g90KSBgndKHioCAMFwid7qMkp1/Pictures/QBamDp7746734.webp"
  }
];

export const faqData = [
  {
    id: 1,
    question: "O que é o ReinoPlay?",
    answer: "O ReinoPlay é um serviço de streaming que oferece uma ampla variedade de filmes cristãos e historinhas bíblicas."
  },
  {
    id: 2,
    question: "Posso baixar vídeos para assistir offline?",
    answer: "Sim, agora você pode baixar nos dispositivos! Baixe seus episódios favoritos enquanto estiver no WIFI e assista-os em qualquer lugar."
  },
  {
    id: 3,
    question: "Para quais idades o ReinoPlay é voltado?",
    answer: "Nossos programas são voltados para crianças de 1 a 15 anos."
  },
  {
    id: 4,
    question: "Como será disponibilizado o meu acesso à plataforma?",
    answer: "Após a confirmação do pagamento, o acesso à plataforma será imediatamente liberado. Você receberá um e-mail contendo o link de acesso para baixar o aplicativo, além de seu login e senha exclusivos."
  },
  {
    id: 5,
    question: "Como faço para cancelar?",
    answer: "O ReinoPlay é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura a qualquer momento."
  },
  {
    id: 6,
    question: "Onde posso assistir?",
    answer: "Assista onde quiser, quando quiser. Faça login com sua conta para começar a assistir no computador ou em qualquer aparelho como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames."
  }
];

export const leadCaptureForm = {
  title: "🎉 Acesso Especial ao ReinoPlay",
  subtitle: "Preencha seus dados e nossa equipe entrará em contato para liberar seu acesso VIP imediatamente!",
  urgency: "⚡ Apenas hoje: Acesso liberado em até 30 minutos!",
  benefits: [
    "✅ Contato direto com nossa equipe especializada",
    "✅ Acesso liberado no mesmo dia", 
    "✅ Suporte prioritário via WhatsApp"
  ],
  fields: [
    {
      name: "fullName",
      label: "Nome Completo",
      type: "text",
      required: true,
      placeholder: "Digite seu nome completo"
    },
    {
      name: "email",
      label: "Email",
      type: "email", 
      required: true,
      placeholder: "Digite seu melhor email"
    },
    {
      name: "whatsapp",
      label: "WhatsApp",
      type: "tel",
      required: true,
      placeholder: "(11) 99999-9999"
    },
    {
      name: "childAge",
      label: "Idade das Crianças",
      type: "select",
      required: false,
      placeholder: "Selecione a faixa etária",
      options: [
        { value: "", label: "Selecione a faixa etária" },
        { value: "0-2", label: "0-2 anos" },
        { value: "3-5", label: "3-5 anos" },
        { value: "6-8", label: "6-8 anos" },
        { value: "9-12", label: "9-12 anos" },
        { value: "13+", label: "13+ anos" }
      ]
    },
    {
      name: "interest",
      label: "Principal Interesse",
      type: "select",
      required: false,
      placeholder: "O que mais te interessa?",
      options: [
        { value: "", label: "O que mais te interessa?" },
        { value: "drawings", label: "Desenhos Bíblicos" },
        { value: "songs", label: "Músicas Cristãs" },
        { value: "activities", label: "Atividades Educativas" },
        { value: "all", label: "Todo o conteúdo" }
      ]
    },
    {
      name: "message",
      label: "Mensagem (Opcional)",
      type: "textarea",
      required: false,
      placeholder: "Deixe uma mensagem..."
    }
  ],
  ctaText: "🚀 Quero Meu Acesso Agora!",
  privacyText: "Seus dados estão seguros e não serão compartilhados com terceiros"
};