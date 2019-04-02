import React, { Component } from 'react';
import Item from "./Item";

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  addToCart(id) {
    console.log("ADD", id);
  }

  removeFromCart(id) {
    console.log("Remove", id);
  }

  render() {
    let items = this.props.items.map( item => 
      <Item key={ item.id } id={ item.id } name={ item.name } price={ item.price } imageUrl={ item.image_url } triggerAdd={ this.addToCart } triggerRemove={ this.removeFromCart } />  
    )

    return (
      <div className="ItemList">
        { items }
      </div>
    );
  }
}

export default ItemList;