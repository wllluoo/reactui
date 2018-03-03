import React, { Component } from 'react'
import { Modal, Button } from 'antd';
import { connect } from 'react-redux';

class StepOne extends Component {
  constructor () {
    super()
    this.state = {
    }
  }

  handleClick = () => {
    this.props.actionPlayer('stepTwo')
  }


  render() {
    return (
      <div className='wrapper'>
        第一页的内容
        {/* <Button onClick={() => this.handleClick()}>去第二页</Button> */}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    step: state.step,
  }
}
export default connect(mapStateToProps)(StepOne);
