export const homeProfile = {
  name: 'Felipe Shai',
  role: 'Engenheiro de Software',
  headline: 'Backend com enfase em Java',
  location: 'Salvador, BA',
  intro:
    'E-commerces, pagamentos, crédito e logística em larga escala com times multidisciplinares. Projetos nacionais e internacionais com foco em arquitetura robusta e qualidade continua.',
} as const;

export const homePrimaryAction = {
  label: 'Ver projetos',
  href: '#projetos',
} as const;

export const homeSocialLinks = [
  { label: 'GitHub', href: 'https://github.com/FelipeShai' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/felipeshai/' },
  { label: 'Blog', href: 'https://github.com/FelipeShai' },
] as const;

export const homeTrajectoryPreview = {
  eyebrow: 'Sobre',
  title: 'Trajetória',
  description:
    'Comecei na área por qualidade de software, o que significa que aprendi a pensar em como sistemas falham antes de aprender a construí-los. Hoje desenvolvo backend com Java e Spring, mas carrego essa visão em cada decisão técnica: do refinamento ao deploy.',
  actionLabel: 'Ver perfil completo e trajetória',
  actionHref: '/trajetoria',
} as const;

export const homeHeroMetrics = [
  { value: '4+', label: 'anos de experiência' },
  { value: 'PCI DSS', label: 'conectores de pagamento' },
  { value: "1M+", label: 'usuários migrados' },
  { value: '5+', label: 'plataformas digitais' },
] as const;

export const homeHeroCompetencies = [
  'Java · Spring Boot · Kafka · AWS',
  'Clean Architecture · SOLID · microsserviços',
  'Qualidade do refinamento ao deploy',
  'Testes: unitário · integração · mutação · API',  
] as const;

export const homeAvailabilityText = 'Disponivel para projetos remotos';

export const homeCompanySection = {
  eyebrow: 'Empresas',
  title: 'Marcas e times em que atuei',
  items: [
    {
      company: 'ACT Digital',
      role: 'Engenheiro de Software (Consultoria PAN e BTG)',
      period: 'Fev 2026 - Atual',
    },
    {
      company: 'PagBank',
      role: 'Engenheiro de Software',
      period: 'Mar 2024 - Fev 2026',
    },
    {
      company: 'dti digital',
      role: 'Backend Java, Backend .NET e QA',
      period: 'Ago 2022 - Fev 2024',
    },
    {
      company: 'BomConsorcio',
      role: 'Analista de Testes',
      period: 'Mar 2022 - Ago 2022',
    },
  ],
} as const;

export const homeShowcaseItems = [
  {
    tag: 'Em breve',
    title: 'Projetos selecionados',
    description:
      'Espaco reservado para estudos de arquitetura, automacao e iniciativas praticas que merecem destaque.',
  },
  {
    tag: 'Organizacao',
    title: 'Conteudo em camadas',
    description:
      'A estrutura atual ja deixa pronto o terreno para transformar cada bloco em uma pagina propria no futuro.',
  },
] as const;

export const homeBlogHighlights = [
  {
    tag: 'Notas tecnicas',
    title: 'Blog minimalista',
    description:
      'Um espaco enxuto para artigos, aprendizados e decisoes de engenharia que valem registro.',
  },
] as const;
