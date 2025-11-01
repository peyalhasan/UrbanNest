import Cart from './Cart';
const Carts = ({ carts, handleremove }) => {
    return (

        <div>
            <h1 className='text-xl font-bold' >Here is your added product</h1>
            {
                carts.map((cart, idx) => <Cart key={idx} handleremove={handleremove} cart={cart} ></Cart>)
            }
        </div>
    );
};

export default Carts;