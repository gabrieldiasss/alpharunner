
import HeaderCart from "../../components/HeaderCart"
import { useCart } from "../../hook/useCart"
import { Product } from "../../types"
import { formatPrice } from "../../util/format"

import { CartPage, Container, ProductTable, DecrementIcon, DeleteIcon, DeleteBackIcon, Total } from './styles'

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
        <CartPage>

            <HeaderCart />

            <Container>

                <ProductTable>

                    <thead>
                        <tr>
                            <th />
                            <th>PRODUTO</th>
                            <th>QTD</th>
                            <th>SUBTOTAL</th>
                            <th />
                        </tr>
                    </thead>

                    <tbody>
                        {cartFormatted.map(product => (
                            <tr key={product.id} >
                                <td><img src={product.image} alt={product.title} /></td>
                                <td>
                                    <strong>{product.title}</strong>
                                    <span>{product.priceFormatted}</span>


                                </td>

                                <td>
                                    <div>
                                        <button type="button" disabled={product.amount <= 1} onClick={() => handleDecrement(product)} ><DeleteBackIcon /> </button>

                                        <input
                                            value={product.amount}
                                        />

                                        <button type="button" onClick={() => handleIncrement(product)} ><DecrementIcon /></button>

                                    </div>
                                </td>


                                <td>
                                    <strong>{product.subtotal}</strong>
                                </td>

                                <td>
                                    <button type="button" onClick={() => handleRemoveProduct(product.id)}> <DeleteIcon /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </ProductTable>

                <footer>
                    <button type="submit" >Finalizar pedido</button>

                    <Total>
                        <span>TOTAL</span>
                        <strong>{total}</strong>
                    </Total>
                </footer>

            </Container>
        </CartPage>

    )
}

export default Cart