import wanminImg from "../assets/img/wanmin-restaurant.webp"

function Home() {
  return (
    <section className="mx-auto max-w-4xl">
      <h1 className="text-2xl">Wanmin Restaurant</h1>
      <img src={wanminImg} alt="Wanmin Restaurant"></img>
    </section>
  )
}

export default Home
