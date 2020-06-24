import React from 'react';
import {Personnage} from './pp';
let perso =1;


export class ListePersonnages extends React.Component{
    constructor(props){
        super(props)
        this.state = {data:[]};
        }
        //Dans ton DidMOunt, boucle 10 fois!
        //Tu peux ensuite faire 10 variables ou un tableau qui contient tous les résultats
        //Tu peux même utiliser Push si tu veux
    async componentDidMount(){ 
         try { 
            const response = await fetch('https://swapi.dev/api/people/'+count+'/');  
            const json = await response.json(); 
            this.setState({ data: json }); 
        if (!response.ok) { 
            throw Error(response.statusText); 
            } 
        } catch (error) { 
        console.log(error); 
        } 
    } 


    render() {
        return (<Personnage data={this.state.data}/>
        )    
}
}
let count = 1;