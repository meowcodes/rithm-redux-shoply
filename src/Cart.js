import React, { Component } from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import { add, remove } from "./actions";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }
  addToCart(id) {
    this.props.add(id);
  }

  removeFromCart(id) {
    this.props.remove(id);
  }

  render() {
    let idArr = Object.keys(this.props.cart);

    let cartItems = this.props.items
      .filter(item => idArr.includes(item.id.toString()))
      .map( item => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          count={ this.props.cart[item.id] }
          price={item.price * this.props.cart[item.id]}
          imageUrl={item.image_url}
          triggerAdd={this.addToCart}
          triggerRemove={this.removeFromCart}
        />
      )
    );
  
    return (
      <div className="ItemList">
        {cartItems}
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
