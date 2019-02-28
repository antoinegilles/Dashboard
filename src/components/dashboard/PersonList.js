import React from 'react';
import axios from 'axios';


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
        <h2>Bonjour { this.state.name + ' ' + this.state.surname} Bienvenue sur sur votre Espace personnel</h2>
        <br/>
        <p>Url Nextcloud : { this.state.urlNextcloud}</p>
        <p>Url Gitea : { this.state.urlGitea}</p>
        <p>Url Trello : { this.state.urlTrello}</p>
<button onClick={(event) => this.handleClick(event)}>Log out</button>
      </div>

    )
  }
}
