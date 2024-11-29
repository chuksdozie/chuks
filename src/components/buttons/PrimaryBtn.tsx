import React from 'react';
import {
  Pressable,
  Text,
  View,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
  Platform,
} from 'react-native';
import tw from '../../lib/tailwind';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import colors from '../../themes/colors';

interface Props {
  bgColor?: string;
  color?: string;
  text: string;
  outlineColor?: string;
  isDisabled?: boolean;
  icon?: any;
  onPress: () => void;
  isLoading?: boolean;
  outline?: boolean;
  bottomSticky?: boolean;
  bodyStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<ViewStyle>;
}
const PrimaryBtn: React.FC<Props> = ({
  bgColor = colors.primary600,
  color = colors.white,
  text,
  isDisabled,
  icon,
  onPress = () => {},
  isLoading,
  outline,
  outlineColor,
  bottomSticky,
  bodyStyle,
  textStyle,
}) => {
  const {bottom} = useSafeAreaInsets();
  // primaryColor.primaryDisabled;
  return (
    <Pressable
      onPress={() => {
        if (isLoading) return;
        onPress();
      }}
      disabled={isDisabled || isLoading}
      style={[
        tw`rounded-lg justify-center`,
        {
          backgroundColor: outline
            ? color
            : isDisabled && bgColor === colors.primary600
            ? colors.primary200
            : bgColor
            ? bgColor
            : colors.primary600,
          borderColor: outline ? bgColor : colors.primary600,
          borderWidth: outline ? 1 : 0,
          marginTop: bottomSticky ? 'auto' : 0,
          marginBottom: bottomSticky
            ? Platform.OS === 'ios'
              ? bottom
              : 35
            : 0,
          height: 45,
        },
        bodyStyle,
      ]}>
      {isLoading ? (
        <View>
          <ActivityIndicator
            size="small"
            color={outline ? colors.primary600 : color}
            style={tw`text-center`}
          />
        </View>
      ) : (
        <View style={tw`flex flex-row items-center justify-center gap-2`}>
          {icon}
          <Text
            style={[
              tw`text-center text-[${colors.white}]`,
              {
                color: outline ? outlineColor ?? colors.primary600 : color,
              },
              textStyle,
            ]}>
            {text}
          </Text>
        </View>
      )}
    </Pressable>
  );
};

export default PrimaryBtn;
