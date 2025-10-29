
import { useState } from 'react'
import './App.css'
import Cart from './Components/Carts'
import Products from './Components/Products'

function App() {

  const [carts, setCarts] = useState([]);
  const handleUpdateCart = (product)=>{
    console.log(product)
    product['cart-quantity'] = Number(product['cart-quantity']) + 1;
    setCarts(cart=>[...cart, product])
  }

  return (
    <div className='flex flex-col md:flex-row gap-5 my-8'>
      <div className='md:w-[70%]' >
        <Products handleUpdateCart={handleUpdateCart}  ></Products>
      </div>
      <div className='md:w-[30%]'>
        <Cart carts={carts} ></Cart>
      </div>
    </div>
  )
}

export default App
