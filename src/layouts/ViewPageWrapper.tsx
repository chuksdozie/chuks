import {StyleProp, View, ViewStyle} from 'react-native';
import React from 'react';
import tw from '../lib/tailwind';

const ViewPageWrapper = ({
  style,
  children,
}: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) => {
  return <View style={[tw`mt-5 flex-1`, style]}>{children}</View>;
};

export default ViewPageWrapper;
