import "./App.css";
import { useState, useEffect } from "react";
import SingleOrder from "./components/SingleOrder";
import Loading from "./components/Loading";

const url =
  "https://firebasestorage.googleapis.com/v0/b/gorgias-templates-production.appspot.com/o/attachments%2F3291ead6-82a2-43fa-ba6e-58328b4e02a1.json?alt=media&token=56fbe45a-2b91-4e35-bd1a-69f41f7d4363";

function App() {
  const [loading, setLoading] = useState(true);
  const [purchaseOrder, setPurchaseOrder] = useState();

  const fetchPurchaseOrders = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const purchaseOrder = await response.json();
      setLoading(false);
      setPurchaseOrder(purchaseOrder.mvPurchaseOrders);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPurchaseOrders();
  }, []);

  if (loading) {
    return <Loading />;
  }

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
