import React, { Component } from 'react';

class Cards extends Component {
    render() {
        return (
            <div className="col s12 m3 l3">
                <div className="card">
                    <div className="card-image">
                        <img alt={this.props.alt} src={this.props.image}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards;

