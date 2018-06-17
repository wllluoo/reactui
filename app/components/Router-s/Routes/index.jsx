import React from 'react';

export default class Routes extends React.Component {

    componentDidMount() {
      window.addEventListener("popstate", this.handlePop)
    }
    componentWillUnmount() {
      window.removeEventListener("popstate", this.handlePop)
    }
    componentWillReceiveProps({  }) {
    }
    handlePop = () => {
      this.forceUpdate()
    }
    matchPath = (pathname, options) => {
        const { exact = false, path } = options;
        if (!path) {
          return {
            path: null,
            url: pathname,
            isExact: true,
          }
        }
        const match = new RegExp(`^${path}`).exec(pathname)
        if (!match) {
          // There wasn't a match.
          return null
        }
      
        const url = match[0]
        const isExact = pathname === url
      
        if (exact && !isExact) {
          // There was a match, but it wasn't
          // an exact match as specified by
          // the exact prop.
      
          return null
        }
      
        return {
          path,
          url,
          isExact,
        }
    }
    render() {
        const {
          path,
          exact,
          component,
          render,
        } = this.props;
        const match = this.matchPath(
          location.pathname, 
          { path, exact }
        )
        if (!match) return;
        if (component) {
          React.createElement(component, { match })
        }
        if (render) return render({ match })
        return null
    }
}
/* <Route path='/settings' render={({ match }) => {
  return <Settings authed={isAuthed} match={match} />
}} /> */