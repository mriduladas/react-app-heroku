import React, { useEffect } from 'react';
import classes from './Cockpit.css'

const Cockpit = (props) => {

    useEffect(()=> {
        console.log("Cockpit.js useEffect for persons change");
        //HTTP Request...

        //control when call http Request..mimicking the 
        setTimeout(()=>{
            alert("Saved data to cloud")
        },1000)

        
    }, [props.personsLength])

    //Call a useeffect only the first time this component is called by  passing aempty array
    useEffect(()=> {
        console.log("Cockpit.js only first useEffect");
        //HTTP Request...

        //control when call http Request..mimicking the 
        const timer=setTimeout(()=>{
            alert("Saved data to cloud only first useEffect")
        },1000)

        return(()=> {
            clearTimeout(timer);
        })
    }, [])


    let btnClasses = [classes.button];

    if(props.showPersons){
        btnClasses.push(classes.Red);
    }

    const assignedClasses =[];
    if(props.personsLength <=2){
    assignedClasses.push(classes.red);
    }
    if(props.personsLength<= 1){
    assignedClasses.push(classes.bold);
    }


    return (
        <div>
        <h1>{props.title}</h1>
        <p className={assignedClasses.join(' ')}>This is inside the App component</p>
        <button className={btnClasses.join(' ')}
        alt ={props.showPersons}
        onClick={props.clicked}>Toggle Persons</button>
        </div>
    )
}

export default React.memo(Cockpit);