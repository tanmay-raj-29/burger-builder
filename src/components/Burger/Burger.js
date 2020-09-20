import React from "react";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredient";
import styles from "./Burger.module.css";

const Burger = (props) => {
  let ingredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((curr, prev) => {
      return curr.concat(prev);
    });

  if (ingredients.length === 0)
    ingredients = <p>Please start adding ingredients!</p>;

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
