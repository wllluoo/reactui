import React, { Component } from 'react';
import Snap from 'snapsvg-cjs';
import './index.css';
import Star from './element/Star';
import { Button, Input } from 'antd';

let s = '';
var linex1 = 60;
var liney1 = 150;
var linex2 = 500;
var liney2 = 150;
var linex3 = 800;
var liney3 = 150;
var linex4 = 60;
var liney4 = 700;
var linex5 = 800;
var liney5 = 700;
var radius = 10;
let circle1 = '';
let circle2 = '';
let circle3 = '';
let circle4 = '';
let circle5 = '';

let line = '';
let line2 = '';
let line3 = '';
let line4 = '';
let line5 = '';


let viewX = 1220;
let viewY = 720;
let donex = 0;
let doney = 0;
let ddx = 0;
let ddy = 0;


const viewStyle = {
     backgroundImage: 'url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506620665743&di=8728b4390acc0bb86dc1c22b947434aa&imgtype=0&src=http%3A%2F%2Fhiphotos.baidu.com%2Fdoc%2Fpic%2Fitem%2Fb8389b504fc2d562a175bffcef1190ef76c66ca5.jpg)',
     width: viewX, 
     height: viewY, 
     margin: '0 auto'
    };
// const Snap = require(`imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js`);
export default class View extends Component {
    constructor(props) {
        super(props);
        this.state = {
            realX: '',
            realY: '',
            viewStyle,
            scale: 1,
            viewPortX: 0,
            viewPortX: 0,
        }
    }

    handleClick = () => {
        // console.log(bigCircle.getBoundingClientRect());

    }
    componentDidMount() {
        // s = Snap("#main");
        // circle1 = s.circle(linex1, liney1, radius);
        // circle2 = s.circle(linex2, liney2, radius);
        // circle3 = s.circle(linex3, liney3, radius);
        // circle4 = s.circle(linex4, liney4, radius);
        // circle5 = s.circle(linex5, liney5, radius);
        // line = s.line(linex1, liney1, linex2, liney2);
        // line2 = s.line(linex2, liney2, linex3, liney3);
        // line2 = s.line(linex2, liney2, linex3, liney3);
        // line3 = s.line(linex1, liney1, linex4, liney4);
        // line4 = s.line(linex4, liney4, linex5, liney5);
        // line5 = s.line(linex3, liney3, linex5, liney5);
        // line.attr({
        // stroke: "#000",
        // strokeWidth: 5,
        // strokeLinecap:"round"
        // });
        // line2.attr({
        // stroke: "#000",
        // strokeWidth: 5,
        // strokeLinecap:"round"
        // });
        // line3.attr({
        // stroke: "#000",
        // strokeWidth: 5,
        // strokeLinecap:"round"
        // });
        // line4.attr({
        // stroke: "#000",
        // strokeWidth: 5,
        // strokeLinecap:"round"
        // });
        // line5.attr({
        // stroke: "#000",
        // strokeWidth: 5,
        // strokeLinecap:"round"
        // });
        // circle1.drag(this.move1, this.start, this.stop );
        // circle2.drag(this.move2, this.start, this.stop );
        // circle3.drag(this.move3, this.start, this.stop );
        const view = Snap.select('svg');
        view.drag(
                (dx, dy, posx, posy) => {
                    dx = dx + donex;
                    dy = dy + doney;
                    view.attr( { transform: 't'+dx+','+dy } );
                    ddx = dx;
                    ddy = dy;
                },
                function(){
                    console.log('start!');
                },
                function(eventobject){
                    donex = ddx;
                    doney = ddy;
                }
            );
        this.setState({
            viewBox: `4000 4000 5220 4720`
        })
    }
    move1 = (dx,dy) => {
        circle1.attr({
                    // transform: this.data('origTransform') + (this.data('origTransform') ? "T" : "t") + [dx, dy]
                    cx: linex1 + dx,
                    cy: liney1 + dy
                });

        line.attr({
          x1: linex1 + dx,
          y1: liney1 + dy
        });
    }

    move2 = (dx,dy) => {
        circle2.attr({
                        // transform: this.data('origTransform') + (this.data('origTransform') ? "T" : "t") + [dx, dy]
                        cx: linex2 + dx,
                        cy: liney2 + dy
                    });
    line.attr({
            x2: linex2 + dx,
            y2: liney2 + dy
            });
        line2.attr({
            x1: linex2 + dx,
            y1: liney2 + dy
            });
    }

    start = () => {
            // this.data('origTransform', this.transform().local );
    }
    stop = () => {
        linex1 = +line.attr('x1');
        liney1 = +line.attr('y1');
        linex2 = +line.attr('x2');
        liney2 = +line.attr('y2');
        linex3 = +line2.attr('x3');
        liney3 = +line2.attr('y3');
    }
    onChange = (e, type) => {
        this.setState({
            [type]:e.target.value,
        })
    }
    onClick = () => {
        const { realX, realY, viewStyle: { width, height } } = this.state;
        const viewPortX = Math.round(width / 3) ;
        const scale = Math.round(viewPortX / realX); // 比例尺
        const viewPortY = scale * realY;
        const positionX = Math.round((width - realX) / 2);
        const positionY = Math.round((height - realY) / 2);
        const viewBox = `0 0 ${viewPortX} ${viewPortY}`; 
        console.log(viewBox);
        this.setState({
            viewPortX,
            scale,
            viewPortY,
            positionX,
            positionY,
            viewBox,
        })
    }
    render() {
        const { realX, realY, viewStyle, viewBox } = this.state;
        return(
            <div className={'view'}>
                <div className={'inputGroup'}>面积 <Input value={realX} onChange={(e) => this.onChange(e, 'realX')} /> * <Input value={realY} onChange={(e) => this.onChange(e, 'realY')}/> <Button onClick={() => this.onClick()}>确定</Button></div>
                <div style={viewStyle}>
                    {/* <svg id="main" width='900' height='700' border='1px solid' viewBox="0 0 900 700" xMinYMin></svg> */}
                        <svg width="1220" height="720" xmlns="http://www.w3.org/2000/svg" style={{ border: '1px solid' }} viewBox={viewBox} preserveAspectRatio="xMinYMin meet">
                            <g x="20" y="50">
                                <Star />
                            </g>
                        </svg>
                    {/* <svg width="400" height="200" viewBox="0 0 200 100" preserveAspectRatio="xMinYMin meet" style={{ border:'1px solid greenyellow '}}>
                        <rect width="100" height="100" x="0" y="0" fill="#008d46"/>
                    </svg> */}
                </div>
            </div>
        )
    }
}


