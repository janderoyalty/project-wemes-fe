import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Accounts from "./Pages/Accounts";
import Home from "./Pages/Home";
import Transactions from "./Pages/Transactions";
import Items from "./Pages/Items";

const NaviBar = ({ accounts, transactions }) => {
  const wemes_url = "https://wemes-be.herokuapp.com/";
  // const wemes_url = "http://127.0.0.1:8000/";

  return (
    <Router>
      <div>
        <Navbar bg="warning">
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
              <Nav.Link as={Link} to={"/items"}>
                Items
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/accounts"
            element={<Accounts wemes_url={wemes_url} />}
          />
          <Route
            path="/transactions"
            element={<Transactions wemes_url={wemes_url} />}
          />
          <Route path="/items" element={<Items wemes_url={wemes_url} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default NaviBar;
