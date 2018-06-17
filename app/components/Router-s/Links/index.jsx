import React from 'react';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {
    }
    componentWillReceiveProps({  }) {
    }
    handleClick = (event) => {
      const { replace, to } = this.props
      event.preventDefault()
      replace ? this.historyReplace(to) : this.historyPush(to)
      // route here.
    }
    historyPush = (path) => {
      history.pushState({}, null, path)
    }
    
    historyReplace = (path) => {
      history.replaceState({}, null, path)
    }
    render() {
        const { to, children } = this.props;
        return (
          <a href={to} onClick={this.handleClick}>
            {children}
          </a>
        );
    }
}
// <Link to='/some-path' replace={false} />