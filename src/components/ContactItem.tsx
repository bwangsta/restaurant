function ContactItem(props: {
  img: string
  name: string
  phoneNumber: string
  email: string
}) {
  return (
    <article className="my-8">
      <img
        src={props.img}
        alt="Chef Mao"
        className="aspect-square rounded-2xl object-cover"
      ></img>
      <div>
        <p className="text-2xl">{props.name}</p>
        <p className="text-lg">{props.phoneNumber}</p>
        <p className="text-lg">{props.email}</p>
      </div>
    </article>
  )
}

export default ContactItem
