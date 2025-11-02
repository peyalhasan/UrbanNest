import { FaCartArrowDown } from "react-icons/fa";
import { MdPriceChange } from "react-icons/md";
import { FaUncharted } from "react-icons/fa";
import { FcRating } from "react-icons/fc";
import { MdOutlinePlaylistRemove } from "react-icons/md";
import { MdAddBox } from "react-icons/md";
import { IoIosRemoveCircle } from "react-icons/io";
import { RiShoppingBag2Fill } from "react-icons/ri";

export default function Cart({ cart, handleremove, add, remove , buyNow }) {
    const { image, category, price, stock, rating, name, cart_quantity, id
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
                    <div className="flex gap-2">
                        <div className="badge badge-accent">                <FaCartArrowDown /> {cart_quantity}

                        </div>
                        <div className="flex text-xl gap-2">
                            <button onClick={() => remove(cart)}>
                                <IoIosRemoveCircle />
                            </button>
                            <button onClick={() => add(cart)}>
                                <MdAddBox />
                            </button>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="badge badge-primary flex items-center"> <MdPriceChange />{price * cart_quantity} </div>
                        <div className="badge badge-secondary"> <FaUncharted /> {stock} </div>
                        <div className="badge badge-neutral"> <FcRating /> {rating} </div>
                    </div>
                    <div className="flex gap-5 mt-4">
                        <button className="btn btn-error" onClick={() => handleremove(id)} > Remove <span className="text-2xl font-bold "> <MdOutlinePlaylistRemove /></span></button>
                        <button  onClick={() => buyNow(cart)}  className='btn btn-success'> <RiShoppingBag2Fill /> Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
