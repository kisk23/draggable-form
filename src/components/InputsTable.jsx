// InputsTable.js
import React from "react";
import styled from "styled-components";
import DraggableField from "./DraggableField";

const INPUT_TYPES = ["text", "email", "password", "number"];

const InputsTable = () => {
  return (
    <Table cellSpacing={0} cellPadding={0}>
      <thead>
        <tr>
          {INPUT_TYPES.map((type) => (
            <th key={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {INPUT_TYPES.map((type) => (
            <td key={type}>
              <DraggableField
                id={`input-${type}-${Math.random()
                  .toString(36)
                  .substr(2, 9)}`}
              >
                <Input placeholder={type} type={type} />
              </DraggableField>
            </td>
          ))}
        </tr>
      </tbody>
    </Table>
  );
};

const Table = styled.table`
  font-family: sans-serif;
  display: block;

  th,
  td {
    text-align: center;
    padding: 16px;
  }
`;

const Input = styled.input`
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export default InputsTable;
