import Modal from '../UI/Modal';
import classes from './Cart.module.css';
const Cart = props => {
    const cartItemList = (<ul className={classes['cart-items']}>{
        [{id:'c1', name:'Sushi', amount: 2, price:13.99}].map(item => <li>{item.name}</li>)
        }</ul>);
    return <Modal onCartClose={props.onCartClose}>
        {cartItemList}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.5</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onCartClose}>Close</button>
            <button className={classes.button} >Order</button>
        </div>
        </Modal>
}

export default Cart;