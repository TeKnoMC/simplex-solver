class Matrix {
    constructor(matrixArray) {
        this.matrixData = matrixArray;
        this.rowLength = this.matrixData[0].length;
        this.numOfRows = this.matrixData.length;
    }

    scaleRow(rowIdx, scalar) {
        let newRow = [];

        for (let i = 0; i < this.rowLength; i++) {
            newRow.push(this.matrixData[rowIdx][i] * scalar);
        }

        return newRow;
    }

    scaleRowAndStore(rowIdx, scalar) {
        this.matrixData[rowIdx] = this.scaleRow(rowIdx, scalar);
    }

    addScaledRowAndStore(rowIdxToScale, scalar, rowIdxToStore) {
        let scaledRow = this.scaleRow(rowIdxToScale, scalar);

        for (let i = 0; i < this.rowLength; i++) {
            this.matrixData[rowIdxToStore][i] += scaledRow[i];
        }
    }
}

export default Matrix;