import React, { Component } from 'react';
import { Header } from './Header';
import { TeamData } from './TeamData';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <Header/>
        <TeamData/>
      </div>
    );
  }
}
