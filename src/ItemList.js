import React, { Component } from 'react';
import Item from "./Item";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { add, remove } from './actions';


class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
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
    let items = this.props.items.map( item => 
      <Item key={ item.id } id={ item.id } name={ item.name } price={ item.price } imageUrl={ item.image_url } triggerAdd={ this.addToCart } triggerRemove={ this.removeFromCart } />  
    )

    return (
      <div className="ItemList">
        { items }
        <button><Link to="/cart">CART</Link></button>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { cart: state.cart }
}

const mapDispatchToProps = {
  add,
  remove
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);