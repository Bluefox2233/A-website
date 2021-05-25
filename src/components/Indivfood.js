import React, { Component } from 'react'
import "./Indivfood.css"

export default class Indivfood extends Component {
    constructor(props) {
        super(props)
        this.state ={
            name : props.name,
            info : props.info,
            link : props.link,
            pic : props.pic
        }
    }



    handleClick= () => {
       
    }

    render() {
        return (
            <div class='flex'>
                    <div class='picture'>
                        <img src={this.state.pic}></img>
                    </div>
                    
                    <div class='text'>
                        <h2>{this.state.name}</h2>
                        <p>{this.state.info}</p>
                    

                        <div class='link'>
                            <a href={this.state.link}>
                                <button>
                                    More Info...
                                </button>
                            </a>
                        {/* <button onClick={Page}>More Info...</button> */}
                        {/* <input type='button' onClick={this.state.link} value="More Info"></input> */}
                        </div>
                    </div>
            </div>
        )
    }
}
