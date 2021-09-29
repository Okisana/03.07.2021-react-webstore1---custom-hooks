import { NavLink } from "react-router-dom";

import TabAddress from "./TabAddress";
import TabSummary from "./TabSummary";
import TabCart from "./TabCart";

// import { useCart } from "./useCart";
import { useCartContext } from "./CartContext";
import { useAdress } from "./useAdress";
import { useBillingAdress } from "./useBillingAdress";

function Tabs() {
  const { cart, onDiminishCount, onAddCount, removeProduct } = useCartContext();
  // const { cart, onDiminishCount, onAddCount, removeProduct } = useCart();

  const { shippingAddress, onInputChange } = useAdress();

  const { billingAddress, onBillingChange } = useBillingAdress();

  return (
    <div className="container">
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Cart
          </li>
        </ol>
      </nav>

      <div>
        {/* <div className="container"> */}
        <ul
          className="nav nav-pills mb-3 bg-light border-bottom"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item border" role="presentation">
            <button
              className="nav-link tabs active"
              id="pills-product-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-product"
              type="button"
              role="tab"
              aria-controls="pills-product"
              aria-selected="true"
            >
              Products
            </button>
          </li>
          <li className="nav-item border" role="presentation">
            <button
              className="nav-link tabs"
              id="pills-address-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-address"
              type="button"
              role="tab"
              aria-controls="pills-address"
              aria-selected="false"
            >
              Address
            </button>
          </li>
          <li className="nav-item border" role="presentation">
            <button
              className="nav-link tabs"
              id="pills-summary-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-summary"
              type="button"
              role="tab"
              aria-controls="pills-summary"
              aria-selected="false"
            >
              Summary
            </button>
          </li>
        </ul>

        <div className="tab-content pb-3" id="pills-tabContent">
          {/* Product TAB */}

          <TabCart
            cart={cart}
            onDiminishCount={onDiminishCount}
            onAddCount={onAddCount}
            removeProduct={removeProduct}
          />

          {/* Address TAB */}
          <TabAddress
            cart={cart}
            shippingAddress={shippingAddress}
            onInputChange={onInputChange}
            billingAddress={billingAddress}
            onBillingChange={onBillingChange}
          />

          {/* Summary TAB */}
          <TabSummary
            cart={cart}
            shippingAddress={shippingAddress}
            billingAddress={billingAddress}
          />
        </div>
      </div>
    </div>
  );
}
export default Tabs;
