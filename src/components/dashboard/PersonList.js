import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    infos: []
    
  }


  render() {
    return (
      <div>
        <p>Bienvenue { this.state.infos.name } sur votre espace personnel </p>
        <p>{"url Nextcloud : " + this.state.infos.urlNextcloud}</p>
        <p>{"url urlGitea : " +this.state.infos.urlGitea } </p>
        <p>{"url urlTrello : " +this.state.infos.urlTrello} </p>
        <h2> hey {this.props.match.params.id}</h2>

      </div>
    )
  }
}
