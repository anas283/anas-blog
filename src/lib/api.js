import posts from "./posts.generated.json";

export function getPostSlugs() {
  return posts.map((post) => `${post.slug}.md`);
}

export function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, "");
  return posts.find((post) => post.slug === realSlug);
}

export function getAllPosts() {
  return posts;
}
