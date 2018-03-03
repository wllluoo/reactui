import React, { Component } from 'react'
import AuthorityDecorators from './AuthorityDecorators';

// @AuthorityDecorators
class HighOrderComponent extends Component {

	componentWillMount() {


	}
	render() {
	    return (
	    	<div>
				练习高阶组件的使用
	    	</div>
	    )
	  }
}
export default AuthorityDecorators(HighOrderComponent)

