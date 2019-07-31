/* eslint-disable promise/always-return */
/* eslint-disable promise/prefer-await-to-then */
import React, { Component } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Switch } from 'react-native';
import { compose } from 'recompose';
import { withAppContext } from '@containers/App/AppContext';
import Container from '@components/Container';
import { TextInputWrapper, TextInput } from '@components/TextField';
import Button, { ButtonText } from '@components/Button';
import { HeaderMain, BodyBold } from '@components/Text';
import { screens } from '@navigation/constants';
import { ADMIN } from '@constants/Roles';
const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  isAdmin: false,
  error: null,
};

const ERROR_CODE_ACCOUNT_EXISTS = 'auth/email-already-in-use';

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with this E-Mail address already exists.
  Try to login with this account instead. If you think the
  account is already used from one of the social logins, try
  to sign in with one of them. Afterward, associate your accounts
  on your personal account page.
`;

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = () => {
    const { username, email, passwordOne, isAdmin } = this.state;
    const roles = {};

    if (isAdmin) {
      roles[ADMIN] = ADMIN;
    }

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        return this.props.firebase.user(authUser.user.uid).set(
          {
            username,
            email,
            roles,
          },
          { merge: true }
        );
      })
      // .then(() => {
      //   return this.props.firebase.doSendEmailVerification();
      // })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.navigation.navigate(screens.dashboard);
      })
      .catch(error => {
        if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS;
        }
        this.setState({ error });
      });
  };

  handleToggleSwitch = () =>
    this.setState(state => ({
      isAdmin: !state.isAdmin,
    }));

  render() {
    const { username, email, passwordOne, passwordTwo, isAdmin, error } = this.state;
    const {
      screenProps: { t },
      navigation,
    } = this.props;

    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === '' || email === '' || username === '';
    return (
      <Container>
        <HeaderMain style={styles.gutters}>{t('register.title')}</HeaderMain>
        <View style={styles.container}>
          <KeyboardAvoidingView behavior="padding">
            <TextInputWrapper marginBottom={15}>
              <TextInput
                value={username}
                onChangeText={username => this.setState({ username })}
                placeholder="Full Name"
                underlineColorAndroid="transparent"
              />
            </TextInputWrapper>
            <TextInputWrapper marginBottom={15}>
              <TextInput
                value={email}
                onChangeText={email => this.setState({ email })}
                placeholder="Email Address"
                underlineColorAndroid="transparent"
              />
            </TextInputWrapper>
            <TextInputWrapper>
              <TextInput
                value={passwordOne}
                onChangeText={passwordOne => this.setState({ passwordOne })}
                placeholder="Password"
                underlineColorAndroid="transparent"
                secureTextEntry={true}
              />
            </TextInputWrapper>
            <TextInputWrapper>
              <TextInput
                value={passwordTwo}
                onChangeText={passwordTwo => this.setState({ passwordTwo })}
                placeholder="Confirm Password"
                underlineColorAndroid="transparent"
                secureTextEntry={true}
              />
            </TextInputWrapper>
            <Switch onValueChange={this.handleToggleSwitch} value={isAdmin} />
          </KeyboardAvoidingView>
        </View>
        <View style={[styles.gutters, { width: '100%' }]}>
          <Button onPress={this.onSubmit} disabled={isInvalid}>
            <ButtonText>{t('register.cta')}</ButtonText>
          </Button>
          {error && <BodyBold>{error.message}</BodyBold>}
        </View>

        <View style={styles.container}>
          <BodyBold onPress={() => navigation.navigate(screens.signIn)}>
            {t('register.login')}
          </BodyBold>
        </View>
      </Container>
    );
  }
}

export default compose(withAppContext())(SignUp);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gutters: {
    marginTop: 20,
    marginBottom: 20,
  },
});
