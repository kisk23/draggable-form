import React from 'react';
import styled from 'styled-components';
import { useNav } from '../context/NavContext';

export default function NavBar() {
  const {
    showLabels,
    setShowLabels,
    showInputs,
    setShowInputs,
    showButtons,
    setShowButtons,
  } = useNav();

  
  const togglePanel = (panel) => {
    setShowLabels(panel === 'labels' ? !showLabels : false);
    setShowInputs(panel === 'inputs' ? !showInputs : false);
    setShowButtons(panel === 'buttons' ? !showButtons : false);
  };

  return (
    <Bar>
      <NavGroup>
        <Label onClick={() => togglePanel('labels')}>
          Labels
          {showLabels && <Panel>Label tools go here</Panel>}
        </Label>

        <Label onClick={() => togglePanel('inputs')}>
          Input
          {showInputs && <Panel>Input field tools go here</Panel>}
        </Label>

        <Label onClick={() => togglePanel('buttons')}>
          Buttons
          {showButtons && <Panel>Button tools go here</Panel>}
        </Label>
      </NavGroup>

      <Brand>Formaker</Brand>
    </Bar>
  );
}

const Bar = styled.header`
  width: 100%;
  background: #f8fafc;
  border-bottom: 1px solid #e5e7eb;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled.div`
  font-weight: 700;
  font-size: 1.25rem;
  color: #111827;
`;

const NavGroup = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  position: relative;
`;

const Label = styled.div`
  position: relative;
  font-size: 1rem;
  color: #374151;
  cursor: pointer;
  user-select: none;
`;

const Panel = styled.div`
  position: absolute;
  top: 2rem;
  left: 0;
  background: white;
  border: 1px solid #e5e7eb;
  padding: 1rem;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  min-width: 10rem;
  z-index: 100;
`;
