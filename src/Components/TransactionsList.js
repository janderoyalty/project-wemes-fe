import React from "react";
import Table from "react-bootstrap/Table";
import PropTypes from "prop-types";



const TransactionsList = ({ transactions }) => {
  const transactionInfo = () => {
    return transactions.map((transaction) => [
      // <a href="#">
      <tr>
        <td>{transaction.customer}</td>
        <td>{transaction.admin}</td>
        <td>{transaction.drop_off}</td>
        <td>{transaction.description}</td>
        <td>{transaction.items.length}</td>
      </tr>,
    ]);
  };
  console.log(transactions);

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
  transactions: PropTypes.array.isRequired,
};
export default TransactionsList;
