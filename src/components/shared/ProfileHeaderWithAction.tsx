import {StyleProp, View, ViewStyle} from 'react-native';
import React from 'react';
import tw from '../../lib/tailwind';
import colors from '../../themes/colors';
import Avatar from './Avatar';
import {useSelector} from 'react-redux';

const ProfileHeaderWithAction = ({
  actions,
  bgStyle,
}: {
  actions: any;
  bgStyle?: StyleProp<ViewStyle>;
}) => {
  const {userProfile} = useSelector((state: any) => state.account);
  // console.log({userProfile});
  return (
    <View
      style={[
        tw`flex-row justify-between items-center px-6 py-3 bg-[${colors.gray25}]`,
        bgStyle,
      ]}>
      <Avatar
        imageSrc={
          userProfile?.picture ?? 'https://picsum.photos/id/237/200/200'
        }
        name={'Emmanuel Onuorah'}
        showOnlineMarker={false}
        style={tw`w-[70px] h-[70px] rounded-xl`}
      />
      {!!actions && <View>{actions}</View>}
    </View>
  );
};

export default ProfileHeaderWithAction;
