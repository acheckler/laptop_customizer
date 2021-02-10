import React, { Component } from 'react';
import slugify from 'slugify';
import Specs from './Specs';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class MainForm extends Component {
    render() {
            return (
                <form className="main__form">
                <h2>Customize your laptop</h2>
                <Specs 
                    features={this.props.features}
                    selected={this.props.selected}
                    updateFeature={this.props.updateFeature}
                />
              </form>

            )
    }
}

export default MainForm