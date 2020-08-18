import React, { useState, useEffect } from "react";
import "../../App.css";
import Header from "../Header";
import Product from "./Product";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";

const HOST = `https://${
  "hishaams-point-of-sale-system.herokuapp.com" || "localhost:80"
}`;
console.log("This is to show I was deployed");

const Items = () => {
  const [products, setProducts] = useState([]);
  const [productFormModal, setProductFromModal] = useState(false);
  const [name, setName] = useState("");
  const [snackMessage, setSnackMessage] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    let url = `${HOST}/api/inventory/products`;
    axios.get(url).then((response) => {
      setProducts(response.data);
    });
  });

  const handleNewProduct = (e) => {
    e.preventDefault();
    setProductFromModal(false);
    let newProduct = {
      name: name,
      quantity: quantity,
      price: price,
    };

    axios
      .post(`/api/inventory/product`, newProduct)
      .then(
        (response) => setSnackMessage("Product Added Successfully!"),
        handleSnackbar()
      )
      .catch((err) => {
        console.log(err);
        setSnackMessage("Product Was Not Added!");
        handleSnackbar();
      });
  };

  const handleEditProduct = (editProduct) => {
    axios
      .put(`/api/inventory/product`, editProduct)
      .then((response) => {
        setSnackMessage("Product Updated Successfully!");
        handleSnackbar();
        return true;
      })
      .catch((err) => {
        console.log(err);
        setSnackMessage("Product Update Failed!");
        handleSnackbar();
        return false;
      });
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const handleSnackbar = () => {
    let bar = document.getElementById("snackbar");
    bar.className = "show";
    setTimeout(function () {
      bar.className = bar.className.replace("show", "");
    }, 3000);
  };

  const renderProducts = () => {
    if (products.length === 0) {
      return products;
    } else {
      return products.map((product) => (
        <Product {...product} onEditProduct={handleEditProduct} />
      ));
    }
  };

  return (
    <div style={{ background: "#D8BFD8", height: "100%vh" }}>
      <Header />
      <div className="container">
        <h2 className="text-center" style={{ color: "green" }}>
          INVENTORY
        </h2>
        <button
          className="btn btn-success pull-right text-dark"
          onClick={() => setProductFromModal(true)}
        >
          <i className="glyphicon glyphicon-plus" /> Add New Item
        </button>
        <br />
        <br />

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity on Hand</th>
              <th />
            </tr>
          </thead>
          <tbody>{renderProducts()}</tbody>
        </table>
      </div>

      <Modal show={productFormModal}>
        <Modal.Header>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form class="form-horizontal" name="newProductForm">
            <div class="form-group">
              <label class="col-md-4 control-label" for="name">
                Name
              </label>
              <div class="col-md-4">
                <input
                  name="name"
                  placeholder="Name"
                  class="form-control"
                  onChange={handleName}
                />
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-4 control-label" for="price">
                Price
              </label>
              <div class="col-md-4">
                <input
                  name="price"
                  placeholder="Price"
                  class="form-control"
                  onChange={handlePrice}
                  type="number"
                  step="any"
                  min="0"
                />
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-4 control-label" for="quantity_on_hand">
                Quantity On Hand
              </label>
              <div class="col-md-4">
                <input
                  name="quantity_on_hand"
                  placeholder="Quantity"
                  onChange={handleQuantity}
                  class="form-control"
                />
              </div>
            </div>
            <br /> <br /> <br />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setProductFromModal(false)}>Close</Button>
          <Button onClick={handleNewProduct}>Submit</Button>
        </Modal.Footer>
      </Modal>
      <div id="snackbar">{snackMessage}</div>
    </div>
  );
};

export default Items;
