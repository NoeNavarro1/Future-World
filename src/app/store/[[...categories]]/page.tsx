
import { ProductsWrapper } from "@/components/Store/productsWrapper"
import { getCollections, getCollectionsProducts } from "@/services/collections"
import { getProducts } from "@/services/shopify/products"

interface CategoriesProps {
    params: {
        categories: string[]
        searchParams: string
    }
}

export default async function Categories(props: CategoriesProps){
    const { categories } = props.params
    let products = []
    const collections = await getCollections()
    if(categories?.length > 0) {
        const selectedCollectionId = collections.find((collection) => collection.handle === categories[0]).id
        products = await getCollectionsProducts(selectedCollectionId)
    }else{
        products = await getProducts()
    }
    console.log(products)
    return(
        <ProductsWrapper products={products}/>
    );
}