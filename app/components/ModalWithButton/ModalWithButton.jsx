import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { Button } from 'antd';
import ModalAction from './ModalAction'
import SidebarContainer from './SidebarContainer';
import { connect } from 'react-redux'

class ModalWithButton extends Component {
  onClick = () => {
    this.actionPlayer('stepOne');
  }

  actionPlayer = (step) => {
    this.props.ModalAction({
      step,
      actionPlayer: (step) => this.actionPlayer(step)
    })
  }


  render() {
    return (
      <div className='wrapper'>
        <Button onClick={() => this.onClick()}>点我点我点我~.~</Button>
        {/* { this.state.result } */}
        <SidebarContainer />
      </div>
    )
  }
}
const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({ ModalAction }, dispatch);


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalWithButton)
// export default ModalWithButton;
