import React from 'react';
import { compose } from 'recompose';
import { withAppContext } from '@containers/App/AppContext';
import { screens } from '@navigation/constants';
import AuthUserContext from './context';

const withAuthorization = condition => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      this.listener = this.props.firebase.onAuthUserListener(
        authUser => {
          if (!condition(authUser)) {
            this.props.navigation.navigate(screens.signIn);
          }
        },
        () => this.props.navigation.navigate(screens.signIn)
      );
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser => (condition(authUser) ? <Component {...this.props} /> : null)}
        </AuthUserContext.Consumer>
      );
    }
  }

  return compose(withAppContext())(WithAuthorization);
};

export default withAuthorization;
