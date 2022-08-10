import React from "react";
import Table from "react-bootstrap/Table";
import PropTypes from "prop-types";
import {FaTrashAlt} from "react-icons/fa";

const AccountsList = ({ accounts }) => {
  const accountInfo = () => {
    return accounts.map((account, i) => 
      <tr key={i} onClick={() => console.log(`CLICK ACCOUNT`)}>
        {/* <td>
          <a href={account.code}>View</a>
        </td> */}
        <td>{account.last_four}</td>
        <td>{account.first_name}</td>
        <td>{account.last_name}</td>
        <td>{account.phone_num}</td>
        <td>{account.email}</td>
        <td>{account.transactions.length}</td>
      </tr>
    );
  };

  return (
    <>
      <Table striped hover date-paganation="true">
        <thead>
          <tr>
            {/* <th>QR Code</th> */}
            <th sort="True" >Account ID</th>
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
