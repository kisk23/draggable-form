import React from "react";
import { useDraggable } from "@dnd-kit/core";
import {CSS} from '@dnd-kit/utilities';


export default function DraggableField({ id, label }) {
  const { attributes, listeners, setNodeRef,transform } = useDraggable({ id });
   const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="p-2 m-1 bg-blue-200 rounded cursor-pointer "
      style={style}
    >
      {label}
    </div>
  );
}
