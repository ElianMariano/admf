import React, { useState } from 'react';

import PageDefault from '../../components/PageDefault';
import Input from '../../components/Input';
import Button from '../../components/Button';
import calculateFutureValue from '../../utils/calculateFutureValue';

function FutureValue(){
    const [presentValue, setPresentValue] = useState('');
    const [rate, setRate] = useState('');
    const [period, setPeriod] = useState('');
    const [result, setResult] = useState('R$ 0.00');

    function handleCalculate(){
        const v = Number(presentValue);
        const i = Number(rate);
        const t = Number(period);

        setResult(`R$ ${calculateFutureValue(v, i, t).toFixed(2)}`);
    }

    return (
        <PageDefault>
            <h2 className='title'>Valor Futuro</h2>

            <Input
                width='98%'
                height='40px'
                placeholder=' Valor presente'
                type='number'
                value={presentValue}
                onChange={e => setPresentValue(e.target.value)}
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

export default FutureValue;