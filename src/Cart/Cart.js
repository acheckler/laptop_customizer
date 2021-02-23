import React, { Component } from 'react';
import Total from '../Total/Total';
import Option from '../Option/Option';
  

class Cart extends Component {
    render(){
        return (
            <section className="main__summary">
            <h2>Your cart</h2>
            <Option selected={this.props.selected} />
            <Total selected={this.props.selected}/>
          </section>
        )

}
}

export default Cart