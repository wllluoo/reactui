import React, { Component } from 'react'
import classNames from 'classnames';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import ModalAction from './ModalAction'

import './index.css';

class Sidebar extends Component {
    constructor(props) {
        super(props);
      this.state = {
          isShow: false,
      };
    }
    handleClose = () => {
        this.props.ModalAction({
            step: ''
        });
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps.isShow, this.props.isShow);
        if (nextProps.isShow !== this.props.isShow) {
            this.setState({
                isShow: nextProps.isShow,
            })
        }
    }
  render() {
    const { isShow } = this.state;
    const contentStyle = {};
    contentStyle.show = isShow;
        return(
            <div className={classNames(contentStyle)} style={{ display: 'none' }}>
                <div className={'mask'} onClick={() => this.handleClose()} />
                <div className={'rightPart'}>
                    <div>
                        <button className="closeBtn" type="primary" onClick={() => this.handleClose()}>X</button>
                    </div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
  return {
    isShow: state.buttonControl.isShow,
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({ ModalAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
