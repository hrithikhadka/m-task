import "./App.css";
import { useState, useEffect } from "react";

const url =
  "https://firebasestorage.googleapis.com/v0/b/gorgias-templates-production.appspot.com/o/attachments%2F3291ead6-82a2-43fa-ba6e-58328b4e02a1.json?alt=media&token=56fbe45a-2b91-4e35-bd1a-69f41f7d4363";

const SingleOrder = ({
  PurchaseOrderTypeAbbreviation,
  PurchaseOrderNo,
  PurchaseOrderAddress,
  PurchaseOrderId,
  PurchaseOrderContactPerson,
  PurchaseOrderStatus,
  PurchaseOrderDetails,
}) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <section className="section">
      <div className="items">
        <h3>
          {PurchaseOrderTypeAbbreviation} – {PurchaseOrderNo}
        </h3>
        <button
          className={`${showDetails ? "red" : "btn"}`}
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Close" : "Show Details"}
        </button>
      </div>
      {showDetails && (
        <PurchaseDetails
          OrderStatus={PurchaseOrderStatus}
          OrderAddress={PurchaseOrderAddress}
          ContactPerson={PurchaseOrderContactPerson}
          purchaseDetails={PurchaseOrderDetails}
        />
      )}
    </section>
  );
};

const PurchaseDetails = ({
  purchaseDetails,
  OrderStatus,
  ContactPerson,
  OrderAddress,
}) => {
  const [showDetails, setShowDetails] = useState(false);
  // console.log(purchaseDetails);
  return (
    <>
      <p>
        <strong>Order Address: </strong>
        {OrderAddress}
      </p>
      <p>
        <strong>Order Contact Person: </strong>
        {ContactPerson}
      </p>
      <p>
        <strong>Order Status: </strong>
        {OrderStatus}
      </p>
      <div className="items">
        <p>
          <strong>Purchase Order Details : </strong>
        </p>
        <button
          className={`${showDetails ? "red" : "btn"}`}
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Close" : "Show Details"}
        </button>
      </div>
      {showDetails ? (
        <table>
          <tbody>
            <tr>
              <th>Product SKU</th>
              <th>Quantity Ordered</th>
              <th>Unit Price</th>
              <th>Total Amount</th>
            </tr>
            {purchaseDetails.map((detail, index) => {
              return <FullPurchaseDetails key={index} detail={detail} />;
            })}
          </tbody>
        </table>
      ) : null}
    </>
  );
};

const FullPurchaseDetails = ({ detail }) => {
  // console.log(detail);
  return (
    <>
      <tr>
        <td>{detail.PurchaseOrderRowProductSKU}</td>
        <td>{detail.PurchaseOrderRowQuantity}</td>
        <td>{detail.PurchaseOrderRowUnitPriceWithoutTaxOrDiscount}</td>
        <td>{detail.PurchaseOrderRowTotalAmount}</td>
      </tr>
    </>
  );
};

function App() {
  const [purchaseOrder, setPurchaseOrder] = useState();

  const fetchPurchaseOrders = async () => {
    try {
      const response = await fetch(url);
      const purchaseOrder = await response.json();
      setPurchaseOrder(purchaseOrder.mvPurchaseOrders);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPurchaseOrders();
  }, []);

  return (
    <div className="container">
      <h1>MVPurchase Orders</h1>
      {purchaseOrder?.map((orders, index) => {
        return <SingleOrder key={index} {...orders} />;
      })}
    </div>
  );
}

export default App;
