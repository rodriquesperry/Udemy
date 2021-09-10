import React from 'react';
import './Board.css';
import { Cell } from '../Cell/Cell';

export const Board = (props) => {
  const cells = props.cellValue.map((value, index) => {
    const canHighlight = props.winningCombination && 
                         props.winningCombination.indexOf(index) >= 0;

    return <Cell 
              key={index} 
              value={value} 
              canHighlight={canHighlight}
              onClick={() => props.cellClicked(index)} 
            />
  });

  return (
    <div id="board">
      {cells}
    </div>
  );
}


