import React, { useState } from 'react';

import PageDefault from '../../components/PageDefault';
import Input from '../../components/Input';
import Button from '../../components/Button';
import calculatePresentValue from '../../utils/calculatePresentValue';

function PresentValue(){
    const [futureValue, setFutureValue] = useState('');
    const [rate, setRate] = useState('');
    const [period, setPeriod] = useState('');
    const [result, setResult] = useState('R$ 0.00');

    function handleCalculate(){
        const v = Number(futureValue);
        const i = Number(rate);
        const t = Number(period);

        setResult(`R$ ${calculatePresentValue(v, i, t).toFixed(2)}`);
    }

    return (
        <PageDefault>
            <h2 className='title'>Valor Presente</h2>

            <Input
                width='98%'
                height='40px'
                placeholder=' Valor futuro'
                type='number'
                value={futureValue}
                onChange={e => setFutureValue(e.target.value)}
            />
            <Input
                width='98%'
                height='40px'
                placeholder=' Taxa (em %)'
                type='number'
                value={rate}
                onChange={e => setRate(e.target.value)}
            />
            <Input
                width='98%'
                height='40px'
                placeholder=' Períodos'
                type='number'
                value={period}
                onChange={e => setPeriod(e.target.value)}
            />

            <Button width='200px' onClick={handleCalculate}>Calcular</Button>

            <h3 className='result-text'>Resultado: {result}</h3>
        </PageDefault>
    );
}

export default PresentValue;