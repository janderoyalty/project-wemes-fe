import React, { useState } from "react";
import axios from "axios";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function DisplayTransactionModal(props) {
  // const dispalyTransaction = () => {
  //   axios
  //   .get(`${props.wemes_url}transactions/${props.index + 1}/`)
  //   .then((response) => {
  //     console.log(response.data);
  //   })
  //   .catch((err) => {
  //     alert(err);
  //   });
  // }

  // const [transactionData, setTransactionData] = useState({
  //   drop_off: "",
  //   admin: "",
  //   customer: "",
  //   description: "",
  //   items: [],
  // });

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
          Add New Transaction
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>BODY </Modal.Body>
    </Modal>
  );
}

export default DisplayTransactionModal;
