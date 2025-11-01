
import { useState } from 'react'
import './App.css'
import Carts from './Components/Carts'
import Products from './Components/Products'

function App() {


  const [carts, setCarts] = useState([]);

  const handleUpdateCart = (product) => {

    const exist = carts.some(item => item.id === product.id);
    if (exist) {
      // Swal.fire({
      //   title: "Drag me!",
      //   icon: "success",
      //   draggable: true
      // });
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
        <Carts add={add} remove={remove} key={carts.id} carts={carts} handleremove={handleremove} ></Carts>
      </div>
    </div>
  )
}

export default App


// import { useState, useEffect } from 'react'
// import './App.css'
// import Carts from './Components/Carts'
// import Products from './Components/Products'

// function App() {
//   const [carts, setCarts] = useState([]);
//   const [action, setAction] = useState({ type: '', payload: null });

//   // 🔹 useEffect to handle all cart updates centrally
//   useEffect(() => {
//     if (!action.type) return; // do nothing if no action

//     if (action.type === 'ADD_TO_CART') {
//       const product = action.payload;
//       const exist = carts.find(item => item.id === product.id);

//       if (exist) {
//         const updatedCart = carts.map(item =>
//           item.id === product.id
//             ? {
//                 ...item,
//                 cart_quantity: item.cart_quantity + 1,
//                 stock: item.stock - 1,
//                 price: (item.cart_quantity + 1) * item.price / item.cart_quantity,
//               }
//             : item
//         );
//         setCarts(updatedCart);
//       } else if (product.stock > 0) {
//         setCarts([...carts, { ...product, cart_quantity: 1, stock: product.stock - 1 }]);
//       } else {
//         alert('Out of stock!');
//       }
//     }

//     if (action.type === 'REMOVE_ITEM') {
//       setCarts(carts.filter(item => item.id !== action.payload));
//     }

//     if (action.type === 'INCREASE_QUANTITY') {
//       const updatedCart = carts.map(item =>
//         item.id === action.payload
//           ? {
//               ...item,
//               cart_quantity: item.cart_quantity + 1,
//               stock: item.stock - 1,
//             }
//           : item
//       );
//       setCarts(updatedCart);
//     }

//     if (action.type === 'DECREASE_QUANTITY') {
//       const updatedCart = carts.map(item =>
//         item.id === action.payload && item.cart_quantity > 1
//           ? {
//               ...item,
//               cart_quantity: item.cart_quantity - 1,
//               stock: item.stock + 1,
//             }
//           : item
//       );
//       setCarts(updatedCart);
//     }

//     // Reset action after processing
//     setAction({ type: '', payload: null });
//   }, [action]);

//   // 🔹 Handlers (they just trigger actions now)
//   const handleUpdateCart = (product) => setAction({ type: 'ADD_TO_CART', payload: product });
//   const handleremove = (id) => setAction({ type: 'REMOVE_ITEM', payload: id });
//   const add = (id) => setAction({ type: 'INCREASE_QUANTITY', payload: id });
//   const remove = (id) => setAction({ type: 'DECREASE_QUANTITY', payload: id });

//   return (
//     <div className='flex flex-col md:flex-row gap-5 my-8'>
//       <div className='md:w-[70%]'>
//         <Products handleUpdateCart={handleUpdateCart} />
//       </div>
//       <div className='md:w-[30%]'>
//         <Carts
//           add={add}
//           remove={remove}
//           carts={carts}
//           handleremove={handleremove}
//         />
//       </div>
//     </div>
//   );
// }

// export default App;
