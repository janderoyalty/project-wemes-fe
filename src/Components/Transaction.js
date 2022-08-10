import React from "react";
import axios from "axios";
import PropTypes from "prop-types";

const Transaction = ({ WEMES_URL, transaction_id }) => {
  // const [transactionData, setTransactionData] = useState([]);

  const getTransaction = () => {
    axios
      .get(`${WEMES_URL}transactions/${transaction_id}`)
      .then((response) => {
        console.log(response);
        // const newData = response.data.map((transaction) => {
        //   return {
        //     id: transaction.id,
        //     drop_off: transaction.drop_off,
        //     admin: transaction.admin,
        //     customer: transaction.customer,
        //     items: transaction.items,
        //     description: transaction.description,
        //   };
        // });
        // setTransactionData(newData);
      })
      .catch((err) => {
        alert(err);
      });
  };

  // useEffect(() => getTransaction(), []);

  return (
    <div>
      <h1>Transaction</h1>
    </div>
  );
};

Transaction.propTypes = {
  WEMES_URL: PropTypes.string.isRequired,
};

export default Transaction;
