import React, { Component } from 'react'
import classNames from 'classnames';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';
import StepOne from './StepOne';


class SidebarContainer extends Component {
    state = {
        result: ''
    }
    // componentWillMount() {
    //     this.setState({
    //         result: this.getContent(this.props.step),
    //     })
    // }
    getContent = (step) => {
        switch (step) {
            case 'stepOne':
                return <StepOne />;
            default:
                return
                    <div>{''}</div>
                ;
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.step && nextProps.step !== this.props.step) {
            this.setState({
                result: this.getContent(nextProps.step),
            })
        }
    }
    render() {
        const { result } = this.state;
        return (
            <Sidebar >
                {result}
            </Sidebar>
        )
    }

}

const mapStateToProps = (state) => {
  return {
    step: state.buttonControl.step,
  }
}
export default connect(mapStateToProps)(SidebarContainer);
