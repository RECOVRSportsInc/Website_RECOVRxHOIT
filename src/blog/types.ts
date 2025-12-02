// src/blog/types.ts

export type BlogBrand = "hoit" | "recovr";

export type BlogPost = {
  slug: string;
  brand: BlogBrand;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  content: string;
};