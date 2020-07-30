import React from "react";
import "../../App.css";

const RecentTransactions = (props) => {
  const { date, total } = props;
  return (
    <tr>
      <td className="col-md-2">
        <font className="text-primary">{date}</font>
      </td>
      <td className="col-md-2"> {total} </td>
    </tr>
  );
};

export default RecentTransactions;
