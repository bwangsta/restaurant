export type Item = {
  id: number,
  name: string,
  img: string,
  price: number,
  amount: number
}

export type CartAction = {
  type: string,
  id: number
}