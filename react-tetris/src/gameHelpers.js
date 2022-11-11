export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

//Creates the stage width and height - import it to the components.

//Create a function to create the stage with cells and rows.
    // for each row (20 wors in total - first array with height) we create another array with the cells from the width
    // Each cell is filled up it with another array with 0 (nothing on the grid) and clear (no tetraminos that collide in the cell)


export const createStage = () =>
 Array.from(Array(STAGE_HEIGHT), () => 
    new Array(STAGE_WIDTH).fill([0, 'clear'])
 )