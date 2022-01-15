
import { useCart } from "../../hook/useCart"
import { Product } from "../../types"
import { formatPrice } from "../../util/format"

import { Container } from './styles'

const Cart = (): JSX.Element => {

    const { cart, removeProduct, updatedProduct } = useCart()

    const cartFormatted = cart.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
        subtotal: formatPrice(product.price * product.amount)
    }))

    const total = formatPrice(
        cartFormatted.reduce((sumAmount, product) => {
            return sumAmount + product.price * product.amount
        }, 0)
    )

    function handleDecrement(product: Product) {
        updatedProduct({ amount: product.amount - 1, productId: product.id })
    }

    function handleIncrement(product: Product) {
        updatedProduct({ amount: product.amount + 1, productId: product.id })
    }

    function handleRemoveProduct(id: number) {
        removeProduct(id)
    }

    return (
        <Container>
            {cartFormatted.map(product => (
                <li key={product.id} >
                    <img src={product.image} alt={product.title} />
                    <h2>{product.title}</h2>
                    <h3>{product.priceFormatted}</h3>

                    <h1 onClick={() => handleDecrement(product)} >Decrementar</h1>
                    <h2>{product.amount}</h2>
                    <h1 onClick={() => handleIncrement(product)} >incrementar</h1>

                    <h1>{product.subtotal}</h1>

                    

                    <h2 style={{ "color": "red" }} onClick={() => handleRemoveProduct(product.id)} >Remover</h2>
                </li>
            ))}

            <h1 style={{ "color": "green" }} >{total}</h1>
        </Container>
    )
}

export default Cart