import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import PropTypes from "prop-types";
import SortTransactionMenu from "../Components/SortTransactionMenu";
import axios from "axios";
import Modal from "react-bootstrap/Modal";

// DISPLAY TRANSACTION
const DisplayTransactionModal = (props) => {
  console.log("TRANSACTION CLICK");
  console.log(props.WEMES_URL, props.index);

  axios
    .get(`${props.WEMES_URL}transactions/${props.index + 1}/`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      alert(err);
    });

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
};

const TransactionsList = ({ transactionData, WEMES_URL }) => {
  // const [displayTransactionModalShow, setDisplayTransactionModalShow] = useState(false);
  const [sortBy, setSortBy] = useState("id");
  const [orderBy, setOrderBy] = useState("desc");

  const sortedTransactions = transactionData.sort((a, b) => {
    let order = orderBy === "asc" ? 1 : -1;
    let sortByA = sortBy === "id" ? a[sortBy] : a[sortBy];
    let sortByB = sortBy === "id" ? b[sortBy] : b[sortBy];
    return sortByA < sortByB ? -1 * order : 1 * order;
  });

  const transactionInfo = () => {
    return sortedTransactions.map((transaction, index) => (
      <tr
        key={index}
        onClick={() => DisplayTransactionModal({ WEMES_URL, index })}
      >
        <td>{transaction.customer}</td>
        <td>{transaction.admin}</td>
        <td>{transaction.drop_off}</td>
        <td>{transaction.description}</td>
        <td>{transaction.items.length}</td>
      </tr>
    ));
  };

  return (
    <>
      <div>
        <SortTransactionMenu
          sortBy={sortBy}
          onSortByChange={(sortOption) => {
            setSortBy(sortOption);
          }}
          orderBy={orderBy}
          onOrderByChange={(orderOption) => {
            setOrderBy(orderOption);
          }}
        />
      </div>
      <Table striped hover>
        <thead>
          <tr>
            {/* <DisplayTransactionModal
              show={displayTransactionModalShow}
              onHide={() => setDisplayTransactionModalShow(false)}
              WEMES_URL={WEMES_URL}
            /> */}
            <th>Customer</th>
            <th>Admin</th>
            <th>Dropped Off</th>
            <th>Message</th>
            <th>Items</th>
          </tr>
        </thead>
        <tbody>{transactionInfo()}</tbody>
      </Table>
    </>
  );
};

TransactionsList.propTypes = {
  transactions: PropTypes.array,
};

export default TransactionsList;
