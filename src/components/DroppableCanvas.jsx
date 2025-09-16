import React from "react";
import { useDroppable } from "@dnd-kit/core";

export default function DroppableCanvas({ id, children }) {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className={`p-4 border-2 min-h-[200px] rounded ${
        isOver ? "border-green-400 bg-green-50" : "border-gray-300 bg-white"
      }`}
    >
      {children}
    </div>
  );
}
