import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
var jsonDatum = require('./data.json');/*
const jsonDatum= [{
	"birthDate":"04-06-1990",
	"cellNo":"987654321",
	"created":null,
	"emailId":"wilson",
	"firstName":"wilson",
	"id":1,
	"lastName":"machado",
	"website":"Home"
	},{"birthDate":"04-06-1990","cellNo":"987654321","created":null,"emailId":"wilson","firstName":"wilson","id":2,"lastName":"machado","website":"Home"},{"birthDate":"04-06-1990","cellNo":"987654321","created":null,"emailId":"wilson","firstName":"wilson","id":3,"lastName":"machado","website":"Home"},{"birthDate":"04-06-1990","cellNo":"987654321","created":null,"emailId":"wilson","firstName":"wilson","id":4,"lastName":"machado","website":"Home"},{"birthDate":"Sssss","cellNo":"ssss","created":null,"emailId":"sss","firstName":"Sssss","id":5,"lastName":"ssss","website":"ssss"},{"birthDate":"Sssss","cellNo":"ssss","created":null,"emailId":"sss","firstName":"Sssss","id":6,"lastName":"ssss","website":"ssss"},{"birthDate":"Eee","cellNo":"eee","created":null,"emailId":"eee","firstName":"Eeee","id":7,"lastName":"eee","website":"Eer"}
];*/
const columns = [{
    Header: 'First Name',
    accessor: 'firstName' // String-based value accessors!
  	}, {
    Header: 'Last Name',
    accessor: 'lastName' // String-based value accessors!
  	}, {
    Header: 'Date Of Birth',
    accessor: 'birthdate',
    }, {
    Header: 'Email ID',
    accessor: 'email', 
  	}, {
    Header: 'Gender',
    accessor: 'sex' 
  	},{
    Header: 'Employed',
    accessor: 'employed' 
  	},{
    Header: 'Favourite Color',
    accessor: 'favoriteColor' 
  	},{
  	Header: 'Notes',
    accessor: 'notes' 
  	},{
    Header: props => <h1>Cell Number</h1>, // Custom header components!
    accessor: 'phonenum'
 	},{
 		 id: 'hobbies',
  	Header: 'Reading',
    accessor: props => <span>{props.hobbies.Reading?"✓":"✗"}</span> 
  	},
 ];
export class Table extends React.Component{
	render(){
		return(
			
			  	<ReactTable data={jsonDatum} columns={columns} />
			);
	}
}