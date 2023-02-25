import CartContext from './cart-context';
const CartProvider = props => {
    const addItemtoContextHandler = item => {};

    const removeItemtoContextHandler = item => {};
    const cartContext = {
        items: [],
    totalAmount: 0,
    addItem: addItemtoContextHandler,
    removeItem: removeItemtoContextHandler
    };
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;