import styled from 'styled-components'

import { ArrowLeftShort } from '@styled-icons/bootstrap/ArrowLeftShort'
import { Cart } from '@styled-icons/bootstrap/Cart'

export const Container = styled.header`
    background: var(--gray);
`
export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 90%;
    max-width: 1200px;
    margin: 0 auto;

    padding-top: 2.4rem;
`

export const NavMenu = styled.div`

        display: flex;
        align-items: center;

         div {

            padding: 0.4rem 1.2rem;

            border-radius: 10px;

            text-align: right;

            h3 {
                font-weight: 700;
                font-size: 1.6rem;
            }

            > div {
                font-size: 1.2rem;
            }

    }
`

export const Arrow = styled(ArrowLeftShort)`
    width: 56px;
`

export const CartIcon = styled(Cart)`
    width: 52px;
`