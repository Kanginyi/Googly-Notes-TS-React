import React from "react";

import {Note} from "../Models/note.model";

import {Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";

interface IEachNoteProps {
   note: Note,
   handleDelete: (id:string) => void
}

const EachNote: React.FC<IEachNoteProps> = ({note, handleDelete}) => {
   return (
      <div className="mb-2">
         <Card style={{backgroundColor: note.color}}>
            <Card.Body>
               <Card.Title>
                  <strong><u>{note.title}</u></strong>
               </Card.Title>
               
               <Card.Text className="mt-2 mb-2">
                  {note.text}
               </Card.Text>

               <Card.Subtitle className="text-muted">
                  <em>{note.date}</em>
               </Card.Subtitle>

               <Button className="mt-3" variant="danger" onClick={() => handleDelete(note.id)}>
                  Delete
               </Button>
            </Card.Body>
         </Card>
      </div>
   );
}

export default EachNote;