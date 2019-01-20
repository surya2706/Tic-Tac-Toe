import React from "react";
import { Header } from "semantic-ui-react";

const Square = props => {
  return (
    <td align="center" style={props.style} onClick={props.onClick}>
      <Header>{props.value}</Header>
    </td>
  );
};

export default Square;
