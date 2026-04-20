export interface ContactChannel {
  label: string;
  value: string;
  href: string;
  note: string;
}

export const contatoHero = {
  eyebrow: 'Contato',
  title: 'Vamos conversar sobre o seu próximo desafio',
  description:
    'Estou disponível para oportunidades em backend, arquitetura de software e projetos de consultoria com foco em resultado de negócio.',
} as const;

export const contatoChannels: readonly ContactChannel[] = [
  {
    label: 'WhatsApp',
    value: '+55 71 99124-7146',
    href: 'https://wa.me/5571991247146',
    note: 'Canal mais rápido para primeiro contato.',
  },
  {
    label: 'E-mail',
    value: 'felipe.shai@hotmail.com',
    href: 'mailto:felipe.shai@hotmail.com',
    note: 'Ideal para propostas detalhadas.',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/felipeshai',
    href: 'https://www.linkedin.com/in/felipeshai/',
    note: 'Networking e histórico profissional.',
  },
  {
    label: 'GitHub',
    value: 'github.com/FelipeShai',
    href: 'https://github.com/FelipeShai',
    note: 'Projetos, estudos e repositórios públicos.',
  },
] as const;