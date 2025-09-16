import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import DraggableField from "./DraggableField";
import DroppableCanvas from "./DroppableCanvas";

export default function FormBuilder() {
  const [formElements, setFormElements] = useState([]);

  const handleDrop = (event) => {
    const { active, over } = event;
    if (over && over.id === "canvas") {
      setFormElements((prev) => [...prev, active.id]);
    }
  };

  return (
    <DndContext onDragEnd={handleDrop}>
      <div className="grid grid-cols-3 gap-4 p-4">
      
        <div>
          <h2 className="font-bold mb-2">Form Fields</h2>
          <DraggableField id="text" label="Text Input" />
          <DraggableField id="checkbox" label="Checkbox" />
          <DraggableField id="select" label="Dropdown" />
        </div>

    
        <div className="col-span-2">
          <h2 className="font-bold mb-2">Form Canvas</h2>
          <DroppableCanvas id="canvas">
            {formElements.map((el, i) => (
              <div key={i} className="p-2 my-1 border rounded bg-gray-100">
                {el === "text" && (
                  <input
                    type="text"
                    placeholder="Text field"
                    className="border rounded p-1 w-full"
                  />
                )}
                {el === "checkbox" && (
                  <label>
                    <input type="checkbox" className="mr-2" /> Checkbox
                  </label>
                )}
                {el === "select" && (
                  <select className="border rounded p-1 w-full">
                    <option>Option 1</option>
                    <option>Option 2</option>
                  </select>
                )}
              </div>
            ))}
          </DroppableCanvas>
        </div>
      </div>
    </DndContext>
  );
}
