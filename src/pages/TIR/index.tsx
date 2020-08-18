import React, { useState } from 'react';

import PageDefault from '../../components/PageDefault';
import Button from '../../components/Button';
import PlusButton from '../../components/PlusButton';
import Input from '../../components/Input';
import './styles.css';

function TIR(){
    const [cashFlows, setCashFlows] = useState(['']);
    const [vpl, setVpl] = useState('');
    const [periods, setPeriods] = useState('');

    function handleAdd(){
        setCashFlows([
            ...cashFlows,
            ''
        ]);
    }

    return (
        <PageDefault>
            <h2 className='title'>Taxa interna de retorno</h2>

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
                placeholder=' Valor presente líquido'
                type='number'
                value={vpl}
                onChange={e => setVpl(e.target.value)}
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

            <h3 className='result-text'>TIR: 0%</h3>
        </PageDefault>
    );
}

export default TIR;