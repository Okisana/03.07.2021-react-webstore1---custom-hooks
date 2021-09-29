import { NavLink } from "react-router-dom";
import "./Style2.css";
import { productData } from "./productData";
import { useCartContext } from "./CartContext";

import img from "../images/shop/slider-2.jpg";

function Category() {
  const { addNewProduct } = useCartContext();

  const modalWindow = () => {
    alert("Your item was added to cart");
  };

  return (
    <div>
      <div class="container">
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <NavLink class="pageLink" exact to="/">
                Home
              </NavLink>
            </li>
            <li class="breadcrumb-item">
              <NavLink class="pageLink" exact to="/categories">
                Categories
              </NavLink>
            </li>

            <li class="breadcrumb-item active" aria-current="page">
              Category
            </li>
          </ol>
        </nav>

        <div class="row">
          <div class="card mb-3 articleEl">
            <div class="row g-0">
              <div class="col-6 col-sm-3">
                <img
                  class="img-fluid cardImage"
                  style={{ height: "150px" }}
                  src={img}
                  alt="images"
                />
              </div>
              <div class="col-12 col-sm-9">
                <div class="card-body">
                  <h5 class="article-title">Dresses</h5>
                  <p class="card-text articleText">
                    From black dresses you’ll wear time and time again to smock
                    styles perfect for the months ahead, our collection of
                    dresses for women has something for everyone. Second Skin
                    has an array of different styles for you to feel yourself
                    in, from mini and midi lengths to lace and gingham styles,
                    while Second Skin has all your wedding needs covered.
                    Whether you’re getting married or attending a wedding, shop
                    from embroidered and satin styles to blush and white
                    dresses. Take a look at & Other Stories for casual staples
                    or check out Topshop for ribbed bodycons and ditsy floral
                    prints.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="pricing">
          <div class="container">
            <div class="row text-center d-flex justify-content-center mt-3 cardSize">
              <div class="row text-center d-flex justify-content-center mt-3">
                {productData.map((product) => (
                  <div class="col-3 card border-warning text-center mx-3 mt-3">
                    <img
                      class=" img-fluid cardImage2"
                      src={product.image}
                      alt="product image"
                    />
                    <div class="card-body d-flex flex-column justify-content-between">
                      <div>
                        <NavLink to="/product">
                          <h5 class="card-text mb-2 ">{product.name}</h5>
                        </NavLink>
                        <h4 class="card-title mb-3">
                          ({product.price}).toFixed(2)
                        </h4>
                      </div>
                      <div class="d-grid gap">
                        <button
                          onClick={() => {
                            addNewProduct(product);
                            modalWindow();
                          }}
                          class=" btn btn-danger fw-bold"
                          type="button"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div class="my-5"></div>

            <div class="empty"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Category;
