import React, { Component } from "react";
import { Header, Button } from "semantic-ui-react";
import Square from "./Square";
import "./tictactoe.css";
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
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
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

    const vertStyle = {
      borderLeft: "2px solid black",
      borderRight: "2px solid black"
    };

    const hortStyle = {
      borderTop: "2px solid black",
      borderBottom: "2px solid black"
    };

    const hortAndVertStyle = {
      ...hortStyle,
      ...vertStyle
    };

    return (
      <div>
        <Header textAlign="center">Tic Tac Toe</Header>
        <Header textAlign="center">{status}</Header>
        <Header textAlign="center">
          <Button onClick={() => this.handleReset()}>Reset</Button>
        </Header>
        <br />
        <table>
          <tbody>
            <tr>
              <Square
                value={this.state.squares[0]}
                onClick={() => this.handleClick(0)}
              />
              <Square
                style={vertStyle}
                value={this.state.squares[1]}
                onClick={() => this.handleClick(1)}
              />
              <Square
                value={this.state.squares[2]}
                onClick={() => this.handleClick(2)}
              />
            </tr>
            <tr>
              <Square
                style={hortStyle}
                value={this.state.squares[3]}
                onClick={() => this.handleClick(3)}
              />
              <Square
                style={hortAndVertStyle}
                value={this.state.squares[4]}
                onClick={() => this.handleClick(4)}
              />
              <Square
                style={hortStyle}
                value={this.state.squares[5]}
                onClick={() => this.handleClick(5)}
              />
            </tr>
            <tr>
              <Square
                value={this.state.squares[6]}
                onClick={() => this.handleClick(6)}
              />
              <Square
                style={vertStyle}
                value={this.state.squares[7]}
                onClick={() => this.handleClick(7)}
              />
              <Square
                value={this.state.squares[8]}
                onClick={() => this.handleClick(8)}
              />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default TicTacToe;
