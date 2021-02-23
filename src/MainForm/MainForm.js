import React, { Component } from 'react';
import Specs from '../Specs/Specs';
import FEATURES from '../Features/Features'

class MainForm extends Component {
    render() {
            return (
                <form className="main__form">
                <h2>Customize your laptop</h2>
                <Specs 
                    features={FEATURES}
                    selected={this.props.selected}
                    updateFeature={this.props.updateFeature}
                />
              </form>

            )
    }
}

export default MainForm