import React, { useEffect, useState } from 'react';

import { Button, Grid, Typography } from '@mui/material';
import { useSession } from 'next-auth/react';
import { LogInAvatar } from '../components/react/auth/login';
import ProfileSection from '../components/react/profile/ProfileSection';
import ReadOnlyField from '../components/react/profile/ProfileReadOnlyField';
import ProfileField from '../components/react/profile/ProfileField';
import { HeadMetadata } from '../components/react/navigation/metadata';
import { APP_TITLE } from '../components/react/navigation/page-names';

function Profile() {
    const [profile, setProfile] = useState<any>();
    const [newProfile, setNewProfile] = useState<any>();
    const { data: session } = useSession();
    const hasChanges = profile?.nickname !== newProfile?.nickname;

    function syncProfileState(profile) {
        setProfile(profile || {});
        setNewProfile(profile || {});
    }

    useEffect(() => {
        fetch('/api/users/session', { method: 'GET' })
            .then(result => result.json())
            .then(syncProfileState)
            .catch(console.error);
    }, []);

    function handleSaveProfile() {
        fetch('/api/users/session', { method: 'PUT', body: JSON.stringify(newProfile) })
            .then(result => result.json())
            .then(syncProfileState)
            .catch(console.error);
    }

    const profileTitle = profile?.nickname ? `${profile.nickname}'s Profile` : "My Profile";

    return (
        <Grid container padding={2} gap={2}>
            <HeadMetadata
                title={`${APP_TITLE} / ${profileTitle}`}
            />
            <Grid item xs={12}>
                <Typography variant="h5" component="h2">
                    Profile
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <ProfileSection>
                    <Typography variant="h6" component="h3">
                        Google Profile
                    </Typography>

                    <ReadOnlyField title="Avatar (name initials)">
                        <LogInAvatar
                            initials={session?.user?.initials}
                            isDisabled={true}
                        />
                    </ReadOnlyField>
                </ProfileSection>
            </Grid>
            <Grid item xs={12}>
                <ProfileSection>
                    <Typography variant="h6" component="h3">
                        {APP_TITLE} Profile
                    </Typography>

                    <ProfileField
                        hasChanges={hasChanges}
                        profile={newProfile}
                        setProfile={setNewProfile}
                        title="Display name"
                        field="nickname"
                    />
                </ProfileSection>
            </Grid>
            <Grid item xs={12}>
                <Grid container>
                    <Button onClick={handleSaveProfile} disabled={!hasChanges}>
                        Save
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
}

Profile.requiresAuthentication = true;

export default Profile;
