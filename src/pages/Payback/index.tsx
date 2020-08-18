import React, { useState } from 'react';

import PageDefault from '../../components/PageDefault';
import Button from '../../components/Button';
import PlusButton from '../../components/PlusButton';
import Input from '../../components/Input';
import calculatePayback from '../../utils/calculatePayback';
import './styles.css';

function Payback(){
    const [cashFlows, setCashFlows] = useState(['']);
    const [rate, setRate] = useState('');
    const [result, setResult] = useState('0');

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

        setResult(String(calculatePayback(fcs, i).toFixed(2)));
    }

    return (
        <PageDefault>
            <h2 className='title'>Payback</h2>

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

            <h3 className='result-text'>Tempo: {result} anos</h3>
        </PageDefault>
    )
}

export default Payback;