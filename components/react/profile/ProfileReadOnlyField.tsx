import React from 'react';

import { Stack, Typography } from '@mui/material';
import { fieldCss } from './ProfileField';

export default function ReadOnlyField(props) {
    return (
        <Stack direction="row" gap={1}>
            <Typography variant="body1" component="label" sx={fieldCss}>
                {props.title}: 
            </Typography>
            <Typography color="text.secondary" component="span">
                {props.children}
            </Typography>
        </Stack>
    );
}
