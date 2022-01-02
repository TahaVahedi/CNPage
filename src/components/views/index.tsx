import React, { Component } from "react";


export class Viewers extends Component {


    state = { viewers: 0 }

    render() {
        return <span>{this.state.viewers}</span>
    }


    componentDidMount() {
        // Simple GET request using fetch
        fetch('https://counterapi1.herokuapp.com/template')
            .then(response => response.json())
            .then(data => this.setState({ viewers: data.number})).catch(eror => console.log(eror));
    }

}