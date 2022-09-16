import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line


const galleryList=document.querySelector(".gallery");

galleryList.insertAdjacentHTML("beforeend",createMarkup(galleryItems))

function createMarkup(items)
{
    const markup= items.map(({preview,original,description})=>

        `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`
    ).join('');
    console.log(markup);
    return markup
}

new SimpleLightbox('.gallery__item', {captionsData:'alt',captonDelay:'250ms'});
