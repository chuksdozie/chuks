/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  useAuth0,
  Auth0Provider,
  LocalAuthenticationStrategy,
  LocalAuthenticationLevel,
  LocalAuthenticationOptions,
} from 'react-native-auth0';
import auth0Config from './auth0-configuration';

import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Navigation} from './src/routes';
import Toast from 'react-native-toast-message';
import {toastConfig} from './src/configs/toast';
import {Provider} from 'react-redux';
import {store} from './src/slices';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {MenuProvider} from 'react-native-popup-menu';
import tw from './src/lib/tailwind';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Home = () => {
  const {isLoading} = useAuth0();
  const queryClient = new QueryClient();

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={tw`flex-1`}>
        <MenuProvider>
          <NavigationContainer>
            <QueryClientProvider client={queryClient}>
              <KeyboardAvoidingView
                style={{flex: 1}}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <Navigation />
                <Toast position="top" bottomOffset={150} config={toastConfig} />
              </KeyboardAvoidingView>
              {/* </Provider> */}
            </QueryClientProvider>
          </NavigationContainer>
        </MenuProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

const App = () => {
  const localAuthOptions: LocalAuthenticationOptions = {
    title: 'Authenticate to retreive your credentials',
    subtitle: 'Please authenticate to continue',
    description: 'We need to authenticate you to retrieve your credentials',
    cancelTitle: 'Cancel',
    evaluationPolicy: LocalAuthenticationStrategy.deviceOwner,
    fallbackTitle: 'Use Passcode',
    authenticationLevel: LocalAuthenticationLevel.weak,
    deviceCredentialFallback: false,
  };
  return (
    <Provider store={store}>
      <Auth0Provider
        domain={auth0Config.domain}
        clientId={auth0Config.clientId}
        localAuthenticationOptions={localAuthOptions}>
        <Home />
      </Auth0Provider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  error: {
    margin: 20,
    textAlign: 'center',
    color: '#D8000C',
  },
});

export default App;
