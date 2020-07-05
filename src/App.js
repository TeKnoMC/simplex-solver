import React from 'react';
import './App.css';
import { simplexFromBFS } from './maths/simplex';

class App extends React.Component {
    render2DArray(m) {
        const jsx = m.map((row, idx1) => {
            const tableData = row.map((value, idx2) => {
                return <td key={idx2}>{value}</td>;
            });

            return (
                <tr key={idx1}>{tableData}</tr>
            );
        });

        return <table><tbody>{jsx}</tbody></table>;
    }

    render() {
        const data = [
            [20, 30, 1, 0, 690],
            [5, 4, 0, 1, 120],
            [-25, -30, 0, 0, 0]
        ];

        const m = simplexFromBFS(data);

        return (
            <div>
                <h3>Optimal tableau</h3>
                {this.render2DArray(m.matrixData)}
            </div>
        );
    }
}

export default App;
