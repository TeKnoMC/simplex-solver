import React from 'react';
import './App.css';
import { SimplexSolver } from './Simplex';

class App extends React.Component {
    render() {
        return (
            <div id="app">
                <SimplexSolver />
            </div>
        );
    }
}

export default App;
