import { useEffect, useState } from 'react';
import Cart from './Cart';
import { MdPriceChange } from "react-icons/md";
import { MdDiscount } from "react-icons/md";
const Carts = ({ carts, handleremove, add, remove , buyNow}) => {

    const[total, settotal] = useState(0);
    useEffect(()=>{
        const totalPrice = carts.reduce((acc, current) =>{
            return acc +=  (current.cart_quantity * current.price)
        }, 0)
        settotal(totalPrice)
    },[carts])

    return (

        <div>
            <h1 className='text-xl font-bold' >Here is your added product</h1>
            {
                carts.map((cart, idx) => <Cart key={idx} handleremove={handleremove} cart={cart} add={add} remove={remove} buyNow={buyNow} ></Cart>)
            }
            <div className='p-3 space-y-3 my-3 '>
                <h1 className=" flex items-center gap-1 text-xl font-bold badge badge-neutral " >Total Items: <MdDiscount /> {carts.length} </h1>
                <h1 className=' flex badge badge-primary items-center gap-1 text-xl font-bold'>Total Price: <MdPriceChange /> {total} </h1>
            </div>
        </div>
    );
};

export default Carts;