// Remark plugin (answers only): wraps each level-two section of an answer MDX body in
// <AnswerSection ns slug title>…</AnswerSection> and removes the heading node. The component
// renders the heading itself at the right level (h3 inside the worldview's h2) with an id that is
// unique per answer, so several answers can share a page without duplicate IDs.
//
// Section titles are validated by scripts/validate-content.ts; this plugin only restructures.
// It runs after remark-citations so citation numbering is already document-wide.

function isAnswerFile(path) {
  return /[\\/]content[\\/]answers[\\/]/.test(String(path ?? ''));
}

function namespaceFor(path) {
  const parts = String(path ?? '').split(/[\\/]/);
  const file = (parts.pop() ?? 'document').replace(/\.[^.]+$/, '');
  const parent = parts.pop();
  return [parent, file].filter(Boolean).join('-').toLowerCase().replace(/[^a-z0-9-]+/g, '-');
}

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function textOf(node) {
  if (typeof node.value === 'string') return node.value;
  return (node.children ?? []).map(textOf).join('');
}

const attribute = (name, value) => ({ type: 'mdxJsxAttribute', name, value });

export default function remarkAnswerSections() {
  return (tree, file) => {
    if (!isAnswerFile(file.path)) return;
    const ns = namespaceFor(file.path);

    const output = [];
    let current;
    for (const node of tree.children) {
      if (node.type === 'heading' && node.depth === 2) {
        const title = textOf(node).trim();
        current = {
          type: 'mdxJsxFlowElement',
          name: 'AnswerSection',
          attributes: [attribute('ns', ns), attribute('slug', slugify(title)), attribute('title', title)],
          children: [],
        };
        output.push(current);
      } else if (current) {
        current.children.push(node);
      } else {
        output.push(node);
      }
    }
    tree.children = output;
  };
}
