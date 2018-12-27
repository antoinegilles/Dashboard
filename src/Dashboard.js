import React, { Component } from 'react';

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
        this.state = {date:"Antoine"};
  }
  render() {
    return (
      <div>
        <h1>Welcome <em>{this.state.date}</em> on your Dashboard</h1>
          <p>Here is your link for Gitea : </p>
          <p>Here is your link for Nextcloud : </p>
          <p></p>
      </div>
    )
  }
}

export default Dashboard