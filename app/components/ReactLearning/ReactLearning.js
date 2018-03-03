import React, { Component } from 'react'
// import ReactDOM from 'react-dom';

export default class ReactLearning extends Component {

	componentWillMount() {
		// var div = React.createElement({ 
		//   type: 'button', 
		//   props: { 
		//     className: 'button button-blue', 
		//     children: { 
		//       type: 'b', 
		//       props: { 
		//         children: 'OK!' 
		//       } 
		//     } 
		//   } 
		// });
		// ReactDOM.render(div, document.getElementById('testsss'));
	}

	render() {
		const { children, color } = this.props; 
	    return (
	    	<div>
	    		1111
	    		<div id="testsss" />
	    	</div>
	    )
	  }
}

