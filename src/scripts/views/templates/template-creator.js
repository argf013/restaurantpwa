/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import CONFIG from '../../globals/config';

const createMovieDetailTemplate = (movie) => `
<h2 class="movie__title">${movie.restaurant.name}</h2>
<img class="movie__poster" src="${CONFIG.BASE_IMAGE_URL + movie.restaurant.pictureId}" alt="${movie.restaurant.name}" />
<div class="movie__info">
  <h3>Information</h3>
  <div class="restaurant__description"> 
  <h4>Description</h4>
  <p>${movie.restaurant.description}</p>
  </div>
  <div class="restaurant__menus"> 
  <div class="restaurant__menus__foods"> 
  <h4>Foods Menu</h4>
  <p>${movie.restaurant.menus.foods[0].name}</p>
  <p>${movie.restaurant.menus.foods[2].name}</p>
  <p>${movie.restaurant.menus.foods[3].name}</p>
  </div>
  <div class="restaurant__menus__foods"> 
  <h4>Drinks Menu</h4>
  <p>${movie.restaurant.menus.drinks[0].name}</p>
  <p>${movie.restaurant.menus.drinks[1].name}</p>
  <p>${movie.restaurant.menus.drinks[3].name}</p>
  </div>
  </div>
  <div class="restaurant__location">
  <div class="restaurant__location__city">
  <h4>City</h4>
  <p>${movie.restaurant.city}</p>
  </div>
  <div class="restaurant__location__address">
  <h4>Address</h4>
  <p>${movie.restaurant.address}</p>
  </div>
  </div>
  <h4>Rating</h4>
  <p>${movie.restaurant.rating} of 5</p>
  <div class="movie__overview">
  <h3>Review</h3>
  <p>Nama: ${movie.restaurant.customerReviews[0].name}</p>
  <p>Tanggal: ${movie.restaurant.customerReviews[0].date}</p>
  <p>Review: ${movie.restaurant.customerReviews[0].review}</p>
  </div>
  </div>
`;

const createMovieItemTemplate = (movie) => `
  <div class="movie-item">
    <div class="movie-item__header">
      <img class="movie-item__header__poster" alt="${movie.name}"
           src="${CONFIG.BASE_IMAGE_URL + movie.pictureId}">
      <div class="movie-item__header__rating">
        <p>⭐️<span class="movie-item__header__rating__score">${movie.rating}</span></p>
      </div>
    </div>
    <div class="movie-item__content">
      <h3><a href="/#/detail/${movie.id}">${movie.name}</a></h3>
      <p>${movie.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createMovieDetailTemplate,
  createMovieItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
