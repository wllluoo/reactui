import React, { Component } from 'react';
import Snap from 'snapsvg-cjs';
import './index.css';
let bigCircle = '';
let smallCricle = '';
let box = '';
let rot = 0;
const A = 180 / Math.PI;
let star = '';
let starSvg = '';
let rotate = false;
let c = '';
let lasty = 0;
let lastx = 0;
let dx = 0, dy = 0;
let donex = 0, doney = 0;
let ddx = 0, ddy = 0;

// const Snap = require(`imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js`);
export default class Star extends Component {

    handleClick = () => {
        // console.log(bigCircle.getBoundingClientRect());

    }
    componentDidMount() {
        // const s = Snap('svg');

        // bigCircle = s.circle(150, 150, 100);
        // bigCircle.attr({
        //     fill: 'none',
        //     stroke: 'dodgerblue',
        //     strokeWidth:2,
        //     'stroke-dasharray': '5,5',
        // });
        // bigCircle.drag();
        // smallCricle = s.circle(120, 120, 80);
        // smallCricle.attr({
        //     fill: 'dodgerblue',
        //     stroke: 'dodgerblue',
        //     strokeWidth:2,
        // });
        // bigCircle.animate({ r: 50 }, 1500, () => {
        //     this.loop(50)
        // });

        // var svg = document.getElementById("svg");
        // this.svgRect = svg.getBoundingClientRect();
        // const ele = Snap.select('svg');
        // const control = document.getElementById('4');
        // let rotate = false;
        // control.addEventListener('mousemove', () => {
        //     console.log('mousemove');
        //     if (rotate) {
        //         svg.transform(new Snap.Matrix().rotate(45, 50, 50));
        //     }
        // }, false);

        // control.addEventListener('mousedown', () => {
        //     console.log('mousemdown');
        //     rotate = true;
        // }, false);
        // control.addEventListener('mouseup', () => {
        //     console.log('mouseup');
        //     rotate = false;
        // }, false);
        // ele.drag();
        // var svg = Snap("#svg");
        // var c = svg.paper.rect(20, 20, 60, 60, 10).attr({
        //     fill: "#f00"    // 红色
        // });
        c = Snap.select('svg');
        star = document.getElementById('3'); // 星星
        starSvg = Snap.select('polygon');
        const control = document.getElementById('4'); // 拉手

        const starEle = star.getBoundingClientRect();
        const controlEle = control.getBoundingClientRect();
        // const cEle = c.getBoundingClientRect();

        // this.Left = this.elRect.left - cEle.left;
        // this.Right = this.elRect.right - cEle.left;
        // this.Top = this.elRect.top - cEle.top;
        // this.Bottom = this.elRect.bottom - cEle.top;
        if (this.props.move) {
            c.drag(
                (dx, dy, posx, posy) => {
                    dx = dx + donex;
                    dy = dy + doney;
                    c.attr( { transform: 't'+dx+','+dy } );
                    ddx = dx;
                    ddy = dy;
                },
                function(){
                    console.log('start!');
                },
                function(eventobject){
                    donex = ddx;
                    doney = ddy;
                    Snap.snapTo([10,20,30,40], 25)
                }
            );
        }
        // c.drag();
        control.addEventListener('mousemove', (evt) => {
            console.log('mousemove');
            if (rotate && this.props.move) {
                // c.undrag();
                const angel = this.cacl(controlEle, evt);
                console.log(angel);
                this.animate(c, angel);
            }
            
        }, false);
        control.addEventListener('mousedown', (evt) => {
            rotate = true;
        }, false);
        control.addEventListener('mouseup', (evt) => {
            rotate = false;
        }, false);
        control.addEventListener("mouseleave", function(evt) {
            rotate = false;
        }, false);
    }
    onEnd = () => {
        console.log(this);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.move != this.props.move && !nextProps.move) {
            c.undrag();
        }
        if (nextProps.move != this.props.move && nextProps.move) {
            c.drag();
        }
    }
    onEnd = (evt) => {
        console.log(evt);
    }
    cacl = (controlEle, evt) => {
        // Math.atan2()
        return {
            x: Math.round(evt.clientX - controlEle.left),
            y: Math.abs(Math.round(evt.clientY - controlEle.top)),
        }
    }
    animate = (c, angel) => {
        Snap.animate(rot, rot + Math.atan2(angel.y, angel.x) * A, function(value) {
                rot = value;
                // 旋转
                c.transform(new Snap.Matrix().rotate(value));
            }, 500);
    }

    render() {
        return(
                <svg width="220" height="220" xmlns="http://www.w3.org/2000/svg" id="svg">
                    <g>
                        <title>Layer 1</title>
                        <polygon id="3" className="star" fill="#ff7f00" points="111.7379150390625,45.53200149536133 125.71244812011719,86.65900802612305 168.2660140991211,87.5461196899414 134.34917449951172,113.85110473632812 146.67423248291016,155.5263900756836 111.7379150390625,130.65675354003906 76.8016357421875,155.5263900756836 89.1266860961914,113.85110473632812 55.2098388671875,87.5461196899414 97.76341247558594,86.65900802612305 111.7379150390625,45.53200149536133 125.71244812011719,86.65900802612305 " strokeWidth="3" stroke="#000000"/>
                        <ellipse stroke="#000000" strokeDasharray="5.5" opacity="0.8" ry="78" rx="80.50001" id="svg_1" cy="106.5" cx="112.50001" strokeLinecap="null" strokeLinejoin="null" strokeWidth="2" fill="none" className="line"/>
                        <ellipse id="svg_3" cy="-11.5" cx="54" strokeLinecap="null" strokeLinejoin="null" strokeDasharray="null" strokeWidth="3" stroke="#000000" fill="#ff7f00"/>
                        <ellipse stroke="#000000" strokeDasharray="5.5" ry="12" rx="12" id="4" cy="33.5" cx="58" opacity="0.8" strokeLinecap="null" strokeLinejoin="null" strokeWidth="2" fill="#007fff"/>
                    </g>
                    {/* <path 
                        d="M300, 300 L450,450"
                        style={{ fill:'white', stroke:'red', strokeWidth:'2' }}
                    />
                    <ellipse id="svg_4" cy="-11.5" cx="54" strokeLinecap="null" strokeLinejoin="null" strokeDasharray="null" strokeWidth="3" stroke="#000000" fill="#ff7f00"/>
                */}
                </svg>

        )
    }
}


