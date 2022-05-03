import React, {useState} from "react";

import CreateNote from "./Components/CreateNote";
import Header from "./Components/Header";
import NotesList from "./Components/NotesList";

import {Note} from "./Models/note.model";

import {Col, Container, Row} from "react-bootstrap";

const App = () => {
   const [notes, setNotes] = useState<Note[]>([]);

   return (
      <>
         <Header />
         <Container className="margin-top">
            <Row>
               <Col>
                  <NotesList notes={notes} setNotes={setNotes}/>
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
