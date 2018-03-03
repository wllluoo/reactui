import React from 'react';
import ReactDOM from 'react-dom';
import StepOne from '../components//ModalWithButton/StepOne';
import StepTwo from '../components//ModalWithButton/StepTwo';

const initialState = {
    isShow: false,
};

export default function buttonControl(state = initialState, action) {
    console.log('action', action);
    switch (action.type) {
        case 'SIDEBAR_SHOW':
        return {
            ...state,
            isShow: action.isShow,
            step: action.step,
        };
        case 'stepTwo': {
            const result = {
                content: <StepTwo />,
                title: '第二步',
            };
            return result;
            break;
        }
        default:
            return state;
    }
};

// const initialState = [
//   {
//     text: 'Use Redux',
//     completed: false,
//     id: 0
//   }
// ]

// export default function buttonControl(state = initialState, action) {
//   switch (action.type) {
//     case 1:
//       console.log('action', action, state);
//       return [
//         {
//           id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
//           completed: false,
//           text: action.text
//         },
//         ...state
//       ]

//     case 2:
//       return state.filter(todo =>
//         todo.id !== action.id
//       )

//     default:
//       return state
//   }
// }
