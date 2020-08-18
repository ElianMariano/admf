import React, { useState } from 'react';

import PageDefault from '../../components/PageDefault';
import Input from '../../components/Input';
import Button from '../../components/Button';
import PlusButton from '../../components/PlusButton';

import './styles.css';

function LiquidPresentValue(){
    const [cashFlows, setCashFlows] = useState(['']);
    const [rate, setRate] = useState('');
    const [periods, setPeriods] = useState('');

    function handleAdd(){
        setCashFlows([
            ...cashFlows,
            ''
        ]);
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
                        placeholder={` Perído ${index}`}
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
            <Input
                width='98%'
                height='40px'
                placeholder=' Tempo'
                type='number'
                value={periods}
                onChange={e => setPeriods(e.target.value)}
            />

            <Button width='200px'>Calcular</Button>

            <h3 className='result-text'>Resultado: R$ 00,00</h3>
        </PageDefault>
    );
}

export default LiquidPresentValue;