import React from 'react';

import { Stack, TextField, Typography } from '@mui/material';

export const fieldCss = { alignSelf: 'center' };

export default function ProfileField({ title, profile, field, setProfile, hasChanges }) {
    return (
        <Stack direction="row" gap={1}>
            <Typography variant="body1" component="label" sx={fieldCss}>
                {title}: 
            </Typography>
            <TextField
                label={title}
                color={hasChanges ? "secondary" : "primary"}
                variant="outlined"
                focused={Boolean(profile && profile[field])}
                value={profile && profile[field] || ""}
                onChange={e => {
                    setProfile({
                        ...profile,
                        [field]: e.currentTarget.value,
                    })
                }}
            />
        </Stack>
    );
}
