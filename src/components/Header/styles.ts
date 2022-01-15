import styled from 'styled-components'

export const Container = styled.header`
    
`
export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 90%;
    max-width: 1200px;
    margin: 0 auto;

    padding: 2.4rem 0;
`
export const Logo = styled.h1`

`
export const NavMenu  = styled.nav`

    ul {
        display: flex;
        align-items: center;

        gap: 1.6rem;

        li {
            font-size: 1.2rem;
            font-weight: 600;
        }

        button {
            padding: 0.2rem 1.2rem;
            background: #000;
            color: #fff;

            border-radius: 10px;

            text-align: right;

            div {
                font-size: 1.2rem;
            }

            span {

            }
        }

    }
`