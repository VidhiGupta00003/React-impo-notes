import React, { Component } from 'react'

 class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to my class {this. props.name} and who loves to {this.props.hobby}</h1>
        </div>
    )
  }
}

export default Welcome