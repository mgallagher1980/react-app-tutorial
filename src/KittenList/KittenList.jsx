import React, { Component } from 'react';
import Kitten from './../Kitten/Kitten';

export default class KittenList extends Component {
  render() {
    return (
      <ul>
        {
          this.props.kittens.map((kitten, index) =>
            <li key={kitten.id}>
              <Kitten kitten={kitten} index={index} />
            </li>
          
          )}
      </ul>
    )
  }
}
