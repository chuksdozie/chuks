import React from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';
import tw from '../lib/tailwind';
import colors from '../themes/colors';

const GeneralLayout: React.FC<{
  childrenNoPadding?: JSX.Element | null | boolean | React.ReactElement;
  children?: JSX.Element | JSX.Element[] | null | boolean | React.ReactElement;
  style?: StyleProp<ViewStyle>;
}> = ({childrenNoPadding, children, style}) => {
  return (
    <View style={tw`flex-1 h-[100%]`}>
      <View>{childrenNoPadding}</View>
      <View style={[tw`flex-1 px-6 bg-[${colors.gray25}]`, style]}>
        {children}
      </View>
    </View>
  );
};

export default GeneralLayout;
