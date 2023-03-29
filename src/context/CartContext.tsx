import React, { createContext, useReducer, useContext } from "react"
import { CartItem, CartAction } from "../types"
import cartReducer from "./cartReducer"

type CartProviderProps = {
  children: React.ReactNode
}

const CartContext = createContext([] as CartItem[])
const CartDispatchContext = createContext({} as React.Dispatch<CartAction>)

function useCart() {
  return useContext(CartContext)
}

function useCartDispatch() {
  return useContext(CartDispatchContext)
}

function CartProvider({ children }: CartProviderProps) {
  const [cart, dispatch] = useReducer(cartReducer, [])

  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  )
}

export { useCart, useCartDispatch, CartProvider }
