"use client";
import React, { useState} from 'react';

interface SquareProps {
    value: string | null;
    onSquareClick: (i: number) => void;
}
const Square: React.FC<SquareProps> = ({value, onSquareClick}) => {
    return (
        <button className="square" onClick={() => onSquareClick(0)}>
            {value}
        </button>
    )
}

interface BoardProps {
    xIsNext: boolean;
    squares: string[];
    onPlay: (nextSquares: string[]) => void;
}
const Board: React.FC<BoardProps> = ({ xIsNext, squares, onPlay }) => {

    const handleClick = (i: number) => {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';   
        }
        onPlay(nextSquares);
    }
    let status;
    if (calculateWinner(squares)) {
        status = 'Winner: ' + calculateWinner(squares);
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }
    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </>
    )
}
export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    let xIsNext = currentMove % 2 === 0;
    const currantSquares = history[currentMove]

    const jumpTo = (move: number) => {
        // ...
        setCurrentMove(move);
    }

    const handlePlay = (nextSquares: any) => {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory)
        setCurrentMove(nextHistory.length - 1);
    }

    const moves = history.map((_step, move) => {
        const desc = move ?
            'Go to move #' + move :
            'Go to game start';
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
        );
    })

   
    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currantSquares} onPlay={handlePlay} />
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    )
}

function calculateWinner(squares: string[]) : string | null{
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
}