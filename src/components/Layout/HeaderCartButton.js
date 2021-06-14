import CartIcon from '../Cart/CartIcon';
import classes from '../Layout/HeaderCartButton.module.css';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/Cart-Context';

const HeaderCartButton = props => {
    const [buttonIsHighlighted, setButtonIsHighlighted] =
        useState(false);

    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((current, item) => {
        return current + item.amount;
    }, 0);

    const buttonClasses = `${classes.button} ${buttonIsHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setButtonIsHighlighted(true);

        const timeout = setTimeout(() => {
            setButtonIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timeout);
        };

    }, [items]);

    return <button
        className={buttonClasses}
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