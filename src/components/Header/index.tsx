import { Link } from 'react-router-dom'
import { useCart } from '../../hook/useCart'

import { Container, Content, Logo, NavMenu } from './styles'

const Header = (): JSX.Element => {

    const { cart } = useCart()

    const cartProducts = cart.length

    return (
        <Container>
            <Content>

                <Link to="/" >
                    <Logo>ALPHARUNNER</Logo>
                </Link>


                <NavMenu>
                    <ul>
                        <li>Nova coleção</li>
                        <li>Destaques</li>

                        <Link to="/cart">
                            <button>
                                <div>
                                    Meu carrinho
                                </div>
                                

                                <span>{cartProducts} {cartProducts === 1 ? 'Item' : 'Itens'}</span>
                            </button>
                        </Link>
                    </ul>
                </NavMenu>
            </Content>
        </Container >
    )
}

export default Header