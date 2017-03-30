import React, { Component } from 'react';
import axios from 'axios';

import NewPlaylist from '../components/NewPlaylist';

export default class NewPlaylistContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (evt) {
    const value = evt.target.value;
    this.setState({
      inputValue: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      inputValue: ''
    })
    console.log('input', this.state.inputValue)
  }

  render () {
    const inputValue = this.state.inputValue;

    return (
      <div>
        <NewPlaylist
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          inputValue={this.state.inputValue}
        />
      </div>
    )
  }
}
