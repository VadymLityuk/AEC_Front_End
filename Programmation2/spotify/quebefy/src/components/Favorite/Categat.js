  
import React from 'react';
import {Albumpage} from '../Favorite/Albumpage';
import {Album} from '../Favorite/Album';
import {Songs} from '../Favorite/songs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Searchfun} from '../Search/Searchfun'
import '../App/App.css'



const mesalbum  = [
    {
        album: 'Future Nostalgia',
        singer: 'Dua Lipa',
        cover: require("../media/dp.jpg"),
        alt: 'Future Nostalgia',
        songs: [
            {
                numb: 1,
                title: 'Future Nostalgia',
                lyrics: [
                    {alph: [
                            {line: 'You want a timeless song, I wanna change the game'},
                            {line: 'Like modern architecture, John Lautner coming your way'},
                            {line: 'I know you like this beat cause Jeff been doing the damn thing'},
                            {line: 'You wanna turn it up loud, future nostalgia is the name'},
                            {line: 'I know youre dying trying to figure me out'},
                            {line: 'My names on the tip of your tongue, keep running your mouth'},
                            {line: 'You want the recipe but cant handle my sound'},
                            {line: 'My sound, my sound'},
                            {line: 'No matter what you do, Im gonna get it without ya'},
                            {line: 'I know you aint used to a female alpha'},
                            {line: 'Cant be a rolling stone if you live in a glass house'},
                            {line: 'You keep on talking that talk, one day, youre gonna'},
                            {line: 'You cant be bitter if Im out here showing my face'},
                            {line: 'You want what now looks like, let me give you a taste'},
                            {line: 'I know youre dying trying to figure me out'},
                            {line: 'My names on the tip of your tongue, keep running your mouth'},
                            {line: 'You want the recipe but cant handle my sound'},
                            {line: 'My sound, my sound'},
                            
                        ]
                    },
                   
        
                  
                ]
                
            },
            {
                numb: 2,
                title: 'Dont Start Now ',
                lyrics: [
                    {alph: [
                            {line: 'You want a timeless song, I wanna change the game'},
                            {line: 'Like modern architecture, John Lautner coming your way'},
                            {line: 'I know you like this beat cause Jeff been doing the damn thing'},
                            {line: 'You wanna turn it up loud, future nostalgia is the name'},
                            {line: 'I know youre dying trying to figure me out'},
                            {line: 'My names on the tip of your tongue, keep running your mouth'},
                            {line: 'You want the recipe but cant handle my sound'},
                            {line: 'My sound, my sound'},
                            {line: 'No matter what you do, Im gonna get it without ya'},
                            {line: 'I know you aint used to a female alpha'},
                            {line: 'Cant be a rolling stone if you live in a glass house'},
                            {line: 'You keep on talking that talk, one day, youre gonna'},
                            {line: 'You cant be bitter if Im out here showing my face'},
                            {line: 'You want what now looks like, let me give you a taste'},
                            {line: 'I know youre dying trying to figure me out'},
                            {line: 'My names on the tip of your tongue, keep running your mouth'},
                            {line: 'You want the recipe but cant handle my sound'},
                            {line: 'My sound, my sound'},
                            
                        ]
                    }
                ]
                
            },
            {
                numb: 3,
                title: 'Cool',
                
            },
            {
                numb: 4,
                title: 'Physical',
               
            },
            {
                numb: 5,
                title: 'Levitating',
                
            },
            {
                numb: 6,
                title: 'Pretty Please',
            
            },
            {
                numb: 7,
                title: 'Hallucinate',
                
            },
            {
                numb: 8,
                title: 'Love Again',
              
            },
            {
                numb: 9,
                title: 'Break My Heart',
                
            },
            {
                numb: 10,
                title: 'Good In Bed',
                
            },
            {
                numb: 11,
                title: 'Boys Will Be Boys',
                
            }
        ]
    },
    {
        album: '360',
        singer: 'Sayonara Boy',
        cover: require("../media/allj.jpg"),
        alt: '360',

        songs: [
            {
                numb: 1,
                title: '360',
            
            },
            {
                numb: 2,
                title: 'One Love',
            
            },
            {
                numb: 3,
                title: 'Rozovoe Vino',
            
            },
            {
                numb: 4,
                title: 'Sayonara Detka',
            
            },
            {
                numb: 5,
                title: 'Hey Guys',
            
            }
        ]
    },
    {
        album: 'Малый Повзрослел',
        singer: 'Max Korzh',
        cover: require("../media/max.jpg"),
        alt: 'Max Korzh',
        songs: [
            {
                numb: 1,
                title: 'Свое Заберу',
                
            },
            {
                numb: 2,
                title: 'Малый Повзрсолел',
                
            },
            {
                numb: 3,
                title: 'Маклауд',
                
            },
            {
                numb: 4,
                title: 'Стилево',
                
            },
            {
                numb: 5,
                title: 'Без Косяка',
                
            },
            {
                numb: 6,
                title: 'Крутой Чел',
                
            },
            {
                numb: 7,
                title: 'Настоящий',
                
            },
            {
                numb: 8,
                title: 'Эмилия',
                
            },
            {
                numb: 9,
                title: 'Мой Друг',
                
            },
            {
                numb: 8,
                title: 'Бессонница',
                
            },
        ]
    },
    {
        album: 'MANIA',
        singer: 'FALL OUT BOY',
        cover: require("../media/mania.jpg"),
        alt: 'MANIA',
        songs: [
            {
                numb: 1,
                title: 'Wilson',

            },
            {
                numb: 2,
                title: 'Hold Me Tight Or Dont',

            },
            {
                numb: 3,
                title: 'Stay Frosty Royal Milk Tea',

            },
            {
                numb: 4,
                title: 'Bishop Knife Trick',

            },
            {
                numb: 5,
                title: 'Young and Menace',

            },
            {
                numb: 6,
                title: 'The Last Of The Real Ones',

            },
            {
                numb: 7,
                title: 'Sunshine Riptide',

            },
            {
                numb: 8,
                title: 'Champion',

            },
            {
                numb: 9,
                title: 'Church',

            }

        ]
    },
    {
        album: 'The Gataway',
        singer: 'Red Hot Chili Peppers',
        cover: require("../media/ni.jpg"),
        alt: 'The Getaway',
        songs: [
            {
                numb: 1,
                title: 'The Getaway',
                
            },
            {
                numb: 2,
                title: 'Dark Necessities',
                
            },
            {
                numb: 3,
                title: 'We Turn Red',
                
            },
            {
                numb: 4,
                title: 'The Longest Wave',
               
            },
            {
                numb: 5,
                title: 'Goodbye Angels',
                
            },
            {
                numb: 6,
                title: 'Sick Love',
            
            },
            {
                numb: 7,
                title: 'Go Robot',
                
            },
            {
                numb: 8,
                title: 'Feasting On The Flowers',
              
            },
            {
                numb: 9,
                title: 'Detroit',
                
            },
            {
                numb: 10,
                title: 'This Ticonderoga',
                
            },
            {
                numb: 11,
                title: 'Encore',
                
            },
            {
                numb: 12,
                title: 'The Hunter',
                
            },
            {
                numb: 13,
                title: 'Dreams of Samurai',
                
            },
            
        ]
    },
{
album: 'Thats The Spirit',
singer: 'Bring Me The Horizon',
cover: require("../media/cover.jpg"),
alt: 'Thats The Spirit',
songs: [
    {
        numb: 1,
        title: 'Drown',   
    },
    {
        numb: 2,
        title: 'Happy Song',
       
    },
    {
        numb: 3,
        title: 'Throne',
       
    },
    {
        numb: 4,
        title: 'True Friends',
       
    },
    {
        numb: 5,
        title: 'Follow You',
        
    },
    {
        numb: 6,
        title: 'Avalanche',
        
    },
    {
        numb: 7,
        title: 'Oh No',
        
    },
  

]
}
]

export class Categat extends React.Component {

    constructor(props) {
    super(props);
    this.state = {fil:'', albumitself: false, myalbum: 0, songitselfe: false, songId: 0, titleSection:'Your Top Picks'};
    
    this.transferSongId = this.transferSongId.bind(this);
    this.showAlbums = this.showAlbums.bind(this);
    this.transferFilt = this.transferFilt.bind(this);
    this.showresult = this.showresult.bind(this);
    this.transferitAlbum = this.transferitAlbum.bind(this);
    this.transfermyalbum = this.transfermyalbum.bind(this);
    this.transferitSong = this.transferitSong.bind(this);
    
    
    }
    
    transferitAlbum(it) {
    this.setState({albumitself: it});
    if (it) {
        this.setState({titleSection:'Your Top Picks'});
    }
    else {
        this.setState({titleSection:'Your Top Picks'});
    }

    }

    transferSongId(songpick) {
        this.setState({songId: songpick});
        }
        
    transferFilt (Searchfun) {
        this.setState({fil:Searchfun});
    }
    
    transfermyalbum(Albumpick) {
    this.setState({myalbum: Albumpick});
    }
    
    transferitSong(it) {
    this.setState({songitselfe: it});
    if (it) {
        this.setState({titleSection:'Song'});
    }
    else {
        this.setState({titleSection:'Album'});
    }
    }
    
    showAlbums () {
    let fil = this.state.fil.toUpperCase()
    let albumpicked = mesalbum[this.state.myalbum];
    let songpicked = mesalbum[this.state.myalbum].songs[this.state.songId]
    
    if (this.state.songitselfe) {
        return (
            <Songs
                songId={this.state.songId}
                id={"songs" + this.state.songId}
                cover={albumpicked.cover}
                alt={albumpicked.alt}
                album={albumpicked.album}
                singer={albumpicked.singer}
                title={songpicked .title}
                numb={songpicked .numb}
                lyrics={(songpicked .lyrics) ? songpicked.lyrics : 'nolyrics'} 
                songitselfe={this.transferitSong}/>
        )
    }
    else if (this.state.albumitself) {
        return (
            <Album 
                myalbum={this.state.myalbum}
                id={"album" + this.state.myalbum}
                cover={albumpicked .cover}
                alt={albumpicked .alt}
                album={albumpicked .album}
                singer={albumpicked .singer}
                nbsongs={albumpicked .nbsongs}
                songs={albumpicked .songs}
                songId={this.transferSongId}
                songitselfe={this.transferitSong}
                albumitself={this.transferitAlbum} />
        )
    }
    else {
        return mesalbum.map((element,i) => (
            (element.album.toUpperCase().includes(fil) || element.singer.toUpperCase().includes(fil)) &&
            <Albumpage
                key={"album" + i}
                id={"album" + i}
                cover={element.cover}
                alt={element.alt}
                album={element.album}
                singer={element.singer}
                myalbum={this.transfermyalbum}
                albumitself={this.transferitAlbum}
            />
            )
        )
    }  
    
    }
    showresult() {
        if (!(this.state.albumitself)) {
            return (
                <Searchfun filtre={this.transferFilt}/>
            )
        }
    }
    
    
    render() {
    return (
        <>
         <Row className="nav">
                <Col sm="8" md="4" lg="3" className="contenantSearchfun">
                    {this.showresult()}
                </Col>
                
                </Row>
               
        <Row>
            <Col className="songtxt">
                <h1>{this.state.titleSection}</h1>
            </Col>
        </Row>
        <Row className='cat'>
            {this.showAlbums()}
        </Row>
        </>
    );
    }
    }
    

