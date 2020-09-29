import TheRestaurantSource from '../../data/therestaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="hero">
      <div class="bg"></div>
      <div class="hero__inner">
          <h1 class="hero__title">Cari Restoran Idaman</h1>
          <p class="hero__tagline">Sekarang cari restoran mudah, temukan restoran terbaik disini dengan segala
              kemudahannya</p>
          <button class="button btn-read-more">Read More...</button>
      </div>
    </div>

    <section class="content">
        <div class="list">
            <h1 class="list__label">Daftar Restoran</h1>
            <div class="posts">
            </div>
        </div>
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await TheRestaurantSource.listRestaurant();

    const listRestaurantElement = document.querySelector('.posts');
    listRestaurantElement.innerHTML = '';

    restaurants.forEach((restaurant) => {
      listRestaurantElement.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
