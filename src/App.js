import "./App.css";
import { useState, useEffect } from "react";

const url =
  "https://firebasestorage.googleapis.com/v0/b/gorgias-templates-production.appspot.com/o/attachments%2F3291ead6-82a2-43fa-ba6e-58328b4e02a1.json?alt=media&token=56fbe45a-2b91-4e35-bd1a-69f41f7d4363";

const SingleOrder = ({
  PurchaseOrderTypeAbbreviation,
  PurchaseOrderNo,
  PurchaseOrderId,
  PurchaseOrderContactPerson,
  PurchaseOrderStatus,
  PurchaseOrderDetails,
}) => {
  return (
    <div className="section">
      <p>
        {PurchaseOrderTypeAbbreviation} – {PurchaseOrderNo}
      </p>
    </div>
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
    <div className="App">
      <h1>MVPurchase Orders</h1>
      {purchaseOrder?.map((orders, index) => {
        return <SingleOrder key={index} {...orders} />;
      })}
    </div>
  );
}

export default App;
