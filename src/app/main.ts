// function loadImage(id: string, targetId: string): void {
//   let el: HTMLElement | null = document.getElementById(id);
//   let targetEl: HTMLElement | null = targetId ? document.getElementById(targetId) : el;
//   let imageToLoad: HTMLImageElement;

//   if (el !== null) {
//     if (el.dataset.image) {
//       imageToLoad = el.dataset.image;
//     } else if (typeof el.currentSrc === 'undefined') {
//       imageToLoad = el.src;
//     } else {
//       imageToLoad = el.currentSrc;
//     }
//   }


//   if (imageToLoad) {
//     let img = new Image();
//     img.src = imageToLoad;
//     img.onload = function() {
//       targetEl.classList.add('is-loaded');
//     };
//   }
// }

// document.addEventListener('DOMContentLoaded', function() {
//   loadImage('wallpaper');
//   loadImage('pictureImage', 'picture');
// });