import React from 'react';
import { AsyncStorage } from 'react-native';
import { compose } from 'recompose';
import { withAppContext } from '@containers/App/AppContext';
import AuthUserContext from './context';

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        authUser: async () => await AsyncStorage.getItem('authUser'),
      };
    }

    componentDidMount() {
      this.listener = this.props.firebase.onAuthUserListener(
        async authUser => {
          await AsyncStorage.setItem('authUser', JSON.stringify(authUser));
          this.setState({ authUser });
        },
        async () => {
          await AsyncStorage.removeItem('authUser');
          this.setState({ authUser: null });
        }
      );
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return (
        <AuthUserContext.Provider value={this.state.authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      );
    }
  }
  return compose(withAppContext())(WithAuthentication);
};

export default withAuthentication;
