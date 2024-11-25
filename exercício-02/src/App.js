import { useState } from 'react';
import './App.css';
import History from './history';

function App() {
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [result, setResult] = useState(0);
    const [history, setHistory] = useState([]); 

    const handleCalculation = (operation) => {
        let res = 0;
        if (operation === '+') res = firstNumber + secondNumber;
        if (operation === '-') res = firstNumber - secondNumber;
        if (operation === '*') res = firstNumber * secondNumber;
        if (operation === '/') res = firstNumber / secondNumber;

        setResult(res);
        setHistory([...history, res]); 
    };

    return (
        <>
            <h1>Calculadora</h1>
            <div className="card">
                <label>
                    Primeiro número
                    <input
                        value={firstNumber}
                        onChange={(e) => setFirstNumber(Number(e.target.value))}
                    />
                </label>
                <label>
                    Segundo número
                    <input
                        value={secondNumber}
                        onChange={(e) => setSecondNumber(Number(e.target.value))}
                    />
                </label>
                <span>Resultado: {result}</span>
            </div>
            <div className='btn-group'>
                <button onClick={() => handleCalculation('+')}>+</button>
                <button onClick={() => handleCalculation('-')}>-</button>
                <button onClick={() => handleCalculation('*')}>*</button>
                <button onClick={() => handleCalculation('/')}>/</button>
            </div>
            {}
            <History history={history} />
        </>
    );
}

export default App;
