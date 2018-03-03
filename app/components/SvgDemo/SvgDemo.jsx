import React, { Component } from 'react';
import Snap from 'snapsvg-cjs';
import './index.css'

let svg = '';
const SVG_NS = 'http://www.w3.org/2000/svg';
const XLINK_NS = 'http://www.w3.org/1999/xlink';
export default class SvgDemo extends Component {

    componentDidMount() {
        // svg = Snap.select('svg');
        // const star = Snap.select("#star")
        // var star = svg.polygon(53,42.32114364754454, 56.21609201288021,51.57342909889993 ,66.00936546946812,51.773000923477554, 58.203746187787246,57.69079963060898 ,61.04023003220053,67.06642725275017, 53,61.471542540982185 ,44.95976996779947,67.06642725275017, 47.796253812212754,57.69079963060898, 39.99063453053188,51.77300092347756, 49.78390798711979,51.57342909889993 ,53,42.32114364754454 ,56.21609201288021,51.57342909889993)
        // .attr({
        //     fill: '#ffffff',
        //     stroke: "#000000",
        //     strokeWidth: "null",
        // })
        // .toDefs();
        // const u = star.use().attr({ x: -500, y: 200 });
        // svg.append(u);
        this.renderStar();
    }
    use = (origin) => {
        let _use = document.createElementNS(SVG_NS, 'use');
        _use.setAttributeNS(XLINK_NS, 'xlink:href','#' + origin.id); // use的用法
        return _use;
    }
    random = (min, max) => {
        return min + (max - min) * Math.random();
    }
    renderStar = () => {
        const starRef = document.getElementById('star');
        const starGroup = document.getElementById('star-group');
        let starCount = 300;
        let star = '';
        let x = '';
        let y = '';
        while(starCount--) {
            star = this.use(starRef);
            x = this.random(-1800, 400);
            y = this.random(-300, 300);
            star.setAttribute('transform', 'translate(' + x + ',' + y +')' + 'scale(' + Math.random(0.1, 0.6) + ')');
            star.setAttribute('opacity', Math.random(0.1, 0.4));
            starGroup.appendChild(star);
        }
    }

    render() {
        return (
            <div className={'containerSvgDemo'}>
            <svg
                width="1800"
                height="800"
                viewBox="-1240 -300 800 600"
                preserveAspectRatio="xMidYMid meet"
            >
                <defs>
                    <Star />
                </defs>
                {/* <use xlinkHref="#star" x="50" y="50" /> */}
                <g id="star-group" />
            </svg>
            </div>
        )
    }

}
const Star = () => {
    return (
        <polygon fill="#ffffff" id="star" points="53,42.32114364754454 56.21609201288021,51.57342909889993 66.00936546946812,51.773000923477554 58.203746187787246,57.69079963060898 61.04023003220053,67.06642725275017 53,61.471542540982185 44.95976996779947,67.06642725275017 47.796253812212754,57.69079963060898 39.99063453053188,51.77300092347756 49.78390798711979,51.57342909889993 53,42.32114364754454 56.21609201288021,51.57342909889993 " stroke="#000000" strokeWidth="null" />
    )
}