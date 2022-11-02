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
    <div>
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
    </div>
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
      <p>{OrderAddress}</p>
      <p>{ContactPerson}</p>
      <p>{OrderStatus}</p>
      <div className="items">
        <h2>Purchase Order Details </h2>
        <button
          className={`${showDetails ? "red" : "btn"}`}
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Close" : "Show Details"}
        </button>
      </div>
      {showDetails &&
        purchaseDetails.map((detail, index) => {
          return <FullPurchaseDetails key={index} detail={detail} />;
        })}
    </>
  );
};

const FullPurchaseDetails = ({ detail }) => {
  // console.log(detail);
  return (
    <>
      <p>Product SKU: {detail.PurchaseOrderRowProductSKU}</p>
      <p>Quantity Ordered: {detail.PurchaseOrderRowQuantity}</p>
      <p>Unit Price: {detail.PurchaseOrderRowUnitPriceWithoutTaxOrDiscount}</p>
      <p>Total Amount: {detail.PurchaseOrderRowTotalAmount}</p>
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
