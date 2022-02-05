import React, { Component } from "react";


export default class Componente extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.msg}</h1>
      </div>);
  }
}
