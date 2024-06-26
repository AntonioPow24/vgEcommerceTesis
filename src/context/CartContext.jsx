import { createContext, useContext, useEffect, useState } from "react";



// ARREGLO DEL CARRITO( SOLO ES REFERENCIA)
// const defaultCart = [
//     {
//       id: 1,
//       img: "/public/images/banca/plin.png",
//       title: "Silicona Dowsil 300gr SuperPegamento 4rt5skr",
//       price: 13,
//       quantity: 1,
//       discount: 18,
//       valorate:2
//     },
//     {
//       id: 2,
//       img: "./images/siliconas/Silicona Dowsil.png",
//       title: "Silicona Dowsil 300gr SuperPegamento 4rt5skr",
//       price: 13,
//       quantity: 1,
//       discount: 28,
//       valorate:8
//     },
//     {
//       id: 3,
//       img: "./images/siliconas/Silicona Dowsil.png",
//       title: "Silicona Dowsil 300gr SuperPegamento 4rt5skr",
//       price: 13,
//       quantity: 1,
//       discount: 18,
//       valorate:5
//     },
//     {
//       id: 4,
//       img: "./images/siliconas/Silicona Dowsil.png",
//       title: "Silicona Dowsil 300gr SuperPegamento 4rt5skr",
//       price: 13,
//       quantity: 1,
//       discount: 18,
//       valorate:7
//     },
//     {
//       id: 5,
//       img: "./images/siliconas/Silicona Dowsil.png",
//       title: "Silicona Dowsil 300gr SuperPegamento 4rt5skr",
//       price: 13,
//       quantity: 1,
//       discount: 18,
//       valorate:4
//     },
//     {
//       id: 6,
//       img: "./images/siliconas/Silicona Dowsil.png",
//       title: "Silicona Dowsil 300gr SuperPegamento 4rt5skr",
//       price: 13,
//       quantity: 1,
//       discount: 18,
//       valorate:7
//     },
//     {
//       id: 7,
//       img: "./images/siliconas/Silicona Dowsil.png",
//       title: "Silicona Dowsil 300gr SuperPegamento 4rt5skr",
//       price: 13,
//       quantity: 1,
//       discount: 18,
//       valorate:7
//     },
//     {
//       id: 8,
//       img: "./images/siliconas/Silicona Dowsil.png",
//       title: "Silicona Dowsil 300gr SuperPegamento 4rt5skr",
//       price: 13,
//       quantity: 1,
//       discount: 18,
//       valorate:3
//     }
//   ]
const defaultCart = []


const CartContext = createContext()


const CartContextProvider = ({children}) =>{

    //Estado para manejar la cantidad de Productos en el Preview Carrito
    const [cart, setCart] = useState([])

    // Estado para el Modal del cart
    const [isCartModal , setIsCartModal] = useState(false)


    // Función para incrementar la cantidad de un producto
    const increaseProductCount = (productId) => {
        setCart(prevCart => {
          const updatedCart = prevCart.map(item => {
            if (item.id === productId) {
              return {
                ...item,
                quantity: item.quantity + 1
              };
            }
            return item;
          });
          localStorage.setItem('previewCart', JSON.stringify(updatedCart));
          return updatedCart;
        });
    };


    // Función para disminuir la cantidad de un producto
    const decreaseProductCount = (productId) => {
        setCart(prevCart => {
        const updatedCart = prevCart.map(item => {
            if (item.id === productId && item.quantity > 1) {
            return {
                ...item,
                quantity: item.quantity - 1
            };
            }
            return item;
        });
        localStorage.setItem('previewCart', JSON.stringify(updatedCart));
        return updatedCart;
        });
    };


    //Funcion para Eliminar un producto del Preview Carrito
    const deleteProduct = (productId) => setCart( prevCart => {
        try {            
            const updatedCart = prevCart.filter( item => item.id !== productId)
            localStorage.setItem('previewCart',JSON.stringify(updatedCart))
    
            return updatedCart
        } catch (error) {
            console.log(error);
        }
    })

    // Funcion para agregar un producto al Preview Carrito
    const addProductToCart = ( product ) => {
      setCart( prevCart => {

        const existingProduct = prevCart.find( item => item.id === product.id )
        
        if( existingProduct ){
          const updatedCart = prevCart.map( item => 
            item.id === product.id 
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
          
          localStorage.setItem( 'previewCart', JSON.stringify( updatedCart ) )
          return updatedCart

        } else {
          const updatedCart = [ ...prevCart, { ...product, quantity: 1 } ]

          localStorage.setItem( 'previewCart', JSON.stringify( updatedCart ) )
          return updatedCart
        }

      })

    }




    // Funcions Cart modal
    const openCart = () => {
      setIsCartModal( true )
    }

    const closeCart = () => {
      setIsCartModal( false )
    }

    const toggleCart = () => {
      setIsCartModal( prev => !prev )
    }



    useEffect(() => {
        // Verificar si el código está ejecutándose en el lado del cliente
        if (typeof window !== 'undefined') {
          const data = localStorage.getItem('previewCart');
          if (data) {
            setCart(JSON.parse(data));
          }else {
            // Si no hay datos en el localStorage, inicializamos con el estado por defecto
            setCart(defaultCart)
            localStorage.setItem("previewCart", JSON.stringify(defaultCart)); // Se actualiza el localStorage aquí
          }
        }
      }, []);

    return (

        <CartContext.Provider value={{ cart , setCart ,increaseProductCount , decreaseProductCount,deleteProduct,addProductToCart, isCartModal, toggleCart, openCart, closeCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider


export const useCartContext = () => useContext(CartContext)