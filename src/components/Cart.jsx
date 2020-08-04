import React from 'react'
import { MyContext } from '../Context'

const Cart = () => {
  return (
    <div>
      <h1>Cart:</h1>
      <MyContext.Consumer>
        {({ state: { cart } }) => (
          <ul>
            {cart.map((el, i) => (
              <li key={i}>
                {el.name} - ${el.price}
              </li>
            ))}
            <b>Total:</b>$ {cart.reduce((acc, current, i) => acc + current.price, 0)}
          </ul>
        )}
      </MyContext.Consumer>
    </div>
  )
}

export default Cart
