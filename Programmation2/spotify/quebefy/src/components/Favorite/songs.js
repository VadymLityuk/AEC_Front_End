import React from 'react';
import Col from 'react-bootstrap/Col';
import '../App/App.css'

import Button from 'react-bootstrap/Button';

export class Songs extends React.Component {

    constructor(props) {
        super(props);

        this.showthelyrics = this.showthelyrics.bind(this);
        this.backtopage = this.backtopage.bind(this);
    }

    backtopage() {
        this.props.songitselfe(false);
    }

    showthelyrics() {
        if (this.props.lyrics === 'nolyrics') {
            return (
                <div className='lyrics'>
                    <p>Sorry, There's no lyrics available yet</p>
                </div>
            )
        }
        else {
            return this.props.lyrics.map((element,i) => (
                <div 
                    className='lyrics'
                    key={"lyrics" + i}
                    id={"lyrics" + i}>
                    <p>{element.alph.map((line,j)=> (
                        <span key={"line" + j}>
                            {line.line}
                        </span>
                        )
                    )}
                    </p>
                </div>
                )
            ) 
        }
        
    }

    render() {
        return (
            <>
            <Col md="12" lg={{ span: 8, offset: 2 }}>
                <div className="backbtn">
                    <Button variant="outline-success" onClick={this.backtopage}>{"Back to Album"}</Button>
                </div>
            </Col>
            <Col md="4" >
                <img className="coverAlbum img-fluid" src={this.props.cover} alt={this.props.alt} title={this.props.alt} />
                <div className="lyricsclass">
                    <h2>{this.props.album}</h2> 
                    <h3>{this.props.singer}</h3>
                    <p>{this.props.Songs}</p>
                </div>
            </Col>
            <Col md="9" lg="5">   
                <div className="songs">
                    <h2>{this.props.title}</h2>
                    {this.showthelyrics()}
                </div>
            </Col>
            </>
        );
    }

}