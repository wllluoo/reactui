import React, { Component } from 'react';
import Snap from 'snapsvg-cjs';
import './index.css';

export default class Path extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cx: 190,
            cy: 120,
        }
    }

    componentDidMount() {
       const controlCircle = Snap.select('circle');
       controlCircle.drag(
           (dx, dy, posx, posy) => {
            controlCircle.attr({
                transform: controlCircle.data('origTransform') + (controlCircle.data('origTransform') ? "T" : "t") + [dx, dy]
            });
            this.setState({
                cx: document.getElementById('controlCircle').getBBox().x + dx,
                cy: document.getElementById('controlCircle').getBBox().y + dy,
            });
           },
           () => {
            controlCircle.data('origTransform', controlCircle.transform().local );
           },
           () => {

           }
       );

    }

    render() {
        const { cx, cy } = this.state;
        return (
            <svg id="svg" xmlns="http://www.w3.org/2000/svg" width="220" height="220">
                <circle cx={190} cy={120} r="10" id="controlCircle" />
                <path id="path" fill="none" stroke="red" strokeWidth="2" d={`M 10 10, Q ${cx} ${cy} 220 220`}></path>
            </svg>
        )
    }
}