import React from "react";
import { useDroppable } from "@dnd-kit/core";

export default function DroppableSection({ id, children }) {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className={`flex flex-col gap-2 p-4 min-h-[200px] border-2 rounded transition-colors ${
        isOver ? "border-green-400 bg-green-50" : "border-gray-300 bg-white"
      }`}
    >
      {children}
    </div>
  );
}
