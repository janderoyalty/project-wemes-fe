import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import PropTypes from "prop-types";
import SortTransactionMenu from "../Components/SortTransactionMenu";

const TransactionsList = ({ transactionData }) => {
  const [selectedTransaction, setSelectedTransaction] = useState({});
  const [sortBy, setSortBy] = useState("id");
  const [orderBy, setOrderBy] = useState("desc");

  const selectTransaction = (transactionId) => {
    for (const transaction of transactionData) {
      if (transaction.id === transactionId) {
        setSelectedTransaction(transaction);
      }
    }
  };

  const sortedTransactions = transactionData.sort((a, b) => {
    let order = orderBy === "asc" ? 1 : -1;
    let sortByA = sortBy === "id" ? a[sortBy] : a[sortBy];
    let sortByB = sortBy === "id" ? b[sortBy] : b[sortBy];
    return sortByA < sortByB ? -1 * order : 1 * order;
  });

  const displayTransaction = () => {
    return sortedTransactions.map((transaction, index) => {
      return (
        (
          <li
            className={
              transaction.id === selectedTransaction.id
                ? "transaction-menu-item__selected"
                : null
            }
            key={index}
            onClick={() => selectTransaction(transaction.id)}
          >
            {transaction.customer}
          </li>
        ),
        (<li>{transaction.customer}</li>)
      );
    });
  };

  const transactionInfo = () => {
    return transactionData.map((transaction, i) => (
      // <a href="#">
      // <tr>
      <tr key={i}>
        {/* <td><a href="./">{transaction.id}</a></td> */}
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
