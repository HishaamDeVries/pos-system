import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

const Product = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState(0);
  const [newQuantity, setNewQuantity] = useState(0);
  const [productModal, setProductModal] = useState(false);

  useEffect(
    () => {
      setName(props.name);
      setNewName(props.name);
      setPrice(props.price);
      setNewPrice(props.price);
      setQuantity(props.quantity);
      setNewQuantity(props.quantity);
    }, // eslint-disable-next-line
    [props.name, props.price, props.quantity]
  );

  const handleName = (e) => {
    setNewName(e.target.value);
  };

  const handlePrice = (e) => {
    setNewPrice(e.target.value);
  };

  const handleQuantity = (e) => {
    setNewQuantity(e.target.value);
  };

  const handleProduct = (e) => {
    e.preventDefault();
    setProductModal(false);
    console.log("id", props._id);
    let editProduct = {
      name: newName,
      quantity: newQuantity,
      price: newPrice,
      _id: props._id,
    };

    props.onEditProduct(editProduct);
    setName(newName);
    setQuantity(newQuantity);
    setPrice(newPrice);
  };

  return (
    <tr>
      <td className="text-primary">{name}</td>
      <td>R {price}</td> <td> {quantity} </td>
      <td>
        <button className="btn btn-info" onClick={() => setProductModal(true)}>
          <i className="glyphicon glyphicon-pencil" /> Edit
        </button>
      </td>
      <Modal show={productModal}>
        <Modal.Header>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="form-horizontal" name="newProductForm">
            <div className="form-group">
              <label className="col-md-4 control-label" for="name">
                Name
              </label>
              <div className="col-md-4">
                <input
                  name="name"
                  placeholder="Name"
                  onChange={handleName}
                  className="form-control"
                  value={newName}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 control-label" for="price">
                Price
              </label>
              <div className="col-md-4">
                <input
                  name="price"
                  placeholder="Price"
                  className="form-control"
                  onChange={handlePrice}
                  value={newPrice}
                  type="number"
                  step="any"
                  min="0"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 control-label" for="quantity_on_hand">
                Quantity On Hand
              </label>
              <div className="col-md-4">
                <input
                  name="quantity_on_hand"
                  placeholder="Quantity"
                  onChange={handleQuantity}
                  value={newQuantity}
                  className="form-control"
                />
              </div>
            </div>
            <br /> <br /> <br />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setProductModal(false)}>Close</Button>
          <Button onClick={handleProduct}>Update</Button>
        </Modal.Footer>
      </Modal>
    </tr>
  );
};

export default Product;
