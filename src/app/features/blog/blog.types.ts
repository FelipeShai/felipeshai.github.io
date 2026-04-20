export interface BlogPostReference {
  label: string;
  href: string;
}

export interface BlogPostSection {
  title: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
  quotes?: readonly string[];
  links?: readonly BlogPostReference[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readingTime: string;
  author: string;
  tags: readonly string[];
  sections: readonly BlogPostSection[];
  conclusion: readonly string[];
  references: readonly BlogPostReference[];
}
