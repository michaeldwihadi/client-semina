import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import NavAccess from "../NavAccess";
import { useNavigate } from "react-router-dom";
import {
  accessCategories,
  accessTalents,
  accessEvents,
  accessParticipant,
  accessPayments,
  accessOrders,
} from "../../const/access";

function SNavbar() {
  const navigate = useNavigate();
  const [role, setRole] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      let { role } = localStorage.getItem("auth")
        ? JSON.parse(localStorage.getItem("auth"))
        : {};

      setRole(role);
    };
    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
        <Nav className="me-auto">
          <NavAccess
            role={role}
            roles={accessCategories.lihat}
            action={() => navigate("/")}
          >
            Home
          </NavAccess>
          <NavAccess
            role={role}
            roles={accessCategories.lihat}
            action={() => navigate("/categories")}
          >
            Categories
          </NavAccess>
          <NavAccess
            role={role}
            roles={accessTalents.lihat}
            action={() => navigate("/talents")}
          >
            Talents
          </NavAccess>
          <NavAccess
            role={role}
            roles={accessPayments.lihat}
            action={() => navigate("/payments")}
          >
            Payment
          </NavAccess>
          {/* <NavAccess
            role={role}
            roles={organizers.lihat}
            action={() => navigate('/organizers')}
          >
            Oranizer
          </NavAccess> */}
          <NavAccess
            role={role}
            roles={accessEvents.lihat}
            action={() => navigate("/events")}
          >
            Events
          </NavAccess>
          <NavAccess
            role={role}
            roles={accessParticipant.lihat}
            action={() => navigate("/participant")}
          >
            Participant
          </NavAccess>
          <NavAccess
            role={role}
            roles={accessOrders.lihat}
            action={() => navigate("/transactions")}
          >
            Transactions
          </NavAccess>
        </Nav>
        <Nav className="justify-content-end">
          <Nav.Link onClick={() => handleLogout()}>Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default SNavbar;
