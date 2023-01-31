function MenuItem(props: { img: string, name: string, price: number }) {
  return (
    <article className="menu-card">
      <img src={props.img} alt="Grilled Tiger Fish" className="menu-card-img"></img>
      <div className="menu-card-description">
        <p className="menu-card-title">{props.name}</p>
        <p className="menu-card-price">{props.price} Mora</p>
      </div>
    </article>
  )
}

export default MenuItem