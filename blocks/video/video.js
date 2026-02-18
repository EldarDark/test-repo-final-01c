export default function decorate(block) {
  const link = block.querySelector('a');
  const poster = block.querySelector('img');
  
  if (link && link.href.includes('.mp4')) {
    const video = document.createElement('video');
    video.setAttribute('controls', '');
    if (poster) video.setAttribute('poster', poster.src);
    video.innerHTML = `<source src="${link.href}" type="video/mp4">`;
    block.textContent = '';
    block.append(video);
  } else if (link) {
    block.classList.add('video-placeholder');
    // Handle YouTube/External link logic here
  }
}