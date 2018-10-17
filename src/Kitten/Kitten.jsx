import React, { Component, Fragment } from 'react';

export default class Kitten extends Component {
  render() {
    const kitten = this.props.kitten;
    const index = this.props.index;

    return (
      <Fragment>
        <span>{index + 1}</span>
      <p>{kitten.title}</p>
      <img
       src={kitten.images.preview_gif.url} 
       alt={kitten.title} />
       </Fragment>
    )
  }
}
