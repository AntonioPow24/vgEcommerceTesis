// Encontrar top 2 Productos para MARKETINGCARDS
const findTopTwoProducts = (data) => {
    if(data.length <= 2) return data

    // Ordenar el array por valorate, en caso de empate, por precio
    data.sort((a,b) => {
        if(a.valorate === b.valorate){
            return b.price - a.price
        }

        return b.valorate - a.valorate
    })

    return data.slice(0,2)
}

export default findTopTwoProducts
