import React, { Component } from "react";
import Aux from "../../hoc/Auxillary/Auxillary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Model from "../../components/UI/Model/Model";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../..//hoc/withErrorHandler/withErrorHandler";

const INGREDIENTS_PRICE = {
  salad: 0.5,
  cheese: 0.4,
  bacon: 0.7,
  meat: 1.3,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false,
  };

  componentDidMount() {
    axios
      .get("https://burger-builder-2b2bc.firebaseio.com/ingredients.json")
      .then((response) => {
        this.setState({ ingredients: response.data });
      })
      .catch(error=>{this.setState({error:true})})
      ;
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((key) => {
        return ingredients[key];
      })
      .reduce((sum, ele) => sum + ele, 0);
    this.setState({ purchasable: sum > 0 });
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelledHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinuedHandler = () => {
    // alert("You Continue!");
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Tanmay Raj",
        address: {
          street: "TestStreet 1",
          zipCode: "123456",
          country: "TestCountry 1",
        },
        email: "Test1@email.com",
      },
      deliveryMethod: "fastest",
    };
    axios
      .post("/orders.json", order)
      .then((res) => this.setState({ loading: false, purchasing: false }))
      .catch((err) => {
        this.setState({ loading: false, purchasing: false });
        console.log(err);
      });
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;
    const totalPrice = this.state.totalPrice + INGREDIENTS_PRICE[type];
    this.setState({ totalPrice: totalPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount === 0) return;
    const updatedCount = oldCount - 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;
    const totalPrice = this.state.totalPrice - INGREDIENTS_PRICE[type];
    this.setState({ totalPrice: totalPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;

    let burger = this.state.error? <p>Ingredients can't be loaded</p> : <Spinner />;
    if (this.state.ingredients) {
      orderSummary = (
        <OrderSummary
          price={this.state.totalPrice}
          ingredients={this.state.ingredients}
          purchaseCancelled={this.purchaseCancelledHandler}
          purchaseContinued={this.purchaseContinuedHandler}
        />
      );
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            ordered={this.purchaseHandler}
            price={this.state.totalPrice}
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disabledInfo}
            purchasable={this.state.purchasable}
          />
        </Aux>
      );
    }
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        <Model
          show={this.state.purchasing}
          modelClosed={this.purchaseCancelledHandler}
        >
          {orderSummary}
        </Model>
        {burger}
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
