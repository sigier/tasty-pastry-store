import CartIcon from '../Cart/CartIcon';
import classes from '../Layout/HeaderCartButton.module.css';
import { useContext } from 'react';
import CartContext from '../../store/Cart-Context';

const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((current, item) => {
      return current + item.amount;
    }, 0);

    return <button
        className={classes.button}
        onClick={props.onClick}
    >
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {numberOfCartItems}
        </span>
    </button>

};

export default HeaderCartButton;