import {useState} from 'react';
import {logBatteryLevel} from '../modules/BatteryModule';

export function useBatteryLevel() {
  const [level, setLevel] = useState<number>(0);

  const getLevel = async () => {
    const result = await logBatteryLevel();
    setLevel(result);
  };

  return {level, getLevel};
}
