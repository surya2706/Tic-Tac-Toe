import React, { Component } from "react";
import { Table, Header, Button } from "semantic-ui-react";
import Square from "./Square";
import { calculateWinner } from "../helper";

class TicTacToe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleClick(i) {
    console.log(i);
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    console.log(squares);
    squares[i] = this.state.xIsNext ? "X" : "O";
    console.log(squares);
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    });
  }

  handleReset() {
    this.setState({
      squares: Array(9).fill(null),
      xIsNext: true
    });
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div>
        <Header textAlign="center">{status}</Header>
        <Header textAlign="center">
          <Button onClick={() => this.handleReset()}>Reset</Button>
        </Header>
        <Table fixed celled columns={3}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="3" textAlign="center">
                Tic Tac Toe
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Square
                value={this.state.squares[0]}
                onClick={() => this.handleClick(0)}
              />
              <Square
                value={this.state.squares[1]}
                onClick={() => this.handleClick(1)}
              />
              <Square
                value={this.state.squares[2]}
                onClick={() => this.handleClick(2)}
              />
            </Table.Row>
            <Table.Row>
              <Square
                value={this.state.squares[3]}
                onClick={() => this.handleClick(3)}
              />
              <Square
                value={this.state.squares[4]}
                onClick={() => this.handleClick(4)}
              />
              <Square
                value={this.state.squares[5]}
                onClick={() => this.handleClick(5)}
              />
            </Table.Row>
            <Table.Row>
              <Square
                value={this.state.squares[6]}
                onClick={() => this.handleClick(6)}
              />
              <Square
                value={this.state.squares[7]}
                onClick={() => this.handleClick(7)}
              />
              <Square
                value={this.state.squares[8]}
                onClick={() => this.handleClick(8)}
              />
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default TicTacToe;
