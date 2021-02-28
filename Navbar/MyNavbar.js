import React, { useState } from "react";
import "./Navbar.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
export default function MyNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div class="Navbar">
      <Navbar light expand="md" className="container">
        <NavbarBrand className="logo">Bailo</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="text-center">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/home" data-name="Home">
                <span className="link-hover">Home</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/feature" data-name="Feature">
                <span className="link-hover">Feature</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/choose" data-name="Choose">
                <span className="link-hover">Choose</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/review" data-name="Review">
                <span className="link-hover">Review</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/faq" data-name="Faq">
                <span className="link-hover">Faq</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/shop" data-name="Shop">
                <span className="link-hover">Shop</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/downloade" data-name="Downloade">
                <span className="link-hover">Downloade</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact" data-name="Contact">
                <span className="link-hover">Contact</span>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
