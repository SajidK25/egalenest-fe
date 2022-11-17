import React, { useState } from "react";
import EFLogo from "../assets/img/Logo.png";
import { FaBars } from "react-icons/fa";
import "../../node_modules/bootstrap/js/dist/scrollspy";
import Appointment from "./Appointment";
import Modal from "react-bootstrap/Modal";

function MyModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Afspraak
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Appointment />
      </Modal.Body>
    </Modal>
  );
}
const Navbar = () => {
  const [display, setDisplay] = React.useState(false);
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 40) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  return (
    <>
      <nav
        className={
          colorChange
            ? "navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink"
            : "navbar navbar-expand-lg navbar-dark fixed-top"
        }
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand" href="#page-top">
            <img src={EFLogo} alt="Eagle's Fines" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <span className="ms-2">
              <FaBars />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  Over Ons
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Programma's
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#team">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  class="btn btn-primary mt-0"
                  data-toggle="modal"
                  onClick={() => setDisplay(true)}
                  data-target="#exampleModal"
                >
                  Maak Afspraak
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <MyModal show={display} onHide={() => setDisplay(false)} />
    </>
  );
};

export default Navbar;
