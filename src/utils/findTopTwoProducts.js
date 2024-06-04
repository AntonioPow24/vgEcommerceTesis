// Encontrar top 2 Productos para MARKETINGCARDS
const findTopTwoProducts = (data) => {
    if(data.length <= 2) return data

    // Ordenar el array por reviews, en caso de empate, por precio
    data.sort((a,b) => {
        if(a.reviews === b.reviews){
            return b.price - a.price
        }

        return b.reviews - a.reviews
    })

    return data.slice(0,2)
}

export default findTopTwoProducts
