import { useState } from 'react';
import CalculatorForm from '../organisms/calculatorForm';
import History from '../organisms/history';

function CalculatorPage() {
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [result, setResult] = useState(0);
    const [history, setHistory] = useState([]);

    const handleCalculation = (operation) => {
        let res = 0;
        switch (operation) {
            case '+':
                res = firstNumber + secondNumber;
                break;
            case '-':
                res = firstNumber - secondNumber;
                break;
            case '*':
                res = firstNumber * secondNumber;
                break;
            case '/':
                res = firstNumber / secondNumber;
                break;
            default:
                return;
        }
        setResult(res);
        setHistory([...history, `${firstNumber} ${operation} ${secondNumber} = ${res}`]);
    };

    return (
        <>
            <h1>Calculadora</h1>
            <CalculatorForm
                firstNumber={firstNumber}
                secondNumber={secondNumber}
                setFirstNumber={setFirstNumber}
                setSecondNumber={setSecondNumber}
                handleCalculation={handleCalculation}
            />
            <History history={history} />
        </>
    );
}

export default CalculatorPage;
