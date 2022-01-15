import styled from "styled-components";

export const Container = styled.div`
    background: var(--gray);
`
export const Content = styled.div`
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;

    justify-content: space-between;

    div {

        h1 {
            font-size: 4rem;
        }

        h2 {
            font-size: 2rem;
        }

        button {
            padding: 0.6rem 4rem;
            font-size: 1.6rem;
            border-radius: 0.4rem;

            background: #000;
            color: #fff;

            margin-top: 1.2rem;
        }

    }
`