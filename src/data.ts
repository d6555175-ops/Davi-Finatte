export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Database';
  icon?: string;
}

export const CONTACT = {
  email: 'd6555175@gmail.com',
  whatsapp: '5511999094158',
  github: 'https://github.com/d6555175-ops',
};

export const PROJECTS: Project[] = [
  {
    id: 'flowtask',
    title: 'FlowTask',
    shortDescription: 'Gerenciamento de fluxo de trabalho intuitivo e minimalista.',
    fullDescription: 'FlowTask é uma plataforma de produtividade projetada para simplificar a gestão de projetos complexos através de um fluxo visual claro. Inclui Dashboard, Calendário, Foco Pomodoro e acompanhamento de progresso em tempo real.',
    image: 'https://lh3.googleusercontent.com/sitesv/AA5AbUCLpEi5SEirjvZ1982i4OoL9fQrobdxs5_tZOeh2jS4lCT53PBtV3TUT_LIR-mO8Wh2W67Dee8Dq_HzyMyr3fs078kHZhBobKVnNsEl7o-osCqFz63MIEO6VTSD_GXc2p70HkkW_s5FIq02jEO4Lrtr0wLBnRelAEPL-JnAEXlBpFopz2iOwqT7lH1us8Y0Q3Nr6UNkxv4WlJWmBl92I5cBzg7WiEVzjyzz9j4=w1280',
    technologies: ['React', 'TypeScript', 'Tailwind', 'Stripe', 'Framer Motion'],
    liveUrl: 'https://flowtask-demo.vercel.app',
    githubUrl: 'https://github.com/d6555175-ops/flowtask',
    featured: true
  },
  {
    id: 'devzero',
    title: 'DevZero',
    shortDescription: 'Aprenda programação e conquiste sua vaga em até 6 meses.',
    fullDescription: 'Página de conversão de alta performance para o método DevZero. Focada em copywriting agressivo, prova social e conversão rápida para desenvolvedores que buscam entrar no mercado de trabalho.',
    image: 'https://lh3.googleusercontent.com/sitesv/AA5AbUA9-w-0mdqVv0Ye9Kk14ERSF5StjbMWxx8Pue8RFOSQwXuJQzITy4sNRwQA6QCFs82wniQO_uUymskZkFvlcZ_57_H2dLOLVf0MJYVWfcucdON0jrul6mQi0qhrMUXluYqHm4Mu5oLV43QB-k0z68ezbvCnjPcwf5EkWGAcZADCcTkvDS6i1idlxgf_NQSlv1ae8oIFksZWoWHa1eRv_MtazGR-mOcYuPDuv3o=w1280',
    technologies: ['React', 'Next.js', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: 'https://devzero-ui.vercel.app',
    githubUrl: 'https://github.com/d6555175-ops/devzero',
    featured: true
  },
  {
    id: 'diplogen',
    title: 'DiploGen',
    shortDescription: 'Liderança intelectual e impacto global em ciência e diplomacia.',
    fullDescription: 'Plataforma para formação da nova geração de líderes em ciência, diplomacia e tecnologia. Focada em missões globais, eventos e rede de networking internacional.',
    image: 'https://lh3.googleusercontent.com/sitesv/AA5AbUA6D-OnJcbINXOpFeMRwAvxKjGf7bpWtrlXyiJCjgfxB86derc9wrlhIf-c4ZhUMR-53rOu1igzFKknpJc94l0qcSrUe13DE_8hzzQ-ma__dLTegAB4WrKjZVJZFepg9VvNRt2WJqtPn1hYbrmugsWdLREUpsBxA91zYisPidhEC5JT-sv0qPUsh8de0-axXm1nyck-Lxfs2XuMdPqLglwYQdT_-9pI5A=w1280',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://diplogen.vercel.app',
    githubUrl: 'https://github.com/d6555175-ops/newdiplogen',
    featured: true
  },
  {
    id: 'biosynthnet',
    title: 'BioSynthNet',
    shortDescription: 'Visualização e análise de redes de síntese biológica.',
    fullDescription: 'Sistema modular de tratamento de água integrando biorremediação com monitoramento ambiental em tempo real. Interface avançada para visualização de parâmetros como pH e conectividade IoT.',
    image: 'https://lh3.googleusercontent.com/sitesv/AA5AbUDgLllRAj-Fw2EvKfei6Q0i5vWKCMykjKS8XNiTBfvXFcMzg5JNTEQX1OsKCq9A5Fo7gny9mrIE9vC--xLBhjU_12w5I6_Y1kQ4XOrACyBAs1SJMVhf9YxIxhWJMVuS_cqN2MqsZx0SsPyoeHoCFUHhATEfrDZB06DkS9G9BjAz7yQCHtdRMPauK_ou9lj94XbaeVbO4ZI-NFSzJdGMRXjny2KvTREicx9q64g=w1280',
    technologies: ['React', 'D3.js', 'IoT Support', 'Tailwind CSS'],
    liveUrl: 'https://biosynthnet.science',
    githubUrl: 'https://github.com/d6555175-ops/BioSynthNet',
    featured: true
  },
  {
    id: 'noteflow',
    title: 'NoteFlow',
    shortDescription: 'Captura de ideias e notas com organização dinâmica.',
    fullDescription: 'Ferramenta de notas minimalist que utiliza blocos para organizar o pensamento. NoteFlow permite que você conecte ideias de forma fluida.',
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=800&auto=format&fit=crop',
    technologies: ['React', 'Clerk', 'TipTap', 'MongoDB'],
    liveUrl: 'https://noteflow.dev',
    githubUrl: 'https://github.com/d6555175-ops/noteflow',
    featured: false
  },
  {
    id: 'smun',
    title: 'SMUN App',
    shortDescription: 'Aplicação para simulações das Nações Unidas.',
    fullDescription: 'Plataforma desenvolvida para gerenciar delegações, discursos e resoluções durante conferências de MUN.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop',
    technologies: ['Next.js', 'Firebase', 'Tailwind'],
    liveUrl: '#',
    githubUrl: 'https://github.com/d6555175-ops/smun',
    featured: false
  },
  {
    id: 'py-calc',
    title: 'Analisador de Dados Python',
    shortDescription: 'Script para análise estatística e visualização de dados.',
    fullDescription: 'Um projeto Python que processa grandes volumes de dados para gerar relatórios detalhados e gráficos interativos, explorando o potencial de bibliotecas de ciência de dados em um contexto acadêmico.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    technologies: ['Python', 'Pandas', 'Matplotlib'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    id: 'java-inventory',
    title: 'Controle de Estoque Java',
    shortDescription: 'Sistema básico de cadastro de produtos.',
    fullDescription: 'Um CRUD simples feito em Java para aprender sobre Orientação a Objetos e persistência de dados em arquivos de texto.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
    technologies: ['Java', 'File IO'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    id: 'py-scrapper',
    title: 'Web Scrapper de Notícias',
    shortDescription: 'Script simples para coletar manchetes de sites.',
    fullDescription: 'Automação feita em Python para extrair títulos de notícias de portais brasileiros e salvar em um arquivo CSV.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    technologies: ['Python', 'BeautifulSoup'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    id: 'java-school',
    title: 'Sistema de Notas Escolar',
    shortDescription: 'Gerenciador de boletins e frequência de alunos.',
    fullDescription: 'Projeto final de curso focado em lógica de negócios para cálculo de médias, aprovados e reprovados em uma escola fictícia.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop',
    technologies: ['Java', 'MySQL'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  }
];

export const SKILLS: Skill[] = [
  { name: 'React', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Docker', category: 'Tools' },
  { name: 'AWS', category: 'Tools' },
  { name: 'Git', category: 'Tools' },
  { name: 'GraphQL', category: 'Backend' }
];
