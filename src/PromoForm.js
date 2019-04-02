import React, { Component } from 'react';

class PromoForm extends Component {
    constructor(props){
        super(props);
        this.state = { promo: '' }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt){
        this.setState({ promo: evt.target.value });

    }

    handleSubmit(evt){
        evt.preventDefault();
        this.props.triggerPromo( this.state.promo);
        this.setState( {promo: ''});
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='promo'>Promo Code:</label>
                    <input id='promo' name='promo' value={this.state.promo} onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
                
            </div>
        );
    }
}

export default PromoForm;