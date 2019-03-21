import React, { Component } from 'react'
import { CardMedia, CircularProgress } from '@material-ui/core';

export default class GuessCapitalPhoto extends Component {

    constructor(props) {
        super(props)

        this.state = {
            photo: null,
        }
    }

    componentDidMount() {
        fetch(`https://pixabay.com/api/?key=11890174-126592df6a4a3453318a1ae02&q=${this.props.gameData.capital}&image_type=photo&pretty=true&orientation=horizontal`)
            .then(response => response.json())
            .then(response => this.setState({ photo: response }))
        console.log('mi angam')
    }

    componentDidUpdate(prevProps) {
        if (prevProps.gameData.name !== this.props.gameData.name) {
            fetch(`https://pixabay.com/api/?key=11890174-126592df6a4a3453318a1ae02&q=${this.props.gameData.capital}&image_type=photo&pretty=true&orientation=horizontal`)
                .then(response => response.json())
                .then(response => this.setState({ photo: response }))
            console.log('erku angam')
        }
    }

    render() {
        if (this.state.photo === null) {
            return (
                <div style={this.props.styles}>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '300px'}}>
                    <CircularProgress color="secondary" />
                </div>
                </div>
            )
        } else {
            return (
                <CardMedia style={this.props.styles} image={this.state.photo.hits[0].webformatURL} />
            )
        }
  }
}