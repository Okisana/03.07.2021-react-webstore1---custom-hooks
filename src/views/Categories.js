import { NavLink } from "react-router-dom";
import "./Style2.css";
import dressCatImg from "../images/drc.jpg";
import topCatImg from "../images/tc.jpg";
import trousersCatImg from "../images/trc1.jpg";

function Categories() {
  return (
    <div className="container">
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <NavLink class="pageLink" exact to="/">
              Home
            </NavLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Categories
          </li>
        </ol>
      </nav>

      <div class="row">
        <div class="card mb-3 articleEl">
          <div class="row g-0">
            <div class="col-6 col-sm-3">
              <img class="img-fluid cardImage" src={dressCatImg} alt="image" />
            </div>
            <div class="col-12 col-sm-9">
              <div class="card-body">
                <NavLink class="article-title" to="/category">
                  Dresses
                </NavLink>
                <p class="card-text articleText">
                  From black dresses you’ll wear time and time again to smock
                  styles perfect for the months ahead, our collection of dresses
                  for women has something for everyone. Second Skin has an array
                  of different styles for you to feel yourself in, from mini and
                  midi lengths to lace and gingham styles, while Secon Skin has
                  all your wedding needs covered. Whether you’re getting married
                  or attending a wedding, shop from embroidered and satin styles
                  to blush and white dresses. Take a look at & Other Stories for
                  casual staples or check out Topshop for ribbed bodycons and
                  ditsy floral prints.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>

      <div class="row">
        <div class="card mb-3 articleEl">
          <div class="row g-0">
            <div class="col-6 col-sm-3">
              <img class="img-fluid cardImage" src={topCatImg} alt=".image" />
            </div>
            <div class="col-12 col-sm-9">
              <div class="card-body">
                <NavLink class="article-title" to="/category">
                  Tops
                </NavLink>
                <p class="card-text articleText">
                  You’ve found your perfect pair of bottoms, now all you need is
                  a top to complete the look. Introducing our edit of tops for
                  women, which features everything from vests and casual
                  T-shirts to smart shirts and trend-led, cold-shoulder tops.
                  New Look has all your style essentials, whatever your occasion
                  or taste; you can find fresh V-neck tops to enhance your
                  daytime look as well as oversized tops in boyfriend styles for
                  that cosy feel. And we are here to help you add drama, with
                  bold prints and backless tops, while Second Skin has hundreds
                  of styles to help you express your individuality. Invent your
                  own style with our collection of tops for women.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>

      <div class="row">
        <div class="card mb-3 articleEl">
          <div class="row g-0">
            <div class="col-6 col-sm-3">
              <img
                class="img-fluid cardImage"
                src={trousersCatImg}
                alt="image"
              />
            </div>
            <div class="col-12 col-sm-9">
              <div class="card-body">
                <NavLink class="article-title" to="/category">
                  Trousers
                </NavLink>
                <p class="card-text articleText">
                  From culottes and crops to wide-leg and skinny styles, our
                  latest edit of women’s trousers and leggings is full of go-to
                  pieces for any occasion. Embracing your own unique style
                  couldn’t be easier with the wide range of cuts and styles from
                  Second Skin Stand out in flares from New Look or keep things
                  ultra-casual in a pair of women's cargo trousers. Check out
                  for women’s joggers and comfy sports leggings to add to your
                  new workwear line-up, because that’s what working from home is
                  all about, right? When jeans are off the cards, check out our
                  edit of women’s trousers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Categories;
