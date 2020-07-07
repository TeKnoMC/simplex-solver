import React from 'react';
import { simplexFromBFS } from './maths/simplex';

class SimpelxTableau extends React.Component {
    renderSimplexAsTable(result) {
        const tableHeading = result.columnHeadings.map((data, idx) => {
            return <th key={idx} >{data}</th>;
        });

        const tableauRows = result.matrix.matrixData.map((row, idx1) => {
            const tableData = row.map((value, idx2) => {
                return <td key={idx2}>{value}</td>;
            });

            return (
                <tr key={idx1}>
                    <td><b>{result.rowHeadings[idx1]}</b></td>
                    {tableData}
                </tr>
            );
        });

        return (
            <table className="matrix" >
                <thead>
                    <tr>
                        <th>b.v.</th>
                        {tableHeading}
                    </tr>
                </thead>
                <tbody>
                    {tableauRows}
                </tbody>
            </table>
        );
    }

    renderSimplexSolutions(solutionObject) {
        let valuesTable = [];

        for (let i = 0; i < solutionObject.rowHeadings.length; i++) {
            valuesTable.push(<tr key={i}>
                <td>{solutionObject.rowHeadings[i]}</td>
                <td>{solutionObject.matrix.matrixData[i][solutionObject.matrix.rowLength - 1]}</td>
            </tr>);
        }

        return <table className="solutions"><tbody>{valuesTable}</tbody></table>;
    }

    render() {
        const result = simplexFromBFS(this.props.data, this.props.rowNames, this.props.columnNames);

        const optimalTableau = this.renderSimplexAsTable(result);
        const solutionTable = this.renderSimplexSolutions(result);

        return (
            <div>
                <h3>Optimal solution</h3>

                <h4>Final Tableau</h4>
                {optimalTableau}

                <h4>Values</h4>
                {solutionTable}
            </div>
        );
    }
}

export class SimplexSolver extends React.Component {
    render() {
        const data = [
            [20, 30, 1, 0, 690],
            [5, 4, 0, 1, 120],
            [-25, -30, 0, 0, 0]
        ];

        const rowHeadings = ["s", "t", "P"];
        const colHeadings = ["x", "y", "s", "t", "Value"];

        return (
            <div>
                <div id="inputDiv">
                    
                </div>
                <SimpelxTableau data={data} rowNames={rowHeadings} columnNames={colHeadings} />
            </div>
        );
    }
}
