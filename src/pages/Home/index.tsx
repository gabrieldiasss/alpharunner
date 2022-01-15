import { useEffect, useState } from "react"

import { api } from '../../services/api'
import { Container } from './styles'
import { formatPrice } from '../../util/format'
import { useCart } from "../../hook/useCart"

interface Products {
    id: number;
    title: string;
    price: number;
    image: string; 
}

interface ProductFormatted extends Products {
    priceFormatted: string;
}

interface CartItemsAmount {
    [key: number]: number;
}

const Home = (): JSX.Element => {

    const [products, setProducts] = useState<ProductFormatted[]>([])

    const { addProduct, cart } = useCart()

    const cartItemsAmount = cart.reduce((sumAmount, product) => {

        sumAmount[product.id] = product.amount

        console.log(sumAmount)
        return sumAmount

    }, {} as CartItemsAmount)

    useEffect(() => {

        async function loadProducts() {
            const response = await api.get<Products[]>('products')

            const data: ProductFormatted[] = response.data.map(product => ({
                ...product,
                priceFormatted: formatPrice(product.price)
            }))

            setProducts(data)
        }

        loadProducts()


    }, [])

    function handleAddProduct(productId: number) {
        addProduct(productId)
	}

    return (
        <Container>

            
            
            {products.map(product => (
                <li key={product.id}>
                    <img src={product.image} alt="" />
                    <h2>{product.title}</h2>
                    <h3>{product.priceFormatted}</h3>

                    <button onClick={() => handleAddProduct(product.id)} >
                        {cartItemsAmount[product.id] || 0} Adicionar ao carrinnho
                    </button>

                </li>

            ))}


        </Container>
    )
}

export default Home