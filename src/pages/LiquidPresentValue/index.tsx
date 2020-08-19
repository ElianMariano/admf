import React, { useState } from 'react';

import PageDefault from '../../components/PageDefault';
import Input from '../../components/Input';
import Button from '../../components/Button';
import PlusButton from '../../components/PlusButton';
import calculateVpl from '../../utils/calculateVpl';
import MathJax from 'react-mathjax2';
import './styles.css';

function LiquidPresentValue(){
    const [cashFlows, setCashFlows] = useState(['']);
    const [rate, setRate] = useState('');
    const [result, setResult] = useState('R$ 0.0');

    const vpl = 'VPL = sum_(t=0)^n (R_t - C_t)/(1 + i)^t';

    function handleAdd(){
        setCashFlows([
            ...cashFlows,
            ''
        ]);
    }

    function handleCalculate(){
        let fcs: number[] = [];

        for (let i = 0;i < cashFlows.length;i++)
            fcs.push(Number(cashFlows[i]));

        const i = Number(rate);

        setResult(`R$ ${calculateVpl(fcs, i).toFixed(2)}`);
    }

    return (
        <PageDefault>
            <h2 className='title'>Valor Presente líquido</h2>

            <div className="fields-container">
                <h3>Fluxos de caixa</h3>

                <PlusButton width='300px' onClick={handleAdd}>Adicionar</PlusButton>
                {cashFlows.map((CF, index) => {
                    return <Input
                        key={`${index}_Id`}
                        width='98%'
                        height='40px'
                        placeholder={` Período ${index}`}
                        type='number'
                        value={CF}
                        onChange={e => {
                            const newData = [...cashFlows];
                            newData[index] = e.target.value;
                            setCashFlows(newData);
                        }}
                    />
                })}
            </div>

            <Input
                width='98%'
                height='40px'
                placeholder=' Taxa (em %)'
                type='number'
                value={rate}
                onChange={e => setRate(e.target.value)}
            />

            <Button width='200px' onClick={handleCalculate}>Calcular</Button>

            <h3 className='result-text'>Resultado: {result}</h3>

            <div className="text-container">
                <MathJax.Context>
                    <h3 className="formula-text">Formula do Valor Presente Líquido: <MathJax.Node>{vpl}</MathJax.Node></h3>
                </MathJax.Context>

                <p className="paragraph-text">
                    O valor presente líquido (VPL) é encontrado através da subtração do
                    investimento inicial do projeto, do valor presente de suas entradas
                    de caixa, descontados às taxas de juros da empresa. Na aplicação,
                    o perído de tempo é obtido a partir da quantidade de fluxos de caixa
                    adicionados.
                </p>
            </div>
        </PageDefault>
    );
}

export default LiquidPresentValue;