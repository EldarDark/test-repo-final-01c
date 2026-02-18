export default function decorate(block) {
  const steps = [...block.children];
  block.classList.add('stepper-container');
  
  steps.forEach((step, i) => {
    step.classList.add('stepper-item');
    const color = step.children[2]?.textContent || '#ccc';
    step.style.setProperty('--step-color', color);
    
    const indexLabel = document.createElement('div');
    indexLabel.classList.add('stepper-index');
    indexLabel.textContent = i + 1;
    step.prepend(indexLabel);
    
    if (step.children[3]) step.children[3].remove(); // Clean up color text node
  });
}