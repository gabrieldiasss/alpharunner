import { useEffect } from "react"

const Home = (): JSX.Element => {

    useEffect(() => {

        async function LoadProducts() {
            
        }

        LoadProducts()

    }, [])

    return (
        <div>
            <h1>Aqui ficara os produtos</h1>
        </div>
    )
}

export default Home