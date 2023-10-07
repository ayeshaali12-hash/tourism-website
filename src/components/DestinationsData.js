import "./DestinationStyles.css";
import React, { Component } from 'react'

export default class DestinationsData extends Component {
  render() {
    return (
      <div>
        <div className={this.props.className}>
        <div className='des-text'>
            <h2>{this.props.heading}</h2>
            <p>{this.props.text}</p>
        </div>
        <div className='image'>
            <img alt='Tall Volcano' src={this.props.img1}></img>
            <img alt='Tall Volcano' src={this.props.img2}></img>
        </div>
      </div>

      </div>
    )
  }
}
