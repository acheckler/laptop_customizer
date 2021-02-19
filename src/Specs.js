import React, { Component } from "react";
import slugify from "slugify";
import Parts from "./Parts";


class Specs extends Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const options = this.props.features[feature].map((item) => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <Parts
            features={this.props.features}
            selected={this.props.selected}
            updateFeature={this.props.updateFeature}
            itemHash={itemHash}
            feature={feature}
            item={item}
          />
        );
      });

      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      );
    });
    return features;
  }
}

export default Specs;
