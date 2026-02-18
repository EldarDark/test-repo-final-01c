export default function decorate(block) {
  const rows = [...block.children];
  rows.forEach((row) => {
    row.classList.add('columns-row');
    [...row.children].forEach((col) => {
      const img = col.querySelector('img');
      if (img) col.classList.add('columns-img-col');
      else col.classList.add('columns-text-col');
    });
  });
}