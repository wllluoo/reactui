import React, { Component } from 'react';
import Snap from 'snapsvg-cjs';
import './index.css';
import Star from './element/Star';
import Tree from  './element/Tree';
import Path from './element/Path';

// const Snap = require(`imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js`);
export default class Element extends Component {

    handleClick = () => {
        // console.log(bigCircle.getBoundingClientRect());

    }
    componentDidMount() {
    }
    render() {
        const { move } = this.props;
        return(
            <div>
               <Star move={move}/>
               <Path />
               {/* <Tree /> */}
            </div>

        )
    }
}


