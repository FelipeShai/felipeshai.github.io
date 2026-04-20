import { BlogPost } from './blog.types';
import { cloneableJavaDeepCopyPost } from './posts/cloneable-java-deep-copy.post';

export const blogPosts: readonly BlogPost[] = [cloneableJavaDeepCopyPost] as const;

export const featuredPostSlug = cloneableJavaDeepCopyPost.slug;

export function findBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
