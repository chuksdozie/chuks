import {View, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import GeneralLayout from '../../layouts/GeneralLayout';
import tw from 'twrnc';
import colors from '../../themes/colors';
import DefaultScreenHeader from '../../components/shared/DefaultScreenHeader';
import {getDeviceModel} from '../../utils/DeviceInfo';

interface Props {
  name?: string;
}

const UserHome: React.FC<Props> = () => {
  useEffect(() => {
    const fetchDeviceInfo = async () => {
      const model = await getDeviceModel();
      console.log({model});
      // setDeviceModel(model);
    };
    fetchDeviceInfo();
  }, []);

  return (
    <GeneralLayout style={tw`px-0`}>
      <View style={tw` bg-[${colors.gray25}] flex-1`}>
        <ScrollView>
          <DefaultScreenHeader />
        </ScrollView>
      </View>
    </GeneralLayout>
  );
};

export default UserHome;
