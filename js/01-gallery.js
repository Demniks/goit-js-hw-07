import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const newGallery = (images) =>
  images
    .map(
      ({ preview, original, description }) => `<div class="gallery__item">
   <a class="gallery__link" href="${original}">
     <img
       class="gallery__image"
       src="${preview}"
       data-source="${original}"
       alt="${description}"
     />
   </a>
 </div>`
    )
    .join("");

galleryEl.insertAdjacentHTML("beforeend", newGallery(galleryItems));

galleryEl.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance =
    basicLightbox.create(` <img src="${event.target.dataset.source}" width="800" height="600">
    
`);
  instance.show();
  document.onkeydown = function (event) {
    event.preventDefault();
    if (event.code == "Escape" && instance.visible()) {
      instance.close();
      console.log("esc");
    }
  };
console.log(galleryItems);
  // document.body.addEventListener("keydown", onEsc);
  // function onEsc(event) {
  //   if (event.key == "Escape") instance.close();
  //   console.log(event);
  // }
}

// onShow: (instance) => {
//   document.onkeydown = function (e) {
//     e.preventDefault();
//     if (e.code == "Escape") {
//       instance.close();
//     }
//   };
// };

// function newGallery(image) {
//   return image
//     .map(({ preview, original, description }) => {
//       return `<div class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </div>`;
//     })
//     .join("");
// }
// galleryEl.insertAdjacentHTML("beforeend", newGallery(galleryItems));

// galleryEl.addEventListener("click", onGalleryClick);

// function onGalleryClick(event) {
//   event.preventDefault();
//   console.log(event.target.dataset.source);
// }

// galleryEl.addEventListener("click", onGalleryClick);
// function onGalleryClick(event) {
//   event.preventDefault();
//   if (event.target.nodeName !== "IMG") {
//     return;
//   }
//   const bigImg = basicLightbox.create(`
//      <img src="${event.target.dataset.source}" width="800" height="600">
//   `);
//   bigImg.show();
// }

// console.log(galleryEl);

