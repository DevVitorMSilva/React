import Label from '../atoms/label';
import Input from '../atoms/input';

function InputWithLabel({ label, value, onChange }) {
    return (
        <div>
            <Label>{label}</Label>
            <Input value={value} onChange={onChange} />
        </div>
    );
}

export default InputWithLabel;
