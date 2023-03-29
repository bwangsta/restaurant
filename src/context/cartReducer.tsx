import { CartItem, CartAction } from "../types"

function cartReducer(cart: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case "add": {
      const item = cart.find((item) => item.id === action.id)
      if (item === undefined) {
        return [...cart, { id: action.id!, quantity: 1 }]
      }
      return cart.map((item) => {
        if (item.id === action.id) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item
      })
    }
    case "remove": {
      const item = cart.find((item) => item.id === action.id)
      if (item?.quantity === 1) {
        return cart.filter((item) => item.id !== action.id)
      }
      return cart.map((item) => {
        if (item.id === action.id) {
          return { ...item, quantity: item.quantity - 1 }
        }
        return item
      })
    }
    case "remove_all": {
      return cart.filter((item) => item.id !== action.id)
    }
    case "clear": {
      return []
    }
    default: {
      throw Error("Unknown action: " + action.type)
    }
  }
}

export default cartReducer
