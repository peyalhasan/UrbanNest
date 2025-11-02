import React from 'react';
import { FaCartArrowDown } from "react-icons/fa";
import { MdPriceChange } from "react-icons/md";
import { FaUncharted } from "react-icons/fa";
import { FcRating } from "react-icons/fc";
import { RiShoppingBag2Fill } from "react-icons/ri";


const Product = ({ product, handleUpdateCart , buyNow }) => {
    const { name, category, price, rating, stock, image, description } = product
    return (
        <div>
            <div className="card bg-base-100  w-full  shadow-sm">
                <figure>
                    <img className='w-full h-52 object-cover'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">{category}</div>
                    </h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-primary"> <MdPriceChange />{price} </div>
                        <div className="badge badge-secondary"> <FaUncharted />{stock} </div>
                        <div className="badge badge-neutral"> <FcRating />{rating} </div>
                    </div>
                    <div className='flex gap-2'>
                        <button onClick={() => handleUpdateCart(product)} className='btn btn-warning'>Add To Cart <FaCartArrowDown /></button>
                        <button onClick={() => buyNow(product)} className='btn btn-success'> <RiShoppingBag2Fill /> Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;