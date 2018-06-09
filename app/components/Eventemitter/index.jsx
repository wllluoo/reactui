import React from 'react';
import EventComp from './EventComp';
import EE from './event.js';


export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    // test = () => {
    //   console.log('触发了点击事件');
    // }
    componentDidMount() {
      // EE.on('click', this.test);
    }
    componentWillReceiveProps({  }) {
    }
    handleOnClick = () => {      
      EE.emit('click');
    }
    render() {
        return (
          <div>
              <button onClick={this.handleOnClick}>使用eventemitter3触发事件</button>
              <EventComp />
          </div>
        );
    }
}