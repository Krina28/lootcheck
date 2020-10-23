import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBitcoin } from '../actions/bitcoin';

export class Loot extends Component {
    constructor(props) {
        console.log(props)
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        this.props.fetchBitcoin();
    }

    computeBitcoin() {
        const { bitcoin } = this.props;
        console.log(bitcoin)

        if (Object.keys(bitcoin).length === 0) return '';
        return this.props.bitcoin / parseInt(bitcoin.bpi.USD.rate.replace(',', ''), 10);
    }

    render() {
        return (
            <h3>Bitcoin Balance:{this.computeBitcoin()}</h3>
        )
    }
}

export default connect(state => state, { fetchBitcoin })(Loot);
