import React, { createContext, useReducer, useState } from "react"
import data from "./data"
import { Item } from "./types"
import cartReducer from "./cartReducer"

const CartContext = createContext<Item[]>([])
const CartDispatchContext = createContext<React.Dispatch<{
  type: string
  id: number
}> | null>(null)

function CartProvider(props: { children: React.ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, data)

  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        {props.children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  )
}

export { CartContext, CartDispatchContext, CartProvider }
