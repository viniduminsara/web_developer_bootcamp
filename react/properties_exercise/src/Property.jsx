function Property({id, name, rating, price}){
    return (
        <div className="Property">
            <h2>{name}</h2>
            <h3>$ {price}</h3>
            <h3>⭐ {rating}</h3>
        </div>
    )
}

export default Property