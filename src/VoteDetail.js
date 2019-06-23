import React, { Component } from 'react';

class VoteDetail extends Component {
    render() {
        if (this.props.votes) {
            console.log("Vote Props is", this.props.votes)
            return [this.props.votes].map(vote => (
                <div>
                    <h3>{vote.text}</h3>
                </div>
            ))
        }
        else {
            return (
                <div>
                    <h2>No Votes Found</h2>
                </div>
            )
        }
    }
}

export default VoteDetail;