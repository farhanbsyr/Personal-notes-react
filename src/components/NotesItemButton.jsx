import React from "react";
import ButtonDelete from "./ButtonDelete";
import ButtonArchive from "./ButtonArchive";

const NotesItemButton = ({ onDelete, id, onArchive }) => {
  return (
    <div className="note-item__action">
      <ButtonDelete onDelete={onDelete} id={id} />
      <ButtonArchive onArchive={onArchive} id={id} />
    </div>
  );
};

export default NotesItemButton;
