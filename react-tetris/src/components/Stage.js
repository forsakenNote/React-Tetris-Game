import React from 'react';
import { StyledStage } from './styles/StyledStage';

import Cell from './Cell';

const Stage = ({ stage }) => (
  <StyledStage width={stage[0].length} height={stage.length}>
    {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </StyledStage>
);

export default Stage;

//we map through the stage array, we get the row and each row is an array that holds
//the cells. We map throught the row array and for each cell we render the cell component
// and 