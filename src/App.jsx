
import { useState } from 'react'
import './App.css'
import Carts from './Components/Carts'
import Products from './Components/Products'

function App() {


  const [carts, setCarts] = useState([]);

  

  const handleUpdateCart = (product)=>{
    const exist = carts.find(item => item.id === product.id)
    if(exist){
      const udpadedCart = carts.map(item => item.id? {
        ...item, 
        cart_quantity: item.cart_quantity + 1 ,
        price: (item.cart_quantity + 1) * item.price,
        stock: item.stock - 1,
       }
        : item );
      setCarts(udpadedCart)
    }
    else{
      product.cart_quantity = 1;
      product.stock = product.stock-1
      setCarts(cart=>[...cart, product])
    }
  }

  return (
    <div className='flex flex-col md:flex-row gap-5 my-8'>
      <div className='md:w-[70%]' >
        <Products handleUpdateCart={handleUpdateCart}  ></Products>
      </div>
      <div className='md:w-[30%]'>
        <Carts key={carts.id} carts={carts} ></Carts>
      </div>
    </div>
  )
}

export default App
