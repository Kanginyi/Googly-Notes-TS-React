import React from "react";

import EachNote from "./EachNote";

import {Note} from "../Models/note.model";

import Button from "react-bootstrap/Button";

interface IAllNotesProps {
   notes: Note[],
   setNotes: React.Dispatch<React.SetStateAction<Note[]>>
   hideNotes: boolean,
   setHideNotes: React.Dispatch<React.SetStateAction<boolean>>
}

const AllNotes:React.FC<IAllNotesProps> = ({notes, setNotes, hideNotes, setHideNotes}) => {
   const hideOrShow = ():void => {
      setHideNotes(prev => !prev);
   };

   const handleDelete = (id:string) => {
      setNotes(notes.filter(note => note.id !== id));
   }

   const renderNotes:JSX.Element[] = notes?.map(note => {
      return <EachNote key={note.id} note={note} handleDelete={handleDelete}/>
   });

   return (
      <>
         <div className="mt-2">
            {renderNotes.length
               ? <>
                  <h2 className="mb-3 align-center">NOTES</h2>

                     {!hideNotes &&
                        <>
                           {renderNotes.length === 1
                              ? <div>{renderNotes}</div>
                              : <div className="grid">{renderNotes}</div>
                           }
                        </>
                     }

                  <div className="align-center">
                     <Button onClick={hideOrShow} variant="outline-primary" size="sm" className="mt-2">
                        {!hideNotes ? "Hide Notes" : "Show Notes"}
                     </Button>
                  </div>
                 </>
               : <h2 className="align-center">There are no notes yet.</h2>
            }
         </div>
      </>
   );
}

export default AllNotes;