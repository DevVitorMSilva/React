import InputWithLabel from '../molecules/InputWithLabel';
import Button from '../atoms/Button';

function CalculatorForm({ firstNumber, secondNumber, setFirstNumber, setSecondNumber, handleCalculation }) {
    return (
        <div className="card">
            <InputWithLabel label="Primeiro número" value={firstNumber} onChange={e => setFirstNumber(Number(e.target.value))} />
            <InputWithLabel label="Segundo número" value={secondNumber} onChange={e => setSecondNumber(Number(e.target.value))} />
            <div className="btn-group">
                <Button onClick={() => handleCalculation('+')}>+</Button>
                <Button onClick={() => handleCalculation('-')}>-</Button>
                <Button onClick={() => handleCalculation('*')}>*</Button>
                <Button onClick={() => handleCalculation('/')}>/</Button>
            </div>
        </div>
    );
}

export default CalculatorForm;
