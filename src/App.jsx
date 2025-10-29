
import './App.css'
import Cart from './Components/Cart'
import Products from './Components/Products'

function App() {

  return (
    <div className='flex flex-col md:flex-row gap-5 my-8'>
      <div className='md:w-[70%]' >
        <Products></Products>
      </div>
      <div className='md:w-[30%]'>
        <Cart></Cart>
      </div>
    </div>
  )
}

export default App
