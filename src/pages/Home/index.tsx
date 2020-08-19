import React from 'react';
import PageDefault from '../../components/PageDefault';
import MathJax from 'react-mathjax2';
import './styles.css';

function Home(){
    const vp = 'VP = (VF) / (1 + i)^t';
    const vf = 'VF = VP * (1 + i)^t';
    const vpl = 'VPL = sum_(t=0)^n (R_t - C_t)/(1 + i)^t';

    return (
        <PageDefault>
            <h2 className="title">Aplicação de administração financeira</h2>

            <div className="text-container">
                <p>
                    Esta aplicação foi desenvolvida com ReactJs e Typescript e tem
                    como objetivo realizar calculos de formulas comumente utilizadas na
                    disciplina de administração financeira, mas especificamente para calcular
                    o valor presente e futuro, e a viabilidade de projetos. Esta aplicação
                    foi desenvolvida com estas tecnologias em virtude da grande capacidade
                    de criação de componentes reativos e que comportam de acordo com
                    os estados definidos pelo usuário.
                </p>

                <h3 className="formula-title">Formulas disponíveis:</h3>

                <MathJax.Context input="ascii">
                    <div>
                        <h3 className="formula-text">Valor presente: <MathJax.Node inline>{vp}</MathJax.Node></h3>
                        <h3 className="formula-text">Valor futuro: <MathJax.Node inline>{vf}</MathJax.Node></h3>
                        <h3 className="formula-text">Valor presente líquido: <MathJax.Node inline>{vpl}</MathJax.Node></h3>
                        <h3 className="formula-text">Payback: <MathJax.Node inline>{vpl}</MathJax.Node> sendo t a incógnita.</h3>
                        <h3 className="formula-text">Taxa interna de retorno: <MathJax.Node inline>{vpl}</MathJax.Node> sendo i a incógnita</h3>
                    </div>
                </MathJax.Context>
            </div>
            
        </PageDefault>
    );
}

export default Home;