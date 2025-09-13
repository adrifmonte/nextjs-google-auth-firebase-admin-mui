import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Avatar, Menu, MenuItem } from '@mui/material';
import { green } from '@mui/material/colors';
import Link from 'next/link';

export function handleLogIn(event) {
    event.preventDefault();
    // TODO signIn returns an { ok } object
    // it could be useful to handle errors
    signIn('google', {
        redirect: false,
    });
}

export function handleLogOut(event) {
    event.preventDefault();
    signOut({
        redirect: true,
        callbackUrl: '/',
    });
}

export function LogInAvatar({
    initials,
    onClick,
    isDisabled
}: {
    initials?: string;
    isDisabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}) {
    return (
        <Avatar
            alt="My avatar"
            onClick={!isDisabled ? onClick : undefined}
            aria-disabled={isDisabled}
            sx={{
                mr: 1,
                flexShrink: 0,
                bgcolor: initials && green[500],
                ":hover": {
                    cursor: isDisabled ? "auto" : "pointer",
                }
            }}
        >
            {initials}
        </Avatar>
    );
}

const linkStyle = { textDecoration: 'none', color: 'inherit' };
const containerStyle = { display: 'flex', flexGrow: 1, justifyContent: 'right' };
export function LogInButton() {
    const { data: session, status } = useSession();
    const [profileMenuRef, setProfileMenuRef] = React.useState<null | HTMLElement>(null);
    const isLoading = status === 'loading';

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setProfileMenuRef(event.currentTarget);
    };
    
    const handleClose = () => {
        setProfileMenuRef(null);
    };

    return (
        <div style={containerStyle}>
            <LogInAvatar
                initials={session?.user?.initials}
                onClick={handleMenu}
                isDisabled={isLoading}
            />
            <Menu
                anchorEl={profileMenuRef}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(profileMenuRef)}
                onClose={handleClose}
              >
                {session && (
                    <Link href="/profile" onClick={handleClose} style={linkStyle}>
                        <MenuItem>
                            Profile
                        </MenuItem>
                    </Link>
                )}
                <MenuItem onClick={(e) => {
                    session ? handleLogOut(e) : handleLogIn(e);
                    handleClose();
                }}>
                    {session ? 'Sign out' : 'Log in with Google'}
                </MenuItem>
            </Menu>
        </div>
    );
}
