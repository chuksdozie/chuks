import {View, Image, StyleProp, ImageStyle} from 'react-native';
import React from 'react';
import tw from '../../lib/tailwind';
import colors from '../../themes/colors';
// import {getDefaultProfileImg} from '../../utils';

const Avatar = ({
  imageSrc,
  //   name,
  showOnlineMarker = true,
  isOnline,
  style,
}: {
  imageSrc: string;
  name?: string;
  size?: number;
  showOnlineMarker?: boolean;
  isOnline?: boolean;
  style?: StyleProp<ImageStyle>;
}) => {
  return (
    <View style={tw`relative`}>
      <Image
        source={{
          uri: imageSrc,
        }}
        style={[tw`h-10 w-10 rounded-full`, style]}
      />
      {showOnlineMarker && (
        <View
          style={tw`h-3.5 w-3.5 absolute bottom-1 right-0 rounded-full border-[1px] border-[${
            colors.white
          }] bg-[${isOnline ? colors.success500 : colors.gray500}]`}
        />
      )}
    </View>
  );
};

export default Avatar;
