import React  from 'react';


export class PostForm extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            lien : ''
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value })
    }
     
    submitHandler = (e) => {
       e.preventDefault()
       console.log(this.state)
    }

    render(){
        const { lien } = this.state 
        return(
            <div>
                <form onSubmit={this.submitHandler}>

                    <input type = "text" name ="lien" value={lien} onChange={this.changeHandler}/>
                    <button type="submit">Shorten</button>{''}
                    </form>
            </div>
        )
    }



}