import React from 'react';
import { API } from '../constante';
import { FilmInfo } from './filminfo';

export class ShowInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataReceived: {
       title: '',
       picture: '',
       moviegenre : '',
       year: ''
      },
      movieID: '',
    };
  }
  async componentDidMount() {
    try {
      await this.setState({
        movieID: this.props.location.search.substring(
          4,
          this.props.location.search.length
        ),
      });
      await console.log(this.state.movieID);
      const response = await fetch(API + '/' + this.state.movieID);
      const responseAPI = await response.json();
      this.setState({ dataReceived: responseAPI });
      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <>
        <FilmInfo
          movieID={this.state.moveiID}
          title={this.state.dataReceived.title}
          picture={this.state.dataReceived.picture}
          moviegenre={this.state.dataReceived.moviegenre}
          year={this.state.dataReceived.year}
         
        />
      </>
    );
  }
}