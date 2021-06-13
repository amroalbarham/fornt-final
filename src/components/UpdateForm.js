import React, { Component } from 'react'

class UpdateForm extends Component {
    render() {
        return (
            <>
                <form onSubmit={e=>this.props.UPDATEING(e)}>
                    <label>recipe name</label>
                    <input type='text' value={this.props.recipeName} onChange={this.props.changeName}></input>
                    <label>recipe image</label>
                    <input type='text' value={this.props.recipeImage} onChange={this.props.changeImage}></input>
                    <input type='submit' value='submit' />
                </form>
            </>
        )
    }
}

export default UpdateForm
