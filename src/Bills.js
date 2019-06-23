import React, { Component } from 'react';
import MemberDetail from './MemberDetail'
import BillDetail from './BillDetail'

class Bills extends Component {
    state = {
        member: null,
        bills: null
    }
    componentDidMount() {
        console.log(this.props.location.params)
        const { member, detail } = this.props.location.params
        this.setState({ member: member, bills: detail })
    }
    render() {
        if (this.state.member) {
            return (
                <div className="App">
                    <MemberDetail member={this.state.member}></MemberDetail>
                    <h1>Bills Submitted by {` ${this.state.member.first_name}`}</h1>
                    <BillDetail bills={this.state.bills}></BillDetail>
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

export default Bills;