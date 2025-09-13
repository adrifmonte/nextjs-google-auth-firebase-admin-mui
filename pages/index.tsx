import React, { useEffect, useState } from 'react';

import { Typography, Grid, Button } from '@mui/material';
import { Google } from '@mui/icons-material';
import { handleLogIn } from '../components/react/auth/login';
import { useSession } from 'next-auth/react';
import { HeadMetadata } from '../components/react/navigation/metadata';

function Home() {
    const { data: session } = useSession();
    const [profile, setProfile] = useState<any>();

    useEffect(() => {
        fetch('/api/users/session', { method: 'GET' })
            .then(result => result.json())
            .then(setProfile)
            .catch(console.warn);
    }, [session]);

    return (
        <Grid container padding={2}>
            <HeadMetadata
                title="Template"
            />
            <Grid item xs={12} pb={2} pl={2}>
                <br />
                {session ? (
                    <Typography variant="h6" component="h2">
                        Hello, {profile?.nickname || session.user?.initials}!
                    </Typography>
                ) : (
                    <Button variant="contained" onClick={handleLogIn} startIcon={<Google />}>
                        Log in with Google
                    </Button>
                )}
            </Grid>
        </Grid>
    );
}

export default Home;
