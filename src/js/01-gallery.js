// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line
const gallery = document.querySelector('.gallery');
const paletteGallery = createGallery(galleryItems);

gallery.insertAdjacentHTML('beforeend', paletteGallery);

gallery.addEventListener('click', openImage);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ description, original, preview }) => {
      return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `;
    })
    .join('');
}

function openImage(event) {
  event.preventDefault();
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
