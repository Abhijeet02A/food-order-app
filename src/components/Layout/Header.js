import React from "react";
import MealsImage from '../assets/meals.jpg';
import Meals from "../Meals/Meals";
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>Sweet Meal</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={MealsImage} alt="food is here!" />
            </div>
            <Meals />
        </React.Fragment>
    );

}

export default Header;