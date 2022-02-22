import React from "react";

class Pokemon extends React.Component {
  render() {
    return (
      <div id={this.props.obj.id} className="pokemon">
        <div className="pokemon-info">
          <p>{this.props.obj.name}</p>
          <p>{this.props.obj.type}</p>
          <p>Average Weigth: {this.props.obj.averageWeight.value} {this.props.obj.averageWeight.measurementUnit}</p>
        </div>
        <img src={this.props.obj.image} alt={this.props.obj.name} />
      </div>
    )
  }
}

export default Pokemon;