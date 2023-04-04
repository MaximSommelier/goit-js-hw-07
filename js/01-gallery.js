import { galleryItems } from './gallery-items.js';
// Change code below this line

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

gallery.insertAdjacentHTML('beforeend', markup.join(''));

gallery.addEventListener('click', onClick);

function onClick(evt){
    evt.preventDefault();

    if (!evt.target.classList.contains("gallery__image")){
        return;
    }

    const currentImage = evt.target.closest(".gallery__link");
    const href = currentImage.href;
    const alt = currentImage.alt;

    const instance = basicLightbox.create(`
    div><img src="${href}" alt="${alt}"></div>
`);

instance.show()

// console.log(href);
};