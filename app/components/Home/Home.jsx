import React, { Component } from 'react';

export default class Home extends Component {
    componentDidMount() {
        document.getElementById('input').value = 132;
        // const obj = document.getElementById('input');
        // obj.fireEvent("onchange")
    }
    handleChange= () => {
        console.log(1111)
    }
    render() {
        return (
            <div>
                <input value='' id="input" onInput={() => this.handleChange()} />

                首页
            </div>
        )
    }
}