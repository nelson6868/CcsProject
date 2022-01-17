import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles'; import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AppBar from '@material-ui/core/AppBar';
import PersistentDrawerRight from './drawer-icon';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom';
import { NavLink, useHistory } from "react-router-dom"
import SearchIcon from '@material-ui/icons/Search';
import { useStateValue } from '../../pages/productdetails/Stateprovider';
import "./headerComponent.css";

import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import logo from '../../assets/logo.png';
import cart from '../../assets/cart.svg'
import user from '../../assets/user.svg'
import search_icon from '../../assets/search_icon.svg'


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    height: 100,
    boxShadow: "none",
    overflow: 'hidden',
    zIndex: '1030',
    color: "#3A3A3A",
    display: "flex !important",
    alignItems: "center !important",
    justifyContent: "space-evenly !important",
    width: "100% !important"
  },
  menuButton: {
    marginLeft: '10%',
    display: 'flex',
    justifyContent: 'center',
    width: "117px",
    height: "41px",
    background: "#262F56",
    border: 'none'

  },
  title: {
    // display: 'flex',
    marginLeft: '20px',
    fontFamily: 'Poppins',
    fontWeight: '400px',
    color: '#3A3A3A !important',
    fontSize: '1rem',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 0),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cartIcon: {
    background: '#FFF',

    '&:hover': {
      transition: 'fade',

    },
  },
  inputRoot: {
    border: "none",
    background: "#f4f5f7 no-repeat 10px 50%",
    fontSize: "1em",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      marginLeft: '5%'
    },
  },

  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },



}));

export default function Header(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const history = useHistory();

  // const [{ userData }, dispatch] = useStateValue();

  const userData = JSON.parse(localStorage.getItem('userData'))

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

  // const handleLogout = () => {
  //   if (userData) {
  //     return (
  //       <Typography>
  //         <img src={user} alt="" /><span style={{ color: '#3A3A3A', fontSize: "1rem", marginLeft: '0.9rem' }} >Login</span>
  //       </Typography>
  //     )
  //   } else {
  //     return (
  //       <Typography>
  //         <img src={user} alt="" /><span style={{ color: '#3A3A3A', fontSize: "1rem", marginLeft: '0.9rem' }}>Login</span>
  //       </Typography>
  //     )
  //   }
  // }

  // const getUser = () => {
  //   if (userData) {
  //     return (<Typography>
  //       <img src={user} alt="" /><span style={{ color: '#3A3A3A', fontSize: "1rem", marginLeft: '0.9rem' }} onClick={localStorage.clear()}>{userData.first_name}</span>
  //     </Typography>)
  //   } else {
  //     return (<Typography className={classes.title} variant="h6" noWrap>
  //       <img src={user} alt="" /><span style={{ color: '#3A3A3A', fontSize: "1rem", marginLeft: '0.9rem' }}>Login</span>
  //     </Typography>)
  //   }
  // }

  // const menuPop = () => {
  //   if (userData) {
  //     return (
  //       <Typography>
  //         <span style={{ color: 'white', fontSize: "1rem" }}>Logout</span>
  //       </Typography>
  //     )
  //   } else {
  //     return (
  //       <Typography>
  //         <span style={{ color: 'white', fontSize: "1rem" }} onClick={() => localStorage.clear()}>Login</span>
  //       </Typography>
  //     )
  //   }
  // }

  const logOut = () => {
    localStorage.clear("userData, cart")
    history.push('/Login');
    window.location.reload();

  }

  // const userLogout = () => {
  //   localStorage.removeItem('userData')
  //   dispatch({
  //     type: 'SET_LOGOUT'
  //   })
  // }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      style={{ top: "12%" }}
    >
      <button className={classes.menuButton} onClick={handleMenuClose}>
        <MenuItem onClick={logOut}><span style={{ color: '#fff' }}> Logout</span></MenuItem>
      </button>
      <MenuItem onClick={handleMenuClose}>
        <Link to="/ProfilePage" style={{ textDecoration: 'none' }}>
          My Account
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to='/orderPage' style={{ textDecoration: 'none' }}>My Orders
        </Link>
      </MenuItem>

      <MenuItem onClick={handleMenuClose}>
        <Link to="/saveitem" style={{ textDecoration: 'none' }}>My Saved Items
        </Link>
      </MenuItem>


      {/* <MenuItem onClick={handleMenuClose}>My account</MenuItem> */}
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>

        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  // const [{ basket }, dispatch] = useStateValue();
  const [{ basket }] = useStateValue();

  return (
    <div style={{ marginBottom: '6.5rem', border: "none" }}>
      <AppBar position="fixed" color="danger" overflow="hidden" className={classes.grow}>
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
          </IconButton> */}

          {isMatch ? (<PersistentDrawerRight />) : (
            <>

              <Link to="/">

                <img src={logo} alt="SIDMACH LOGO" style={{ height: '3rem', marginRight: '3rem' }} />

              </Link>

              <Link to="/businessProductivity/" style={{ textDecoration: 'none' }}>
                <Typography className={classes.title} noWrap style={{ fontFamily: 'Poppins', fontSize: '125%', marginRight: '2rem', fontWeight: '700' }}>
                  Business Productivity

                </Typography>
              </Link>
              <Link to="/dataAnalytics/" style={{ textDecoration: 'none' }}>
                <Typography className={classes.title} noWrap style={{ fontFamily: 'Poppins', fontSize: '125%', marginRight: '2rem', fontWeight: '700' }}>
                  Data Analytics

                </Typography>
              </Link>
              <Link to="/cloudsolution/" style={{ textDecoration: 'none' }}>
                <Typography className={classes.title} noWrap style={{ fontFamily: 'Poppins', fontSize: '125%', marginRight: '1rem', fontWeight: '700' }}>
                  Cloud Solutions

                </Typography>
              </Link>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search for products"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  style={{ backgroundImage: `url(${search_icon})` }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>



              {/* <ShoppingIcon /> */}
              <IconButton aria-label="show 4 new mails" color="inherit" className={classes.cartIcon}>

                <Badge badgeContent={(basket.reduce((acc, item) => acc + item.quantity, 0))} color="secondary">

                  <NavLink exact to="/productcart"><img src={cart} alt="" /></NavLink>
                </Badge>
              </IconButton>


              {/* <IconButton aria-label="show 17 new notifications" color="inherit">
                  <Badge badgeContent={7} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton> */}
              {userData ? <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >

                <Typography className={classes.title} variant="h6" noWrap >
                  <img src={user} alt="" style={{ marginRight: '0.5rem', fontFamily: 'Poppins', fontSize: '125%' }} /><span style={{ fontFamily: 'Poppins', fontSize: '105%', fontWeight: '700' }}>
                    {userData.first_name}</span>
                </Typography>
                {/* <span className={classes.title}><img src={user} alt="" /> Login </span> */}
              </IconButton> :
                <Link to='/Login' style={{ textDecoration: 'none' }}><Typography className={classes.title} variant="h6" noWrap>
                  <img src={user} alt="" /><span style={{ color: '#3A3A3A', marginLeft: '0.9rem', fontFamily: 'Poppins', fontSize: '120%', fontWeight: '700' }}>Login</span>
                </Typography>
                </Link>
              }
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </div>
            </>
          )}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}