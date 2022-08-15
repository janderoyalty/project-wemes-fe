import React, { useState } from "react";
import axios from "axios";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import AddItemModal from "./AddItemModal";

function DisplayTransactionModal(props) {
  const [modalShow, setModalShow] = useState(false);

  const [transactionData, setTransactionData] = useState({});

  // console.log(props);
  const dispalyTransaction = () => {
    axios
      .get(`${props.wemes_url}transactions/${props.index + 1}/`)
      .then((response) => {
        console.log(response.data);
        setTransactionData(response.data)
        // return response.data;
      })
      .catch((err) => {
        alert(err);
      });
  };

  // const submitTransactionData = (event) => {
  //   event.preventDefault();
  //   dispalyTransaction(transactionData);
  //   setTransactionData({
  //     drop_off: "",
  //     admin: "",
  //     customer: "",
  //     description: "",
  //     items: [],
  //   });
  // };

  // axios
  //   .get(`${props.wemes_url}transactions/${props.index + 1}/`)
  //   .then((response) => {
  //     console.log(response.data);
  //   })
  //   .catch((err) => {
  //     alert(err);
  //   });

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Transaction
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {transactionData}
        {/* <Form size="lg" onSubmit={submitTransactionData}>
          <Form.Group className="mb-3" controlId="formDropOff">
            <Form.Label>Drop Off Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="12/12/22"
              onChange={(event) =>
                setTransactionData({
                  ...transactionData,
                  drop_off: event.target.value,
                })
              }
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formAdmin">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Who are you?"
              onChange={(event) =>
                setTransactionData({
                  ...transactionData,
                  admin: event.target.value,
                })
              }
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCustomer">
            <Form.Label>Customer</Form.Label>
            <Form.Control
              type="text"
              name="customer"
              placeholder="Customer"
              onChange={(event) =>
                setTransactionData({
                  ...transactionData,
                  customer: event.target.value,
                })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="description"
              placeholder="Leave a Note"
              onChange={(event) =>
                setTransactionData({
                  ...transactionData,
                  description: event.target.value,
                })
              }
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formItems">
            <Form.Label>Items</Form.Label>
            <Form.Control type="text" placeholder="" disabled />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group> */}
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" value="false" label="Check me out" />
      </Form.Group> */}
        {/* 
          <Button variant="warning" type="submit" onClick={props.onHide}>
            Submit
          </Button>
        </Form> */}
        <Button
          variant="warning"
          type="submit"
          onClick={() => setModalShow(true)}
        >
          Add Item
        </Button>
        <AddItemModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          wemes_url={props.wemes_url}
        />{" "}
      </Modal.Body>
    </Modal>
  );
}

export default DisplayTransactionModal;
