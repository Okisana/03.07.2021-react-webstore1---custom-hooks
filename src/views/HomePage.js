import "./Style1.css";
import { NavLink } from "react-router-dom";
import trousersCat from "../images/trc.jpg";
import topsCat from "../images/topc.jpg";
import dressesCat from "../images/y1.jpg";
import sliderImg0 from "../images/shop/slider-0.jpg";
import sliderImg1 from "../images/shop/slider-1.jpg";
import sliderImg2 from "../images/shop/slider-2.jpg";
import sliderImgLv from "../images/shop/slider-lv.jpg";
function HomePage() {
  return (
    <div>
      <div className="container py-3">
        <div className="container d-flex justify-content-center">
          <div className="row pt-3 carousel-container ">
            <div className="col">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                  ></button>
                </div>

                <div className="carousel-inner img-responsive mx-auto">
                  <div className="carousel-item active">
                    <img
                      className="img-carousel"
                      src={sliderImg0}
                      className="d-block w-100"
                      alt="clothes image"
                    />
                  </div>
                  <div className="carousel-item ">
                    <img
                      className="img-carousel"
                      src={sliderImg1}
                      className="d-block w-100"
                      alt="clothes image"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="img-carousel"
                      src={sliderImg2}
                      className="d-block w-100"
                      alt="clothes image"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="img-carousel"
                      src={sliderImgLv}
                      className="d-block w-100"
                      alt="clothes image"
                    />
                  </div>
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-2 mx-5">
          <p> Popular categories: </p>
        </div>

        <div className="row articles articlesContainer">
          <div className="col-12 col-xl-4 mb-3">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    className="img-fluid cardImage"
                    src={dressesCat}
                    alt="Dresses image"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <NavLink className=" card-title" to="/categories">
                      Women's Dresses
                    </NavLink>
                    <p className="card-text ">
                      Second Skin boutique has an array of different styles for
                      you to feel yourself in, from mini and midi lengths to
                      lace and gingham styles.Take a look for casual staple.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-xl-4 mb-3">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    className="img-fluid cardImage"
                    src={topsCat}
                    alt="Tops image"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <NavLink className="card-title" to="/categories">
                      Tops
                    </NavLink>
                    <p className="card-text">
                      Discover a range of women's tops at Second Skin boutique.
                      Crop tops to off-the-shoulder and going-out tops, shop
                      online for every look. We all are in need of stylish tops.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-xl-4 mb-3">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    className="img-fluid cardImage"
                    src={trousersCat}
                    alt="Trousers image"
                  />
                </div>

                <div className="col-md-8">
                  <div className="card-body">
                    <NavLink className="card-title" to="/categories">
                      Trousers
                    </NavLink>
                    <p className="card-text">
                      Women's Trousers & Leggings. From culottes and crops to
                      wide-leg and skinny styles, our latest edit of women's
                      trousers and leggings is full of go-to pieces.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
