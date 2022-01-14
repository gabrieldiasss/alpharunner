import { useEffect, useState } from "react"

import { api } from '../../services/api'
import { Container } from './styles'
import { formatPrice } from '../../util/format'

interface Products {
    id: number;
    title: string;
    price: number;
    image: string; 
}

interface ProductFormatted extends Products {
    priceFormatted: string;
}

const Home = (): JSX.Element => {

    const [products, setProducts] = useState<ProductFormatted[]>([])

    useEffect(() => {

        async function LoadProducts() {
            const response = await api.get<Products[]>('products')

            const data: ProductFormatted[] = response.data.map(product => ({
                ...product,
                priceFormatted: formatPrice(product.price)
            }))

            setProducts(data)
        }

        LoadProducts()

    }, [])

    function handleAddProduct(id: number) {
        
    }

    return (
        <Container>
            {products.map(product => (
                <li key={product.id}>
                    <img src={product.image} alt="" />
                    <h2>{product.title}</h2>
                    <h3>{product.priceFormatted}</h3>

                    <button onClick={() => handleAddProduct(product.id)} >
                        Adicionar ao carrinnho
                    </button>
                </li>
            ))}

        </Container>
    )
}

export default Home