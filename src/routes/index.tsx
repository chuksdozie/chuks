import React, {useEffect} from 'react';
import {
  AppState,
  AppStateStatus,
  Platform,
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';
import AuthRoute from './Auth.routes';
import {useSelector} from 'react-redux';
import ProtectedRoute from './Protected.routes';
import tw from '../lib/tailwind';
import colors from '../themes/colors';
import {focusManager} from '@tanstack/react-query';

export function Navigation() {
  const account = useSelector((state: any) => state?.account);

  function onAppStateChange(status: AppStateStatus) {
    if (Platform.OS !== 'web') {
      focusManager.setFocused(status === 'active');
    }
  }

  useEffect(() => {
    const subscription = AppState.addEventListener('change', onAppStateChange);

    return () => subscription.remove();
  }, []);

  return (
    <View style={tw`flex-1`}>
      <StatusBar barStyle={'dark-content'} backgroundColor={colors.white} />
      <SafeAreaView />
      {account?.userProfile ? <ProtectedRoute /> : <AuthRoute />}
    </View>
  );
}
