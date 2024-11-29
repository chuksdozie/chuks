import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import tw from '../../lib/tailwind';
import colors from '../../themes/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfileHeaderWithAction from './ProfileHeaderWithAction';
import {iconSizes} from '../../constants';
import {useDispatch, useSelector} from 'react-redux';
import {useAuth0} from 'react-native-auth0';
import {logOut} from '../../slices/accountSlice';

const DefaultScreenHeader = ({
  subtext,
  secondary,
}: {
  subtext?: string;
  secondary?: boolean;
}) => {
  const {clearSession} = useAuth0();
  const dispatch = useDispatch();
  const {userProfile} = useSelector((state: any) => state.account);
  console.log({userProfile});
  const onLogout = async () => {
    await clearSession({}, {});
    dispatch(logOut());
  };
  return (
    <>
      <View style={tw`w-full h-[200px] bg-[${colors.gray25}] rounded-b-2xl`}>
        <ImageBackground
          source={require('../../assets/images/blue-gradient-bg.png')}
          style={tw`h-[200px] rounded-b-2xl pt-8 px-6`}
          imageStyle={tw`rounded-b-2xl`}>
          <View
            style={tw`flex-row justify-between items-center h-[70px] mb-1 `}>
            <ProfileHeaderWithAction
              actions={
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={onLogout}
                  style={tw`w-[40px] h-[40px] items-center justify-center bg-[${colors.gray25}] rounded-full`}>
                  <Icon
                    name={'power'}
                    size={iconSizes.md}
                    color={colors.primary700}
                  />
                </TouchableOpacity>
              }
              bgStyle={tw`bg-transparent w-full px-0`}
            />
          </View>
          <Text style={tw`text-white  text-2xl`}>{userProfile?.name}</Text>
          <Text style={tw`text-white font-light text-md`}>
            {userProfile?.email}
          </Text>
        </ImageBackground>
      </View>
    </>
  );
};

export default DefaultScreenHeader;
