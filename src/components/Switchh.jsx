import * as React from 'react';

import Switch from '@mui/material/Switch';



const label = { inputProps: { 'aria-label': 'Color switch demo' } };

export default function Switchh() {
  return (
    <div>
      <Switch {...label} defaultChecked color="default" />
    </div>
  );
} 