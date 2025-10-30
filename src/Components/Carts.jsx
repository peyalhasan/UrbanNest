import Cart from './Cart';
const Carts = ({carts}) => {
    return (

        <div>
            <h1 className='text-xl font-bold' >Here is your added product</h1>
            {
                carts.map((cart, idx) => <Cart key={idx} cart={cart} ></Cart> )
            }
        </div>
    );
};

export default Carts;