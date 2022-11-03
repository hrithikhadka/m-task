import React from "react";

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

export default FullPurchaseDetails;
