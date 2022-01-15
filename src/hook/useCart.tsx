import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { Product, Stock } from "../types";

interface Children {
    children: ReactNode;
}

interface CartProviderData {
    cart: Product[];
    addProduct: (productId: number) => Promise<void>;
    removeProduct: (productId: number) => void;
}

export const CartContext = createContext<CartProviderData>({} as CartProviderData)

export function CartProvider ({ children }: Children) {

    const [cart, setCart] = useState<Product[]>(() => {

        const storagedCart = localStorage.getItem('@RocketShoes:cart');

        if(storagedCart) {
            return JSON.parse(storagedCart)
        }

        return []

})

const addProduct = async (productId: number) => {

    try {

        const updatedCart = [...cart]

        const productExists = updatedCart.find(product => product.id === productId )

        const stock = await api.get<Stock>(`/stock/${productId}`)

        const stockAmount = stock.data.amount

        const currentAmount = productExists ? productExists.amount : 0;

        const amount = currentAmount + 1

        if(amount > stockAmount) {
            toast.error('Quantidade solicitada fora de estoque');
            return
        }

        if (productExists) {
            // Aumentar a quantidade
            productExists.amount = amount
        } else {
            // Add ao carrinho
            const product = await api.get(`/products/${productId}`)

            const newProduct = {
                ...product.data,
                amount: 1
            }

            updatedCart.push(newProduct)
        }
        
        setCart(updatedCart)
        localStorage.setItem('@RocketShoes:cart', JSON.stringify(updatedCart))

    } catch {
        toast.error('Erro na adição do produto');
    }

}

const removeProduct = () => {

    try {

    } catch {
        
    }

}


    return (
        <CartContext.Provider value={{ cart, addProduct, removeProduct }} >
            {children}
        </CartContext.Provider>
    )
}

export function useCart(): CartProviderData {

    const context = useContext(CartContext)

    return context;

} 