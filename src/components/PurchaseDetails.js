import React from "react";
import { useState } from "react";
import FullPurchaseDetails from "./FullPurchaseDetails";

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

export default PurchaseDetails;
