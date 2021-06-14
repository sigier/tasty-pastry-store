import React from 'react';
import classes from './Header.module.css';
import mealsPic from '../../assets/mealsPic.jpg'; 
import HeaderCartButton from './HeaderCartButton';

const Header= props => {
    return <React.Fragment>
        <header className={classes.header}>
            <h1>Meals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsPic} alt="Food table"></img>
        </div>
    </React.Fragment>
};

export default Header;