import React from "react";
import { Container, Navbar } from "react-bootstrap";

import googly_icon from "../Images/googly-icon.png";
import notes_img from "../Images/notes-icon.png";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = () => {
   return (
      <Navbar fixed="top" bg="dark" variant="dark">
         <Container>
            <Navbar.Brand>
               <h1 className="center-align">
                  <img
                     src={googly_icon}
                     alt="Googly Icon"
                     height="50px"
                     width="50px"
                  />

                  oogly Boogly Notes

                  <img
                     src={notes_img}
                     alt="Notes Icon"
                     height="45px"
                     width="45px"
                  />
               </h1>
            </Navbar.Brand>
         </Container>
      </Navbar>
   );
}

export default Header;