import {ScrollView, StyleProp, View, ViewStyle} from 'react-native';
import React from 'react';
import tw from '../lib/tailwind';

const ScrollViewPageWrapper = ({
  style,
  children,
}: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) => {
  return (
    <ScrollView
      contentContainerStyle={tw``}
      style={tw`w-full`}
      showsVerticalScrollIndicator={false}>
      <View style={[tw`mt-5`, style]}>{children}</View>
    </ScrollView>
  );
};

export default ScrollViewPageWrapper;
