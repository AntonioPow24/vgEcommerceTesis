

// Funcion Descuento
export const discountPrice = (item) => item.price - (item.price * (item.discount/100))

//Funcion calcular subTotal del Item

// ESTA FUNCION ES PARA CUANDO UN PRODUCTO CONTIENE LA PROPIEDAD QUANTITY
export const itemSubTotal = (item) => discountPrice(item) * item.quantity
  
// ORIGINALMENTE NO SE TIENE ESTA PROPIEDAD QUANTITY
export const calculatePrice = (item) => discountPrice(item)
  
// Funcion para detectar el Precio Base por la cantidad de Productos solicitados
export const priceBefore = (price, quantity=1) => price * quantity