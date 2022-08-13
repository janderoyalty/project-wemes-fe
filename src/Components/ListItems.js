import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import PropTypes from "prop-types";
import SortMenuItems from "./SortMenuItems";

const ListItems = ({ items }) => {
  const [sortBy, setSortBy] = useState("id");
  const [orderBy, setOrderBy] = useState("desc");

  const sortedItems = items.sort((a, b) => {
    let order = orderBy === "asc" ? 1 : -1;
    let sortByA = sortBy === "id" ? a[sortBy] : a[sortBy];
    let sortByB = sortBy === "id" ? b[sortBy] : b[sortBy];
    return sortByA < sortByB ? -1 * order : 1 * order;
  });

  const itemInfo = () => {
    return sortedItems.map((item, index) => (
      <tr key={index} onClick={() => console.log(`CLICK ACCOUNT`)}>
        <td>{item.tag_id}</td>
        <td>{item.drop_off}</td>
        <td>{item.due_date}</td>
        {/* <td>{item.type}</td>
        <td>{item.color}</td> */}
        <td>{item.is_shoe === true ? "shoe" : "sewing"}</td>
        {/* <td>{item.follow_up}</td> */}
        {/* <td>{item.description}</td> */}
        <td>{item.transaction}</td>
      </tr>
    ));
  };

  return (
    <>
      <div>
        <SortMenuItems
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
            <th>Tag ID</th>
            <th>Drop Off Date</th>
            <th>Due Date</th>
            {/* <th>Type</th>
            <th>Color</th> */}
            <th>Is Shoe</th>
            {/* <th>Follow-Up</th>
            <th>Description</th> */}
            <th>Transaction</th>
          </tr>
        </thead>
        <tbody>{itemInfo()}</tbody>
      </Table>
    </>
  );
};

ListItems.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ListItems;
