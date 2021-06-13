import axios from 'axios';
import React, { Component } from 'react';
import Recipe from './Recipe';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serverLink: process.env.REACT_APP_SERVER,
            recipe: [],
            showModel: false,
        }
    }
    componentDidMount = async () => {
        const recipe = await axios.get(`${this.state.serverLink}/getData?data=pizza`);
        this.setState({
            recipe: recipe.data,
            showModel: true,
        })
        console.log(this.state.recipe);
    }

    AddToFa = async (recipes) => {
        const recipe = await axios.post(`${this.state.serverLink}/sendData`, recipes);

    }
    render() {
        return (
            <>
                {this.state.showModel && this.state.recipe.map((recipe, idx) => {
                    return (

                        <Recipe
                            recipe={recipe}
                            idx={idx}
                            AddToFa={this.AddToFa}
                        />
                    )
                })}
            </>
        )
    }
}

export default Main;
