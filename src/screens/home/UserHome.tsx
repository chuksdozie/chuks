import {View, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import GeneralLayout from '../../layouts/GeneralLayout';
import tw from 'twrnc';
import colors from '../../themes/colors';
import DefaultScreenHeader from '../../components/shared/DefaultScreenHeader';
import {getDeviceModel} from '../../utils/DeviceInfo';
import DeviceCard from '../../components/cards/DeviceCard';

interface Props {
  name?: string;
}

const UserHome: React.FC<Props> = () => {
  const [device, setDevice] = React.useState<any>({});

  useEffect(() => {
    const fetchDeviceInfo = async () => {
      const model = await getDeviceModel();
      console.log({model});
      setDevice(model ?? {});
    };
    fetchDeviceInfo();
  }, []);

  return (
    <GeneralLayout style={tw`px-0`}>
      <View style={tw` bg-[${colors.gray25}] flex-1`}>
        <ScrollView>
          <DefaultScreenHeader />

          <DeviceCard
            category="Device"
            iconName="phone-portrait-outline"
            details={[
              {
                key: 'brand',
                value: device?.model?.brand ?? '',
              },
              {key: 'device', value: device?.model?.device ?? ''},
              {key: 'manufacturer', value: device?.model?.manufacturer ?? ''},
              {key: 'model', value: device?.model?.model ?? ''},
              {key: 'product', value: device?.model?.product ?? ''},
            ]}
          />
          <DeviceCard
            category="Battery"
            iconName={
              device?.battery?.isCharging ? 'battery-charging' : 'battery-half'
            }
            details={[
              {key: 'battery level', value: `${device?.battery?.level}%`},
              {
                key: 'status',
                value: device?.battery?.isCharging
                  ? 'Charging'
                  : 'Not Charging',
              },
            ]}
          />
        </ScrollView>
      </View>
    </GeneralLayout>
  );
};

export default UserHome;
