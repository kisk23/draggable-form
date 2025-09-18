import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import DraggableField from "./DraggableField";
import DroppableSection from "./DroppableSection";
import { useFormElements, useNav } from "../context/NavContext";
import ButtonTable from "./ButtonsTable";
import Button from "./Buttons";

export default function FormBuilder() {
  const { formElements, setFormElements } = useFormElements();
  const { showElemnets } = useNav();


  const [sections, setSections] = useState({
    "section-1": [],
    "section-2": [],
    "section-3": [],
  });

  const handleDrop = (event) => {
    const { active, over } = event;
    if (over) {
      setSections((prev) => {
        const newSections = { ...prev };
       
        for (let key in newSections) {
          newSections[key] = newSections[key].filter((i) => i !== active.id);
        }
     
        newSections[over.id].push(active.id);
        return newSections;
      });
    }
  };

  return (
    <DndContext onDragEnd={handleDrop}>
      <div className="grid grid-cols-2 gap-4 p-4">
     
        <div>
          <ButtonTable />
        </div>

     
        <div className="col-span-2">
          <h2 className="font-bold mb-2">Form Canvas</h2>
          <div className="grid grid-cols-3 gap-4">
            {Object.keys(sections).map((section) => (
              <DroppableSection key={section} id={section}>
                {sections[section].map((el, i) => {
                  if (el === "label") {
                    return (
                      <div
                        key={i}
                        className="p-2 my-1 border rounded bg-gray-100"
                      >
                        <label>Label</label>
                      </div>
                    );
                  }

                  if (el === "checkbox") {
                    return (
                      <div
                        key={i}
                        className="p-2 my-1 border rounded bg-gray-100"
                      >
                        <label>
                          <input type="checkbox" className="mr-2" /> Checkbox
                        </label>
                      </div>
                    );
                  }

                  if (el === "select") {
                    return (
                      <div
                        key={i}
                        className="p-2 my-1 border rounded bg-gray-100"
                      >
                        <select className="border rounded p-1 w-full">
                          <option>Option 1</option>
                          <option>Option 2</option>
                        </select>
                      </div>
                    );
                  }

                  if (el.startsWith("button")) {
                    const [, variant, size] = el.split("-");
                    return (
                      <div
                        key={i}
                        className="p-2 my-1 border rounded bg-gray-100"
                      >
                        <Button size={size} variant={variant}>
                          {variant.charAt(0).toUpperCase() + variant.slice(1)}{" "}
                          {size.charAt(0).toUpperCase() + size.slice(1)} Button
                        </Button>
                      </div>
                    );
                  }

                  return null;
                })}
              </DroppableSection>
            ))}
          </div>
        </div>
      </div>
    </DndContext>
  );
}
