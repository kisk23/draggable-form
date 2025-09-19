// LabelsTable.js
import React from "react";
import styled from "styled-components";
import Label from "./Labels";

const LabelsTable = () => {
  return (
    <Table cellSpacing={0} cellPadding={0}>
      <thead>
        <tr>
          <th></th>
          <th>Fill</th>
          <th>Outline</th>
          <th>Ghost</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Small</td>
          <td><Label size="small" variant="fill">Label</Label></td>
          <td><Label size="small" variant="outline">Label</Label></td>
          <td><Label size="small" variant="ghost">Label</Label></td>
        </tr>
        <tr>
          <td>Medium</td>
          <td><Label size="medium" variant="fill">Label</Label></td>
          <td><Label size="medium" variant="outline">Label</Label></td>
          <td><Label size="medium" variant="ghost">Label</Label></td>
        </tr>
        <tr>
          <td>Large</td>
          <td><Label size="large" variant="fill">Label</Label></td>
          <td><Label size="large" variant="outline">Label</Label></td>
          <td><Label size="large" variant="ghost">Label</Label></td>
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

  td:first-of-type {
    text-align: right;
    font-weight: bold;
  }
`;

export default LabelsTable;
