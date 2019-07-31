/* eslint-disable react-native/no-raw-text */
import React from 'react';
import { View, Text } from 'react-native';
import { compose } from 'recompose';
import Button, { ButtonText } from '@components/Button';
import { withAppContext } from '@containers/App/AppContext';
import AuthUserContext from './context';

const needsEmailVerification = authUser =>
  authUser &&
  !authUser.emailVerified &&
  authUser.providerData.map(provider => provider.providerId).includes('password');

const withEmailVerification = Component => {
  class WithEmailVerification extends React.Component {
    constructor(props) {
      super(props);

      this.state = { isSent: false };
    }

    onSendEmailVerification = async () => {
      const { firebase } = this.props;
      await firebase.doSendEmailVerification();
      this.setState({ isSent: true });
    };

    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser =>
            needsEmailVerification(authUser) ? (
              <View>
                {this.state.isSent ? (
                  <Text>
                    E-Mail confirmation sent: Check you E-Mails (Spam folder included) for a
                    confirmation E-Mail. Refresh this page once you confirmed your E-Mail.
                  </Text>
                ) : (
                  <Text>
                    Verify your E-Mail: Check you E-Mails (Spam folder included) for a confirmation
                    E-Mail or send another confirmation E-Mail.
                  </Text>
                )}

                <Button onPress={this.onSendEmailVerification} disabled={this.state.isSent}>
                  <ButtonText>Send confirmation E-Mail</ButtonText>
                </Button>
              </View>
            ) : (
              <Component {...this.props} />
            )
          }
        </AuthUserContext.Consumer>
      );
    }
  }

  return compose(withAppContext())(WithEmailVerification);
};

export default withEmailVerification;
