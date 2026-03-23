/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  ChevronDown, 
  MessageSquare, 
  Zap, 
  Users, 
  Scale, 
  Stethoscope, 
  Building2, 
  GraduationCap, 
  ShoppingBag,
  ArrowRight,
  Mail,
  Phone
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// URL do WhatsApp corrigida
const WHATSAPP_URL = "https://wa.me/55519979176?text=Olá! Vi o site da FlowBecker e gostaria de saber mais sobre os Agentes de IA.";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-extrabold tracking-tighter text-brand-text">
          Flow<span className="text-brand-accent">Becker</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a href="#solucoes" className="text-brand-text/80 hover:text-brand-accent transition-colors">Soluções</a>
          <a href="#como-funciona" className="text-brand-text/80 hover:text-brand-accent transition-colors">Como Funciona</a>
          <a href="#contato" className="text-brand-text/80 hover:text-brand-accent transition-colors">Contato</a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-brand-accent-light text-brand-accent rounded-full border border-brand-accent/20">
            Inteligência Artificial de Ponta
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-brand-text mb-6 leading-[1.1] tracking-tight">
            Dê um <span className="text-gradient-brand">Flow</span> no seu atendimento e converta leads 24/7
          </h1>
          <p className="text-lg md:text-xl text-brand-text/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            SDRs inteligentes que qualificam leads e agendam reuniões no piloto automático, enquanto você foca no que realmente importa: fechar negócio.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-gradient-brand text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl flex items-center justify-center gap-2 group"
            >
              Começar Agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <button className="w-full sm:w-auto px-10 py-4 rounded-2xl font-bold text-lg text-brand-text border border-brand-text/10 hover:bg-brand-text/5 transition-colors">
              Ver Demonstração
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 relative"
        >
          <div className="glass-white rounded-3xl p-4 md:p-8 max-w-4xl mx-auto relative z-10">
            <div className="flex items-center gap-4 mb-6 border-b border-gray-200 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="ml-4 text-xs text-gray-500 font-mono">flowbecker-sdr-v2.ai</div>
            </div>
            <div className="space-y-4 text-left">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-accent flex-shrink-0 flex items-center justify-center text-xs font-bold text-white">AI</div>
                <div className="bg-black/5 p-4 rounded-2xl rounded-tl-none text-sm max-w-[80%] text-brand-text">
                  Opa, e ai tudo bem com você? 👋 Vi que você deu uma olhada na nossa parte de automação. Como tá o fluxo de leads por aí hoje? Algum desafio que eu possa te ajudar a resolver?
                </div>
              </div>
              <div className="flex gap-3 justify-end">
                <div className="bg-brand-accent/10 p-4 rounded-2xl rounded-tr-none text-sm max-w-[80%] text-brand-text">
                  Tudo certo! Cara, meu maior problema é no imobiliário. Entra muito lead, mas perco muito tempo com quem só tá curioso.
                </div>
                <div className="w-8 h-8 rounded-full bg-brand-text/20 flex-shrink-0 flex items-center justify-center text-xs font-bold text-brand-text">U</div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-accent flex-shrink-0 flex items-center justify-center text-xs font-bold text-white">AI</div>
                <div className="bg-black/5 p-4 rounded-2xl rounded-tl-none text-sm max-w-[80%] text-brand-text">
                  Super entendo você, isso acontece muito! O que eu faço é bater um papo leve com eles pra entender o momento de compra e o orçamento. Se eu sentir que o lead tá pronto, já agendo a visita direto na sua agenda. Assim você foca só em quem realmente quer fechar. Faz sentido? 😊
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/20 blur-3xl rounded-full animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full animate-pulse"></div>
        </motion.div>
      </div>
    </section>
  );
};

const Niches = () => {
  const niches = [
    { icon: Scale, title: "Advocacia", desc: "Triagem jurídica automática e agendamento de consultas." },
    { icon: Stethoscope, title: "Saúde", desc: "Pré-atendimento humanizado e gestão de agenda médica." },
    { icon: Building2, title: "Imobiliário", desc: "Qualificação de interesse e agendamento de visitas." },
    { icon: GraduationCap, title: "Educação", desc: "Suporte a novos alunos e conversão de matrículas." },
    { icon: ShoppingBag, title: "Comércio", desc: "Recuperação de carrinhos e suporte pós-venda 24/7." },
    { icon: Users, title: "Serviços", desc: "Escalabilidade total para qualquer tipo de atendimento." },
  ];

  return (
    <section id="solucoes" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-brand-text mb-4">Feito para o seu nicho</h2>
          <p className="text-brand-text/60 max-w-2xl mx-auto">Nossos Agentes de IA são treinados especificamente para entender as nuances do seu mercado.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {niches.map((niche, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-white p-8 rounded-3xl hover:bg-gray-50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-brand-accent-light rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-accent/20 transition-colors">
                <niche.icon className="w-8 h-8 text-brand-accent" />
              </div>
              <h3 className="text-xl font-bold text-brand-text mb-3">{niche.title}</h3>
              <p className="text-brand-text/60 text-sm leading-relaxed">{niche.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      title: "Velocidade de Resposta",
      desc: "Leads frios morrem rápido. Nossa IA responde em menos de 10 segundos, garantindo a maior taxa de conversão.",
      icon: Zap
    },
    {
      title: "Integração Total",
      desc: "Conectamos via WhatsApp, CRM, Calendly e muito mais. Seus dados sempre sincronizados.",
      icon: MessageSquare
    },
    {
      title: "IA Humanizada",
      desc: "Esqueça robôs travados. Nossos SDRs conversam de forma natural, empática e persuasiva.",
      icon: Users
    }
  ];

  return (
    <section id="como-funciona" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-brand-text mb-8 leading-tight">
              Por que escolher a <span className="text-brand-accent">FlowBecker?</span>
            </h2>
            <div className="space-y-8">
              {features.map((f, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-accent-light rounded-full flex items-center justify-center">
                    <f.icon className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-text mb-2">{f.title}</h4>
                    <p className="text-brand-text/60 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="glass-white rounded-[2rem] p-2 overflow-hidden">
              <img 
                src="/agente.png" 
                alt="Agente de IA FlowBecker" 
                className="rounded-[1.8rem] w-full h-auto"
                onError={(e) => {
                  console.error('Imagem não encontrada:', e);
                  e.currentTarget.src = 'https://via.placeholder.com/800x600?text=Agente+IA';
                }}
              />
            </div>
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 glass-white p-6 rounded-2xl border border-brand-accent/30"
            >
              <div className="text-3xl font-bold text-brand-accent">+85%</div>
              <div className="text-xs text-brand-text/60 uppercase tracking-wider font-bold">Conversão de Leads</div>
            </motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-6 -left-6 glass-white p-6 rounded-2xl border border-brand-purple/30"
            >
              <div className="text-3xl font-bold text-brand-purple">24/7</div>
              <div className="text-xs text-brand-text/60 uppercase tracking-wider font-bold">Atendimento Ativo</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-semibold text-brand-text/80 group-hover:text-brand-accent transition-colors">
          {question}
        </span>
        <ChevronDown className={`w-5 h-5 text-brand-text/40 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-brand-text/60 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "Meus dados estão seguros?",
      answer: "Sim, utilizamos criptografia de ponta a ponta e estamos em total conformidade com a LGPD. Seus dados e os dados de seus leads nunca são compartilhados ou utilizados para treinar modelos públicos."
    },
    {
      question: "A IA parece um robô conversando?",
      answer: "Definitivamente não. Nossos modelos são ajustados com técnicas de Processamento de Linguagem Natural (NLP) avançadas para garantir uma fluidez humana, usando gírias leves (se apropriado ao nicho) e compreensão de contexto."
    },
    {
      question: "Como funciona a integração com o WhatsApp?",
      answer: "A integração é simples e direta. Conectamos nossa IA ao seu número oficial ou via API, permitindo que ela inicie e responda conversas automaticamente conforme as regras de negócio definidas."
    },
    {
      question: "Posso testar antes de contratar?",
      answer: "Com certeza! Oferecemos um período de teste para que você veja na prática como nossos SDRs podem transformar seu volume de agendamentos."
    }
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-gray-50">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-text mb-4">Dúvidas Frequentes</h2>
          <p className="text-brand-text/60">Tudo o que você precisa saber para dar o próximo passo.</p>
        </div>
        <div className="glass-white rounded-[2rem] px-8 py-4">
          {faqs.map((faq, i) => (
            <div key={i}>
              <FAQItem question={faq.question} answer={faq.answer} />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contato" className="py-16 px-6 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <div className="text-2xl font-extrabold tracking-tighter text-brand-text">
              Flow<span className="text-brand-accent">Becker</span>
            </div>
            <p className="text-sm text-brand-text/50">
              Escalando atendimentos através de Inteligência Artificial avançada.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg text-brand-text">Tiago Becker</h4>
            <div className="space-y-2">
              <a 
                href="tel:+5551998872626" 
                className="flex items-center gap-3 text-brand-text/60 hover:text-brand-accent transition-colors"
              >
                <Phone className="w-4 h-4" /> (51) 99887-2626
              </a>
              <a 
                href="mailto:tiago-design@hotmail.com" 
                className="flex items-center gap-3 text-brand-text/60 hover:text-brand-accent transition-colors text-sm"
              >
                <Mail className="w-4 h-4" /> tiago-design@hotmail.com
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg text-brand-text">Francisco Flores</h4>
            <div className="space-y-2">
              <a 
                href="tel:+5551999287270" 
                className="flex items-center gap-3 text-brand-text/60 hover:text-brand-accent transition-colors"
              >
                <Phone className="w-4 h-4" /> (51) 99928-7270
              </a>
              <a 
                href="mailto:franciscoadrianoflores@gmail.com" 
                className="flex items-center gap-3 text-brand-text/60 hover:text-brand-accent transition-colors text-sm"
              >
                <Mail className="w-4 h-4" /> franciscoadrianoflores@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-brand-text/40">
            © 2026 FlowBecker Automações. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Niches />
        <Features />
        
        {/* Seção CTA vinculada ao WhatsApp */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto glass-white rounded-[3rem] p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-text/5 to-brand-accent/5 -z-10" />
            <h2 className="text-3xl md:text-5xl font-bold text-brand-text mb-6">
              Pronto para escalar seu atendimento?
            </h2>
            <p className="text-brand-text/60 mb-10 max-w-xl mx-auto">
              Junte-se a centenas de empresas que já automatizaram sua qualificação de leads com a FlowBecker.
            </p>
            <motion.a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-brand-text text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl hover:bg-brand-text/90"
            >
              Começar Agora
            </motion.a>
          </div>
        </section>

        <FAQ />
      </main>
      <Footer />
    </div>
  );
}