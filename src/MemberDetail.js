import React, { Component } from 'react';

class MemberDetail extends Component {
    render() {
        if (this.props.member) {
            console.log("Props is", this.props.member)
            const { member } = this.props
            return (
                <div className="App">
                    <h1>Member Details</h1>
                    <h4><b>Name:</b>{` ${member.first_name} ${member.last_name}`}</h4>
                    <h4><b>Date of Birth:</b>{member.date_of_birth}</h4>
                    <h4><b>Gender:</b>{member.gender}</h4>
                    <h4><b>fax:</b>{member.fax}</h4>
                    <h4><b>Phone:</b>{member.phone}</h4>
                    <h4><b>Party:</b>{member.party}</h4>
                    <h4><b>State:</b>{member.state}</h4>
                    <h4><b>Title:</b>{member.title}</h4>
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

export default MemberDetail;