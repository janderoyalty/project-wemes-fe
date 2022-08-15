import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import PropTypes from "prop-types";
import SortMenuTransactions from "../Components/SortMenuTransactions";
import DisplayTransactionModal from "./Modals/DisplayTransactionModal";

const ListTransactions = ({ transactionData, wemes_url, accountData }) => {
  const [modalShow, setModalShow] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(0);
  const [sortBy, setSortBy] = useState("id");
  const [orderBy, setOrderBy] = useState("desc");

    // const getAccountsNames = (accountData, transactionData) => {
  //   if (transactionData.admin === accountData.id) {
  //     transactionData.admin = `${accountData.first_name} ${accountData.last_name}`;
  //   }
  // };
  // getAccountsNames()
  
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
        onClick={() => {
          setClickedIndex(index);
          setModalShow(true);
        }}
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
        <DisplayTransactionModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          wemes_url={wemes_url}
          index={clickedIndex}
        />
        <SortMenuTransactions
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

ListTransactions.propTypes = {
  transactions: PropTypes.array,
};

export default ListTransactions;
