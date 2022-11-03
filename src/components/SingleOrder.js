import React from "react";
import { useState } from "react";
import PurchaseDetails from "./PurchaseDetails";

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

export default SingleOrder;
