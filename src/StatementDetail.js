import React, { Component } from 'react';

class StatementDetail extends Component {
    render() {
        if (this.props.statements) {
            console.log("Statement Props is", this.props.statements)
            return [this.props.statements].map(statement => (
                <div>
                    <h3>{statement.title}</h3>
                </div>
            ))
        }
        else {
            return (
                <div>
                    <h2>No Statement Found</h2>
                </div>
            )
        }
    }
}

export default StatementDetail;