import React from 'react';
import {Switch as PaperSwitch} from 'react-native-paper';

const Switch = ({
  isSwitchOn,
  onToggleSwitch,
}: {
  isSwitchOn: boolean;
  onToggleSwitch: () => void;
}) => {
  return <PaperSwitch value={isSwitchOn} onValueChange={onToggleSwitch} />;
};

export default Switch;
