import React, { Component } from 'react';

class BillDetail extends Component {
    render() {
        if (this.props.bills) {
            console.log("Bill Props is", this.props.bills)
            return this.props.bills.bills.map(bill => (
                <div>
                    <h3>{bill.title}</h3>
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

export default BillDetail;