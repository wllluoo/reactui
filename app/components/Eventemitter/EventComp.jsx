import React from 'react';
import EE from './event.js';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    bindingEvent = () => {
      console.log('触发了点击事件');
    }
    componentDidMount() {
      EE.on('click', this.bindingEvent);
    }
    componentWillReceiveProps({  }) {
    }
    render() {
        return (
          <div>
              1111
          </div>  
        );
    }
}