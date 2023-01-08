import React, {useState, useContext} from "react"
import PropTypes from "prop-types"
import {Context} from "../Context"

function Image({img, className}) {
    const [hovered, setHovered] = useState(false)
    //console.log(hovered)
    const {toggleFavorite, addToCart, cartItems, removeFromCart} = useContext(Context)
    
    const favoritetIcon=()=> {
        if(img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if(hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }
    const addCartIcon=()=> {
        const alreadyInCart = cartItems.some(item => item.id === img.id)
        if(alreadyInCart) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}></i>
        } else if(hovered) {
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
        }
    }
    return (
        <div 
            className={`${className} image-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={img.url} className="image-grid" />
            {favoritetIcon()}
            {addCartIcon()}
        </div>
    )
}
Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image