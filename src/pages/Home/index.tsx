import { useEffect, useState } from "react"

import { api } from '../../services/api'
import { Container } from './styles'

interface Products {
    id: number;
    title: string;
    price: number;
    image: string; 
}

const Home = (): JSX.Element => {

    const [products, setProducts] = useState<Products[]>([])
    const [counter, setCounter] = useState(0)

    useEffect(() => {

        async function LoadProducts() {
            const response = await api.get('products')

            setProducts(response.data)
        }

        LoadProducts()

    }, [])

    /* function handleAddProduct(id: number) {
        
    } */

    return (
        <Container>
            {products.map(product => (
                <li key={product.id}>
                    <img src={product.image} alt="" />
                    <h2>{product.title}</h2>
                    <h3>{product.price}</h3>

                    <button onClick={() => handleAddProduct(product.id)} >
                        {counter} Adicionar ao carrinnho
                    </button>
                </li>
            ))}

        </Container>
    )
}

export default Home