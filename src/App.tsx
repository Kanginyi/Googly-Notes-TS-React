import React, {useEffect, useState} from "react";

import AllNotes from "./Components/AllNotes";
import CreateNote from "./Components/CreateNote";
import Header from "./Components/Header";

import {Note} from "./Models/note.model";

import {Col, Container, Row} from "react-bootstrap";

const App = () => {
   const [notes, setNotes] = useState<Note[]>(() => {
      const localData = localStorage.getItem("notes");

      return localData ? JSON.parse(localData) : [];
   });

   useEffect(() => {
      localStorage.setItem("notes", JSON.stringify(notes));
   }, [notes]);

   return (
      <>
         <Header />
         <Container className="margin-top">
            <Row>
               <Col>
                  <AllNotes notes={notes} setNotes={setNotes}/>
               </Col>
            </Row>
               <hr/>
            <Row>
               <Col>
                  <CreateNote notes={notes} setNotes={setNotes}/>
               </Col>
            </Row>
         </Container>
      </>
   );
}

export default App;
