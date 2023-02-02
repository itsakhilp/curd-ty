import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function NativePickers() {
  return (
    <div style={{ marginTop: '40px' }}>
      <Stack component="form" noValidate spacing={3}>
        <span>
          <TextField
            id="date"
            label="From"
            type="date"
            defaultValue="2017-05-24"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            style={{ marginLeft: '20px' }}
            id="date"
            label="To"
            type="date"
            defaultValue="2017-05-24"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </span>
      </Stack>
    </div>
  );
}