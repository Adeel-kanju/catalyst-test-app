import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    useEffect(() => {
        // fetch data and save data 
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])
    const toggleFavorite=(id)=> {
        const updatedArr = allPhotos.map(photo => {
            if(photo.id === id) {
                console.log(id)
                console.log(!photo.isFavorite)
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        
        setAllPhotos(updatedArr)
    }
    let addToCart=(newItem)=> {
        setCartItems(prevItems => [...prevItems, newItem])
    }
    let removeFromCart=(id)=> {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }
    const clearCart=()=>{
        setCartItems([])
    }
    console.log(cartItems)
    return (
        <Context.Provider value={{allPhotos, toggleFavorite, addToCart, cartItems, removeFromCart, clearCart}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}