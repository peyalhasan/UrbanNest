import React from 'react';

const Product = ({ product }) => {
    const { name, category, price, rating, stock, image, description } = product
    return (
        <div>
            <div class="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img className='w-96 h-52 object-cover'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">
                        {name}
                        <div class="badge badge-secondary">{category}</div>
                    </h2>
                    <p>{description}</p>
                    <div class="card-actions justify-end">
                        <div class="badge badge-primary"> {price} </div>
                        <div class="badge badge-secondary"> {stock} </div>
                        <div class="badge badge-neutral"> {rating} </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;