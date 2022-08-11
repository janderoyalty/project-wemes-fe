import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import PropTypes from "prop-types";
import SortAccountMenu from "../Components/SortAccountMenu";

const AccountsList = ({ accounts }) => {
    const [sortBy, setSortBy] = useState("id");
  const [orderBy, setOrderBy] = useState("desc");

  const sortedAccounts = accounts.sort((a, b) => {
    let order = orderBy === "asc" ? 1 : -1;
    let sortByA = sortBy === "id" ? a[sortBy] : a[sortBy];
    let sortByB = sortBy === "id" ? b[sortBy] : b[sortBy];
    return sortByA < sortByB ? -1 * order : 1 * order;
  });

  const accountInfo = () => {
    return sortedAccounts.map((account, i) => 
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
          <div>
        <SortAccountMenu
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
