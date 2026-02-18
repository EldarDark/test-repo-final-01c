export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`hero-${cols.length}-cols`);

  // Find the image and make it the background
  const image = block.querySelector('img');
  if (image) {
    const picture = image.closest('picture');
    const bg = document.createElement('div');
    bg.classList.add('hero-bg');
    bg.append(picture);
    block.prepend(bg);
  }

  // Wrap text content
  const content = block.querySelector(':scope > div:not(.hero-bg)');
  if (content) {
    content.classList.add('hero-content');
    const cta = content.querySelector('a');
    if (cta) cta.classList.add('button', 'primary', 'large');
  }
}