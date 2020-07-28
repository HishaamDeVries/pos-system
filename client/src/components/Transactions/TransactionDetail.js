import React from "react";
import "../../App.css";

const TransactionDetail = (props) => {
  const { quantity, name, price } = props;

  const productTotal = parseInt(quantity, 10) * parseInt(price, 10);
  return (
    <tbody>
      <tr>
        <td> {quantity} </td>
        <td className="text-primary">{name}</td>
        <td>
          <span>{productTotal}</span>
          <br />
          <small className="small-text">
            <em>R{price} each</em>
          </small>
        </td>
      </tr>
    </tbody>
  );
};

export default TransactionDetail;
