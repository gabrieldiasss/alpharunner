import styled from 'styled-components'

import { ArrowRightShort } from '@styled-icons/bootstrap/ArrowRightShort'
import { Cart } from '@styled-icons/bootstrap/Cart'

export const Container = styled.main`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3.2rem;

    max-width: 1200px;
    margin: 4rem auto;
`

export const Card = styled.li`
    background: var(--gray);

    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;

    padding: 1.2rem 1.6rem;
    border-radius: 0.8rem;

    h2 {

        font-size: 1.4rem;
        margin-top: 1.2rem;

        span {
            font-size: 1rem;
            font-weight: 500;
            color: #626062;
            
            &:hover {
                text-decoration: underline;
            }
        }
        
    }

    h3 {
        font-size: 1.6rem;
        margin-top: 0.8rem;
    }

    button {
        margin-top: 1.4rem;
        font-size: 1.35rem;
        display: flex;
        align-items: center;

        span {
            display: flex;
            align-items: center;
        }

        &:hover {
            text-decoration: underline;
        }
    }

    > span {
        display: flex;
        align-items: flex-start;
        gap: 0.8rem;
        font-size: 1.4rem;
        color: var(--gray-icon);
        font-weight: 400;
    }

`

export const Arrow = styled(ArrowRightShort)`
    width: 56px;
`
export const CartIcon = styled(Cart)`
    width: 28px;
    color: var(--gray-icon);
`