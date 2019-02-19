import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React from 'react';
import axios from 'axios';


export default class CreateUser extends React.Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:'',
  surname:'',
  urlNextcloud:null,
  urlGitea:null,
  urlTrello:null,
  messageCreate:''
  }
 }

 handleClick(event){
if(this.state.username.length < 5 || this.state.username.length > 50 ){
  alert("Prenom doit avoir entre 5 et 50 cartères")
  return null;
}
if(this.state.surname.length < 5 || this.state.surname.length > 50 ){
  alert("Nom doit avoir entre 5 et 50 cartères")
  return null;
}
else if (this.state.password.length < 5 ){
  alert("mot de passe trop court")
  return null;
}
else if (this.state.urlGitea === null || this.state.urlNextcloud === null || this.state.urlTrello === null ){
  alert("Remplissez tout les champs")
  return null;
}
  axios.post('http://localhost:8080/user/create', {
    name: this.state.username,
    surname: this.state.surname,
    urlNextcloud: this.state.urlNextcloud,
    urlGitea: this.state.urlGitea,
    urlTrello: this.state.urlTrello,
    password:this.state.password
  })
  .then((response) => alert(response.data))
  .catch(function (error) {
    console.log(error);
  });

  }
 
render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Create User"
           />
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Surname"
             floatingLabelText="Surname"
             onChange = {(event,newValue) => this.setState({surname:newValue})}
             />
             <br/>
             <TextField
             hintText="Enter your UrlNextcloud"
             floatingLabelText="Url - Nextcloud"
             onChange = {(event,newValue) => this.setState({urlNextcloud:newValue})}
             />
             <br/>
             <TextField
             hintText="Enter your urlGitea"
             floatingLabelText="Url - Gitea"
             onChange = {(event,newValue) => this.setState({urlGitea:newValue})}
             />
             <br/>
             <TextField
             hintText="Enter your urlTrello"
             floatingLabelText="Url - Trello"
             onChange = {(event,newValue) => this.setState({urlTrello:newValue})}
             />
             <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
