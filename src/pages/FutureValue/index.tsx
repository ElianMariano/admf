import React from 'react';

import PageDefault from '../../components/PageDefault';
import Input from '../../components/Input';
import Button from '../../components/Button';

function FutureValue(){
    return (
        <PageDefault>
            <h2 className='title'>Valor Futuro</h2>

            <Input
                width='98%'
                height='40px'
                placeholder=' Valor presente'
                type='number'
            />
            <Input
                width='98%'
                height='40px'
                placeholder=' Taxa'
                type='number'
            />
            <Input
                width='98%'
                height='40px'
                placeholder=' Períodos'
                type='number'
            />

            <Button width='200px'>Calcular</Button>

            <h3 className='result-text'>Resultado: R$ 00,00</h3>
        </PageDefault>
    );
}

export default FutureValue;