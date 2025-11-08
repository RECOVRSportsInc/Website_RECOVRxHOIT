// src/i18n/translator.ts
type Lang = "en" | "fr";

const CACHE_PREFIX = "t-cache-v1:";
const MAX_NODE_LEN = 600;

function storageKey(text: string, to: Lang) {
  return `${CACHE_PREFIX}${to}:${text}`;
}

function isSkippableText(text: string) {
  const t = text.trim();
  if (!t) return true;
  if (t.length > MAX_NODE_LEN) return true;
  if (/^https?:\/\//i.test(t)) return true;
  if (/\S+@\S+\.\S+/.test(t)) return true;
  if (/^[\W_]+$/.test(t)) return true;
  return false;
}

function shouldSkipElement(el: Element | null) {
  if (!el) return true;
  if ((el as HTMLElement).dataset?.noTranslate !== undefined) return true;
  const tag = el.tagName.toLowerCase();
  if (["script", "style", "code", "pre", "svg", "img", "input", "textarea", "select"].includes(tag))
    return true;
  if (tag === "a") return true;
  return false;
}

function collectTextNodes(root: Element): Text[] {
  const out: Text[] = [];
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || shouldSkipElement(parent)) return NodeFilter.FILTER_REJECT;
      const txt = node.nodeValue || "";
      if (isSkippableText(txt)) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  let current: Node | null = walker.nextNode();
  while (current) {
    out.push(current as Text);
    current = walker.nextNode();
  }
  return out;
}

async function translateText(text: string, to: Lang): Promise<string> {
  const key = storageKey(text, to);
  const cached = localStorage.getItem(key);
  if (cached) return cached;

  const res = await fetch("/api/translate", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ text, source: "en", target: to }),
  });
  if (!res.ok) throw new Error("translate failed");
  const { translated } = (await res.json()) as { translated: string };
  localStorage.setItem(key, translated);
  return translated;
}

export async function applyFrench(): Promise<void> {
  const root = document.getElementById("root");
  if (!root) return;

  const nodes = collectTextNodes(root);
  nodes.forEach((n) => {
    const el = n as any;
    if (!el.__orig) el.__orig = n.nodeValue || "";
  });

  for (const n of nodes) {
    const orig = n.nodeValue || "";
    try {
      const fr = await translateText(orig, "fr");
      n.nodeValue = fr;
    } catch {}
  }
  document.documentElement.lang = "fr";
}

export function restoreEnglish(): void {
  const root = document.getElementById("root");
  if (!root) return;

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let current = walker.nextNode();
  while (current) {
    const t = current as any;
    if (t.__orig !== undefined) current.nodeValue = t.__orig as string;
    current = walker.nextNode();
  }
  document.documentElement.lang = "en";
}
