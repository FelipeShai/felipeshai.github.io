import { BlogPost } from './blog.types';
import { comandosLinuxEssenciaisTerminalPost } from './posts/comandos-linux-essenciais-terminal.post';
import { cloneableJavaDeepCopyPost } from './posts/cloneable-java-deep-copy.post';

export const blogPosts: readonly BlogPost[] = [
  comandosLinuxEssenciaisTerminalPost,
  cloneableJavaDeepCopyPost,
] as const;

export const featuredPostSlug = cloneableJavaDeepCopyPost.slug;

export function findBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
