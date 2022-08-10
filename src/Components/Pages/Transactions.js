import React, { useState, useEffect } from "react";
import axios from "axios";
import TransactionsList from "../TransactionsList";
import PropTypes from "prop-types";

// // export const WEMES_URL_T = "https://wemes-be.herokuapp.com/";
// export const WEMES_URL_T = "http://127.0.0.1:8000/";

const Transactions = ({WEMES_URL}) => {
  const [transactionsData, setTransactionData] = useState([]);


  const getTransactions = () => {
    axios
      .get(`${WEMES_URL}transactions/`)
      .then((response) => {
        // console.log(response);
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

  useEffect(() => getTransactions(), []);

  return (
    <div>
      <h1>Transactions</h1>
      <TransactionsList transactionsData={transactionsData} />
    </div>
  );
};

Transactions.propTypes = {
  WEMES_URL: PropTypes.string.isRequired
};

export default Transactions;
