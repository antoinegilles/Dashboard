import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React from 'react';
import axios from 'axios';


export default class Login extends React.Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:'',
  id:''
  }
 }

 handleClick(event){

  axios.post('http://localhost:8080/user/login', {
    name: this.state.username,
    password:this.state.password
  })
  .then((response) => {
    if(response.status === 200){
      this.setState({id : response.data})
      window.location.replace("http://localhost:3000/user/"+this.state.id);
    }
  }
  )
  .catch(function() {
    alert("Veuillez verifier vos données")
  });

  }
 
render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Login"
           />
           <TextField
             hintText="Enter your email"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
           <TextField
             type="password"
             hintText="Enter your password"
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
