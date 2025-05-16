import { collection, getDocs } from "firebase/firestore"
import database from "../config/firebase"


export const getProducts = async () =>{
    try {
        const products_collection = collection(database, 'products')

        const result = await getDocs(products_collection)

        const product_list_formatted = result.docs.map(
            (document) => {
                return {
                    id: document.id,
                    ...document.data()
                }
            }
        )
        return product_list_formatted
    } catch (error) {
        console.log('Error al obtener productos', error)
        return null
        
    }
}

export const getProductById = async ({product_id}) =>{
    const products = await getProducts()
    return products.find(product => product.id == product_id)
}