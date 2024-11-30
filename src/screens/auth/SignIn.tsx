import {View, Text} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import GeneralLayout from '../../layouts/GeneralLayout';
import tw from '../../lib/tailwind';
import colors from '../../themes/colors';

import PrimaryBtn from '../../components/buttons/PrimaryBtn';

import Auth0Icon from '../../assets/icons/auth0.svg';
import Toast from 'react-native-toast-message';
import {useDispatch} from 'react-redux';
import {useAuth0} from 'react-native-auth0';
import {setAccount} from '../../slices/accountSlice';

const SignIn = () => {
  const {authorize, isLoading, user, error} = useAuth0();
  const dispatch = useDispatch();
  const [token, setToken] = useState('');

  const onPress = async () => {
    try {
      const result = await authorize();
      setToken(result?.accessToken ?? '');
      console.log({result: result?.accessToken, user});
      // handleLogin();
    } catch (e) {
      Toast.show({
        type: 'error',
        text1: 'Something went wrong, try again later',
      });
      console.log(e);
    }
  };

  const handleLogin = (payload: object) => {
    // console.log({payload});
    dispatch(setAccount({token, userProfile: payload}));
    Toast.show({
      type: 'success',
      text1: 'Login Successful',
    });
  };

  useEffect(() => {
    if (user) {
      handleLogin(user);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useCallback(() => {
    if (error) {
      Toast.show({
        type: 'error',
        text1: 'Something went wrong, try again later',
      });
    }
  }, [error]);

  return (
    <GeneralLayout style={tw`bg-[${colors.primary50}] flex-1 justify-center`}>
      <View style={tw`flex items-center justify-center gap-2 mb-5`}>
        <Auth0Icon width={50} height={50} color={colors.primary600} />
        <Text style={tw`text-[${colors.primary600}] text-2xl`}>Disclaimer</Text>
        <Text style={tw`text-[${colors.primary600}] text-center font-light`}>
          This application uses Auth0 as its authentication provider to ensure
          secure and seamless login experiences. By signing in, you acknowledge
          that your authentication data will be processed and managed by Auth0,
          which adheres to industry-standard security practices.
        </Text>
      </View>

      <PrimaryBtn
        text="Login with Auth0"
        icon={<Auth0Icon width={20} height={20} color={colors.white} />}
        onPress={onPress}
        isDisabled={isLoading ?? !!user}
        isLoading={isLoading}
      />
    </GeneralLayout>
  );
};

export default SignIn;
