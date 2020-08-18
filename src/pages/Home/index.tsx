import React from 'react';
import PageDefault from '../../components/PageDefault';
import './styles.css';

function Home(){
    return (
        <PageDefault>
            <h2 className="title">Aplicação de administração financeira</h2>

            <div className="text-container">
                <p>
                    Esta aplicação foi desenvolvida com ReactJs e typescript e tem
                    como objetivo realizar calculos de formulas de comumente utilizadas na
                    disciplina de administração financeira, mas especificamente para calcular
                    o valor presente e futuro, e a viabilidade de projetos. Esta aplicação
                    foi desenvolvida com estas tecnologia em virtude da grande capacidade
                    de criação de componentes reativos e que comportam de acordo com
                    os estados.
                </p>
            </div>
        </PageDefault>
    );
}

export default Home;