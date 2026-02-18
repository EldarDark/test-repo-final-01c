export default function decorate(block) {
  [...block.children].forEach((row) => {
    const title = row.children[0];
    const content = row.children[1];
    
    title.classList.add('accordion-item-title');
    content.classList.add('accordion-item-content');
    
    title.addEventListener('click', () => {
      const expanded = title.getAttribute('aria-expanded') === 'true';
      title.setAttribute('aria-expanded', !expanded);
      content.classList.toggle('is-open');
    });
    
    title.setAttribute('role', 'button');
    title.setAttribute('aria-expanded', 'false');
  });
}