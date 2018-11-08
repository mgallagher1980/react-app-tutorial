import React, { Component, Fragment } from 'react';

export default class Kitten extends Component {
  
  cuteness() {
    return 99;
  }
  
  render() {
    const kitten = this.props.kitten;
    const index = this.props.index;

    return (
      <Fragment>
      <p>{kitten.title}</p>
      <img
       src={kitten.images.preview_gif.url} 
       alt={kitten.title} />
       </Fragment>
    )
  }
}
