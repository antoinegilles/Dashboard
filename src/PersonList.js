import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    infos: []
  }

  componentDidMount() {
    axios.get('http://localhost:8080/user/5c2fa3623a96f7049336606c/read')
      .then(res => {
        const infos = res.data;
        console.log(infos)
        this.setState({ infos });
      })
  }

  render() {
    return (
      <div>
        <p>Bienvenue { this.state.infos.name } sur votre espace personnel </p>
        <p>{"url Nextcloud : " + this.state.infos.urlNextcloud}</p>
        <p>{"url urlGitea : " +this.state.infos.urlGitea } </p>
        <p>{"url urlTrello : " +this.state.infos.urlTrello} </p>
      </div>
    )
  }
}
