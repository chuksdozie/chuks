import {NativeModules} from 'react-native';
const {GeneralDeviceInfo} = NativeModules;

export const getDeviceModel = async () => {
  try {
    const model = await GeneralDeviceInfo.getDeviceInfo();
    const battery = await GeneralDeviceInfo.getBatteryLevel();
    return {model, battery};
  } catch (error) {
    console.error(error);
  }
};
