import React from 'react';
import {KeyboardAvoidingView} from 'react-native';
import SignIn from '../screens/auth/SignIn';

function AuthRoute() {
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <SignIn />
    </KeyboardAvoidingView>
  );
}

export default AuthRoute;
