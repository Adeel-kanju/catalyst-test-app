import React, { useContext } from "react"
import { Context } from "../Context"
import CartItem from "../components/Cartitem"


function Cart() {
    const { cartItems } = useContext(Context)
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))
    const totalCost = (5.99 * cartItems.length).toLocaleString("en-US", {style: "currency", currency: "USD"})
    
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total:{totalCost} </p>
            <div className="order-button">
                <button>Place Order</button>
            </div>
        </main>
    )
}

export default Cart