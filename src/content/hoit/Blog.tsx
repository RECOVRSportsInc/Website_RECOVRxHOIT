// src/content/hoit/Blog.tsx

import { useState } from "react";
import type { BlogPost } from "../../blog/types";
import { getPostsForBrand } from "../../blog/allPosts";

const HOIT_POSTS: BlogPost[] = getPostsForBrand("hoit");

export function Blog() {
  const [activeSlug, setActiveSlug] = useState<string | null>(
    HOIT_POSTS[0]?.slug ?? null
  );

  const activePost =
    HOIT_POSTS.find((p) => p.slug === activeSlug) ?? HOIT_POSTS[0] ?? null;

  return (
    <section
      id="blog"
      className="py-16 bg-[#22A1FF]"
    >
      <div className="container section">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
          Blog
        </h2>
        <p className="text-black mb-8 max-w-2xl">
          Short posts on therapy, rehab, and performance from Hands On
          Integrative Therapy.
        </p>

        {/* Post cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {HOIT_POSTS.map((post) => (
            <button
              key={post.slug}
              type="button"
              onClick={() => setActiveSlug(post.slug)}
              className={[
                "text-left rounded-2xl border p-5",
                "bg-slate-900/70 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-900/80",
                "border-white/10 hover:border-white hover:bg-slate-800/80",
                "shadow-[0_18px_60px_rgba(0,0,0,0.65)]",
                "transition-colors duration-200",
                activeSlug === post.slug ? "border-[#22A1FF]" : "",
              ].join(" ")}
              data-no-translate
            >
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-2">
                {post.category} · {post.date}
              </p>
              <h3 className="text-base md:text-lg font-semibold text-white mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-slate-300">{post.excerpt}</p>
            </button>
          ))}
        </div>

        {/* Active post */}
        {activePost && (
          <article
            className="mt-10 max-w-3xl rounded-2xl border border-white/8 bg-slate-900/80 p-6 md:p-8 shadow-[0_24px_80px_rgba(0,0,0,0.7)]"
            data-no-translate
          >
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-2">
              {activePost.category} · {activePost.date}
            </p>
            <h3 className="text-2xl font-semibold text-white mb-4">
              {activePost.title}
            </h3>
            <div className="space-y-4 text-sm md:text-base text-slate-200 leading-relaxed">
              {activePost.content
                .trim()
                .split("\n\n")
                .map((para, idx) => (
                  <p key={idx}>{para.trim()}</p>
                ))}
            </div>
          </article>
        )}
      </div>
    </section>
  );
}