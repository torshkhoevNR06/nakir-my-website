function loadImage(id: string, targetId?: string): void {
  const el: HTMLElement | null = document.getElementById(id);
  const targetEl: HTMLElement | null = targetId ? document.getElementById(targetId) : el;
  let imageToLoad!: HTMLImageElement | string;
  
  if (el !== null) {
    if (el.dataset["image"]) {
      imageToLoad = el.dataset["image"];
    } else if (el instanceof HTMLImageElement) {
      imageToLoad = el.currentSrc || el.src;
    } else {
      imageToLoad = (el.getAttribute && el.getAttribute('src')) || '';
    }
  }

  if (imageToLoad && targetEl !== null) {
    const img: HTMLImageElement | null = new Image();
    img.src = (imageToLoad as string);
    img.onload = function(): void {
      targetEl.classList.add('is-loaded');
    };
  }
}

document.addEventListener('DOMContentLoaded', function(): void {
  loadImage('wallpaper');
  loadImage('pictureImage', 'picture');
});