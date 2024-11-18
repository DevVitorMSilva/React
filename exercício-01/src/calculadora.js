import { useState } from 'react'
import './App.css'

function App() {
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [result, setResult] = useState(0);

    return (
        <>
            <h1>Calculadora</h1>
            <div className="card">
                <label>
                    Primeiro número
                    <input
                        value={firstNumber}
                        onChange={e => setFirstNumber(Number(e.target.value))} />
                </label>
                <label>
                    Segundo número
                    <input
                        value={secondNumber}
                        onChange={e => setSecondNumber(Number(e.target.value))}
                    />
                </label>
                <span>Resultado: {result}</span>
            </div>
            <div className='btn-group'>
                <button onClick={() => setResult(firstNumber + secondNumber)}>+</button>
                <button onClick={() => setResult(firstNumber - secondNumber)}>-</button>
                <button onClick={() => setResult(firstNumber * secondNumber)}>*</button>
                <button onClick={() => setResult(firstNumber / secondNumber)}>/</button>
            </div>
        </>
    )
}

export default App