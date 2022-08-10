import React, { useState, useEffect } from "react";
import AccountsList from "../AccountsList";
import axios from "axios";
import AddAccount from "../Forms/AddAccountForm";


const Accounts = ({WEMES_URL}) => {
  const [accountData, setAccountData] = useState([]);

  const getAccounts = () => {
    console.log(WEMES_URL);
    axios
      .get(`${WEMES_URL}users/`)
      .then((response) => {
        console.log(response);
        const newData = response.data.map((account) => {
          return {
            id: account.id,
            first_name: account.first_name,
            last_name: account.last_name,
            last_four: account.last_four,
            phone_num: account.phone_num,
            email: account.email,
            // code: account.code,
            admin: account.admin,
            is_active: account.is_active,
            transactions: account.transactions,
          };
        });
        setAccountData(newData);
      })
      .catch((err) => {
        alert(err);
      });
  };


  useEffect(() => getAccounts(), []);

  return (
    <div>
      <h1>Accounts</h1>
      <AddAccount WEMES_URL={WEMES_URL} />
      <AccountsList accounts={accountData} />
    </div>
  );
};

export default Accounts;
