import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant__title">
    <h2>${restaurant.name}</h2>
  </div>
  <div class="restaurant__image">
    <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_MEDIUM_URL + restaurant.pictureId}" alt="${restaurant.title}" crossorigin="anonymous"/>
  </div>
  <div class="restaurant__information">
    <div class="title_information">Informasi</div>
    <div class="subtitle_information">Alamat</div>
    <p>${restaurant.address} ${restaurant.city}</p>
    <div class="subtitle_information">Categories</div>
    <p>${restaurant.categories.map((categorie) => categorie.name)} </p>
    <div class="subtitle_information">Menu</div>
    <div class="subtitle_information">Makanan :</div>
    <p>${restaurant.menus.foods.map((food) => food.name)} </p>
    <div class="subtitle_information">Minuman :</div>
    <p>${restaurant.menus.drinks.map((drink) => drink.name)} </p>
    <div class="subtitle_information">Rating</div>
    <p>${restaurant.rating} </p>
  </div >

  <div class="tab_container">
    <input checked="" id="tab1" name="tabs" type="radio" />
    <label for="tab1">Description</label>

    <input id="tab2" name="tabs" type="radio" />
    <label for="tab2">Customer Reviews</label>

    <div class="tab-content" id="content1">
      <p>${restaurant.description}</p>
    </div>

    <div class="tab-content" id="content2">
      ${restaurant.consumerReviews.map((review) => `<p><b>${review.name}</b></p><p style="margin-top: -10px;"><small>${review.date}</small></p><p>${review.review}</p>`)}
    </div>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <article class="post-item">
    <img class="post-item__thumbnail lazyload"
      data-src="${CONFIG.BASE_IMAGE_SMALL_URL + restaurant.pictureId}"
      alt="Restaurant ${restaurant.name}" crossorigin="anonymous">
      <div class="post-item__content">
        <p class="post-item__location"><span tabindex="0">${restaurant.city}</span> <span class="post-item__rating" tabindex="0">⭐️ ${restaurant.rating}</span>
        </p>
        <h1 class="post-item__title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h1>
        <p class="post-item__description">${restaurant.description}</p>
      </div>
  </article>`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate, createRestaurantDetailTemplate, createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
