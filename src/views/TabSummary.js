import { totalOneProduct, totalAll } from "./utils";

function TabSummary({ cart, shippingAddress, billingAddress }) {
  return (
    <div
      className="tab-pane fade"
      id="pills-summary"
      role="tabpanel"
      aria-labelledby="pills-summary-tab"
    >
      <div className="row mt-3">
        <div className="сol-4 mt-3">
          <div className="row">
            <div className="col-4 mt-2">
              <p className="fs-5">Shipping address:</p>
              <div>
                {shippingAddress.name}
                <br />
                {shippingAddress.street}
                <br />
                {shippingAddress.city}
                <br />
                {shippingAddress.country}
                <br />
              </div>
            </div>
          </div>

          <div className="row">
            <p className="fs-5">Billing address:</p>
            <div>
              {billingAddress.name}
              <br />
              {billingAddress.street}
              <br />
              {billingAddress.city}
              <br />
              {billingAddress.country}
              <br />
            </div>
          </div>
        </div>

        {/* <div className="col-3">
          <div className="mt-2">
            <p className="fs-5">Shipping address:</p>
            <div>
              <div> Lilu Due</div>
              <div> Miera street 25</div>
              <div> Riga</div>
              <div> Latvia</div>
            </div>
          </div>

          <div className="mt-2">
            <p className="fs-5">Billing address:</p>
            <div>
              <div> Max Rox</div>
              <div> Salas street 100</div>
              <div> Riga</div>
              <div> Latvia</div>
            </div>
          </div>
        </div> */}

        <div className="col-8">
          <table style={{ width: "100%" }}>
            <tr className="trTop">
              <th></th>
              <th>Product</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Total</th>
              <th></th>
            </tr>

            {cart.map((cartItem) => {
              return (
                <tr className="productCart">
                  <td>
                    <img
                      className=" img-fluid tdImage"
                      src={cartItem.image}
                      alt="product image"
                    />
                  </td>
                  <td>{cartItem.name}</td>
                  <td className="qF">
                    <span className="quantity">{cartItem.quantity}</span>
                  </td>

                  <td>
                    <span className="price">{cartItem.price} </span>
                    <span>EUR</span>
                  </td>
                  <td>
                    <span className="totalOneProduct">
                      {
                        totalOneProduct(cartItem)
                        // (cartItem.price * cartItem.quantity).toFixed(2)
                      }
                    </span>
                    <span> EUR</span>
                  </td>
                  <td> </td>
                </tr>
              );
            })}
          </table>

          <div className="row my-5 mx-5">
            <h3 className="bigTotal">
              Total:
              <span className="totalAll"> {totalAll(cart)} </span>
              EUR
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TabSummary;
