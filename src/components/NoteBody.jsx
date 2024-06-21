import React from "react";
import NotesItem from "./NotesItem";
import NotesList from "./NotesList";

const NoteBody = ({ onDelete, title, onArchive, body, createdAt, id }) => {
  return (
    <div className="note-app__body">
      <h2>Catatan</h2>
      <NotesList />
    </div>
  );
};

export default NoteBody;
