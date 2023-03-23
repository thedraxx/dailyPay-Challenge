import { colors } from '@/utilities/colors';
import styled from 'styled-components';

export const ContainerNominiees = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: ${colors.nomineCardBackground};
    border-radius: 10px;
    padding: 1rem;
`;

export const TextMovie = styled.h1`
    font-size: 1.5rem;
    font-weight: 600;
    color: ${colors.fontcolor};
    margin-bottom: 1rem;
`


export const Button = styled.button`
    width: 100%;
    height: 2rem;
    background-color: ${colors.nomineCardBackground};
    border: 1px solid ${colors.fontcolor};
    border-radius: 10px;
    color: ${colors.fontcolor};
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: ${colors.fontcolor};
        color: ${colors.nomineCardBackground};
    }
`