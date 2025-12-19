# 🧪 Luísa Química - A Química da Aprovação

Este repositório contém a Landing Page desenvolvida para **Luísa Santos**, professora de Química especialista em preparação de alta performance para vestibulares e ENEM (UFMG, Medicina).

O projeto possui uma identidade visual única, misturando o tema **Dark** com cores vibrantes (neon), animações de partículas químicas e uma navegação fluida para maximizar a conversão de novos alunos.

<img width="1902" height="918" alt="image" src="https://github.com/user-attachments/assets/77ea953c-562a-43e8-925a-b1d97afc95b8" />


## 🚀 Tecnologias Utilizadas

O projeto foi construído com uma stack moderna focada em interatividade e design visual impactante:

* **[React](https://react.dev/)**: Biblioteca principal para a construção da interface.
* **[Vite](https://vitejs.dev/)**: Ferramenta de build rápida e leve.
* **[Tailwind CSS](https://tailwindcss.com/)**: Framework de estilização utilitária para um design responsivo e customizado.
* **[Framer Motion](https://www.framer.com/motion/)**: Biblioteca para animações complexas de entrada, hover e transições.
* **[tsParticles](https://particles.js.org/)**: Motor de partículas leve para criar o efeito de "átomos" e conexões químicas no fundo do site.
* **[Lucide React](https://lucide.dev/)**: Ícones modernos e limpos.

## ✨ Destaques do Projeto

* **Identidade Visual Temática**: Paleta de cores personalizada (`lq-dark`, `lq-green`, `lq-pink`, `lq-purple`) que reforça a marca da professora.
* **Fundo Interativo**: Partículas (`tsparticles-slim`) configuradas para simular ligações químicas, reagindo ao mouse do usuário.
* **Elementos Flutuantes**: Botões sociais laterais (WhatsApp, Instagram, LinkedIn) sempre visíveis para facilitar o contato.
* **Seções Estratégicas**:
    * **Hero**: Headline impactante com animações de entrada e CTA claro.
    * **Autoridade (Logos)**: Carrossel estático com logos das maiores escolas de BH (Magnum, Determinante, Santa Maria, etc.).
    * **Metodologia**: Cards interativos explicando os pilares do ensino (Didática, Material, Suporte).
    * **Sobre**: Seção com foto "recortada" e biografia destacando a formação na UFMG.
    * **Estatísticas**: Números de aprovação e experiência em destaque.

## 📂 Estrutura do Projeto

```bash
├── public/              # Arquivos públicos
├── src/
│   ├── assets/          # Imagens, logos das escolas e vetores
│   ├── App.jsx          # Componente principal (Single Page Application)
│   ├── App.css          # Estilos globais
│   ├── index.css        # Configuração do Tailwind e fontes
│   └── main.jsx         # Ponto de entrada da aplicação
├── index.html           # HTML base
├── tailwind.config.cjs  # Configuração de cores e temas personalizados
├── vite.config.js       # Configuração do Vite
└── package.json         # Dependências (Framer Motion, Particles, etc.)
