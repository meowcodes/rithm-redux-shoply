import React, { Component } from 'react';
import './Item.css'

class Item extends Component {
  constructor(props){
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleAdd() {
    this.props.triggerAdd(this.props.id);
  }

  handleRemove() {
    this.props.triggerRemove(this.props.id);
  }

  render() {
    return (
      <div className="Item">
        <img src={ this.props.imageUrl } alt={ this.props.name } />
        <h3>{ this.props.name }</h3>
        <p>{ this.props.price }</p>
        <button onClick={ this.handleAdd }>Add To Cart</button>
        <button onClick={ this.handleRemove }>Remove From Cart</button>
      </div>
    );
  }
}

export default Item;