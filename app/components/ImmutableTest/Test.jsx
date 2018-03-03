import React from 'react';
import Immutable, { Map, fromJS, isIndexed, update, is } from 'immutable';

export default class TestCom extends React.Component {
	constructor(props) {

		super(props);
		
	}
	componentWillMount() {

		// update 
		// const test = [{ a: 111, b: 222, c: 333 }];

		// this.setState({
		// 	test: Map([{ a: 111, b: 222, c: 333 }]),
		// })

		// 


		// const { fromJS, isIndexed } = require('immutable')
		// const test = { a: {b: [10, 20, 30]}, c: 40};

		// Immutable.fromJS(test);

		// fromJS({ a: {b: [10, 20, 30]}, c: 40}, function (key, value, path) {
		//   console.log(key, value, path)
		//   return isIndexed(value) ? value.toList() : value.toOrderedMap()
		// })
		// const fun = function (key, value) { 
		// 	var isIndexed = Immutable.Iterable.isIndexed(value); 
		// 	let result = value.toList();
		// 	if (!isIndexed) {
		// 		result = value.toOrderedMap();
		// 	}

		// 	console.log(result, isIndexed, key, value);

		// 	return result;
		//   };
		// Immutable.fromJS({a: {b: [10, 20, 30]}, c: 40}, fun);
		// const test = Immutable.fromJS({a: 1, b: 2}); // List([1,2])
		// const newTest = test.toJS(); // [1,2]
		// . 

		// const test = Immutable.fromJS({a: 1, b: 2}); // List([1,2])
		// const newTest = test.toJS(); // [1,2]

		const aMap = Map([{ a: 111, b: 222, c: 333 }])
		// const bMap = aMap.set('a', val => val = 111);
		const bMap = Map([{ a: 222, b: 222, c: 333 }]);

		console.log(is(aMap, bMap));

	}
	componentDidMount() {
		// const { test } = this.state;
		// this.setState({
		// 	test: test.update('a', v => v + 1)
		// })
	}
	render() {
		// console.log(this.state.test, this.state.test.get('a'), );
		return (
			<div>
				123
			</div>
		)
	}

}