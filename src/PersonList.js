import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    products: []
  }

  componentDidMount() {
    axios.get('localhost:8080/user/read', {
	headers: {
    'contentType' :'application/json; charset=utf-8',
	  'Access-Control-Allow-Origin': '*',
	},
	}).then(function (response) {
		console.log('response is : ' + response.data);
	}).catch(function (error) {
		if (error.response) {
		  console.log(error.response.headers);
		} 
		else if (error.request) {
	      console.log(error.request);
		} 
		else {
		  console.log(error.message);
		}
	console.log(error.config);
});
  } 

  render() {
    return (
      <ul>
        { this.state.products.map(product => <li>{product.name}</li>)}
      </ul>
    )
  }
}