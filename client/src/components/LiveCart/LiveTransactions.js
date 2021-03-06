import React from "react";
import "../../App.css";

const LiveTransactions = (props) => {
  const { quantity, name, price } = props;

  return (
    <tr>
      <td> {quantity} </td>
      <td>
        <a href="#/inventory/product/{{ product._id }}">{name}</a>
      </td>
      <td>
        <span>{price}</span>
        <br />
        <small class="small-text">
          <em>(R{price} each)</em>
        </small>
      </td>
    </tr>
  );
};

export default LiveTransactions;
