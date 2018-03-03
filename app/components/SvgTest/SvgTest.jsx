import React, { Component } from 'react';
import Snap from 'snapsvg-cjs';
import './index.css';
import Element from './Element';
import View from './View';
import { Button } from 'antd';

// const Snap = require(`imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js`);
export default class SvgTest extends Component {
    state = {
        move: true,
    }
    handleClick = () => {
        // console.log(bigCircle.getBoundingClientRect());
        this.setState({
            move: false,
        })
    }
    render() {
        const { move } = this.state;
        return(
            <div className="container">
                <div className="left">
                    <Element move={move} />
                </div>
                <div className="right">
                    <View />
                    <Button onClick={() => this.handleClick()}>固定</Button>
                </div>
            </div>

        )
    }
}


