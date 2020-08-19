import React, { useState } from 'react';

import PageDefault from '../../components/PageDefault';
import Input from '../../components/Input';
import Button from '../../components/Button';
import calculateFutureValue from '../../utils/calculateFutureValue';
import MathJax from 'react-mathjax2';
import './styles.css';

function FutureValue(){
    const [presentValue, setPresentValue] = useState('');
    const [rate, setRate] = useState('');
    const [period, setPeriod] = useState('');
    const [result, setResult] = useState('R$ 0.00');

    const vf = 'VF = VP * (1 + i)^t';

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

            <div className="text-container">
                <MathJax.Context>
                    <h3 className="formula-text">Formula do valor futuro: <MathJax.Node>{vf}</MathJax.Node></h3>
                </MathJax.Context>

                <p className="paragraph-text">
                    Para calcular o valor futuro de uma quatia é necessário aplicar a
                    formula de juros compostos ao longo de um determinado prazo.
                </p>
            </div>
        </PageDefault>
    );
}

export default FutureValue;