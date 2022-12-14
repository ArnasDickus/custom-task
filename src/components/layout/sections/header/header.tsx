import React, { useState, MouseEvent } from "react";
import styled from "styled-components";
import { navLinks } from "./nav-links/nav-links";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useRouter } from "next/router";
import Link from "next/link";
import { routes } from "@constants/routes";

const Header = () => {
  const router = useRouter();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const displayLinks = (routeLink: string) => {
    if (routeLink === "/" && router.pathname !== "/") {
      return "inactive";
    }

    if (router.pathname.includes(routeLink)) {
      return "active";
    }
    return "inactive";
  };

  return (
    <ContainerHeader>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Link href={routes.home}>
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  cursor: "pointer",
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Custom Task
              </Typography>
            </Link>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {navLinks.map((link, index) => {
                  return (
                    <Link key={index} href={link.routeLink}>
                      <MenuItem
                        key={index}
                        selected={link.routeLink === router.pathname}
                        onClick={() => {
                          handleCloseNavMenu();
                        }}
                      >
                        <Typography textAlign="center">
                          {link?.routeName}
                        </Typography>
                      </MenuItem>
                    </Link>
                  );
                })}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Custom Task
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {navLinks.map((link, index) => {
                return (
                  <Link key={index} href={link.routeLink}>
                    <Button
                      className={displayLinks(link.routeLink)}
                      key={index}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      {link?.routeName}
                    </Button>
                  </Link>
                );
              })}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ContainerHeader>
  );
};

export default Header;

const ContainerHeader = styled.header`
  header {
    background-color: ${(props) => props.theme.colors.darkBlue2f5};
  }

  .title {
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    margin: 0;
    color: ${(props) => props.theme.colors.textColor1};
    cursor: pointer;
    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.colors.textHover1};
    }
  }

  .nav {
    display: flex;
    align-items: center;
  }

  .ul {
    display: flex;
    gap: 10px;
  }

  .link {
    text-decoration: none;
    color: ${(props) => props.theme.colors.textColor1};
  }

  .active {
    color: white;
  }

  .inactive {
    color: rgb(255 255 255 / 40%);
  }
`;
