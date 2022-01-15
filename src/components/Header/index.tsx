import { Link } from 'react-router-dom'
import { useCart } from '../../hook/useCart'
import { Container } from './styles'

const Header = (): JSX.Element => {

    const { cart } = useCart()

    const cartProducts = cart.length

    return (
        <Container>
            <Link to="/" >
                <h1>Aqui é o topo do site</h1>
            </Link>

            <Link to="/cart" >
                <button>Ir para o carrinho</button>
                {cartProducts} {cartProducts === 1 ? 'Item' : 'Itens' }
            </Link>
        </Container>
    )
}

export default Header