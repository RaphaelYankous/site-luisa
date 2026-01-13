import React, { useCallback, useMemo, useState } from 'react';
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Instagram, 
  Linkedin, 
  MessageCircle, 
  ArrowRight, 
  Atom, 
  CheckCircle2,
  Phone,
  Star,
  GraduationCap,
  Users,
  FlaskConical,
  Beaker,
  Plus,
  Minus
} from 'lucide-react';

// --- IMAGENS DO SITE ---
import heroImg from './assets/hero.jpg';
import logoImg from './assets/logo-branco.png';
import flaskArt from './assets/sem fundo 22.png';

// --- FOTOS PESSOAIS ---
import imgDiploma from './assets/diploma.jpg';   
import imgOnline from './assets/online.jpg';     

// --- LOGOS DAS ESCOLAS ---
import logoDet from './assets/determinante.png';
import logoMag from './assets/magnum.png';
import logoSanta from './assets/Marca-CSM-vertical.png';
import logoIemp from './assets/iemp.png';       
import logoM2 from './assets/m2.jpg';           
import logoSapiens from './assets/sapiens.png';   
import logoProLabore from './assets/prolabore.png'; 
import logoAcerta from './assets/acerta.png';     

// --- COMPONENTE DO FAQ (ACORDEÃO) ---
const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={false}
      onClick={() => setIsOpen(!isOpen)}
      className={`bg-lq-surface rounded-2xl border ${isOpen ? 'border-lq-green' : 'border-white/10'} overflow-hidden cursor-pointer transition-colors duration-300`}
    >
      <div className="p-6 flex justify-between items-center">
        <h3 className={`font-bold text-lg ${isOpen ? 'text-white' : 'text-gray-300'}`}>{faq.question}</h3>
        <div className={`p-2 rounded-full ${isOpen ? 'bg-lq-green text-black' : 'bg-white/5 text-gray-400'}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-2">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const App = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  // --- CONFIGURAÇÃO DAS PARTÍCULAS (Símbolos Químicos) ---
  const particlesOptions = useMemo(() => ({
    fullScreen: { enable: false },
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    interactivity: {
      events: { onHover: { enable: true, mode: "bubble" } },
      modes: { bubble: { distance: 200, size: 10, duration: 2, opacity: 0.8 } }, 
    },
    particles: {
      color: { value: ["#22c55e", "#ec4899", "#8b5cf6"] },
      move: { enable: true, speed: 1, direction: "top", random: true, outModes: { default: "out" } }, 
      number: { density: { enable: true, area: 800 }, value: 20 }, 
      opacity: { value: 0.6 },
      shape: { 
        type: "char", 
        character: [
          { value: ["H", "C", "N", "O", "Li", "Na", "K"], font: "Verdana", style: "", weight: "bold", fill: true }
        ]
      },
      size: { value: { min: 10, max: 20 } }, 
    },
    detectRetina: true,
  }), []);

  const schools = [
    { name: "Determinante", logo: logoDet, size: "h-10 md:h-12" },
    { name: "Magnum", logo: logoMag, size: "h-10 md:h-12" },
    { name: "Santa Maria", logo: logoSanta, size: "h-12 md:h-14" },
    { name: "IEMP", logo: logoIemp, size: "h-10 md:h-12" },
    { name: "Colégio M2", logo: logoM2, size: "h-12 md:h-14" },
    { name: "Sapiens", logo: logoSapiens, size: "h-10 md:h-12" },
    { name: "Pró Labore", logo: logoProLabore, size: "h-12 md:h-14" },
    { name: "Acerta", logo: logoAcerta, size: "h-10 md:h-12" },
  ];

  // --- DADOS DA TABELA PERIÓDICA ---
  const periodicElements = [
    { 
      symbol: "Me", name: "Metodologia", number: "01", 
      desc: "Abordagem lógica que elimina a decoreba.",
      glowClass: "bg-lq-green", textClass: "group-hover:text-lq-green", borderClass: "hover:border-lq-green"
    },
    { 
      symbol: "Di", name: "Didática", number: "02", 
      desc: "Aulas que conectam a química com o cotidiano.",
      glowClass: "bg-lq-pink", textClass: "group-hover:text-lq-pink", borderClass: "hover:border-lq-pink"
    },
    { 
      symbol: "Ma", name: "Material", number: "03", 
      desc: "Listas curadas com foco 100% no ENEM.",
      glowClass: "bg-lq-purple", textClass: "group-hover:text-lq-purple", borderClass: "hover:border-lq-purple"
    },
    { 
      symbol: "Su", name: "Suporte", number: "04", 
      desc: "Acesso direto para tirar dúvidas 24/7.",
      glowClass: "bg-lq-orange", textClass: "group-hover:text-lq-orange", borderClass: "hover:border-lq-orange"
    },
    { 
      symbol: "Fo", name: "Foco Med", number: "05", 
      desc: "Aprofundamento onde a concorrência erra.",
      glowClass: "bg-lq-green", textClass: "group-hover:text-lq-green", borderClass: "hover:border-lq-green"
    },
    { 
      symbol: "Ap", name: "Aprovação", number: "06", 
      desc: "O resultado natural de quem estuda certo.",
      glowClass: "bg-white", textClass: "group-hover:text-white", borderClass: "hover:border-white"
    },
  ];

  // --- DADOS DO FAQ ---
  const faqs = [
    { question: "As aulas são ao vivo ou gravadas?", answer: "O curso é híbrido! Você tem acesso à plataforma com aulas gravadas completas e encontros ao vivo semanais para tirar dúvidas e aprofundar exercícios." },
    { question: "Por quanto tempo tenho acesso?", answer: "O acesso é válido até a data do ENEM 2026. Você pode rever as aulas quantas vezes quiser até lá." },
    { question: "Serve para quem quer Medicina?", answer: "Com certeza. O foco do curso é alta performance, cobrindo inclusive os rodapés de página que diferenciam os candidatos de medicina na ampla concorrência." },
    { question: "Como funciona o suporte de dúvidas?", answer: "Você terá acesso direto ao meu WhatsApp pessoal e grupo exclusivo da turma. Nenhuma dúvida dorme sem resposta." },
    { question: "Tem material em PDF?", answer: "Sim! Cada módulo acompanha uma apostila digital completa com teoria resumida e listas de exercícios graduadas por nível de dificuldade." }
  ];

  return (
    <div className="min-h-screen bg-lq-dark text-white font-sans overflow-x-hidden selection:bg-lq-pink selection:text-white relative">
      
      {/* --- BACKGROUND AMBIENTE --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-lq-dark"></div>
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }}>
        </div>
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-lq-green/10 rounded-full blur-[150px] mix-blend-screen animate-pulse-slow"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-lq-purple/10 rounded-full blur-[150px] mix-blend-screen animate-pulse-slow"></div>
      </div>

      {/* --- BOTÕES FLUTUANTES --- */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
        <motion.a 
          href="https://wa.me/5531996961902" 
          target="_blank"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.1, x: -5 }}
          className="bg-[#25D366] p-3 rounded-full shadow-lg shadow-[#25D366]/30 text-white flex items-center justify-center relative group hover:ring-4 hover:ring-[#25D366]/20 transition-all"
        >
          <Phone size={24} fill="currentColor" />
        </motion.a>
        <motion.a 
          href="https://www.instagram.com/luisaquimica/" 
          target="_blank"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.1, x: -5 }}
          className="bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] p-3 rounded-full shadow-lg text-white flex items-center justify-center relative group"
        >
          <Instagram size={24} />
        </motion.a>
      </div>

      {/* NAVBAR */}
      <nav className="fixed w-full z-40 top-0 py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto bg-lq-dark/80 backdrop-blur-xl border border-white/5 rounded-full px-6 py-3 flex justify-between items-center shadow-2xl shadow-black/50">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Logo" className="h-8 w-auto" />
            <span className="text-lg font-bold tracking-tight hidden sm:block">Luísa<span className="text-lq-green">Química</span></span>
          </div>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/5531996961902" 
            className="bg-white text-lq-dark hover:bg-lq-green hover:text-white transition-colors font-bold py-2 px-6 rounded-full text-sm flex items-center gap-2 shadow-lg"
          >
            <MessageCircle size={16} />
            Matrículas Abertas
          </motion.a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-10 lg:pt-44 lg:pb-24 z-10 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-50">
            <Particles id="tsparticles-hero" init={particlesInit} className="w-full h-full" options={particlesOptions} />
        </div>

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-20 text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-lq-green/30 rounded-full bg-lq-green/10 text-lq-green text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-lq-green animate-pulse"></span>
              Turmas 2026 Confirmadas
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight">
              Domine a Química da <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lq-green via-emerald-400 to-white">
                Sua Aprovação.
              </span>
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed max-w-lg">
              A metodologia validada nos maiores colégios de MG que transforma sua dificuldade em diferencial competitivo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                href="https://wa.me/5531996961902" 
                className="bg-lq-green hover:bg-emerald-500 text-white font-bold py-4 px-8 rounded-2xl inline-flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(34,197,94,0.3)] transition-all text-lg"
              >
                Garantir minha vaga <ArrowRight size={20} />
              </motion.a>
              <a href="#metodo" className="px-8 py-4 rounded-2xl border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all font-semibold text-center flex items-center justify-center text-gray-300">
                Ver Tabela
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="relative z-10 group">
                <div className="absolute -inset-1 bg-gradient-to-tr from-lq-green via-lq-purple to-lq-pink rounded-[2.5rem] blur opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                <img src={heroImg} alt="Luísa Química" className="relative rounded-[2rem] border border-white/10 w-full object-cover shadow-2xl" />
                
                <motion.div 
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-8 -left-8 bg-lq-surface/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl flex items-center gap-4 max-w-[200px]"
                >
                    <div className="bg-lq-green/20 p-3 rounded-xl text-lq-green">
                        <CheckCircle2 size={24} />
                    </div>
                    <div>
                        <p className="font-bold text-white text-sm">Foco em Medicina</p>
                        <p className="text-[10px] text-gray-400">Conteúdo direcionado</p>
                    </div>
                </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ESTATÍSTICAS */}
      <section className="relative z-20 mt-4 mb-12 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                    { number: "+7", label: "Anos de Experiência", color: "text-lq-green" },
                    { number: "8+", label: "Instituições de Ensino", color: "text-lq-pink" },
                    { number: "+1k", label: "Alunos Aprovados", color: "text-lq-orange" },
                    { number: "UFMG", label: "Licenciatura Plena", color: "text-lq-purple" }
                ].map((stat, i) => (
                    <div key={i} className="flex flex-col items-center group">
                        <span className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>{stat.number}</span>
                        <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">{stat.label}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- SEÇÃO: TABELA PERIÓDICA DA APROVAÇÃO --- */}
      <section id="metodo" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">A Tabela da Aprovação</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Os elementos essenciais que reagem com o seu esforço.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-6 max-w-6xl mx-auto">
            {periodicElements.map((el, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className={`aspect-square relative group cursor-pointer`}
              >
                <div className={`absolute inset-0 ${el.glowClass} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 rounded-xl`}></div>
                
                <div className={`h-full w-full bg-lq-surface border border-white/10 ${el.borderClass} rounded-xl p-2 md:p-3 flex flex-col justify-between transition-colors duration-300 relative overflow-hidden shadow-lg`}>
                   
                   <span className="absolute top-2 left-2 text-[10px] md:text-xs font-mono text-gray-600 font-bold">{el.number}</span>
                   
                   <div className="flex flex-col items-center justify-center flex-grow mt-3 md:mt-0">
                      <span className={`text-3xl md:text-5xl font-bold text-white/90 ${el.textClass} transition-colors`}>
                        {el.symbol}
                      </span>
                   </div>

                   <span className="text-[10px] md:text-xs font-bold text-center uppercase tracking-wide text-gray-500 group-hover:text-white transition-colors truncate w-full px-1">
                     {el.name}
                   </span>

                   <div className="absolute inset-0 bg-lq-surface/95 backdrop-blur-md p-2 md:p-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center z-20">
                     <p className="text-xs md:text-sm font-medium text-white leading-tight">{el.desc}</p>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SEÇÃO: CONTEÚDO PROGRAMÁTICO (TIMELINE) --- */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Do Átomo à <span className="text-lq-pink">Aprovação</span></h2>
            <p className="text-gray-400">Todo o conteúdo do Ensino Médio, organizado estrategicamente.</p>
            </div>

            <div className="relative max-w-4xl mx-auto">
            {/* Linha Central */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-lq-green via-lq-purple to-lq-pink md:-translate-x-1/2 rounded-full opacity-30"></div>

            {[
                { title: "Química Geral", desc: "Atomística, Tabela Periódica e Ligações. A base de tudo.", icon: <Atom />, color: "text-lq-green", border: "border-lq-green" },
                { title: "Físico-Química", desc: "Termoquímica, Cinética e Equilíbrio. O terror da maioria, simplificado.", icon: <FlaskConical />, color: "text-lq-purple", border: "border-lq-purple" },
                { title: "Química Orgânica", desc: "Cadeias, Funções e Reações. O conteúdo que mais cai no ENEM.", icon: <Beaker />, color: "text-lq-pink", border: "border-lq-pink" },
                { title: "Revisão Final", desc: "Estratégia de prova e resolução de questões de vestibulares passados.", icon: <CheckCircle2 />, color: "text-white", border: "border-white" }
            ].map((module, i) => (
                <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className={`relative flex items-center gap-8 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-lq-dark border-4 border-white rounded-full z-10 md:-translate-x-1/2 -translate-x-1/2"></div>
                <div className="hidden md:block w-1/2"></div>
                <div className="w-full md:w-1/2 pl-20 md:pl-0">
                    <div className={`bg-lq-surface p-6 rounded-2xl border border-white/10 hover:${module.border} transition-colors group relative overflow-hidden`}>
                        <div className={`absolute top-0 right-0 p-4 opacity-10 ${module.color} group-hover:scale-110 transition-transform duration-500`}>
                        {React.cloneElement(module.icon, { size: 60 })}
                        </div>
                        <h3 className={`text-xl font-bold text-white mb-2 flex items-center gap-2`}>
                        <span className={module.color}>{module.icon}</span> {module.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{module.desc}</p>
                    </div>
                </div>
                </motion.div>
            ))}
            </div>
        </div>
      </section>

      {/* SEÇÃO: SOBRE */}
      <section className="py-24 relative z-10 bg-white/[0.02]">
        <div className="container mx-auto px-6 grid md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-5 relative">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-[2rem] overflow-hidden border-2 border-white/10 shadow-2xl z-10"
                >
                    <img src={imgDiploma} alt="Luísa Graduada UFMG" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-lq-dark via-transparent to-transparent opacity-90"></div>
                    <div className="absolute bottom-8 left-8 right-8">
                        <div className="inline-block px-3 py-1 bg-lq-green text-black font-bold text-xs rounded-full mb-3">PROFESSORA TITULAR</div>
                        <p className="text-white font-bold text-2xl mb-1">Luísa Santos</p>
                        <p className="text-gray-300 text-sm">Graduada & Mestranda pela UFMG</p>
                    </div>
                </motion.div>
            </div>

            <div className="md:col-span-7 md:pl-8">
                <h2 className="text-3xl md:text-5xl font-bold mb-8">Quem ensina faz a diferença.</h2>
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                    <p>
                        Não sou apenas uma professora de internet. Minha rotina é em sala de aula, nos colégios de elite de BH (<span className="text-white font-semibold">Magnum, Santa Maria, Determinante</span>).
                    </p>
                    <p>
                        Sei exatamente onde os alunos travam e como destravar. Minha experiência em lugares como <strong>IEMP, M2 e Bernouli</strong> me deu a bagagem para criar um método à prova de falhas.
                    </p>
                </div>
                
                <div className="mt-10 grid grid-cols-2 gap-4">
                    <div className="bg-lq-surface p-4 rounded-xl border border-white/5 flex items-center gap-3">
                         <div className="bg-lq-green/20 p-2 rounded-full text-lq-green"><GraduationCap size={20}/></div>
                         <div>
                            <p className="font-bold text-white">UFMG</p>
                            <p className="text-xs text-gray-500">Formação de Excelência</p>
                         </div>
                    </div>
                    <div className="bg-lq-surface p-4 rounded-xl border border-white/5 flex items-center gap-3">
                         <div className="bg-lq-pink/20 p-2 rounded-full text-lq-pink"><Users size={20}/></div>
                         <div>
                            <p className="font-bold text-white">Mentoria</p>
                            <p className="text-xs text-gray-500">Acompanhamento Próximo</p>
                         </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* SEÇÃO: PROVA SOCIAL */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Reações que geraram <span className="text-lq-green">Aprovação.</span></h2>
            <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3].map((item, i) => (
                    <div key={i} className="bg-lq-surface p-8 rounded-2xl border border-white/5 hover:border-lq-green/30 transition-colors relative">
                        <div className="flex gap-1 text-yellow-500 mb-6">
                            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                        </div>
                        <p className="text-gray-300 italic mb-6 leading-relaxed">
                            "{i === 0 ? "A Luísa mudou minha visão sobre química. O que parecia impossível virou minha melhor matéria no ENEM." : 
                              i === 1 ? "A didática é surreal. Ela explica de um jeito que a gente nunca esquece. Consegui minha vaga na Federal!" :
                              "O suporte fez toda diferença. Tirei todas as dúvidas e fui pra prova confiante. Recomendo demais!"}"
                        </p>
                        <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center font-bold text-sm">
                                {i === 0 ? "J" : i === 1 ? "M" : "L"}
                            </div>
                            <div>
                                <p className="font-bold text-sm text-white">{i === 0 ? "Júlia M." : i === 1 ? "Matheus S." : "Lucas F."}</p>
                                <p className="text-xs text-lq-green font-semibold">Aprovado(a) em Medicina</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- SEÇÃO: FAQ (DÚVIDAS) --- */}
      <section className="py-24 relative z-10 bg-white/[0.02]">
        <div className="container mx-auto px-6 max-w-3xl">
            <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Dúvidas Frequentes</h2>
            <p className="text-gray-400">Não deixe nenhuma questão sem resposta.</p>
            </div>

            <div className="space-y-4">
            {faqs.map((faq, i) => (
                <FAQItem key={i} faq={faq} />
            ))}
            </div>
        </div>
      </section>



      {/* CTA FINAL */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
            <div className="bg-gradient-to-b from-[#1a1025] to-lq-dark rounded-[3rem] p-8 md:p-16 relative overflow-hidden border border-white/10 shadow-2xl text-center md:text-left">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lq-green/10 rounded-full blur-[120px] pointer-events-none"></div>
                
                <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                            Pronto para catalisar <br/>seus resultados?
                        </h2>
                        <p className="text-gray-400 mb-8 text-lg">
                            As vagas para o pré-vestibular 2026 são limitadas. Garanta seu lugar na turma que mais aprova.
                        </p>
                        
                        <div className="mb-10 bg-black/30 p-4 rounded-2xl border border-white/5 backdrop-blur-sm">
                            <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                                <span>Preenchimento da Turma</span>
                                <span className="text-lq-green">85%</span>
                            </div>
                            <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "85%" }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    className="h-full bg-gradient-to-r from-lq-green to-emerald-400 rounded-full"
                                ></motion.div>
                            </div>
                        </div>

                        <motion.a 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://wa.me/5531996961902"
                            className="w-full md:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-5 px-10 rounded-2xl inline-flex items-center justify-center gap-3 transition-all shadow-xl shadow-[#25d366]/20 text-lg"
                        >
                            <MessageCircle size={24} />
                            Quero minha vaga agora
                        </motion.a>
                    </div>

                    <div className="relative hidden md:block h-[400px]">
                         <motion.img 
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            src={imgOnline} 
                            alt="Luísa Aula Online" 
                            className="absolute bottom-0 right-10 w-80 object-cover drop-shadow-2xl rotate-3 rounded-[2rem] border-4 border-lq-surface"
                        />
                         <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-10 right-0 bg-lq-surface p-4 rounded-2xl border border-white/10 shadow-xl">
                            <Atom className="text-lq-purple" size={32}/>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/5 relative z-20 bg-black">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 opacity-80">
             <img src={logoImg} className="h-6 opacity-50" alt="Logo" />
             <span className="text-gray-500 text-sm">© 2025 Luísa Química.</span>
          </div>
          <div className="flex gap-6">
              <a href="https://www.instagram.com/luisaquimica/" target="_blank" className="text-gray-500 hover:text-lq-pink transition-colors"><Instagram size={20} /></a>
              <a href="https://www.linkedin.com/in/lu%C3%ADsasanto/" target="_blank" className="text-gray-500 hover:text-blue-500 transition-colors"><Linkedin size={20} /></a>
          </div>
          <div className="flex flex-col items-center md:items-end">
              <span className="text-[10px] uppercase tracking-widest text-gray-700 font-bold">Desenvolvido por</span>
              <a href="https://www.yankousdevweb.com.br/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-white transition-colors font-mono font-bold">
                {`< Raphael Yankous />`}
              </a>
          </div>
        </div>
      </footer>
      
      {/* Elemento Decorativo Flutuante Geral */}
      <motion.img
        src={flaskArt}
        animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="fixed bottom-10 left-10 w-32 opacity-10 pointer-events-none z-0 mix-blend-screen"
      />
    </div>
  );
}

export default App;