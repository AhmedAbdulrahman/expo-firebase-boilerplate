/* eslint-disable react-native/no-raw-text */
import React, { Component } from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { compose } from 'recompose';
import { withAppContext } from '@containers/App/AppContext';
import Container from '@components/Container';
import { TextInputWrapper, TextInput } from '@components/TextField';
import Button, { ButtonText } from '@components/Button';
import { HeaderMain, BodyBold } from '@components/Text';
import { screens } from '@navigation/constants';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignIn extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = async () => {
    const { email, password } = this.state;
    const { firebase } = this.props;
    try {
      await firebase.doSignInWithEmailAndPassword(email, password);
      this.setState({ ...INITIAL_STATE });
      this.props.navigation.navigate(screens.home);
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';

    const {
      screenProps: { t },
      navigation,
    } = this.props;
    return (
      <Container>
        <HeaderMain style={styles.gutters}>{t('login.title')}</HeaderMain>
        <View style={styles.container}>
          <KeyboardAvoidingView behavior="padding">
            <TextInputWrapper marginBottom={15}>
              <TextInput
                value={email}
                onChangeText={email => this.setState({ email })}
                placeholder="Enter e-mail"
                underlineColorAndroid="transparent"
              />
            </TextInputWrapper>
            <TextInputWrapper>
              <TextInput
                value={password}
                onChangeText={password => this.setState({ password })}
                placeholder="Enter Password"
                underlineColorAndroid="transparent"
                secureTextEntry={true}
                autoCompleteType="email"
                keyboardType="email-address"
              />
            </TextInputWrapper>
          </KeyboardAvoidingView>
        </View>
        <View style={[styles.gutters, { width: '100%' }]}>
          <Button onPress={this.onSubmit} disabled={isInvalid}>
            <ButtonText>{t('login.cta')}</ButtonText>
          </Button>
          {error && <BodyBold>{error.message}</BodyBold>}
        </View>

        <View style={styles.container}>
          <BodyBold onPress={() => navigation.navigate(screens.signUp)}>
            {t('login.register')}
          </BodyBold>
          <BodyBold>{t('login.forgotPassword')}</BodyBold>
        </View>
      </Container>
    );
  }
}

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

export default compose(withAppContext())(SignIn);
