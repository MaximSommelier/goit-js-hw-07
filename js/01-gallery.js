import { galleryItems } from './gallery-items.js';
// Change code below this line
// const refs = galleryItems
const gallery = document.querySelector(".gallery");

const markup = galleryItems.map(({preview,original,description}) => `<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`);

gallery.insertAdjacentHTML('beforeend',markup.join(''));

gallery.addEventListener('click', onClick);

function onClick(evt){
    evt.preventDefault();
    if (!evt.target.classList.containes('.gallery__image')){
        return;
    }
};

console.log(galleryItems);
