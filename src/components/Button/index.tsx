import styled from 'styled-components';

interface ButtonProps {
    width?: string;
}

const Button = styled.button`
    border-radius: 5px;
    background: var(--color-primary);
    font-size: 16px;
    font-family: Roboto, sans-serif;
    font-weight: bold;
    color: var(--white);
    border-width: 0;
    height: 40px;
    margin: 5px;
    width: ${(props: ButtonProps) => {return (props.width !== undefined) ? props.width : 'auto'}};

    transition: .5s opacity;

    &:hover {
        opacity: 0.7;
    }
`;

export default Button;