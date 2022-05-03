import React from "react";

import EachNote from "./EachNote";

import {Note} from "../Models/note.model";

interface IAllNotesProps {
   notes: Note[],
   setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const AllNotes:React.FC<IAllNotesProps> = ({notes, setNotes}) => {
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
                  <h2 className="mb-3">NOTES</h2>
                  {renderNotes}
                 </>
               : <h2>There are no notes yet.</h2>
            }
         </div>
      </>
   );
}

export default AllNotes;