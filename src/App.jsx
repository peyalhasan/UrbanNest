
import { useState } from 'react'
import './App.css'
import Carts from './Components/Carts'
import Products from './Components/Products'

function App() {


  const [carts, setCarts] = useState([]);

  const handleUpdateCart = (product) => {

    const exist = carts.some(item => item.id === product.id);
    if (exist) {

      const updatedCart = carts.map(element => element.id ? {
        ...element,
        cart_quantity: element.cart_quantity + 1,
        price: (element.cart_quantity + 1) * element.price,
        stock: element.stock - 1,

      } : element)
      setCarts(updatedCart)
    }
    else if (product.stock <= 0) {
      alert("out of stock!");
      return;
    }
    else {
      product.cart_quantity = 1;
      product.stock = product.stock - 1;
      setCarts(cart => [...cart, product])
    }
    console.log(product.cart_quantity)
    if (exist.cart_quantity >= product.stock) {
      alert("No more stock available");

      return
    }
    // const exist = carts.some(item => item.id === product.id)
    // if (exist) {
    //   const udpadedCart = carts.map(item => item.id ? {
    //     ...item,
    //     cart_quantity: item.cart_quantity + 1,
    //     price: (item.cart_quantity + 1) * item.price,
    //     stock: item.stock - 1,
    //   }
    //     : item);
    //   setCarts(udpadedCart)
    // }
    // else {
    //   product.cart_quantity = 1;
    //   product.stock = product.stock - 1
    //   setCarts(cart => [...cart, product])
    // }
  }

  const handleremove = (id) => {
    const remove = carts.filter(item => item.id !== id);
    setCarts(remove)
  }

  const add = (product) => {
    return produ
  }

  return (
    <div className='flex flex-col md:flex-row gap-5 my-8'>
      <div className='md:w-[70%]' >
        <Products handleUpdateCart={handleUpdateCart}  ></Products>
      </div>
      <div className='md:w-[30%]'>
        <Carts key={carts.id} carts={carts} handleremove={handleremove} ></Carts>
      </div>
    </div>
  )
}

export default App
