import styled from 'styled-components'

import { PlusCircle } from '@styled-icons/boxicons-regular/PlusCircle'
import { Delete } from '@styled-icons/fluentui-system-filled/Delete'
import { DeleteBack } from '@styled-icons/remix-line/DeleteBack'

export const CartPage = styled.div`
    background: var(--gray);
    height: 100vh;

    border-radius: 10px;
`

export const Container = styled.div`

    padding: 50px;
    background: #fff;
    border-radius: 4px;

    margin: 5rem auto;
    max-width: 1200px;
    width: 100%;

  footer {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    button {
      background: #000;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

    }
  }
    
`

export const ProductTable = styled.table`
     
    width: 100%;

    thead th {
        color: #999;
        text-align: left;
        padding: 12px;
    }

    tbody td {
        padding: 12px;
        border-bottom: 1px solid #eee;
    }

    img {
        height: 150px;
    }

    strong {
        color: #333;
        display: block;
        font-size: 1.3rem;
    }

    span {
        display: block;
        margin-top: 5px;
        font-size: 18px;
        font-weight: bold;
    }

    div {
        display: flex;
        align-items: center;

        input {
            border: 1px solid #ddd;
            border-radius: 4px;
            color: #666;
            padding: 6px;
            width: 50px;
        }
    }

    button {
            background: none;
            border: 0;
            padding: 6px;
        }

    }
`

export const Total = styled.footer`
    display: flex;
    align-items: center;
    gap: 1.2rem;

    span {
        color: var(--gray-icon);
    }

    strong {
        font-size: 1.4rem;
    }
    
`

export const DeleteIcon = styled(Delete)`
    width: 34px;
    color: rgba(255, 0, 0, 0.8);
`

export const DecrementIcon = styled(PlusCircle)`
    width: 24px;
`

export const DeleteBackIcon = styled(DeleteBack)`
    width: 32px;
`