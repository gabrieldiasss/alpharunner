import { useEffect, useState } from "react"

import { api } from '../../services/api'
import { Container, Card } from './styles'
import { formatPrice } from '../../util/format'
import { useCart } from "../../hook/useCart"

import NewCollection from '../../components/NewCollection'

import { Arrow, CartIcon } from './styles'
import Header from "../../components/Header"


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

    const [readMore, setReadMore] = useState<Record<number, boolean>>({})

    const { addProduct, cart } = useCart()

    const cartItemsAmount = cart.reduce((sumAmount, product) => {

        sumAmount[product.id] = product.amount

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

    function handleReadMore(id: number) {

        setReadMore({ ...readMore, [id]: !readMore[id] })

        console.log({
            [id]: !readMore[id]
        })

    }

    return (

        <>

            <Header />

            <NewCollection />

            <Container>

                {products.map(product => (
                    <Card key={product.id}>
                        <img src={product.image} alt="" />
                        <h2>
                            {readMore[product.id] ? product.title : product.title.slice(0, 40)}

                            {!readMore[product.id] && product.title.length > 50 && (
                                <span onClick={() => handleReadMore(product.id)} >
                                    Ler mais
                                </span>
                            )}

                            {readMore[product.id] && product.title.length > 50 && (
                                <span onClick={() => handleReadMore(product.id)} >
                                    Ler menos
                                </span>
                            )}

                        </h2>
                        <h3>{product.priceFormatted}</h3>

                        <button type="button" onClick={() => handleAddProduct(product.id)} >
                            <span>
                                Adicionar ao carrinnho
                            </span>

                            <Arrow />
                        </button>

                        <span><CartIcon /> {cartItemsAmount[product.id] || 0}</span>
                    </Card>

                ))}

            </Container>
        </>

    )
}

export default Home