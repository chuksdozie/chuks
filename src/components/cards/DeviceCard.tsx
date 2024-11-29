import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import tw from 'twrnc';
import colors from '../../themes/colors';

interface DetailItem {
  key: string;
  value: string;
}

const DeviceCard = ({
  iconName,
  details,
  category,
}: {
  iconName: string;
  category: string;
  details: DetailItem[];
}) => {
  return (
    <View
      style={tw` items-center  p-3 border border-gray-300 mt-9 mx-6 rounded-b-md gap-3`}>
      <View
        style={tw`flex-row self-end items-center absolute  bg-[${colors.primary600}] mt--6 p-1 rounded-t-lg`}>
        <Text style={tw`text-white text-xs font-light px-2`}>{category}</Text>
      </View>
      <View style={tw`flex-1 self-start flex-row gap-3 items-center`}>
        <View>
          <Icon name={iconName} size={60} color={colors.primary600} />
        </View>
        <View>
          {details?.map(item => (
            <Text style={tw`text-[${colors.gray700}] text-md font-light`}>
              {item.key}:- {item.value}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

export default DeviceCard;
