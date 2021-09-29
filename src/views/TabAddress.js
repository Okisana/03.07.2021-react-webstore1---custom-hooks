import { totalAll } from "./utils";

function TabAddress({ cart, onInputChange, onBillingChange }) {
  return (
    <div
      className="tab-pane fade"
      id="pills-address"
      role="tabpanel"
      aria-labelledby="pills-address-tab"
    >
      <div className="row mt-3" style={{ paddingLeft: "130px" }}>
        <div className="col-6 mt-2">
          <p className="fs-5">Shipping address:</p>
          <div>
            <input
              placeholder="name"
              className="inputDisplay"
              onChange={onInputChange("name")}
            />
            <input
              placeholder="street"
              className="inputDisplay"
              onChange={onInputChange("street")}
            />
            <input
              placeholder="city"
              className="inputDisplay"
              onChange={onInputChange("city")}
            />
            <input
              placeholder="country"
              className="inputDisplay"
              onChange={onInputChange("country")}
            />
          </div>
        </div>

        <div className="col-6 mt-2">
          <p className="fs-5">Billing address:</p>
          <div>
            <input
              placeholder="name"
              className="inputDisplay"
              onChange={onBillingChange("name")}
            />
            <input
              placeholder="street"
              className="inputDisplay"
              onChange={onBillingChange("street")}
            />
            <input
              placeholder="city"
              className="inputDisplay"
              onChange={onBillingChange("city")}
            />
            <input
              placeholder="country"
              className="inputDisplay"
              onChange={onBillingChange("country")}
            />
          </div>
        </div>
      </div>

      <div className="row my-5 " style={{ marginRight: "210px" }}>
        <h3 className="bigTotal">
          Total: <span className="totalAll">{totalAll(cart)}</span> EUR
        </h3>
      </div>
    </div>
  );
}
export default TabAddress;
