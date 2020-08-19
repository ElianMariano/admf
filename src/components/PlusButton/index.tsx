import styled from 'styled-components';

interface PlusButtonProps{
    width: string;
}

const PlusButton = styled.button`
    border-radius: 5px;
    background: var(--color-light-green);
    font-size: 18px;
    font-family: Roboto, sans-serif;
    font-weight: bold;
    color: var(--white);
    border-width: 0;
    height: 40px;
    width: 300px;
    margin: 5px;

    transition: .5s opacity;

    &:hover {
        opacity: 0.85;
    }

    @media (max-width: 700px){
        & {
            width: 100%;
            margin: 5px auto;
        }
    }
`;

export default PlusButton;