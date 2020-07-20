import React from 'react';
import styles from './Order.module.css';

const order = (props) => {

    const ingredients = [];

    for (let ingredient in props.ingredients) {
        ingredients.push({
            name: ingredient,
            amount: props.ingredients[ingredient]
        });
    }

    const ingredientOutput = ingredients.map(ig => {
        return <span
            className={styles.Ingredients}
            key={ig.name}>
            {ig.name} - ({ig.amount})
            </span>;
    });

    return (
        <div className={styles.Order} >
            <p> Ingredients: {ingredientOutput} </p>
            <p> Price: <strong>${props.price}</strong></p>
        </div>
    );
};

export default order;