import React, { Component } from 'react';
import Total from './Total';
import Option from './Option';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  

class Cart extends Component {
    render(){
        const total = Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost,
            0
          );
        return (
            <section className="main__summary">
            <h2>Your cart</h2>
            <Option selected={this.props.selected} />
            {/* <Total /> */}
          </section>
        )

}
}

export default Cart