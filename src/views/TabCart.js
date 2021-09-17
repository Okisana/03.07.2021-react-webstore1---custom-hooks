import { totalOneProduct, totalAll } from "./utils";

function TabCart({ cart, onDiminishCount, onAddCount, removeProduct }) {
  return (
    <div
      className="tab-pane fade show active"
      id="pills-product"
      role="tabpanel"
      aria-labelledby="pills-product-tab"
    >
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
                <button
                  onClick={onDiminishCount(cartItem)}
                  className=" btn btn-danger fw-bold btnMinus mx-1"
                >
                  -
                </button>
                <button
                  onClick={onAddCount(cartItem)}
                  className=" btn btn-danger fw-bold btnPlus"
                >
                  +
                </button>
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
              <td>
                {" "}
                <button
                  onClick={(cart) => removeProduct(cartItem.id)}
                  className=" btn btn-danger fw-bold remove"
                >
                  Remove
                </button>{" "}
              </td>
            </tr>
          );
        })}
      </table>

      <h3 className="bigTotal">
        Total: <span className="totalAll">{totalAll(cart)}</span> EUR
      </h3>

      <div className="epmty5"></div>
    </div>
  );
}
export default TabCart;
