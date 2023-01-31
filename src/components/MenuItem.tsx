function MenuItem(props: { img: string, name: string, price: number }) {
  return (
    <article className="menu-card">
      <img src={props.img} alt="Grilled Tiger Fish" className="menu-card-img"></img>
      <p className="menu-card-title">{props.name}</p>
      <p className="menu-card-price">{props.price} Mora</p>
    </article>
  )
}

export default MenuItem