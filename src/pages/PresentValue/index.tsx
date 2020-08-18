import React from 'react';

import PageDefault from '../../components/PageDefault';
import Input from '../../components/Input';
import Button from '../../components/Button';

function PresentValue(){
    return (
        <PageDefault>
            <h2 className='title'>Valor Presente</h2>

            <Input
                width='98%'
                height='40px'
                placeholder=' Valor futuro'
                type='number'
            />
            <Input
                width='98%'
                height='40px'
                placeholder=' Taxa (em %)'
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

export default PresentValue;