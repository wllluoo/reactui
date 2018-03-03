import React from 'react';
import Immutable from 'immutable';
import TestCom from './Test';
import './index.css';

let history = [Immutable.List([])];
let historyIndex = 0;

export default class ImmutableTest extends React.Component {
	constructor(props) {
		super(props);
		this.addDot = this.addDot.bind(this);
	}

	operation = (fn) => {
		history = history.slice(0, historyIndex + 1);
		const newVersion = fn(history[historyIndex]); // 新的一次渲染是在上一次的基础上进行修改
		history.push(newVersion);
		historyIndex++;
		this.draw();
	}
	addDot = (x, y) => {
		this.operation((data) => {
			return data.push(Immutable.Map({ x, y, id: new Date() }));
		});
		
	}
	// 画布上的点
	draw = () => {
		const dots = document.getElementById('dots');
		dots.innerHTML = '';
		history[historyIndex].forEach(dot => {
			const ele = dots.appendChild(document.createElement('div'));
			ele.className = 'dot';
			ele.style.left = dot.get('x') + 'px';
			ele.style.top = dot.get('y') + 'px';
			ele.addEventListener('click', (e) => {
				this.removeDot(dot.get('id'));
				e.stopPropagation();
			})
		})

		const undo = document.getElementById('undo');
		const redo = document.getElementById('redo');
		undo.disabled = (historyIndex !== 0) ? '' : 'disabled';
    	redo.disabled = (historyIndex !== history.length - 1) ? '' : 'disabled';
	}

	removeDot = (id) => {
		this.operation((data) => data.filter(ele => ele.get('id') !== id));
	}

	componentDidMount() {
		const that = this;
		const dots = document.getElementById('dots');

		dots.addEventListener('click', function(e) {
		    that.addDot(e.pageX, e.pageY);
		});
	}
	handleUndo = () => {
		if (historyIndex > 0) {
			historyIndex --;
		}
		this.draw();
	}
	handleRedo = () => {
		if (historyIndex < history.length) {
			historyIndex ++;
		}
		this.draw();
	}
	render() {
		return (
			<div>
				<div id='dots'>
				</div>
				<div>
				    <button id='undo' onClick={() => this.handleUndo()}>Undo</button>
				    <button id='redo' onClick={() => this.handleRedo()}>Redo</button>
				</div>
				<TestCom />
			</div>
		)
	}

}