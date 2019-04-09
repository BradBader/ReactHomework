import React, { Component } from 'react';

class Cards extends Component {
    render() {
        return (

            <div className="col s12 m3 l3">
                <div className="card">
                    <div className="card-image">
                        <img alt={this.props.name} src={this.props.image} key={this.props.id}></img>
                    </div>
                </div>
            </div>

        )
    }
}

export default Cards;

