

// Funcion Descuento
export const discountPrice = (item) => item.price - (item.price * (item.discount/100))

//Funcion calcular subTotal del Item
export const itemSubTotal = (item) => discountPrice(item) * item.quantity
  


// Funcion para detectar el Precio Base por la cantidad de Productos solicitados
export const priceBefore = (price, quantity=1) => price * quantity