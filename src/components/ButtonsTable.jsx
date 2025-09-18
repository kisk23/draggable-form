import React from "react";
import styled from "styled-components";

import Button from "./Buttons";

const ButtonTable = () => {
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
          <td>
            <Button size="small" variant="fill">
              Button
            </Button>
          </td>
          <td>
            <Button size="small" variant="outline">
              Button
            </Button>
          </td>
          <td>
            <Button size="small" variant="ghost">
              Button
            </Button>
          </td>
        </tr>
        <tr>
          <td>Medium</td>
          <td>
            <Button size="medium" variant="fill">
              Button
            </Button>
          </td>
          <td>
            <Button size="medium" variant="outline">
              Button
            </Button>
          </td>
          <td>
            <Button size="medium" variant="ghost">
              Button
            </Button>
          </td>
        </tr>
        <tr>
          <td>Large</td>
          <td>
            <Button size="large" variant="fill">
              Button
            </Button>
          </td>
          <td>
            <Button size="large" variant="outline">
              Button
            </Button>
          </td>
          <td>
            <Button size="large" variant="ghost">
              Button
            </Button>
          </td>
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
  th {
   
  }
  td:first-of-type,
  th:first-of-type {
   
  }
  td:first-of-type {
    text-align: right;
  }
`;

export default ButtonTable;
