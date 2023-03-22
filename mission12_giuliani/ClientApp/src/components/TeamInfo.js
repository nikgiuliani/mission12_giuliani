import React from 'react';

export class TeamInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], loading: true };
  }

  render() {
    return (     
        <tr key={this.props.school}>
          <td>{this.props.school}</td>
          <td>{this.props.name}</td>
          <td>{this.props.city}</td>
          <td>{this.props.state}</td>
        </tr>
    );
  }
}
