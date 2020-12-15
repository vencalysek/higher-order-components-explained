import React, { Component } from 'react'

export class UserProfile extends Component {
  render() {
    return (
      <div className='container'>
        <h1>{this.props.name}</h1>
        <h1>{this.props.email}</h1>
      </div>
    )
  }
}

export default UserProfile
