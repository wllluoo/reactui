import React, { Component } from 'react';
import Snap from 'snapsvg-cjs';
import './index.css';

export default class Tree extends Component {
    render() {
        return (
            <div>
                <svg width="400" height="400" preserveAspectRatio='xMin meet' viewBox="0, 0, 400, 400" style={{ border: '1px solid #cd0000' }}>
                   
                    <rect width="400" height="400" fill="url(#grid)" stroke="blue"></rect>
                </svg> 
                <svg width="400" height="200" viewBox="0 0 200 300" preserveAspectRatio="xMinYMin meet" style={{ border: '1px solid #cd0000' }}>
                    <rect x="10" y="10" width="150" height="150" fill="#cd0000"/>
                </svg>
            </div>
        )
    }
}