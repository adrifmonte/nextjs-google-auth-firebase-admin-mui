import React from 'react';

import { Grid, Paper, Stack } from '@mui/material';

export default function ProfileSection(props) {
    return (
        <Grid container>
            <Paper elevation={4}>
                <Stack gap={1} padding={2}>
                    {props.children}
                </Stack>
            </Paper>
        </Grid>
    );
}
