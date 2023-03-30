import Cart from "../components/Cart"

function Checkout() {
  return (
    <section className="mx-auto max-w-4xl">
      <h1 className="text-2xl">Checkout Page</h1>
      <Cart />
      <button className="btn-sm btn">Place Order</button>
    </section>
  )
}

export default Checkout
