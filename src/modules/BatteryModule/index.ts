import {NativeModules} from 'react-native';

interface BatteryModuleType {
  getBatteryLevel(): Promise<number>;
}

const {BatteryModule} = NativeModules;

export async function logBatteryLevel(): Promise<number> {
  try {
    console.log('====================================');
    console.log('BatteryModule', BatteryModule);
    console.log('====================================');
    const level = await (BatteryModule as BatteryModuleType).getBatteryLevel();
    return level;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('An error occurred while trying to get the battery level');
  }
}
