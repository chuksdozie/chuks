import React from 'react';
import {View, Text} from 'react-native';
import {ToastConfigParams} from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/Ionicons';
import tw from '../lib/tailwind';
import {iconSizes} from '../constants';
import colors from '../themes/colors';

interface CustomToastParams {
  text1: string;
  // Add other properties here if needed
}

export const toastConfig = {
  success: (params: ToastConfigParams<CustomToastParams>) => {
    const {text1} = params as any;

    return (
      <View
        style={tw`flex-row items-center bg-[${colors.success600}] rounded-full p-3 gap-2`}>
        <Icon
          name={'checkmark-circle'}
          size={iconSizes.sm}
          color={colors.white}
        />
        <Text style={tw`text-white font-medium`}>{text1}</Text>
      </View>
    );
  },
  error: (params: ToastConfigParams<CustomToastParams>) => {
    const {text1} = params as any;
    return (
      <View
        style={tw`flex-row items-center bg-[#FFE8D7] rounded-full p-3 gap-2`}>
        <Icon
          name={'information-circle-sharp'}
          size={iconSizes.sm}
          color={colors.error500}
        />
        <Text style={tw`text-[${colors.error500}] font-medium`}>{text1}</Text>
      </View>
    );
  },
};
