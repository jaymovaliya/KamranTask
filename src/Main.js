import React, { Component } from 'react';
import axios from 'axios'
import Member from './Member'

class Main extends Component {

    state = {
        members: null
    }

    componentDidMount() {
        axios.get('http://localhost:3001/members', {
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': true
            },
        }).then(res => {
            this.setState({ members: res.data.data.results[0].members })
        })
    }

    render() {
        if (this.state.members) {
            return (
                <div className="App">
                    <h1>List of Members</h1>
                    <Member history={this.props.history} members={this.state.members}></Member>
                </div>
            );
        } else {
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

export default Main;