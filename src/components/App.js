import React, { Component } from 'react';
import YoutubePage from './youtube_page';


class App extends Component {

  // Takes in an array of objects - each object must have url: property
  // Returns an array with the promise object
  render() {
    return (
      <YoutubePage />
    );
  }
}

export default App;