import React, { Component } from 'react';
import { Button } from 'antd';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.css';
let alertCount = 0;
let alert = null;

export default class Alert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: this.props.show,
        }
    }
  handleClick = () => {
      this.setState({
          show: false,
      });
  }
  showAlert = () => {
      this.setState({
          show: true,
      });
  }
  
  render() {
    const { text } = this.props;
    const { show } = this.state;
    return (
        <div>
            {
                show ?
                <div className={'modalContent'}>
                   <div className={'modal'}>
                       <Button className="close" onClick={() => this.handleClick()}>X</Button>

                       <div className="text">
                           {text}
                       </div>
                   </div>
               </div>
               :
               ''
            }
        </div>
    );
  }
}

Alert.propTypes = {
  text: PropTypes.string,
};
Alert.defaultProps = {
  text: '你想咋滴',
};

Alert.show = (text) => {
    if (!alertCount) {
        const props = {
            text,
            show: true,
        }
        const div = document.createElement('div');
        div.id = 'alert';
        document.getElementById('root').appendChild(div);
        // div.className = 'modalContainer';
        alert = ReactDOM.render(<Alert {...props} />, div);
        alertCount++;
    } else {
        alert.showAlert();
    }

}
