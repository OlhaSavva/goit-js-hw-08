// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from "./gallery-items";
// Change code below this line

const gallery = document.querySelector(".gallery");

function createImageElement({ preview, original, description }) {
  return `
    <a class="gallery__item" href="${original}" onclick="return false">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
 `;
}
const elementsToRander = galleryItems.map(createImageElement).join("");
gallery.insertAdjacentHTML("beforeend", elementsToRander);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
