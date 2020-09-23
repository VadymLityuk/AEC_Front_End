import React from "react";
import { AjouterFilms } from "./FormAjouterFilm";
import './style/accueil.scss'

export class AjouterFilm extends React.Component {
  constructor(props) {
    super(props);
  } 
  render() {
    return (
      <>
        <AjouterFilms history={this.props.history} />
      </>
    );
  }
}