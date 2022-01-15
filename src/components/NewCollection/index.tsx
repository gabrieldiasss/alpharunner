
import NewCollectionImg from '../../assets/newcollection.png'

import {
    Container,
    Content
} from './styles'

const NewCollection = (): JSX.Element => {
    return (
        <Container>
            <Content>
                <div>
                    <h1>YEEZY BOOST SPLY - 350</h1>
                    <h2>Veja a nova coleção de sneakers</h2>
                    <button>Ver agora</button>
                </div>

                <img src={String(NewCollectionImg)} alt="" />
               
            </Content>
        </Container>
    )
}

export default NewCollection