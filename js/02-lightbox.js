import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const listItemsMarkup = createListItemsMarkup(galleryItems);

galleryContainer.innerHTML = listItemsMarkup;

// galleryContainer.addEventListener('click', onContainerClick);

function createListItemsMarkup(gallery){
    const markup = gallery.map(({preview, original, description}) => {
        return `<a class="gallery__item" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>
                `;
    }).join('');
    return markup;
}


let gallery = new SimpleLightbox('.gallery a', { 'captionsData' : 'alt', 'captionDelay': 250 });
gallery.on('show.simplelightbox', function () {
	// do something…
});

gallery.on('error.simplelightbox', function (e) {
	console.log(e); // some usefull information
});