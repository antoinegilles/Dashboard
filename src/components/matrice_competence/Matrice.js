import React from 'react';
import axios from 'axios';
// eslint-disable-next-line
export default class Matrice extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        name:'',
        surname:'',
        techno:'',
        level:'',
        technologie:'',
        competence:'',
        array:[
          { key : 1, name:'Antoine', techno:'Java', level:4},
          { key : 2, name:'Nicolas', techno:'Javascript',level:5},
          { key : 3, name:'Jeremy', techno:'Java EE',level:10}
        ],
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
         surname: response.data.surname
       })) 
       .catch(function (error) {
         console.log(error);
       });  
     }
    
    displayTechnologies() {
        return this.state.array.map(unElement => (    
          <tr>
            <td key={unElement.key}>
              {unElement.name}
            </td>
            <td>
              {unElement.techno}
            </td>
            <td>
              {unElement.level}
            </td>
            </tr>
          ))
      }


 // input
handleChangeTechnologie = event => {
  this.setState({technologie: event.target.value});
  this.state.array.push({key:34, name:"Gilou", techno:"javascriptMotherFucker", level:10000})
  console.log(this.state.technologie)
};
handleChangeCompetences = event => {
  this.setState({competence: event.target.value});
  console.log(this.state.competence)
};
// input
handleChange = event => {
  this.state.array.push({ [event.target.name]: event.target.value });
  console.log(this.state)
};

    
    
    render(){
        return(
            <div>
                 {/* Matrice des compétences */}
                <div>
                <p className="title2">Matrice des compétence du pole innovation</p>
                
                {/* input ajout compétences */}
                <div className="row space">
                        <form className="col" onSubmit={this.handleChange}>
                        <div className="col"></div>

                            <div className="input-field col">
                            <label for="techno">Technologie</label>
                            <input id="techno" type="text" className="validate" name="techno"
                            value={this.state.value} 
                            />
                            </div>

                            <div className="input-field col">
                            <label for="competence">niveau de compétences</label>
                            <input id="level" type="text" className="validate" name="level"
                            value={this.state.value} 
                            />
                            </div>

                            <div className="col buttonAdd">
                            <a className="waves-effect waves-light btn" 
                            >
                            Ajouter
                            </a>
                            </div>
                        </form>
                    </div>

                <table>
                    <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Technologie</th>
                        <th>Niveau de compétence ( sur 10 points )</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.displayTechnologies()}              
                    </tbody>
                </table>
                </div>
            </div>
        )

    }
}