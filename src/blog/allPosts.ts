// src/blog/allPosts.ts
import type { BlogPost, BlogBrand } from "./types";
import { returnToSportPost } from "./return-to-sport";
import { vrRehabBasicsPost } from "./vr-rehab-basics";
import { firstSessionUpdatedPost } from "./first-session";
import { vrProgressTrackingPost } from "./vr-progress-tracking";

export const allPosts: BlogPost[] = [
  firstSessionUpdatedPost,
  returnToSportPost,
  vrRehabBasicsPost,
  vrProgressTrackingPost,
];

export function getPostsForBrand(brand: BlogBrand): BlogPost[] {
  return allPosts.filter((post) => post.brand === brand);
}