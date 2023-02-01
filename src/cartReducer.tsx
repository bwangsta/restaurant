import { CartAction, Item } from "./types"

function cartReducer(cart: Item[], action: CartAction) {
  switch (action.type) {
    case "add": {
      return cart.map(item => {
        if (item.id === action.id) {
          return { ...item, amount: item.amount + 1 }
        }
        return item
      })
    }
    case "remove": {
      return cart.map(item => {
        if (item.id === action.id) {
          return { ...item, amount: item.amount - 1 }
        }
        return item
      })
    }
    case "remove_all": {
      return cart.map(item => {
        if (item.id === action.id) {
          return { ...item, amount: 0 }
        }
        return item
      })
    }
    case "clear": {
      return cart.map(item => {
        return { ...item, amount: 0 }
      })
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export default cartReducer