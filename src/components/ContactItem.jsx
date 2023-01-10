function ContactItem(props) {
    return (
        <article className="contact-card">
            <img src={props.img} alt="Chef Mao" className="contact-card-img"></img>
            <div className="contact-card-description">
                <p className="contact-card-name">{props.name}</p>
                <p className="contact-card-number">{props.phoneNumber}</p>
                <p className="contact-card-email">{props.email}</p>
            </div>
        </article>
    )
}

export default ContactItem