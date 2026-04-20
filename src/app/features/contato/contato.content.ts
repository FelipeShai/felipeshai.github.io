export interface ContactChannel {
  label: string;
  value: string;
  href: string;
  note: string;
}

export const contatoHero = {
  eyebrow: 'Contato',
  title: 'Vamos conversar sobre o seu proximo desafio',
  description:
    'Estou disponivel para oportunidades em backend, arquitetura de software e projetos de consultoria com foco em resultado de negocio.',
} as const;

export const contatoChannels: readonly ContactChannel[] = [
  {
    label: 'WhatsApp',
    value: '+55 71 99124-7146',
    href: 'https://wa.me/5571991247146',
    note: 'Canal mais rapido para primeiro contato.',
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
    note: 'Networking e historico profissional.',
  },
  {
    label: 'GitHub',
    value: 'github.com/FelipeShai',
    href: 'https://github.com/FelipeShai',
    note: 'Projetos, estudos e repositorios publicos.',
  },
] as const;