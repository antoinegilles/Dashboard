import React from 'react';
import axios from 'axios';
import trello from './trelloPicture.png';
import Nextcloud from './nextcloudPicture.png';
import './PersonList.css';
import gitea from './gitea.png';
import logo from './logo.png'




export default class PersonList extends React.Component {
  constructor(props){
    super(props);
    this.state={
    id:this.props.match.params.id,
    name:'',
    surname:'',
    urlGitea:'',
    urlNextcloud:'',
    urlTrello:''
    }
   }

   handleClick(){
    axios.get('http://localhost:8080/user/logout ' , {
    })
    .then(() => 
    window.location.replace("http://localhost:3000/login")
    )
    .catch(function (error) {
      console.log(error);
    });   
  }

   componentDidMount(){
     axios.get('http://localhost:8080/user/read/'+this.state.id , {
    })
    .then((response) => 
    
    this.setState({
      name : response.data.name,
      surname: response.data.surname,
      urlGitea: response.data.urlGitea,
      urlNextcloud: response.data.urlNextcloud,
      urlTrello : response.data.urlTrello
    }))
    .then( () => console.log(this.state) ) 
    .catch(function (error) {
      console.log(error);
    });  
  }


  render() {
    return (
      <div>
      {/* Navabar */}  
        <nav>
          <div class="nav-wrapper">
            <img className="logo" src={logo} alt="logo"/>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><a onClick={(event) => this.handleClick(event)} class="waves-effect waves-light btn-large">Déconnexion</a></li>
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

          <div class="row">
            <form class="col s12">
              <div class="row">
                <div class="input-field col s6">
                  <input id="first_name" type="text" class="validate"/>
                  <label for="first_name">Technologie</label>
                </div>
              <div class="input-field col s6">
                <input id="last_name" type="text" class="validate"/>
                <label for="last_name">niveau de compétences</label>
              </div>
            </div>
          </form>
        </div>

            {/* Matrice des compétences */}
        <div>
          <p className="title2">Matrice des compétence du pole innovation</p>
          <table>
            <thead>
              <tr>
                  <th>Nom</th>
                  <th>Technologie</th>
                  <th>Niveau de compétence ( sur 10 points )</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Antoine</td>
                <td>Javascript</td>
                <td>5</td>
              </tr>
              <tr>
                <td>Gerard</td>
                <td>Javascript</td>
                <td>10</td>
              </tr>
              <tr>
                <td>Jonathan</td>
                <td>Java</td>
                <td>4</td>
              </tr>
            </tbody>
          </table>
        </div>
  
</div>


    )
  }
}
