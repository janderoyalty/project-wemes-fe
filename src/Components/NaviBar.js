import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Accounts from "./Pages/Accounts";
import Home from "./Pages/Home";
import Transactions from "./Pages/Transactions";

const NaviBar = () => {
  return (
    <Router>
      <div>
        <Navbar bg="danger" variant="dark">
          <Navbar.Brand as={Link} to={"/home"}>
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
      {/* </div>
      <div> */}
        <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </div>
    </Router>
  );
};

export default NaviBar;
