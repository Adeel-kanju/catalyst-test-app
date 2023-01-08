import React, {useState, useContext } from "react"
import { Context } from "../Context"
import CartItem from "../components/Cartitem"


function Cart() {
    const { cartItems, clearCart } = useContext(Context)
    const [buttonText, setButtonText] = useState("Place Order")
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))
    const totalCost = (5.99 * cartItems.length).toLocaleString("en-US", {style: "currency", currency: "USD"})
    const placeOrder=()=>{
        setButtonText("Ordering...")
        setTimeout(() => {
            console.log("Order placed!")
            setButtonText("Place Order")
            clearCart()
        }, 3000)
    }
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total:{totalCost} </p>
            {
                cartItems.length > 0 ?
                <div className="order-button">
                    <button onClick={placeOrder}>{buttonText}</button>
                </div> :
                <p>Right Now you have not any items in cart.</p>
            }
        </main>
    )
}

export default Cart