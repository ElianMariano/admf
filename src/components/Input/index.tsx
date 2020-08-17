import styled from 'styled-components';

interface InputProps {
    width: string;
    height: string;
}

// width: 400px, height: 40px;

const Input = styled.input`
    background-color: var(--white);
    color: var(--color-light-grey);
    font-size: 18px;
    font-weight: bold;
    font-family: Roboto, sans-serif;
    border-width: 0;
    margin: 1%;
    border-radius: 4px;
    width: ${(props: InputProps) => props.width};
    height: ${(props: InputProps) => props.height};
`;

export default Input;