import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const listItemsMarkup = createListItemsMarkup(galleryItems);

galleryContainer.innerHTML = listItemsMarkup;

galleryContainer.addEventListener('click', onContainerClick);

function createListItemsMarkup(gallery){
    const markup = gallery.map(({preview, original, description}) => {
        return `<div class="gallery__item">
                    <a class="gallery__link" href="${original}" onclick="return false;">
                        <img
                            class="gallery__image"
                            src="${preview}"
                            data-source="${original}"
                            alt="${description}"
                        />
                    </a>
                </div>
                `;
    }).join('');
    return markup;
}

function onContainerClick(evt) {
    const isGalleryImage = evt.target.classList.contains("gallery__image");

    if (!isGalleryImage) { return; }

    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
    `);
    
    instance.show();
}