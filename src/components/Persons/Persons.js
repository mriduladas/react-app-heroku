import React,{PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent  {

// shouldComponentUpdate(nextProps, nextState){
// console.log("Persons.js shouldComponent Update");
// return (this.props.persons!==nextProps.persons || 
//   this.props.changed!== nextProps.changed ||
//   this.props.clicked !==nextProps.clicked);
// //if it returns false , render will not be called.
// }

  render(){
    console.log('Persons.js render')
    return this.props.persons.map((person,index) => {
      return <Person name={person.name} age={person.age} key={person.id}
      change ={(event) => this.props.changed(event, person.id)}
      click= {()=> this.props.clicked(index)} />
    })
  }
}


export default Persons;