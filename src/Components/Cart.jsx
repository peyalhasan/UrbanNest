import { FaCartArrowDown } from "react-icons/fa";
import { MdPriceChange } from "react-icons/md";
import { FaUncharted } from "react-icons/fa";
import { FcRating } from "react-icons/fc";

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
                    <div className="badge badge-accent"> <FaCartArrowDown /> {cart_quantity} </div>
                <div className="card-actions justify-end">
                    <div className="badge badge-primary flex items-center"> <MdPriceChange />{price} </div>
                    <div className="badge badge-secondary"> <FaUncharted /> {stock} </div>
                    <div className="badge badge-neutral"> <FcRating /> {rating} </div>
                </div>
            </div>
        </div>
    </div>
  )
}
