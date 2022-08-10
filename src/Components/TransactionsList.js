import React from "react";
import Table from "react-bootstrap/Table";
import PropTypes from "prop-types";

const TransactionsList = ({ transactionsData }) => {
  const transactionInfo = () => {
    return transactionsData.map((transaction, i) => 
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
    );
  };

  return (
    <>
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
