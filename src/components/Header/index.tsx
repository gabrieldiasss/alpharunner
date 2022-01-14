import { Link } from 'react-router-dom'
import { Container } from './styles'

const Header = (): JSX.Element => {

    return (
        <Container>
            <Link to="/" >
                <h1>Aqui é o topo do site</h1>
            </Link>

            <Link to="/cart" >
                <button>Ir para o carrinho</button>
            </Link>
        </Container>
    )
}

export default Header