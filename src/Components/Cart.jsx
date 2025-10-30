
export default function Cart({cart}) {
    const {image, category, price, stock, rating, name, cart_quantity
    } = cart;
  return (
    <div>
        <div className="card bg-base-100  w-full  shadow-sm">
            <figure>
                    <img className='w-full h-52 object-cover'
                        src={image}
                        alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
            <div className="badge badge-secondary">{category}</div>
                    <div className="badge badge-accent">  {cart_quantity} </div>
                <div className="card-actions justify-end">
                    <div className="badge badge-primary"> ${price} </div>
                    <div className="badge badge-secondary"> {stock} </div>
                    <div className="badge badge-neutral"> {rating} </div>
                </div>
            </div>
        </div>
    </div>
  )
}
