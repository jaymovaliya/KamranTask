import React, { Component } from 'react';
import MemberDetail from './MemberDetail'
import StatementDetail from './StatementDetail'

class Statements extends Component {
    state = {
        member: null,
        statements: null
    }
    componentDidMount() {
        console.log(this.props.location.params)
        const { member, detail } = this.props.location.params
        this.setState({ member: member, statements: detail })
    }
    render() {
        if (this.state.member) {
            return (
                <div className="App">
                    <a href="/">Back</a>
                    <MemberDetail member={this.state.member}></MemberDetail>
                    <h1>statements Submitted by {` ${this.state.member.first_name}`}</h1>
                    <StatementDetail statements={this.state.statements}></StatementDetail>
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

export default Statements;