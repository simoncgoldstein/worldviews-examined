// Remark plugin: numbers <Cite source="…" locator="…" /> elements in an MDX document.
//
// - Each distinct (source, locator) pair gets one number, in order of first appearance.
// - Each use gets an occurrence index, so a repeated citation keeps a unique anchor and the
//   single source entry can link back to every use.
// - The numbered list is exposed to the page as frontmatter (`remarkPluginFrontmatter.citations`),
//   so the Sources list is built from the same data the superscripts are, never a second parse.
// - Malformed citations fail the build.

const CITE = 'Cite';

/** Directory-independent namespace for anchors, e.g. "christianity-great-and-terrible". */
function namespaceFor(path) {
  const parts = String(path ?? '').split(/[\\/]/);
  const file = (parts.pop() ?? 'document').replace(/\.[^.]+$/, '');
  const parent = parts.pop();
  return [parent, file].filter(Boolean).join('-').toLowerCase().replace(/[^a-z0-9-]+/g, '-');
}

function readAttributes(node, location) {
  const out = {};
  for (const attribute of node.attributes ?? []) {
    if (attribute.type !== 'mdxJsxAttribute' || typeof attribute.value !== 'string') {
      throw new Error(`${location}: <Cite> attributes must be plain string literals`);
    }
    out[attribute.name] = attribute.value;
  }
  return out;
}

function walk(node, visit) {
  visit(node);
  for (const child of node.children ?? []) walk(child, visit);
}

export default function remarkCitations() {
  return (tree, file) => {
    const ns = namespaceFor(file.path);
    const location = file.path ?? 'MDX document';
    /** @type {Map<string, {n:number, sourceId:string, locator:string, note?:string, occurrences:number}>} */
    const byKey = new Map();
    const citations = [];

    walk(tree, (node) => {
      if (!['mdxJsxTextElement', 'mdxJsxFlowElement'].includes(node.type) || node.name !== CITE) return;

      const attrs = readAttributes(node, location);
      const source = attrs.source?.trim();
      const locator = attrs.locator?.trim();
      if (!source) throw new Error(`${location}: <Cite> requires a "source" attribute`);
      if (!locator) throw new Error(`${location}: <Cite source="${source}"> requires a non-empty "locator"`);
      if (/[\r\n<>{}]/.test(locator) || locator.length > 120) {
        throw new Error(`${location}: malformed locator for source "${source}": ${JSON.stringify(locator)}`);
      }

      const key = `${source}\u0000${locator}`;
      let entry = byKey.get(key);
      if (!entry) {
        entry = { n: citations.length + 1, sourceId: source, locator, occurrences: 0 };
        if (attrs.note) entry.note = attrs.note;
        byKey.set(key, entry);
        citations.push(entry);
      }
      entry.occurrences += 1;

      // Hand the resolved numbering to the component.
      node.attributes = [
        { type: 'mdxJsxAttribute', name: 'source', value: source },
        { type: 'mdxJsxAttribute', name: 'locator', value: locator },
        { type: 'mdxJsxAttribute', name: 'ns', value: ns },
        { type: 'mdxJsxAttribute', name: 'n', value: String(entry.n) },
        { type: 'mdxJsxAttribute', name: 'occurrence', value: String(entry.occurrences) },
      ];
    });

    file.data.astro ??= {};
    file.data.astro.frontmatter ??= {};
    file.data.astro.frontmatter.citations = citations;
  };
}
