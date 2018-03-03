import React, { Component } from 'react'
import { Button } from 'antd';
import Alert from './Alert';

export default class AlertWithButton extends Component {
    handleClick = () => {
        Alert.show('1111');
    }
    render () {
        return (
            <Button onClick={() => this.handleClick()}>弹弹弹，弹走鱼尾纹</Button>
        )
    }
}
