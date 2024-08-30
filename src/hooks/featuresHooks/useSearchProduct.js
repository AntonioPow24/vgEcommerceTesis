import { useEffect, useState } from "react"
import { useProductsContext } from "../../context/ProductContext"

const useSearchProduct = (categoryFilter,statusFilter) => {

    const { products } = useProductsContext()
    const [query, setQuery] = useState('')
    const [filteredProducts, setFilteredProducts] = useState( products )


    useEffect(() => {    

        const filterProducts = () => {

          return products.filter(product => {

            // busca producto con el query incluido
            const matchesQuery = product.titleName.toLowerCase().includes(query.toLowerCase());
            
            // devuelve todos los productos o los productos que tengan la categoria
            const matchesCategory = categoryFilter === 'todos' || product.category === categoryFilter;
            
            // devuelve Todos los productos o los productos con el estado a buscar
            const matchesStatus = statusFilter === 'todos' || product.status === statusFilter;
    
            return matchesQuery && matchesCategory && matchesStatus;

          });
        };
    
        setFilteredProducts(filterProducts());
      }, [query, categoryFilter, statusFilter, products]);


    const handleSearch = ( e ) => {
        const newQuery = e.target.value
        
        setQuery( newQuery )

    }



    return { query, handleSearch, filteredProducts }
}

export default useSearchProduct


