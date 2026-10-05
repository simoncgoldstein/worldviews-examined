// Progressive enhancement: open any closed <details> that contains the fragment target.
//
// Why: the Deep dive in each answer is a collapsible <details>. A link (for example a source's
// ↩ backlink) can point at a citation inside it. Chrome opens the details for such a fragment on
// its own, but other browsers are not guaranteed to, so this makes it deterministic.
//
// Citation -> source navigation is plain anchor navigation and works without this script; it
// only improves the closed-details case. It uses `scrollIntoView` with the default (instant)
// behavior, so it never animates and respects prefers-reduced-motion by construction.

function revealHashTarget(): void {
  const id = decodeURIComponent(window.location.hash.slice(1));
  if (!id) return;
  const target = document.getElementById(id);
  if (!target) return;

  let opened = false;
  for (
    let details = target.parentElement?.closest('details');
    details;
    details = details.parentElement?.closest('details')
  ) {
    if (!details.open) {
      details.open = true;
      opened = true;
    }
  }
  // Layout shifts when a details opens, so bring the target back into view.
  if (opened) target.scrollIntoView({ block: 'start' });
}

revealHashTarget();
window.addEventListener('hashchange', revealHashTarget);
