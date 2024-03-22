import { ProductsWrapper } from "@/components/Store/productsWrapper"
import { getProducts } from "@/services/shopify/products"

interface CategoriesProps {
    params: {
        categories: string[]
        searchParams: string
    }
}

export default async function Categories(props: CategoriesProps){
    const products = await getProducts()

    const { categories } = props.params
    // throw new Error('Error:Boom!')
    return(
        <ProductsWrapper products={products}/>
    );
}