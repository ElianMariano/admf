import styled from 'styled-components';

// export interface ButtonProps {
//     width: string;
// }

const Button = styled.button`
    border-radius: 5px;
    background: var(--color-primary);
    font-size: 16px;
    font-family: Roboto, sans-serif;
    font-weight: bold;
    color: var(--white);
    border-width: 0;
    height: 40px;
    width: auto;

    transition: .5s opacity;

    &:hover,
    &:focus {
        opacity: 0.7;
    }
`;

export default Button;