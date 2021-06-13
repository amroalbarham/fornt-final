import React, { Component } from 'react';
import axios from 'axios';
import Favorit from './Favorit';
import UpdateForm from './UpdateForm';


class FavoriteRecipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serverLink: process.env.REACT_APP_SERVER,
            recipe: [],
            showModel: false,
            showForm: false,
            recipeName: '',
            recipeImage: '',
        }
    }
    componentDidMount = async () => {
        const recipe = await axios.get(`${this.state.serverLink}/favoiterData`);
        this.setState({
            recipe: recipe.data,
            showModel: true,
        })
        // console.log(this.state.recipe);
    }
    Delete = async (idx) => {
        const id = this.state.recipe[idx]._id;
        const recipe = await axios.delete(`${this.state.serverLink}/deleteData/${id}`);
        this.setState({
            recipe: recipe.data,
        })
    }
    Updata = (idx) => {
        const choosenData = this.state.recipe[idx];
        this.setState({
            showForm: true,
            index: idx,
            recipeName: choosenData.label,
            recipeImage: choosenData.image,
        })
    }
    changeName = e => this.setState({ recipeName: e.target.value });
    changeImage = e => this.setState({ recipeImage: e.target.value });

    UPDATEING = async (e) => {
        e.preventDefault();
        const id = this.state.recipe[this.state.index]._id;

        const dataUpdated = {
            recipeName: this.state.recipeName,
            recipeImage: this.state.recipeImage,
        }
        const reipe = await axios.put(`${this.state.serverLink}/updatedata/${id}`, dataUpdated);
        this.setState({
            recipe:reipe.data,
        })
    }


    render() {
        return (
            <>
                {this.state.showForm &&
                    <UpdateForm
                        recipeName={this.state.recipeName}
                        recipeImage={this.state.recipeImage}
                        changeName={this.changeName}
                        changeImage={this.changeImage}
                        UPDATEING={this.UPDATEING}
                    />

                }
                {this.state.showModel && this.state.recipe.map((recipe, idx) => {
                    return (


                        <Favorit
                            recipe={recipe}
                            idx={idx}
                            Delete={this.Delete}
                            Updata={this.Updata}
                        />
                    )
                })}
            </>
        )
    }
}

export default FavoriteRecipes
