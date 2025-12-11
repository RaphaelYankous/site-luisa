import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { motion } from 'framer-motion';
import { GraduationCap, CheckCircle2, Instagram, Linkedin, MessageCircle, ArrowRight, Beaker, Star } from 'lucide-react';

// IMPORTANDO AS IMAGENS
import heroImg from './assets/hero.jpg';
import sobreImg from './assets/sobre.jpg';
import gallery1 from './assets/descontraida.jpg';
import gallery2 from './assets/jaleco.jpg';
import logoImg from './assets/logo-branco.png';

const App = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="min-h-screen bg-lq-dark text-white font-sans overflow-x-hidden selection:bg-lq-pink selection:text-white relative">
      
      {/* --- FUNDO DE PARTÍCULAS (Balanceado: Bastante quantidade, tamanho pequeno) --- */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          fpsLimit: 120,
          interactivity: {
            events: { onHover: { enable: true, mode: "grab" }, resize: true },
            modes: { grab: { distance: 180, links: { opacity: 0.6 } } }, 
          },
          particles: {
           
            color: { value: ["#5AAF76", "#B9486E", "#F1B874", "#ffffff"] },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.2, 
              width: 1,
            },
            move: {
              enable: true,
              speed: 1, 
              direction: "none",
              random: false,
              straight: false,
              outModes: { default: "bounce" },
            },
           
            number: { density: { enable: true, area: 800 }, value: 50
           }, 
            opacity: { value: 0.7 },
            shape: { type: "circle" },
            size: { value: { min: 2, max: 4 } }, 
          },
          detectRetina: true,
        }}
      />

      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-lq-dark/90 backdrop-blur-xl border-b border-white/10 shadow-lg">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Logo Luísa Química" className="h-9 w-auto opacity-90" />
            <span className="text-xl font-bold tracking-tight hidden sm:block">Luísa<span className="text-lq-green">Química</span></span>
          </div>
          <a href="https://wa.me/" className="bg-gradient-to-r from-lq-pink to-lq-purple hover:brightness-110 text-white font-bold py-2 px-6 rounded-full transition-all shadow-lg shadow-lq-pink/20 text-sm flex items-center gap-2">
            <MessageCircle size={18} />
            Vagas 2026
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 z-10">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-20 pointer-events-none"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lq-green/10 border border-lq-green/30 text-lq-green font-bold text-xs uppercase tracking-widest mb-6 pointer-events-auto">
              <Star size={14} fill="currentColor" /> Pré-Vestibular 2026
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 pointer-events-auto">
              A Química da sua <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lq-pink via-lq-orange to-lq-green animate-pulse-glow">
                Aprovação.
              </span>
            </h1>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-lg border-l-4 border-lq-purple pl-6 pointer-events-auto">
              Domine a matéria com a didática de quem ensina nos maiores colégios de BH. Metodologia leve, direta e focada no seu resultado.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pointer-events-auto">
              <a href="https://wa.me/" className="bg-lq-green hover:bg-[#4a9663] text-white font-bold py-4 px-8 rounded-2xl inline-flex items-center justify-center gap-2 transition-all shadow-[0_0_30px_rgba(90,175,118,0.3)] hover:scale-105 hover:shadow-[0_0_40px_rgba(90,175,118,0.5)]">
                Quero ser aprovado <ArrowRight size={20} />
              </a>
              <a href="#sobre" className="border border-white/20 hover:bg-white/5 text-white font-bold py-4 px-8 rounded-2xl inline-flex items-center justify-center transition-all">
                Conhecer a Luísa
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-md z-10 pointer-events-auto"
          >
            {/* Efeitos atrás da foto */}
            <div className="absolute top-10 -right-10 w-full h-full border-2 border-lq-pink/50 rounded-[2rem] z-0 opacity-60"></div>
            
            {/* FOTO HERO */}
            <div className="relative rounded-[2rem] overflow-hidden border-2 border-white/10 shadow-2xl bg-lq-surface">
              <img src={heroImg} alt="Luísa Química com Erlenmeyers" className="w-full h-full object-cover transform hover:scale-105 transition-all duration-700" />
              
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-6 left-6 bg-lq-dark/90 backdrop-blur-md p-4 rounded-xl border border-lq-green/30 flex items-center gap-4 shadow-xl"
              >
                <div className="bg-lq-green p-3 rounded-full text-white shadow-lg shadow-lq-green/30">
                  <Beaker size={24} />
                </div>
                <div>
                  <p className="font-bold text-white text-lg">Didática Única</p>
                  <p className="text-xs text-lq-green uppercase tracking-wider font-bold">Método Validado</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BARRA DE AUTORIDADE */}
      <div className="bg-lq-surface border-y border-white/5 relative z-20">
        <div className="container mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center items-center font-bold uppercase tracking-widest text-xs md:text-sm text-gray-300">
            <span className="flex flex-col items-center gap-2 hover:text-white transition-colors"><GraduationCap className="text-lq-pink" /> Formada UFMG</span>
            <span className="flex flex-col items-center gap-2 hover:text-white transition-colors"><CheckCircle2 className="text-lq-green" /> Colégio Magnum</span>
            <span className="flex flex-col items-center gap-2 hover:text-white transition-colors"><CheckCircle2 className="text-lq-orange" /> Santa Maria Minas</span>
            <span className="flex flex-col items-center gap-2 hover:text-white transition-colors"><CheckCircle2 className="text-lq-purple" /> Determinante</span>
          </div>
        </div>
      </div>

      {/* SOBRE A LUÍSA */}
      <section id="sobre" className="py-24 relative bg-lq-dark z-10">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-lq-orange rounded-2xl z-0"></div>
            
            {/* FOTO SOBRE */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img src={sobreImg} alt="Professora Luísa" className="w-full h-full object-cover" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-lq-orange font-bold tracking-widest uppercase text-sm">Quem é a Luísa?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">Paixão por ensinar e <br/>transformar alunos.</h2>
            
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              Formada em Licenciatura em Química pela <strong>UFMG</strong>, transformo a maneira como você enxerga a matéria. Com passagens por grandes instituições como <strong>Colégio Magnum Agostiniano</strong>, <strong>Colégio Santa Maria Minas</strong> e <strong>Pré-vestibular Determinante</strong>.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 bg-lq-surface p-4 rounded-xl border border-white/5 hover:border-lq-pink/30 transition-all">
                <div className="bg-lq-pink/20 p-2 rounded-lg text-lq-pink"><CheckCircle2 size={20} /></div>
                <div>
                  <h4 className="font-bold text-white">Alta Performance</h4>
                  <p className="text-sm text-gray-400">Experiência com turmas ITA/IME e MED.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-lq-surface p-4 rounded-xl border border-white/5 hover:border-lq-green/30 transition-all">
                <div className="bg-lq-green/20 p-2 rounded-lg text-lq-green"><CheckCircle2 size={20} /></div>
                <div>
                  <h4 className="font-bold text-white">Química Descomplicada</h4>
                  <p className="text-sm text-gray-400">Didática focada em fazer você entender, não decorar.</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/lu%C3%ADsasanto/" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-[#0077b5] hover:scale-110 transition-all border border-white/10"><Linkedin size={20} /></a>
              <a href="https://www.instagram.com/luisaquimica/" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-lq-pink hover:scale-110 transition-all border border-white/10"><Instagram size={20} /></a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DIFERENCIAIS (CARDS COLORIDOS) */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sua preparação completa</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Tudo o que você precisa para chegar na prova com segurança e tranquilidade.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* CARD 1 */}
            <motion.div whileHover={{ y: -10 }} className="p-8 rounded-[2rem] bg-lq-surface border border-white/5 hover:border-lq-green/50 transition-all group shadow-lg">
              <div className="w-16 h-16 bg-lq-green/10 text-lq-green rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:bg-lq-green group-hover:text-white transition-all">
                <Beaker />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Material Exclusivo</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Listas de exercícios curadas, resumos teóricos e material de apoio focado no que realmente cai nas provas.</p>
            </motion.div>

            {/* CARD 2 */}
            <motion.div whileHover={{ y: -10 }} className="p-8 rounded-[2rem] bg-lq-surface border border-white/5 hover:border-lq-pink/50 transition-all group shadow-lg">
              <div className="w-16 h-16 bg-lq-pink/10 text-lq-pink rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:bg-lq-pink group-hover:text-white transition-all">
                <GraduationCap />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Didática UFMG</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Metodologia sólida construída na melhor universidade do estado e validada diariamente em sala de aula.</p>
            </motion.div>

            {/* CARD 3 */}
            <motion.div whileHover={{ y: -10 }} className="p-8 rounded-[2rem] bg-lq-surface border border-white/5 hover:border-lq-orange/50 transition-all group shadow-lg">
              <div className="w-16 h-16 bg-lq-orange/10 text-lq-orange rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:bg-lq-orange group-hover:text-white transition-all">
                <MessageCircle />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Suporte Total</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Tire dúvidas diretamente comigo. Monitoria ativa para garantir que nenhum conceito fique para trás.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GALERIA & CTA FINAL */}
      <section id="contato" className="py-24 relative overflow-hidden bg-gradient-to-b from-lq-dark to-[#150D1D] z-10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Otimismo e dedicação em cada aula</h2>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-20">
            <motion.div whileHover={{ scale: 1.05, rotate: -2 }} className="w-72 h-96 rounded-3xl overflow-hidden border-4 border-lq-green rotate-[-3deg] shadow-2xl relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end justify-center pb-6">
                <span className="font-bold text-white">Química com leveza</span>
              </div>
              <img src={gallery1} alt="Luísa Sorrindo" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div whileHover={{ scale: 1.05, rotate: 2 }} className="w-72 h-96 rounded-3xl overflow-hidden border-4 border-lq-pink rotate-[3deg] shadow-2xl mt-8 md:mt-0 relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end justify-center pb-6">
                <span className="font-bold text-white">Aulas Práticas</span>
              </div>
              <img src={gallery2} alt="Luísa Jaleco" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          <div className="max-w-3xl mx-auto p-[1px] bg-gradient-to-r from-lq-green via-lq-pink to-lq-purple rounded-[2rem]">
            <div className="bg-lq-surface rounded-[2rem] p-10 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-lq-pink/10 rounded-full blur-3xl pointer-events-none"></div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">Pronto para dominar a Química?</h3>
              <p className="text-gray-300 mb-10 text-lg">As vagas para o pré-vestibular 2026 e acompanhamento escolar são limitadas. Entre em contato agora e garanta seu futuro.</p>
              
              <a href="https://wa.me/" className="w-full md:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-5 px-10 rounded-2xl inline-flex items-center justify-center gap-3 transition-all shadow-xl hover:shadow-[#25D366]/30 hover:-translate-y-1 text-lg">
                <MessageCircle size={28} />
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-white/5 text-center relative z-20 bg-[#120b18]">
        <div className="flex justify-center gap-8 mb-6 opacity-70">
          <a href="https://www.instagram.com/luisaquimica/" className="hover:text-lq-pink hover:scale-110 transition-all"><Instagram /></a>
          <a href="https://www.linkedin.com/in/lu%C3%ADsasanto/" className="hover:text-blue-400 hover:scale-110 transition-all"><Linkedin /></a>
        </div>
        <p className="text-gray-600 text-sm">© 2025 Luísa Química. Todos os direitos reservados.</p>
      </footer>

    </div>
  );
}

export default App;