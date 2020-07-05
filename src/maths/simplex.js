import Matrix from './matrix';

/*

simplex(Matrix m) => Array values

1. Check bottom row for most negative value
2. Calculate theta for each value in that column
3. Select smallest positive theta - corresponding value = pivot.
4. Scale row with smallest theta by reciprocal of pivot
5. For each row:
    - scale pivot row by value in other row, add and store into other row (addScaledRowAndStore())
6. Check bottom row for negatives - if any, goto (1)
7. Return values

*/

export function simplexFromBFS(arrayData) {
    let matrix = new Matrix(arrayData);

    let complete = false;

    while (!complete) {
        // Check bottom row for most -ve
        let pivotColumn = -1;
        let mostNegative = 0;
        let currentValue;

        for (let i = 0; i < matrix.rowLength - 1; i++) {
            currentValue = matrix.matrixData[matrix.numOfRows - 1][i];
            
            if (currentValue < mostNegative) {
                mostNegative = currentValue;
                pivotColumn = i;
            }
        }

        if (pivotColumn !== -1) {
            // Check pivot column for smallest theta
            let pivotRow = -1;
            let smallestPositive = Infinity;
            let theta;

            for (let i = 0; i < matrix.numOfRows; i++) {
                // Value / pivot column value
                theta = matrix.matrixData[i][matrix.rowLength - 1] / matrix.matrixData[i][pivotColumn];

                if (theta < smallestPositive && theta > 0) {
                    smallestPositive = theta;
                    pivotRow = i;
                }
            }

            if (pivotRow !== -1) {
                // Scale pivot row
                matrix.scaleRowAndStore(pivotRow, 1/(matrix.matrixData[pivotRow][pivotColumn]));

                // Scale all other rows
                for (let i = 0; i < matrix.numOfRows; i++) {
                    if (i !== pivotRow) {
                        matrix.addScaledRowAndStore(
                            pivotRow,
                            matrix.matrixData[i][pivotColumn] * -1,
                            i
                        );
                    }
                }
            }
            else {
                console.log("Error occured: no viable value for theta in pivot column");
            }
        }
        else {
            complete = true;
        }
    }

    return matrix;
}