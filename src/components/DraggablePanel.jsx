import React from 'react'
import DraggableField from './DraggableField'

const DraggablePanel = () => {
  return (
    <div>

          <div>
          
            <DraggableField id="text" label="Text Input" />
            <DraggableField id="checkbox" label="Checkbox" />
            <DraggableField id="select" label="Dropdown" />
          </div>


    </div>
  )
}

export default DraggablePanel