
import { useState } from 'react'
import './App.css'
import Carts from './Components/Carts'
import Products from './Components/Products'
import Swal from 'sweetalert2'

function App() {


  const [carts, setCarts] = useState([]);

  const handleUpdateCart = (product) => {

    setCarts((prev) => {
      const exists = prev.find(item => item.id === product.id);
      if(exists) {
        // If Stock is 0, prevent adding 
        if(exists.stock <= 0){
          Swal.fire({icon:'error',title: 'Out or Stock!'})
          return prev;
        }
        return prev.map(item => item.id === product.id ?{
          ...item ,
          cart_quantity: item.cart_quantity + 1, 
          stock: item.stock - 1,
        }: item)
      }
      else{
        // Product not in cart yet
          if (product.stock <= 0) {
          Swal.fire({ icon: 'error', title: 'Out of Stock!' })
          return prev
        }
        // Show SweetAlert notification 
          Swal.fire({
          title: `You have added ${product.name}`,
          icon: 'success',
          draggable: true,
          timer: 800,
          showConfirmButton: false,
        })
        // Add product to cart with quantity 1 and reduce stock
       return [...prev, { ...product, cart_quantity: 1, stock: product.stock - 1, unitPrice: product.price, price: product.price }]

        
      }
    })
  }

  const handleremove = (id) => {
    const remove = carts.filter(item => item.id !== id);
    setCarts(remove)
  }

  const add = () => {
    const updatedCart = carts.map(element => element.id ? {
      ...element,
      cart_quantity: element.cart_quantity + 1,
      price: (element.cart_quantity + 1) * element.price,
      stock: element.stock - 1,

    } : element)
    setCarts(updatedCart)
  }

  const remove = () => {
    const updatedCart = carts.map(element => element.id ? {
      ...element,
      cart_quantity: element.cart_quantity - 1,
      price: (element.cart_quantity - 1) * element.price,
      stock: element.stock + 1,

    } : element)
    setCarts(updatedCart)
  }

  return (
    <div className='flex flex-col md:flex-row gap-5 my-8'>
      <div className='md:w-[70%]' >
        <Products handleUpdateCart={handleUpdateCart}  ></Products>
      </div>
      <div className='md:w-[30%]'>
        <Carts add={add} remove={remove}  carts={carts} handleremove={handleremove} ></Carts>
      </div>
    </div>
  )
}

export default App

