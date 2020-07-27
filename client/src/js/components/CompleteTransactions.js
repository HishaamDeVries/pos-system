import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import TransactionDetail from "./TransactionDetail";

const CompleteTransactions = (props) => {
  const [transactionModal, setTransactionModal] = useState(false);
  let [totalQuantity] = useState(0);

  const { date, total, items, payment } = props;

  const renderQuantity = (items) => {
    for (let i = 0; i < items.length; i++) {
      totalQuantity =
        parseInt(totalQuantity, 10) + parseInt(items[i].quantity, 10);
    }

    return totalQuantity;
  };

  const renderItemDetails = (items) => {
    return items.map((item) => <TransactionDetail {...item} />);
  };

  return (
    <tr>
      <td> {date}</td>
      <td> {total} </td>
      <td> {renderQuantity(items)} </td>
      <td>
        <button
          className="btn btn-info"
          onClick={() => setTransactionModal(true)}
        >
          <i className="glyphicon glyphicon-new-window" /> info
        </button>
      </td>

      <Modal show={transactionModal}>
        <Modal.Header>
          <Modal.Title>Transaction Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="panel panel-primary">
            <div className="panel-heading text-center lead">{date}</div>

            <table className="receipt table table-hover">
              <thead>
                <tr className="small">
                  <th> Quantity </th>
                  <th> Product </th>
                  <th> Price </th>
                </tr>
              </thead>
              {renderItemDetails(items)}
              <tbody>
                <tr className="total">
                  <td />
                  <td>Total</td>
                  <td> R{total} </td>
                </tr>
                <tr>
                  <td />
                  <td>Payment</td>
                  <td> R{payment} </td>
                </tr>
                <tr className="lead">
                  <td />
                  <td>Change</td>
                  <td> R{payment - total} </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setTransactionModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </tr>
  );
};

export default CompleteTransactions;
