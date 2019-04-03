import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React from 'react';
import axios from 'axios';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import './CreateUser.css';








export default class CreateUser extends React.Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:'',
  surname:'',
  etude:'',
  specialite:'',
  messageCreate:'',
  id:''
  }
 }

// input
handleChange = event => {
  this.setState({ [event.target.name]: event.target.value });
};

handleClose = () => {
  this.setState({ open: false });
};

handleOpen = () => {
  this.setState({ open: true });
};

// action click
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
else if (this.state.etude.length === 0 ){
  alert("Veuillez saisir le niveau d'étude")
  return null;
}
  axios.post('http://localhost:8080/user/create', {
    name: this.state.username,
    surname: this.state.surname,
    password:this.state.password,
    etude:this.state.etude,
    specialite:this.state.specialite,

  })
  .then((response) =>  { 
  if(response.status === 200){
    this.setState({id : response.data})
    window.location.replace("http://localhost:3000/user/"+this.state.id);
  }
})
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
             hintText="Enter your Level of speciality"
             floatingLabelText="Speciality"
             onChange = {(event,newValue) => this.setState({specialite:newValue})}
             />
             <br/>
            
            <div className="input">
             <FormControl id="Input2" className={CreateUser.formControl}>
              <InputLabel htmlFor="demo-controlled-open-select">Studies</InputLabel>
                <Select
                value={this.state.etude}
                onChange={(event,newValue) => this.setState({etude:event.target.value})}
                  inputProps={{
                    name: 'Platform',
                    id: 'demo-controlled-open-select',
                  }}
                > 
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="2">Bac +2</MenuItem>
                  <MenuItem value="3">Bac +3</MenuItem>
                  <MenuItem value="4">Bac +4</MenuItem>
                  <MenuItem value="5">Bac +5</MenuItem>
                </Select>
            </FormControl>
            </div>
            
         


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
