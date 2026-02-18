export default function decorate(block) {
  const row = block.firstElementChild;
  if (row) row.classList.add('cta-banner-wrapper');
  const cta = block.querySelector('a');
  if (cta) cta.classList.add('button', 'accent');
}