import React, { Component } from 'react';
import axios from 'axios';

import NewPlaylist from '../components/NewPlaylist';

export default class NewPlaylistContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      firstLoad: true
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (evt) {
    const value = evt.target.value;
    this.setState({
      inputValue: value,
      firstLoad: false
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      inputValue: '',
      firstLoad: true
    })
    axios.post('api/playlists/', {name: this.state.inputValue})
    // console.log('input', this.state.inputValue)
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
          {
            inputValue.length > 16
            ? <div className="alert alert-warning">ADD A NAME THAT IS LESS THAN 16 CHARACTERS!!!!!</div> : null
          }
           {
            !inputValue && !this.state.firstLoad
            ? <div className="alert alert-warning">Please actually write a name for your playlist</div> : null
          }
      </div>
    )
  }
}
