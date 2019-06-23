import React, { Component } from 'react';
import MemberDetail from './MemberDetail'
import VoteDetail from './VoteDetail'

class Votes extends Component {
    state = {
        member: null,
        votes: null
    }
    componentDidMount() {
        console.log(this.props.location.params)
        const { member, detail } = this.props.location.params
        this.setState({ member: member, votes: detail })
    }
    render() {
        if (this.state.member) {
            return (
                <div className="App">
                    <MemberDetail member={this.state.member}></MemberDetail>
                    <h1>Votes Submitted by {` ${this.state.member.first_name}`}</h1>
                    <VoteDetail votes={this.state.votes}></VoteDetail>
                </div>
            );
        }
        else {
            return <img alt="Loading..." style={loader} src={require('./loader.gif')} />
        }
    }
}
const loader = {
    display: 'block',
    width: '5%',
    height: '5%',
    marginTop: '50px',
    marginLeft: 'auto',
    marginRight: 'auto'
}

export default Votes;