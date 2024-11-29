import React from 'react';
import {Text, View} from 'react-native';
import tw from '../../lib/tailwind';
import colors from '../../themes/colors';

const InputFieldError: React.FC<{error?: string}> = ({error}) => {
  return (
    <View>
      <Text style={tw`text-[${colors.error500}]`}>{error}</Text>
    </View>
  );
};

export default InputFieldError;
