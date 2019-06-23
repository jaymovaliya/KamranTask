import React, { Component } from 'react';
import axios from 'axios'

class Member extends Component {

    getBills = (member) => {
        console.log("Calling Bill", member.id)
        axios.get('http://localhost:3001/bills/' + member.id, {
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': true
            },
        }).then(res => {
            console.log(res.data.data.results[0])
            console.log(this)
            this.props.history.push({
                pathname: 'bills',
                params: { detail: res.data.data.results[0], member: member }
            })
        })
    }

    getVotes = (member) => {
        console.log("Calling Votes", member.id)
        axios.get('http://localhost:3001/votes/' + member.id, {
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': true
            },
        }).then(res => {
            console.log(res.data.data.results[0])
            this.props.history.push({
                pathname: 'votes',
                params: { detail: res.data.data.results[0], member: member }
            })
        })
    }

    getStatements = (member) => {
        console.log("Calling Statements", member.id)
        axios.get('http://localhost:3001/statements/' + member.id, {
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': true
            },
        }).then(res => {
            console.log(res.data.data.results[0])
            this.props.history.push({
                pathname: 'statements',
                params: { detail: res.data.data.results[0], member: member }
            })
        })
    }

    render() {
        console.log(this.props.members)
        return this.props.members.map(member => (
            <div>
                <h3>{`${member.first_name} ${member.last_name}`}</h3>
                <button onClick={() => this.getBills(member)}>Bills</button>
                <button onClick={() => this.getVotes(member)}>Votes</button>
                <button onClick={() => this.getStatements(member)}>Statements</button>
            </div>
        ))
    }
}

export default Member;