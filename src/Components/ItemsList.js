import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import PropTypes from "prop-types";
import SortItemMenu from "./SortItemMenu";

const ItemsList = ({ items }) => {
    const [sortBy, setSortBy] = useState("id");
  const [orderBy, setOrderBy] = useState("desc");

  const sortedItems = items.sort((a, b) => {
    let order = orderBy === "asc" ? 1 : -1;
    let sortByA = sortBy === "id" ? a[sortBy] : a[sortBy];
    let sortByB = sortBy === "id" ? b[sortBy] : b[sortBy];
    return sortByA < sortByB ? -1 * order : 1 * order;
  });

  const itemInfo = () => {
    return sortedItems.map((item, i) => 
      <tr key={i} onClick={() => console.log(`CLICK ACCOUNT`)}>
        <td>{item.last_four}</td>
        <td>{item.first_name}</td>
        <td>{item.last_name}</td>
        <td>{item.phone_num}</td>
        <td>{item.email}</td>
        <td>{item.transactions.length}</td>
      </tr>
    );
  };

  return (
    <>
          <div>
        <SortItemMenu
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
            <th>Item ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Transactions</th>
          </tr>
        </thead>
        <tbody>{itemInfo()}</tbody>
      </Table>
    </>
  );
};

ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ItemsList;
