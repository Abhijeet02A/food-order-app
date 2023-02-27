import React, {useContext} from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import CartContext from '../Store/cart-context';


const HeaderCartButton = props => {
    const context = useContext(CartContext);

    const numberOfCartItems = context.items.reduce((curNumber, item)=>{
        return curNumber + item.amount;
    }, 0)


    return <button className={classes.button} onClick={props.onCartClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Fill Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
}

export default HeaderCartButton;