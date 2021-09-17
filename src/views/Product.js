import { useState } from "react";
import image1 from "../images/y1.jpg";
import image2 from "../images/y3.jpg";
import image3 from "../images/y2.jpg";
import image4 from "../images/y4.jpg";

function Product() {
  const images = [image2, image3, image4];

  const [BigImage, setImage] = useState(image1);

  const updateImage = (event) => {
    setImage(event.target.src);
  };

  const imagesList = images.map((imgElement) => {
    return (
      <div className="col-4 col-md-4">
        <img
          onClick={updateImage}
          className="imgRow"
          style={{ maxWidth: "100%", marginBottom: "10px" }}
          src={imgElement}
          alt=""
        />
      </div>
    );
  });

  return (
    <div>
      <div className="container">
        <div className="row pt-3">
          <p>All about dresses</p>
        </div>

        <div className="row mt-1">
          <div className="col-12 col-md-4">
            <div className="row">
              <div id="bigDiv">
                <img
                  id="bigImage"
                  style={{
                    width: "250px",
                    height: " 300px",
                    marginLeft: "30px",
                  }}
                  src={BigImage}
                  alt=""
                />
              </div>
            </div>

            <div className="row pt-3">{imagesList}</div>
          </div>

          <div className="col-10 col-md-8">
            <p className="p3">
              Midi Dress Sitting between a maxi and a mini dress, the midi is
              what everyone needs for the times when you’re unsure of the
              formality of an event. This style can have any neckline or sleeve
              length, so it’s great for any body shape. Pull-on tights and ankle
              boots for a perfect winter look, or grab a pair of flats and a
              cute straw hat and have a stylish picnic!
            </p>
            <p className="p3">
              Off the Shoulder Take the plunge and keep your shoulders exposed
              in an off-the-shoulder dress. These dresses showcase your
              shoulders, while maintaining a sleeve or ruffle on the bicep. The
              off-shoulder style is great for those who want to exhibit their
              shoulders and arms but don’t want the commitment of a strapless
              look.
            </p>
            <p className="p3">
              Bodycon Dress The bodycon is a tight-fitting dress that hugs your
              figure and accentuates your assets. They’re often made of stretchy
              material and are perfect for a night out on the town. This dress
              is ideal for those with an hourglass figure, as it flatters the
              beautiful curves!
            </p>

            <div class="row row-cols-1 row-cols-md-3 mb-3 justify-content-center mt-5">
              <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm">
                  <div class="card-header py-3">
                    <h4 class="my-0 fw-normal text-center">Floral dress</h4>
                  </div>
                  <div class="card-body">
                    <h4 class="card-title pricing-card-title text-center">
                      EUR 19.99
                    </h4>

                    <button
                      onClick={() => {
                        alert("Item was added to cart");
                      }}
                      type="button"
                      class="w-100 btn btn-danger fw-bold"
                    >
                      Add to cart
                    </button>
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
export default Product;
