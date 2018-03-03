import React from 'react';
import './index.css';

const AuthorityDecorators = (ComposedComponent) => {
    console.log(1111);
    class AuthorityComponents extends React.Component {
        render() {
            return (
                <ComposedComponent {...this.props} className={"changeColor"} />
            )
        }
    }
    return AuthorityComponents;
}
export default AuthorityDecorators;