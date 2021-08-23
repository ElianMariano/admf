import React, { useState } from 'react';

import PageDefault from '../../components/PageDefault';
import Input from '../../components/Input';
import Button from '../../components/Button';
import calculatePresentValue from '../../utils/calculatePresentValue';
import MathJax from 'react-mathjax2';
import './styles.css';

function PresentValue(){
    const [futureValue, setFutureValue] = useState('');
    const [rate, setRate] = useState('');
    const [period, setPeriod] = useState('');
    const [result, setResult] = useState('R$ 0.00');

    const vp = 'VP = (VF) / (1 + i)^t';

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
                id="valor_futuro"
                width='98%'
                height='40px'
                placeholder=' Valor futuro'
                type='number'
                value={futureValue}
                onChange={e => setFutureValue(e.target.value)}
            />
            <Input
                id="taxa_valor_futuro"
                width='98%'
                height='40px'
                placeholder=' Taxa (em %)'
                type='number'
                value={rate}
                onChange={e => setRate(e.target.value)}
            />
            <Input
                id="periodos_valor_futuro"
                width='98%'
                height='40px'
                placeholder=' Períodos'
                type='number'
                value={period}
                onChange={e => setPeriod(e.target.value)}
            />

            <Button id="submit" width='200px' onClick={handleCalculate}>Calcular</Button>

            <h3 id="resultado" className='result-text'>Resultado: {result}</h3>

            <div className="text-container">
                <MathJax.Context>
                    <h3 className="formula-text">Formula do valor presente: <MathJax.Node>{vp}</MathJax.Node></h3>
                </MathJax.Context>

                <p className="paragraph-text">
                    A formula para calcular o valor presente obtêm o valor atual em dinheiro
                    de um montante futuro, a partir desta formula é possível mensurar quanto
                    em dinheiro poderá ser investido a uma determinada taxa de juros para
                    que corresponda a um montante futuro.
                </p>
            </div>
        </PageDefault>
    );
}

export default PresentValue;