import React, { Component } from "react";
import Aux from "../../hoc/Auxillary/Auxillary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Model from "../../components/UI/Model/Model";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
<<<<<<< HEAD
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../..//hoc/withErrorHandler/withErrorHandler";
=======
>>>>>>> 0dd51eaa00aae63e0bc3f0f2b998e0974e053b95

const INGREDIENTS_PRICE = {
  salad: 0.5,
  cheese: 0.4,
  bacon: 0.7,
  meat: 1.3,
};

class BurgerBuilder extends Component {
  state = {
<<<<<<< HEAD
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

=======
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
  };

>>>>>>> 0dd51eaa00aae63e0bc3f0f2b998e0974e053b95
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
<<<<<<< HEAD
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
=======
    alert("You Continue!");
>>>>>>> 0dd51eaa00aae63e0bc3f0f2b998e0974e053b95
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

<<<<<<< HEAD
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

=======
>>>>>>> 0dd51eaa00aae63e0bc3f0f2b998e0974e053b95
    return (
      <Aux>
        <Model
          show={this.state.purchasing}
          modelClosed={this.purchaseCancelledHandler}
        >
<<<<<<< HEAD
          {orderSummary}
        </Model>
        {burger}
=======
          <OrderSummary
            price={this.state.totalPrice}
            ingredients={this.state.ingredients}
            purchaseCancelled={this.purchaseCancelledHandler}
            purchaseContinued={this.purchaseContinuedHandler}
          />
        </Model>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ordered={this.purchaseHandler}
          price={this.state.totalPrice}
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          purchasable={this.state.purchasable}
        />
>>>>>>> 0dd51eaa00aae63e0bc3f0f2b998e0974e053b95
      </Aux>
    );
  }
}

<<<<<<< HEAD
export default withErrorHandler(BurgerBuilder, axios);
=======
export default BurgerBuilder;
>>>>>>> 0dd51eaa00aae63e0bc3f0f2b998e0974e053b95
