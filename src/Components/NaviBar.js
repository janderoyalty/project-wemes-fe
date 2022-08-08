import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Accounts from "./Pages/Accounts";
import Home from "./Pages/Home";
import Transactions from "./Pages/Transactions";




const NaviBar = ({accounts, transactions}) => {
  const WEMES_URL = "https://wemes-be.herokuapp.com/";
  // const WEMES_URL = "http://127.0.0.1:8000/";

return (
    <Router>
      <div>
        <Navbar bg="danger" variant="dark">
          <Navbar.Brand as={Link} to={"/"}>
            Wemes
          </Navbar.Brand>
          <Container justify="right">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/accounts"}>
                Accounts
              </Nav.Link>
              <Nav.Link as={Link} to={"/transactions"}>
                Transactions
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accounts" element={<Accounts WEMES_URL={WEMES_URL}/>} />
          <Route path="/transactions" element={<Transactions WEMES_URL={WEMES_URL}/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default NaviBar;
