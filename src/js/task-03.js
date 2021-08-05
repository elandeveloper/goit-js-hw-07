const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


// const galleryEl = document.querySelector('#gallery');
// galleryEl.classList.add('gallery');

// const makeImagesItems = ({url, alt}) => {
//   const itemsEl = document.createElement("li");
//   itemsEl.classList.add("item");

//   const imgEl = document.createElement("img");
//   imgEl.classList.add("image");
//   imgEl.src = url;
//   imgEl.alt = alt;
//   imgEl.width = 600;

//   itemsEl.append(imgEl);
//   galleryEl.append(itemsEl);

//   return itemsEl;
// };

// const imagesMarkup = images.map(makeImagesItems);
// galleryEl.append(...imagesMarkup);

const galleryEl = document.querySelector('#gallery');
galleryEl.classList.add('gallery');

const createImagesItem = ({ url, alt }) => {
  return `
   <li class="item">
    <img class="image"
        src = ${url} 
        alt = ${alt}
        width = 600
        /> 
  </li>`;
};

const imagesMarkup = images.map(createImagesItem).join('');

galleryEl.insertAdjacentHTML('afterbegin', imagesMarkup);

console.log(galleryEl);