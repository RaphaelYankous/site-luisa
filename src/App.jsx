import React, { useCallback, useMemo } from 'react';
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Instagram, 
  Linkedin, 
  MessageCircle, 
  ArrowRight, 
  Atom, 
  FlaskConical,
  Microscope,
  CheckCircle2,
  Phone,
  Beaker
} from 'lucide-react';

// --- IMAGENS DO SITE ---
import heroImg from './assets/hero.jpg';
import logoImg from './assets/logo-branco.png';
import flaskArt from './assets/sem fundo 22.png';

// --- FOTOS PESSOAIS ---
import imgDiploma from './assets/diploma.jpg';   
import imgOnline from './assets/online.jpg';     
import imgPC from './assets/luisa-pc.jpg';       

// --- LOGOS DAS ESCOLAS ---
import logoDet from './assets/determinante.png';
import logoMag from './assets/magnum.png';
import logoSanta from './assets/Marca-CSM-vertical.png';
import logoIemp from './assets/iemp.png';       
import logoM2 from './assets/m2.jpg';           
import logoSapiens from './assets/sapiens.png';   
import logoProLabore from './assets/prolabore.png'; 
import logoAcerta from './assets/acerta.png';     

const App = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  // --- CONFIGURAÇÃO OTIMIZADA ---
  const particlesOptions = useMemo(() => ({
    fullScreen: { enable: false },
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    interactivity: {
      events: { onHover: { enable: true, mode: "grab" } },
      modes: { grab: { distance: 140, links: { opacity: 0.5 } } }, 
    },
    particles: {
      color: { value: ["#5AAF76", "#B9486E", "#F1B874"] },
      links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.1, width: 1 },
      move: { enable: true, speed: 0.5, direction: "none", random: true, outModes: { default: "bounce" } }, 
      number: { density: { enable: true, area: 800 }, value: 35 }, 
      opacity: { value: 0.3 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } }, 
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

  return (
    <div className="min-h-screen bg-lq-dark text-white font-sans overflow-x-hidden selection:bg-lq-pink selection:text-white relative">
      
      {/* --- BOTÕES LATERAIS FLUTUANTES --- */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
        <motion.a 
          href="https://wa.me/5531996961902" 
          target="_blank"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.1, x: -5 }}
          className="bg-[#25D366] p-3 rounded-full shadow-lg shadow-[#25D366]/20 text-white flex items-center justify-center relative group"
          title="Fale no WhatsApp"
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
          title="Instagram"
        >
          <Instagram size={24} />
        </motion.a>

        <motion.a 
          href="https://www.linkedin.com/in/luísasanto/" 
          target="_blank"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          whileHover={{ scale: 1.1, x: -5 }}
          className="bg-[#0077b5] p-3 rounded-full shadow-lg text-white flex items-center justify-center relative group"
          title="LinkedIn"
        >
          <Linkedin size={24} fill="currentColor" />
        </motion.a>
      </div>

      {/* NAVBAR */}
      <nav className="fixed w-full z-40 top-0 py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto bg-lq-dark/80 backdrop-blur-lg border border-white/10 rounded-full px-6 py-3 flex justify-between items-center shadow-lg shadow-lq-purple/20">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Logo" className="h-8 w-auto" />
            <span className="text-lg font-bold tracking-tight hidden sm:block">Luísa<span className="text-lq-green">Química</span></span>
          </div>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/5531996961902" 
            className="bg-gradient-to-r from-lq-pink to-lq-purple text-white font-bold py-2 px-6 rounded-full text-sm flex items-center gap-2 shadow-lg hover:brightness-110"
          >
            <MessageCircle size={16} />
            Matrículas 2026
          </motion.a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-10 lg:pt-44 lg:pb-20 z-10 overflow-hidden">
        {/* Partículas do Hero */}
        <div className="absolute inset-0 z-0">
            <Particles id="tsparticles-hero" init={particlesInit} className="w-full h-full" options={particlesOptions} />
        </div>

        <div className="absolute top-20 left-[-10%] w-[500px] h-[500px] bg-lq-purple/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div className="absolute bottom-10 right-[-10%] w-[400px] h-[400px] bg-lq-green/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-20 text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1 mb-6 border border-lq-orange/30 rounded-full bg-lq-orange/10 text-lq-orange text-xs font-bold uppercase tracking-widest">
              <Atom size={14} /> Pré-Vestibular 2026
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              A Química da sua <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lq-green via-lq-green to-white">
                Aprovação.
              </span>
            </h1>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-lg border-l-4 border-lq-green pl-6">
              Pare de decorar e comece a entender. Metodologia validada nos maiores colégios de BH, focada no seu resultado na Federal.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                href="https://wa.me/5531996961902" 
                className="bg-lq-green hover:bg-[#4a9663] text-white font-bold py-4 px-8 rounded-2xl inline-flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(90,175,118,0.3)] transition-all"
              >
                Quero ser aprovado <ArrowRight size={20} />
              </motion.a>
              <a href="#metodo" className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/5 transition-colors font-semibold text-center flex items-center justify-center">
                Conhecer o Método
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
                <div className="absolute -inset-1 bg-gradient-to-r from-lq-pink to-lq-purple rounded-[2.5rem] blur opacity-60 group-hover:opacity-80 transition-opacity duration-500 animate-pulse-slow"></div>
                <img src={heroImg} alt="Luísa Química" className="relative rounded-[2rem] border-2 border-white/10 w-full object-cover shadow-2xl" />
                
                <motion.div 
                    animate={{ y: [-15, 0, -15] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-6 -left-6 bg-lq-dark/90 backdrop-blur-xl p-4 rounded-2xl border border-lq-green/30 shadow-2xl flex items-center gap-4"
                >
                    <div className="bg-lq-green p-3 rounded-xl text-white shadow-lg shadow-lq-green/20">
                        <FlaskConical size={24} />
                    </div>
                    <div>
                        <p className="font-bold text-white text-base">Didática Única</p>
                        <p className="text-[10px] text-lq-green uppercase tracking-wider font-bold">Método Validado</p>
                    </div>
                </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AUTORIDADE & LOGOS */}
      <section className="relative z-20 mt-10">
        <div className="bg-lq-surface/50 border-y border-white/5 backdrop-blur-md">
          <div className="container mx-auto px-6 py-12">
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/5 mb-16">
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-bold text-lq-green">+7</span>
                <span className="text-xs uppercase tracking-widest text-gray-400 mt-2 font-bold">Anos de Experiência</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-bold text-lq-pink">8+</span>
                <span className="text-xs uppercase tracking-widest text-gray-400 mt-2 font-bold">Instituições de Ensino</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-bold text-lq-orange">+1000</span>
                <span className="text-xs uppercase tracking-widest text-gray-400 mt-2 font-bold">Alunos Aprovados</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-bold text-lq-purple">UFMG</span>
                <span className="text-xs uppercase tracking-widest text-gray-400 mt-2 font-bold">Licenciatura Plena</span>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm uppercase tracking-widest text-gray-500 mb-12 font-bold">Professora nas maiores instituições de Minas</p>
              
              <div className="flex flex-wrap justify-center items-end gap-x-12 gap-y-12">
                {schools.map((school, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="flex flex-col items-center group w-32 md:w-36"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-lq-green mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {school.name}
                    </span>
                    
                    <img 
                      src={school.logo} 
                      alt={school.name} 
                      className={`${school.size} w-auto object-contain rounded-lg opacity-90 hover:opacity-100 transition-all duration-300 shadow-sm`} 
                    />
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section id="metodo" className="py-24 relative z-10 bg-black/20">
        
        {/* Partículas */}
        <div className="absolute inset-0 z-0">
            <Particles id="tsparticles-metodo" init={particlesInit} className="w-full h-full" options={particlesOptions} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Os Elementos do Sucesso</h2>
            <p className="text-gray-400">Por que estudar com a Luísa muda a sua reação com a matéria?</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div whileHover={{ y: -10 }} className="bg-lq-surface/40 backdrop-blur-md border border-white/10 p-1 rounded-3xl hover:border-lq-green/50 transition-colors">
              <div className="bg-[#1E1E1E]/80 rounded-[1.3rem] p-8 h-full relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-5 text-5xl font-bold text-white/5 font-mono group-hover:text-lq-green/20 transition-colors">01</div>
                <div className="w-14 h-14 bg-lq-green/10 text-lq-green rounded-2xl flex items-center justify-center mb-6 group-hover:bg-lq-green group-hover:text-white transition-all">
                  <Microscope size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Didática <span className="text-lq-green">Prática</span></h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                   Aprenda relacionando a química com o dia a dia. Nada de decorar fórmulas sem sentido.
                </p>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -10 }} className="bg-lq-surface/40 backdrop-blur-md border border-white/10 p-1 rounded-3xl hover:border-lq-pink/50 transition-colors">
              <div className="bg-[#1E1E1E]/80 rounded-[1.3rem] p-8 h-full relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-5 text-5xl font-bold text-white/5 font-mono group-hover:text-lq-pink/20 transition-colors">02</div>
                <div className="w-14 h-14 bg-lq-pink/10 text-lq-pink rounded-2xl flex items-center justify-center mb-6 group-hover:bg-lq-pink group-hover:text-white transition-all">
                  <Beaker size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Material <span className="text-lq-pink">Curado</span></h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                   Listas de exercícios focadas no ENEM e vestibulares de medicina. O filtro exato do que cai na prova.
                </p>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -10 }} className="bg-lq-surface/40 backdrop-blur-md border border-white/10 p-1 rounded-3xl hover:border-lq-orange/50 transition-colors">
              <div className="bg-[#1E1E1E]/80 rounded-[1.3rem] p-8 h-full relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-5 text-5xl font-bold text-white/5 font-mono group-hover:text-lq-orange/20 transition-colors">03</div>
                <div className="w-14 h-14 bg-lq-orange/10 text-lq-orange rounded-2xl flex items-center justify-center mb-6 group-hover:bg-lq-orange group-hover:text-white transition-all">
                  <MessageCircle size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Suporte <span className="text-lq-orange">Ativo</span></h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                   Dúvidas não têm hora. Tenha acesso direto a mim para destravar aquela questão difícil.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="py-24 relative z-10 overflow-hidden">
        
        {/* Partículas */}
        <div className="absolute inset-0 z-0">
            <Particles id="tsparticles-sobre" init={particlesInit} className="w-full h-full" options={particlesOptions} />
        </div>

        <div className="container mx-auto px-6 grid md:grid-cols-12 gap-16 items-center relative z-10">
            
            <div className="md:col-span-5 relative">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-[2rem] overflow-hidden border-4 border-white/5 shadow-2xl z-10"
                >
                    <img src={imgDiploma} alt="Luísa Graduada UFMG" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                    
                    <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-lq-dark via-lq-dark/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                        <div className="w-12 h-1 bg-lq-green mb-2"></div>
                        <p className="text-white font-bold text-xl">Luísa Santos</p>
                        <p className="text-gray-300 text-sm">Graduada & Mestranda | UFMG</p>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="absolute -bottom-12 -right-12 w-48 md:w-56 rounded-2xl overflow-hidden border-4 border-lq-dark shadow-2xl z-20 hidden md:block"
                >
                    <img src={imgPC} alt="Luísa preparando aula" className="w-full h-full object-cover" />
                </motion.div>
            </div>

            <div className="md:col-span-7 md:pl-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-8">Experiência de quem vive a sala de aula.</h2>
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                    <p>
                        Formada pela <strong>UFMG</strong>, atuo nos maiores colégios de BH: <span className="text-white font-semibold">Magnum, Santa Maria e Determinante</span>.
                    </p>
                    <p>
                        Minha trajetória inclui passagens marcantes por <strong>IEMP, M2, Sapiens, Pró Labore e Acerta</strong>, o que me deu a bagagem para entender exatamente a dificuldade de cada aluno.
                    </p>
                    <p>
                        O meu objetivo não é apenas ensinar química, é dar-lhe a <strong className="text-lq-pink">estratégia</strong> para resolver as questões com rapidez e confiança.
                    </p>
                </div>

                <div className="mt-10 flex gap-4 flex-wrap">
                    <div className="flex items-center gap-3 px-5 py-3 bg-white/5 rounded-full border border-white/10 text-sm font-semibold hover:border-lq-green/50 transition-colors">
                        <GraduationCap size={18} className="text-lq-green"/> Licenciatura UFMG
                    </div>
                    <div className="flex items-center gap-3 px-5 py-3 bg-white/5 rounded-full border border-white/10 text-sm font-semibold hover:border-lq-pink/50 transition-colors">
                        <CheckCircle2 size={18} className="text-lq-pink"/> Foco em Alta Performance
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
            <div className="bg-gradient-to-br from-[#2A1B36] to-[#150D1D] rounded-[3rem] p-8 md:p-16 relative overflow-hidden border border-white/10 shadow-2xl group">
                
                {/* Partículas do CTA */}
                <div className="absolute inset-0 z-0 opacity-50">
                    <Particles id="tsparticles-cta" init={particlesInit} className="w-full h-full" options={particlesOptions} />
                </div>

                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-lq-pink/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-lq-pink/30 transition-colors duration-700 pointer-events-none z-0"></div>
                
                <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            Pronto para catalisar <br/>os seus resultados?
                        </h2>
                        <p className="text-gray-400 mb-10 text-lg max-w-md">
                            As vagas para o pré-vestibular 2026 são limitadas. Garanta o seu lugar na turma que mais aprova em BH.
                        </p>
                        <motion.a 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://wa.me/5531996961902"
                            className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-5 px-10 rounded-2xl inline-flex items-center justify-center gap-3 transition-all shadow-xl shadow-[#25d366]/20 text-lg w-full md:w-auto"
                        >
                            <MessageCircle size={24} />
                            Chamar no WhatsApp
                        </motion.a>
                    </div>

                    <div className="relative hidden md:block h-[400px]">
                         <motion.img 
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            src={imgOnline} 
                            alt="Luísa Aula Online" 
                            className="absolute bottom-[-50px] right-0 w-80 object-cover drop-shadow-2xl rotate-3 rounded-[2rem] border-4 border-lq-purple/50"
                        />
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Elemento Decorativo Flutuante */}
      <motion.img
        src={flaskArt}
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-24 md:w-40 opacity-20 pointer-events-none z-20 mix-blend-screen"
      />

      {/* FOOTER */}
      <footer className="py-10 border-t border-white/5 relative z-20 bg-[#0f0913]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center relative">
          
          {/* Conteúdo Central (Redes Sociais + Copyright) */}
          <div className="text-center">
            <div className="flex justify-center gap-8 mb-4 opacity-80">
              <a href="https://www.instagram.com/luisaquimica/" target="_blank" className="hover:text-lq-pink hover:scale-110 transition-all p-3 bg-white/5 rounded-full"><Instagram size={20} /></a>
              <a href="https://www.linkedin.com/in/lu%C3%ADsasanto/" target="_blank" className="hover:text-blue-400 hover:scale-110 transition-all p-3 bg-white/5 rounded-full"><Linkedin size={20} /></a>
            </div>
            <p className="text-gray-600 text-sm">© 2025 Luísa Química. Todos os direitos reservados.</p>
          </div>
          
          {/* Assinatura (Direita no Desktop) */}
          <div className="mt-8 md:mt-0 md:absolute md:right-6 flex flex-col items-center md:items-end gap-1">
              <span className="text-[10px] uppercase tracking-widest text-gray-600">Desenvolvido por</span>
              <a 
                href="https://www.linkedin.com/in/raphael-yankous-machado-clemente-7bb750191/"
                target="_blank"
                rel="noopener noreferrer" 
                className="text-sm text-gray-400 hover:text-white transition-colors font-bold tracking-tight"
                style={{ fontFamily: 'monospace' }}
              >
                {`< Raphael Yankous />`}
              </a>
          </div>

        </div>
      </footer>
    </div>
  );
}

export default App;