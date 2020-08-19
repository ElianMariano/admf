import React, { useState } from 'react';

import PageDefault from '../../components/PageDefault';
import Button from '../../components/Button';
import PlusButton from '../../components/PlusButton';
import Input from '../../components/Input';
import calculateTir from '../../utils/calculateTir';
import MathJax from 'react-mathjax2';
import './styles.css';

function TIR(){
    const [cashFlows, setCashFlows] = useState(['']);
    const [result, setResult] = useState('0.00%');

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

        setResult(`${(calculateTir(fcs)).toFixed(2)}%`)
    }

    return (
        <PageDefault>
            <h2 className='title'>Taxa interna de retorno</h2>

            <div className="fields-container">
                <h3>Fluxos de caixa</h3>

                <PlusButton onClick={handleAdd}>Adicionar</PlusButton>
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

            <Button width='200px' onClick={handleCalculate}>Calcular</Button>

            <h3 className='result-text'>Taxa interna de retorno: {result}</h3>

            <div className="text-container">
                <MathJax.Context>
                    <h3 className="formula-text">Formula para a Taxa de Retorno Interno: <MathJax.Node>{vpl}</MathJax.Node> sendo i a incógnita.</h3>
                </MathJax.Context>

                <p className="paragraph-text">
                    A Taxa de Retorno Interno (TIR) corresponde a taxa de juros que a empresa obterá,
                    dado entradas de caixa previstas. Para calculá-la se utiliza a formula do VPL. 
                    A TIR é um valor o qual só pode ser obtido através de tentativa e erro, 
                    portanto para obter esse valor foi necessário que valores
                    diferentes fossem testados. Para isso, a aplicação utiliza um algorítmo
                    conhecido como método da bissecção, o qual consiste em definir um
                    intervalo entre <strong>a</strong> e <strong>b</strong> o qual se sabe 
                    que a raiz de uma função se encontra entre este intervalo pré-definido.
                    Então, divide-se o intervalo na metade e atribui-se novos valores para{' '}
                    <strong>a</strong> ou para <strong>b</strong> escolhendo qual dos dois
                    mudará de acordo com a condição de que a raiz da função se encontre
                    entre este intervalo. Fazendo este processo varias vezes, os valores <strong>a</strong> 
                    {' '}e <strong>b</strong> se aproximarão cada vez mais
                    da raiz desejada, podendo definir uma tolerância de diferença entre
                    eles, ou seja, quantas casas decimais de precisão serão levadas em
                    consideração ao calcular a raiz desejada. Esse algorítmo diminui a
                    quantidade de valores os quais são testados, consequentemente
                    diminuindo o processamento da aplicação.
                </p>
            </div>
        </PageDefault>
    );
}

export default TIR;