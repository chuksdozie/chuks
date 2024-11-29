import {View, Text, TouchableOpacity, StyleProp, TextStyle} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../themes/colors';

const CheckBox = ({
  checked,
  onChecked,
  label,
  labelStyle,
}: {
  checked: boolean;
  onChecked?: () => void;
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
}) => {
  return (
    <View style={tw`my-3 flex-row items-center `}>
      <TouchableOpacity
        onPress={onChecked}
        style={tw`h-5 w-5 items-center justify-center border-[1px] border-[${
          checked ? colors.primary600 : colors.gray300
        }] ${checked ? `bg-[${colors.primary600}]` : ''} rounded-full`}>
        {checked ? (
          <Icon name="checkmark" color={colors.white} size={15} />
        ) : (
          <View />
        )}
      </TouchableOpacity>

      {!!label && (
        <Text style={[tw`ml-2 text-[${colors.gray700}]`, labelStyle]}>
          {label}
        </Text>
      )}
    </View>
  );
};

export default CheckBox;
