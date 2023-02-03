/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import TheMovieDbSource from "../../data/themoviedb-source";

import { createMovieItemTemplate } from "../templates/template-creator";

const List = {
  async render() {
    return `
    <section id="movie-catalogue-container">
        <div class="container-fluid p-2 movie-bg" style="background-image: url('https://images.hdqwalls.com/download/fast-and-furious-9-the-fast-saga-2020-movie-i5-2560x1440.jpg') !important;">
            <div class="d-flex justify-content-center align-self-center mb-3">
                    <header class="movie-bg-header px-3">
                        <h3 class="text-white">Welcome Movie Catalogue</h3>
                        <p>Search & find the latest movies</p>
                    </header>    
            </div>
        </div>
        <div class="container-fluid py-5 px-3">
            <div class="d-flex justify-content-center"> 
                <h1 class="text-dark mb-3"> Get All Movies</h1>
            </div>
            <div class="row justify-content-center">
              <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="card mb-3 bg-white rounded">
                  <div class="card-body text-center">
                      <a href="#/upcoming" class="text-decoration-none text-dark">Upcoming</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="card mb-3 bg-white rounded">
                  <div class="card-body text-center">
                      <a href="#/populer" class="text-decoration-none text-dark">Populer</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="card mb-3 bg-white rounded">
                  <div class="card-body text-center">
                      <a href="#/now-playing" class="text-decoration-none text-dark">Now Playing</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="card mb-3 bg-white rounded">
                  <div class="card-body text-center">
                      <a href="#/latest" class="text-decoration-none text-dark">Latest</a>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div class="container-fluid py-5 px-3">
            <div class="row">
                <div class="col-md-12">
                        <div class="d-flex justify-content-between mb-3">
                                <h2 class="content__heading">Top Rate Movies</h2>
                        </div>
                        <div class="row">
                            <div class="col"><div id="movies" class="movies"></div></div>
                        </div>
                </div>
            </div>
        </div>
  
    </section>
    `;
  },

  async afterRender() {
    const movies = await TheMovieDbSource.listMovies();
    const moviesContainer = document.querySelector("#movies");

    movies.map((movie) => {
      moviesContainer.innerHTML += createMovieItemTemplate(movie);
    });
  },
};

export default List;
