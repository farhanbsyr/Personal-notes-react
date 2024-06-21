import React from "react";
import NotesItemButton from "./NotesItemButton";
import NotesItemContent from "./NoteItemContent";

const NotesItem = ({ onDelete, onArchive, createdAt, title, body, id }) => {
  return (
    <div className=" note-item">
      <NotesItemContent createdAt={createdAt} title={title} body={body} />
      <NotesItemButton onArchive={onArchive} id={id} onDelete={onDelete} />
    </div>
  );
};

export default NotesItem;
