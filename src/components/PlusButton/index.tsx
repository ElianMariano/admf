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
    width: ${(props: PlusButtonProps) => props.width};
    margin: 5px;

    transition: .5s opacity;

    &:hover,
    &:focus {
        opacity: 0.85;
    }
`;

export default PlusButton;