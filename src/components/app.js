import React, { Component } from 'react';

import Header from './header';
import Feed from './feed';
import MusicPlayer from './music-player';
import Image from './image';
import Footer from './footer'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />

        <div className="app__body">
          <div className="app__body-left">
            <Feed />
          </div>
          <div className="app__body-right">
            <MusicPlayer />
            <Image />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
