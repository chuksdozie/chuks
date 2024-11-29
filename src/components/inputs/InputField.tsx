import {
  View,
  TextInput,
  Text,
  KeyboardTypeOptions,
  Platform,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import InputFieldError from './InputFieldError';
import colors from '../../themes/colors';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {iconSizes} from '../../constants';

interface Props {
  label?: string | React.ReactElement;
  secureTextEntry?: boolean;
  placeholder: string;
  value: any;
  keyboardType?: KeyboardTypeOptions;
  onChangeText?: (
    text: string,
  ) => void | React.Dispatch<React.SetStateAction<string>>;
  error?: string;
  showErrMsg?: boolean;
  isTextArea?: boolean;
  isPassword?: boolean;
  disabled?: boolean;
  maxLength?: number;
  leftIcon?: any;
  showClearIcon?: boolean;
  clearField?: () => void;
  style?: StyleProp<ViewStyle>;
  bodyStyle?: StyleProp<ViewStyle>;
  wrapperStyle?: StyleProp<ViewStyle>;
}
const InputField: React.FC<Props> = ({
  label,
  placeholder,
  value,
  keyboardType,
  onChangeText,
  disabled = false,
  leftIcon,
  maxLength,
  error,
  showErrMsg = true,
  isTextArea,
  isPassword,
  style,
  bodyStyle,
  wrapperStyle,
  ...rest
}) => {
  const [secureEntry] = useState(true);
  return (
    <View style={[tw`my-3`, wrapperStyle]}>
      {!!label && (
        <Text style={tw`text-[${colors.gray600}] text-sm mb-2`}>{label}</Text>
      )}
      <View
        style={[
          tw`flex flex-row items-center bg-white border-[1px] px-3 ${
            disabled ? 'opacity-50' : ''
          } ${
            error ? `border-[${colors.error500}]` : `border-[${colors.gray200}]`
          } rounded-xl`,
          bodyStyle,
        ]}>
        {!!leftIcon && <View style={tw`mr-1`}>{leftIcon}</View>}
        <TextInput
          numberOfLines={isTextArea ? 5 : 1}
          textAlignVertical={isTextArea ? 'top' : 'center'}
          secureTextEntry={(label === 'Password' || isPassword) && secureEntry}
          placeholder={placeholder}
          placeholderTextColor={colors.gray400}
          autoCorrect={false}
          value={value}
          editable={!disabled}
          style={[
            tw`flex-1 text-[${colors.gray900}] ${
              Platform.OS === 'ios' ? 'h-13' : ''
            }`,
            style,
          ]}
          keyboardType={keyboardType ?? 'default'}
          onChangeText={onChangeText}
          maxLength={maxLength}
          {...rest}
        />
        {/* {(label === 'Password' || isPassword) && (
          <Icon
            name={secureEntry ? 'eye' : 'eye-off'}
            size={20}
            color={colors.gray400}
            onPress={() => setSecureEntry(prev => !prev)}
          />
        )}
        )} */}

        {error ? (
          <MIcon
            size={iconSizes.sm}
            name="info-outline"
            color={colors.error500}
          />
        ) : (
          <View />
        )}
      </View>
      {error && showErrMsg ? <InputFieldError error={error} /> : <View />}
    </View>
  );
};

export default InputField;
