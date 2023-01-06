import React from "react";
import "../../App.css";

const LivePos = (props) => {
  const { id, name, price, quantity } = props;

  const handleChange = (id, itemNumber) => {
    props.onChange(id, itemNumber);
  };

  let itemNumber = quantity;

  return (
    <tr>
      <td className="col-md-2"> {name}</td>
      <td className="col-md-1"> R{price}</td>
      <td className="col-md-2">
        <button
          className="btn btn-sm pull-left btn-danger"
          onClick={() => handleChange(id, --itemNumber)}
        >
          <i className="glyphicon glyphicon-minus" />
        </button>

        <div className="col-md-6">
          <input type="number" value={itemNumber} />
        </div>

        <button
          className="btn btn-sm pull-right btn-success"
          onClick={() => handleChange(id, ++itemNumber)}
        >
          <i className="glyphicon glyphicon-plus" />
        </button>
      </td>
      <td className="col-md-2">R{price * itemNumber}</td>
      <td className="col-md-2">
        <button
          className="btn btn-danger"
          onClick={() => handleChange(id, "delete")}
        >
          <i className="glyphicon glyphicon-trash" />
        </button>
      </td>
    </tr>
  );
};

export default LivePos;
