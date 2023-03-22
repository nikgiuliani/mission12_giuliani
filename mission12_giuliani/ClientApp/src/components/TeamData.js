import React, { Component } from 'react';
import { teams } from './constants';
import { TeamInfo } from './TeamInfo';

export class TeamData extends Component {
  static displayName = TeamData.name;

  render() {
    return (
      <div>
        <h3 id="tabelLabel" >Total Table Data</h3>
        <p>This shows the full data of teams: </p>
        <table className='table table-striped' aria-labelledby="tabelLabel">
          <thead>
            <tr>
              <th>School</th>
              <th>Mascot</th>
              <th>City</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            {teams.map(t =>
              <TeamInfo {...t}/>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
