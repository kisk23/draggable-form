import React from "react";
import { useDraggable } from "@dnd-kit/core";
import {CSS} from '@dnd-kit/utilities';


export default function DraggableField({ id, label ,children}) {
  const { attributes, listeners, setNodeRef,transform } = useDraggable({ id });
   const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="p-2 m-1 rounded cursor-pointer "
      style={style}
    >
      {children}
    </div>
  );
}
