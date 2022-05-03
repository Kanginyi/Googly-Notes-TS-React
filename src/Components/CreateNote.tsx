import React, {useRef, useState} from "react";

import {Note} from "../Models/note.model";

import {Alert, Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";

interface ICreateNoteProps {
   notes: Note[],
   setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNote:React.FC<ICreateNoteProps> = ({notes, setNotes}) => {
   const [errorMessage, setErrorMessage] = useState<string>("");

   const titleRef = useRef<HTMLInputElement|null>(null);
   const textRef = useRef<HTMLTextAreaElement|null>(null);
   const colorRef = useRef<HTMLInputElement|null>(null);

   const handleSubmit = (e:React.FormEvent<HTMLFormElement>):void => {
      e.preventDefault();

      // Has the same effect as placing the "required" attribute on the input/textarea
      if (titleRef.current?.value === "" || textRef.current?.value === "") {
         return setErrorMessage("Please fill out all fields.");
      }

      setErrorMessage("");
      setNotes([...notes, {
         id: (new Date().toString()),
         // Typings for the relatedRefs
         title: (titleRef.current as HTMLInputElement).value,
         text: (textRef.current as HTMLTextAreaElement).value,
         color: (colorRef.current as HTMLInputElement).value,
         date: `Created on ${(new Date().toLocaleDateString())} at ${(new Date().toLocaleTimeString())}`
      }]);

      // Clearing the inputs
      (titleRef.current as HTMLInputElement).value = "";
      (textRef.current as HTMLTextAreaElement).value = "";
   }

   return (
      <>
         <h2>CREATE A NOTE</h2>

         {errorMessage &&
            <Alert variant="danger">
               {errorMessage}
            </Alert>
         }

         <Form className="mt-3 mb-3" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicTitle">
               <Form.Label>
                  <h3>Title</h3>
               </Form.Label>

               <Form.Control type="text" placeholder="Enter Title" ref={titleRef}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
               <Form.Label>
                  <h3>Text</h3>
               </Form.Label>

               <Form.Control placeholder="Enter Note" as="textarea" rows={3} ref={textRef}/>
            </Form.Group>

            <Form.Group className="mb-3">
               <Form.Label htmlFor="colorInput">
                  <h3>Background Color</h3>
               </Form.Label>

               <Form.Control type="color" id="colorInput" defaultValue="#eeeeee" title="Choose a color" ref={colorRef}/>
            </Form.Group>

            <Button type="submit" variant="primary">
               Submit
            </Button>
         </Form>
      </>
   );
}

export default CreateNote;