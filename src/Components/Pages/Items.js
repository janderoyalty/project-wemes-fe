import React, { useState, useEffect } from "react";
import ListItems from "../ListItems";
import axios from "axios";
import { FaTags } from "react-icons/fa";
import AddItemModal from "../Modals/AddItemModal";

const Items = ({ wemes_url }) => {
  const [itemData, setItemData] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const getItems = () => {
    axios
      .get(`${wemes_url}items/`)
      .then((response) => {
        const newData = response.data.map((item) => {
          return {
            tag: item.tag,
            drop_off: item.drop_off,
            due_date: item.due_date,
            type: item.type,
            color: item.color,
            is_shoe: item.is_shoe,
            follow_up: item.follow_up,
            description: item.description,
            transaction: item.transaction,
          };
        });
        setItemData(newData);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => getItems(), []);

  const hideModal = () => {
    setModalShow(false);
    getItems()
  }
  
  return (
    <div>
      <h1>Items</h1>
      <FaTags
        title="add an item"
        size={50}
        onClick={() => setModalShow(true)}
      />

      <AddItemModal
        show={modalShow}
        onHide={() => hideModal()}
        wemes_url={wemes_url}
      />
      
      <ListItems items={itemData} />
    </div>
  );
};

export default Items;
