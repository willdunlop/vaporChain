import React, { Component } from 'react';

import Header from './header';
import Window from './window';
import Feed from './feed';
import MusicPlayer from './music-player';
import Image from './image';
import Footer from './footer'

class App extends Component {
  render() {
    return (
      <div>
        <marquee className="app__marquee">Welcome to VaporChain!</marquee>
        <div className="app__container">
          <Header />

          <div className="app__body">
            <div className="app__body-left">
              <Window title="Feed">
                <Feed />
              </Window>
            </div>
            <div className="app__body-right">
              <MusicPlayer />
              <Image />
            </div>
          </div>

          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
