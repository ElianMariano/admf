import React, { useState } from 'react';

import PageDefault from '../../components/PageDefault';
import Button from '../../components/Button';
import PlusButton from '../../components/PlusButton';
import Input from '../../components/Input';
import './styles.css';

function Payback(){
    const [cashFlows, setCashFlows] = useState(['']);
    const [vpl, setVpl] = useState('');
    const [rate, setRate] = useState('');

    function handleAdd(){
        setCashFlows([
            ...cashFlows,
            ''
        ]);
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
                placeholder=' Valor presente líquido'
                type='number'
                value={vpl}
                onChange={e => setVpl(e.target.value)}
            />

            <Input
                width='98%'
                height='40px'
                placeholder=' Taxa (em %)'
                type='number'
                value={rate}
                onChange={e => setRate(e.target.value)}
            />

            <Button width='200px'>Calcular</Button>

            <h3 className='result-text'>Tempo: 0 anos</h3>
        </PageDefault>
    )
}

export default Payback;