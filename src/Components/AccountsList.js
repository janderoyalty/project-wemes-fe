import React from "react";
import Table from "react-bootstrap/Table";
import PropTypes from "prop-types";

const AccountsList = ({ accounts }) => {
  const accountInfo = () => {
    return accounts.map((account) => [
      // <a href="#">
      <tr>
        <td>
          <a href={account.code}>{account.code}</a>
        </td>
        <td>{account.last_four}</td>
        <td>{account.first_name}</td>
        <td>{account.last_name}</td>
        <td>{account.phone_num}</td>
        <td>{account.email}</td>
        <td>{account.transactions.length}</td>
      </tr>,
    ]);
  };
  // console.log(accounts);

  return (
    <>
      <Table striped hover>
        <thead>
          <tr>
            <th>QR Code</th>
            <th>Account ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Transactions</th>
          </tr>
        </thead>
        <tbody>{accountInfo()}</tbody>
      </Table>
    </>
  );
};

AccountsList.propTypes = {
  accounts: PropTypes.array.isRequired,
};

export default AccountsList;
