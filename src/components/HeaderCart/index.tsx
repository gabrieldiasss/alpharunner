import { Link } from 'react-router-dom'
import { useCart } from '../../hook/useCart'

import { Container, Content, NavMenu, Arrow, CartIcon } from './styles'

const HeaderCart = (): JSX.Element => {

    const { cart } = useCart()

    const cartProducts = cart.length

    return (
        <Container>
            <Content>

                <Link to="/" >
                    <h2> <Arrow /> Voltar para a página principal</h2>
                </Link>

                <NavMenu>
                    <Link to="/cart">
                        <div>
                            <h3>
                                Meu carrinho
                            </h3>

                            <span>{cartProducts} {cartProducts === 1 ? 'Item' : 'Itens'}</span>
                        </div>

                    </Link>
                    <CartIcon />
                </NavMenu>
            </Content>
        </Container >
    )
}

export default HeaderCart