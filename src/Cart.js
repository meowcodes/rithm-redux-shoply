import React, { Component } from "react";
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
    console.log("in add from cart", this.props.cart);
  }

  removeFromCart(id) {
    this.props.remove(id);
    console.log("in remove from cart", this.props.cart);
  }

  render() {
    for( let key in this.props.cart ){
        
    }

    let cartItems = this.props.cart.map(item => (
      <CartItem
        key={item.id}
        id={item.id}
        name={item.name}
        price={item.price}
        imageUrl={item.image_url}
        triggerAdd={this.addToCart}
        triggerRemove={this.removeFromCart}
      />
    ));
    

    return <div className="ItemList">{cartItems}</div>;
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
