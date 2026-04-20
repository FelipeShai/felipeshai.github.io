import { BlogPost } from '../blog.types';

// Duplique este arquivo e renomeie para "<slug>.post.ts".
export const postTemplate: BlogPost = {
  slug: 'novo-slug-do-post',
  title: 'Título do post',
  description: 'Resumo curto para a listagem do blog.',
  publishedAt: '2026-01-01',
  readingTime: '5 min',
  author: 'Felipe Shai',
  tags: ['Tag 1', 'Tag 2'],
  sections: [
    {
      title: 'Seção principal',
      paragraphs: ['Parágrafo introdutório.'],
      bullets: ['Ponto importante 1', 'Ponto importante 2'],
      quotes: ['"Citação opcional."'],
      links: [
        {
          label: 'Fonte opcional',
          href: 'https://example.com',
        },
      ],
    },
  ],
  conclusion: ['Conclusão do artigo.'],
  references: [
    {
      label: 'Referência principal',
      href: 'https://example.com',
    },
  ],
};
