import React from 'react';
import './PersonList.css';
import Header from '../header_dashboard/Header';
import Matrice from '../matrice_competence/Matrice';




export default class PersonList extends React.Component {
  constructor(props){
    super(props);
    this.state={}
    this.handleChangeTechno = this.handleChangeTechno.bind(this);
    this.handleChangeLevel = this.handleChangeLevel.bind(this);

   }

   handleChangeTechno(event) {
    this.setState({techno: event.target.value});
  }
  handleChangeLevel(event) {
    this.setState({level: event.target.value});
  }
  handleClickpost(event){
    console.log(this.state.techno + " " + this.state.level)
  }

  render() {
    return (
      <div>
        <div>
          <Header></Header>
        </div>
        <div>
          <Matrice></Matrice>
        </div>
      </div>


    )
  }
}
