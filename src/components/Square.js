import React from "react";
import { Button, Table } from "semantic-ui-react";

const Square = props => {
  return (
    <Table.Cell textAlign="center">
      <div>
        <Button onClick={props.onClick} icon>
          {props.value}
        </Button>
      </div>
    </Table.Cell>
  );
};

export default Square;
