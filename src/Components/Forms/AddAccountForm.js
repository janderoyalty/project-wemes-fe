import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddAccountForm = ({ WEMES_URL }) => {
  const addAccount = ({
    first_name,
    last_name,
    phone_num,
    email,
    last_four,
    transactions,
  }) => {
    // if (!first_name) {
    //     return alert('New account must have a first name!');
    // }
    // if (!last_name) {
    //     return alert('New account must have an last name!');
    // }
    // if (!phone_num) {
    //     return alert('New account must have a phone num!');
    // }
    // if (!email) {
    //     return alert('New account must have an email!');
    // }
    axios
      .post(`${WEMES_URL}users/`, {
        first_name: first_name,
        last_name: last_name,
        phone_num: phone_num,
        last_four: last_four,
        email: email,
        transactions: transactions,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // TODO: Lowercase accountData
  const [accountData, setAccountData] = useState({
    first_name: "",
    last_name: "",
    phone_num: "",
    last_four: "",
    email: "",
    transactions: [],
  });

  const submitAccountData = (event) => {
    event.preventDefault();
    addAccount(accountData);
    setAccountData({
      first_name: "",
      last_name: "",
      phone_num: "",
      last_four: "",
      email: "",
      transactions: [],
    });
  };

  // const handleAccountChange = (event) => {
  //   setAccountData({ ...accountData, [event.target.name]: event.target.value });
  // };

  return (
    <Form size="lg" onSubmit={submitAccountData}>
      <Form.Group className="mb-3" controlId="formFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="name"
          placeholder="First Name"
          onChange={(event) =>
            setAccountData({ ...accountData, first_name: event.target.value })
          }
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="name"
          placeholder="Last Name"
          onChange={(event) =>
            setAccountData({ ...accountData, last_name: event.target.value })
          }
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Email"
          onChange={(event) =>
            setAccountData({ ...accountData, email: event.target.value })
          }
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPhoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="text"
          name="phone_num"
          placeholder="Phone Number"
          onChange={(event) =>
            setAccountData({ ...accountData, phone_num: event.target.value })
          }
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formLastFour">
        <Form.Label>Last Four</Form.Label>
        <Form.Control
          type="text"
          placeholder="Last Four"
          // disabled
          onChange={(event) =>
            setAccountData({ ...accountData, last_four: event.target.value })
          }
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formLastFour">
        <Form.Label>Transactions</Form.Label>
        <Form.Control type="text" placeholder="" disabled />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" value="false" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    // <div>
    //     <form onSubmit={submitAccountData} className="new-Account__form">
    //       <section>
    //         <h3>Add New Account</h3>
    //         <div className="new-Account__fields">
    //           <div>
    //             <label htmlFor="first_name">First Name</label>
    //             <input
    //               name="first_name"
    //               id="first_name"
    //               value={accountData.first_name}
    //               onChange={handleAccountChange}
    //             />
    //           </div>
    //           <div>
    //             <label htmlFor="first_last">Last Name</label>
    //             <input
    //               name="first_last"
    //               id="first_last"
    //               value={accountData.first_last}
    //               onChange={handleAccountChange}
    //             />
    //           </div>
    //           <div>
    //             <label htmlFor="phone_num">Phone Number</label>
    //             <input
    //               name="phone_num"
    //               id="phone_num"
    //               value={accountData.phone_num}
    //               onChange={handleAccountChange}
    //             />
    //           </div>
    //           <div>
    //             <label htmlFor="email">Last Name</label>
    //             <input
    //               name="email"
    //               id="email"
    //               value={accountData.email}
    //               onChange={handleAccountChange}
    //             />
    //           </div>
    //           <button className="button new-Account__submit" type="submit">
    //             Add Account
    //           </button>
    //         </div>
    //       </section>
    //     </form>
    //   </div>
  );
};

AddAccountForm.propTypes = {
  onAddAccountFormCallback: PropTypes.func,
};

export default AddAccountForm;
