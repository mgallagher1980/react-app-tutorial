import React, { Component } from "react";

export default class KittenLoader extends Component {

    handleClick = () => {

        const count = this.props.count;

        console.log(count);

        //$.ajax("url", function() { }, functiopn() {})

        fetch(`http://api.giphy.com/v1/gifs/search?api_key=46BbgvRtJXBcUPAHg49vstTj5RAmqZOk&q=dogs&limit=${this.props.count}`)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                this.props.onKittensLoaded(data);
            });
    }

    render() {
        return <div>
            <button type="button" onClick={this.handleClick}>
                Load me some kittens
            </button>
        </div>;
    }
}
