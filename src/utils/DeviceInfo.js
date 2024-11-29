import {NativeModules} from 'react-native';
const {GeneralDeviceInfo} = NativeModules;

export const getDeviceModel = async () => {
  try {
    const model = await GeneralDeviceInfo.getDeviceInfo();
    return model;
  } catch (error) {
    console.error(error);
  }
};
