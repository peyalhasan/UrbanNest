
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

  const add = (cart) => {
    const updatedCart = carts.map(element => element.id ? {
      ...element,
      cart_quantity: element.cart_quantity + 1,
      stock: element.stock - 1,

    } : element)
    const targetItem = updatedCart.find(item=> item.id === cart.id);
    if(targetItem.stock <= 0){
        Swal.fire({ icon: 'error', title: 'Out of Stock!' })
        return
    }

    setCarts(updatedCart)
  }

  const remove = (cart) => {

    const updatedCart = carts.map(element => element.id ? {
      ...element,
      cart_quantity: element.cart_quantity - 1,
      stock: element.stock + 1,
     } : element);

    const targetItem = updatedCart.find(item => item.id === cart.id);
     if(targetItem.cart_quantity <= 0){
        handleremove(cart.id)
      }
      else{
        setCarts(updatedCart)
      }

  }

  const buyNow = (products) =>{
        const {name} = products
        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
          },
          buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
          title: `${name} `,
          text: "Do you to Purchase this?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, confirm it 🤖",
          cancelButtonText: "No, cancel!‼️",
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
            swalWithBootstrapButtons.fire({
              title: "Confirmed✌️",
              text: "Your are confirmed it🌸",
              icon: "success"
            });
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire({
              title: "Cancelled 🥺",
              text: "You are cancelled it 😣",
              icon: "error"
            });
          }
        });
  }

  return (
    <div className='flex flex-col md:flex-row gap-5 my-8'>
      <div className='md:w-[70%]' >
        <Products handleUpdateCart={handleUpdateCart} buyNow={buyNow}  ></Products>
      </div>
      <div className='md:w-[30%]'>
        <Carts add={add} remove={remove}  carts={carts} handleremove={handleremove} buyNow={buyNow} ></Carts>
      </div>
    </div>
  )
}

export default App

