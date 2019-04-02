import React, { Component } from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import { add, remove } from "./actions";
import PromoForm from "./PromoForm";

const SALES_TAX = 0.0725;

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      promo: null,
      error: null
    };
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.togglePromo = this.togglePromo.bind(this);
  }

  addToCart(id) {
    this.props.add(id);
  }

  removeFromCart(id) {
    this.props.remove(id);
  }

  togglePromo(input) {
    if (this.state.promo) {
      this.setState({ error: "ONLY ONE PROMO AT A TIME!" });
    } else {
      if (input === "REMOVE10") {
        this.setState({ promo: 0.9 });
      } else if (input === "REMOVE20") {
        this.setState({ promo: 0.8 });
      } else if (input === "REMOVE30") {
        this.setState({ promo: 0.7 });
      }
    }
  }

  render() {
    const idArr = new Set(Object.keys(this.props.cart));

    const cartItems = this.props.items
      .filter(item => idArr.has(item.id.toString()))
      .map(item => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          count={this.props.cart[item.id]}
          price={item.price * this.props.cart[item.id]}
          imageUrl={item.image_url}
          triggerAdd={this.addToCart}
          triggerRemove={this.removeFromCart}
        />
      ));

    return (
      <div className="ItemList">
        {cartItems}
        <PromoForm triggerPromo={this.togglePromo} />
        {this.state.error}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { cart: state.cart };
}

const mapDispatchToProps = {
  add,
  remove
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
