import React from "react";
import Link from "next/link";
import { Menu as MenuIcon, MenuBookTwoTone, CoPresentTwoTone, ArchitectureTwoTone, StackedLineChartTwoTone, CasinoTwoTone } from "@mui/icons-material";
import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { APP_TITLE } from "./page-names";

const unselectableMenuItemStyle = {
    pointerEvents: 'none',
    cursor: 'default',
};

const disabledMenuItemStyle = {
    ...unselectableMenuItemStyle,
    paddingTop: 0,
    minHeight: 10,
};

const categoryMenuItemStyle = {
    ...unselectableMenuItemStyle,
    paddingTop: 1,
    textTransform: 'uppercase',
};

function CategoryMenuItem({ children }) {
    return (
        <MenuItem sx={categoryMenuItemStyle}>
            <Typography variant="body1" component="span" fontSize=".85rem">
                {children}
            </Typography>
        </MenuItem>
    );
}

function MenuDivider() {
    return (
        <MenuItem divider sx={disabledMenuItemStyle} disableGutters disableRipple disableTouchRipple disabled />
    );
}

const menuItemStyle = { textIndent: 16 };
const linkStyle = { textDecoration: 'none', color: 'inherit' };

function PageMenuItem({ href, children, onClick }) {
    return (
        <Link href={href} style={linkStyle} onClick={onClick}>
            <MenuItem sx={menuItemStyle}>{children}</MenuItem>
        </Link>
    );
}

const menuIconStyle = { mr: 2 };
function MainMenu() {
    const [mainMenuRef, setMainMenuRef] = React.useState<null | HTMLElement>(null);
  
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setMainMenuRef(event.currentTarget);
    };
  
    const handleClose = () => {
        setMainMenuRef(null);
    };

    return (
        <div>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={menuIconStyle}
                onClick={handleMenu}
            >
                <MenuIcon />
            </IconButton>
            <Menu
                anchorEl={mainMenuRef}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(mainMenuRef)}
                onClose={handleClose}
            >
                <CategoryMenuItem>Example</CategoryMenuItem>
                <PageMenuItem
                    href="/"
                    onClick={handleClose}
                >
                    <MenuBookTwoTone />
                    Example
                </PageMenuItem>
                <MenuDivider />
                <CategoryMenuItem>Pages</CategoryMenuItem>
                <PageMenuItem
                    href="/"
                    onClick={handleClose}
                >
                    <CasinoTwoTone />
                    {APP_TITLE}
                </PageMenuItem>
                <PageMenuItem
                    href="/profile"
                    onClick={handleClose}
                >
                    <StackedLineChartTwoTone />
                    Profile
                </PageMenuItem>
            </Menu>
        </div>
    );
}

export default MainMenu;
