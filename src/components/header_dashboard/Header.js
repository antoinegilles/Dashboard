import React from 'react';
import gitea from './gitea.png';
import logo from './logo.png';
import trello from './trelloPicture.png';
import Nextcloud from './nextcloudPicture.png';

export default class Header extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        //id:this.props.match.params.id
     }
    }

    render() {
        return(
        <div>
            {/* Navabar */}  
            <nav>
            <div className="nav-wrapper">
            <img className="logo" src={logo} alt="logo"/>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a onClick={(event) => this.handleClick(event)} className="waves-effect waves-light btn-large">Déconnexion</a></li>
            </ul>
            </div>
        </nav>
        {/* Title */}
        <h2 className="title">Bonjour { this.state.name + ' ' + this.state.surname} Bienvenue sur votre Espace personnel</h2>
        <br/>
        
        {/* Card */}
        <div className="row">
            {/*trello */}
            <div className="col s12 m4">
                <div className="card">
                <div className="card-image">
                    <img id="trelloPicture" src={trello} alt="trello"/>
                </div>
                <div className="card-content">
                    <p>Trello est un outil de gestion de projet en ligne, chaque alternants / stagiaires utilise 
                    cet outils pour gérer leurs projet dans le pole innovation
                    </p>
                </div>
                <div className="card-action">
                    <a href="https://trello.com/b/mTLloJPH/poc-geoloc-v%C3%A9los">Lien vers Nextcloud</a>
                </div>
                </div>
            </div>
            {/* nextcloud */}
            <div className="col s12 m4">
                <div className="card">
                <div className="card-image">
                    <img id="nextcloudPicture" src={Nextcloud} alt="Nextcloud"/>
                </div>
                <div className="card-content">
                    <p>Nextcloud est un logiciel libre, de site d'hébergement de fichiers, Chaque projet possede son espace sur Nextcloud.
                    </p>
                </div>
                <div className="card-action">
                    <a href="https://cloud.capsulelab.eu/index.php/login?redirect_url=/index.php/apps/files/%3Fdir%3D/%26view%3Dsharingin#">Lien vers Trello</a>
                </div>
                </div>
            </div>
            {/*gitea */}
            <div className="col s12 m4">
                <div className="card">
                <div className="card-image">
                    <img id="giteaPicture" src={gitea} alt="trello"/>
                </div>
                <div className="card-content">
                    <p>Gitea est une plateforme sur laquelle on partage notre code. Le pole innnovation y stock tout ses projets. La plateforme utilise le meme principe que
                    github.
                    </p>
                </div>
                <div className="card-action">
                    <a href="https://git.capsulelab.eu/">Lien vers Gitea</a>
                </div>
                </div>
            </div>
            </div>
     </div>
        )}
}