import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export class Album extends React.Component {

    constructor(props) {
        super(props);

        this.handlesong = this.handlesong.bind(this);
        this.bacttopages = this.bacttopages.bind(this);
    }

    handlesong(i) {
        let songId = i;
        this.props.songitselfe(true);
        this.props.songId(songId);
    }

    bacttopages() {
        this.props.albumitself(false);
    }


    render() {
        return (
            <>
            <Col md="12" lg={{ span: 10, offset: 2 }}>
                <div className="btn">
                    <Button variant="btn btn-success" onClick={this.bacttopages}>{"Back"}</Button>
                </div>
            </Col>
            <Col md="4" lg={{ span: 3, offset: 2 }}>
                <img className="img-fluid coverAlbum" src={this.props.cover} alt={this.props.alt} title={this.props.alt} />
            </Col>
            <Col md="9" lg="5">
                <div className="albuminform">
                    <h3>{this.props.singer}</h3>
                    <h2>{this.props.album}</h2>
                </div>
                <div className="songlists">
                    <ul>
                        {this.props.songs.map((element,i) => (
                            <li key={"song" + i} id={"song" + i} onClick={() => this.handlesong(i)}>
                                <span className="numbsong">{element.numb + " - "}</span>
                                <span>{element.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </Col>
            </>
            
        );
    }

}