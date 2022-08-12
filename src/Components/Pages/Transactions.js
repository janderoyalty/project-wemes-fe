import React, { useState, useEffect } from "react";
import axios from "axios";
import TransactionsList from "../TransactionsList";
import PropTypes from "prop-types";
import { FaUserTag } from "react-icons/fa";
import AddTransactionModal from "../Modals/AddTransactionModal";



const Transactions = ({ WEMES_URL }) => {
  const [transactionData, setTransactionData] = useState([]);
  const [addTransactionModalShow, setAddTransactionModalShow] = useState(false);

  const getTransactions = () => {
    axios
      .get(`${WEMES_URL}transactions/`)
      .then((response) => {
        const newData = response.data.map((transaction) => {
          return {
            id: transaction.id,
            drop_off: transaction.drop_off,
            admin: transaction.admin,
            customer: transaction.customer,
            items: transaction.items,
            description: transaction.description,
          };
        });
        setTransactionData(newData);
      })
      .catch((err) => {
        alert(err);
      });
  };

  
  // useEffect(() => getTransactions(), [transactionData]);
  useEffect(() => getTransactions(), [transactionData]);
  return (
    <div>
      <h1>Transactions</h1>
      <FaUserTag
        title="add an account"
        size={50}
        variant="warning"
        onClick={() => setAddTransactionModalShow(true)}
      />

      <AddTransactionModal
        show={addTransactionModalShow}
        onHide={() => setAddTransactionModalShow(false)}
        WEMES_URL={WEMES_URL}
      />
      <TransactionsList WEMES_URL={WEMES_URL} transactionData={transactionData} />
    </div>
  );
};

Transactions.propTypes = {
  WEMES_URL: PropTypes.string.isRequired,
};

export default Transactions;
