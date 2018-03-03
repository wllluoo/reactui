import React from 'react';
// import StepOne from './StepOne';
// import StepTwo from './StepTwo';

export const SIDEBAR_SHOW = 'SIDEBAR_SHOW';

export default ({ step, actionPlayer }) => (dispatch) => {
	// switch (type) {
	// 	case 'stepOne':
	// 		return <StepOne actionPlayer={(type) => actionPlayer(type)} />
	// 	case 'stepTwo':
	// 		return <StepTwo actionPlayer={(type) => actionPlayer(type)} />
	// 	default:
	// 		return '';
	// }
	let action = { type: SIDEBAR_SHOW };
	if (!step) {
		return dispatch(Object.assign({}, action, { isShow: false }))
	}

	action.isShow = true;
	// action.step = step;
	dispatch(Object.assign({}, action, { step }))
}
