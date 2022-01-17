import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Typography} from '@material-ui/core';
import { useStateValue } from '../../pages/productdetails/Stateprovider';
// import Facebook from '../Links/Facebook';
// import Instagram from '../Links/Instagram';
// import Linkedin from '../Links/Linkedin';
// import Twitter from '../Links/Twitter';
// import TelegramIcon from '@material-ui/icons/Telegram';

// import LocationOnIcon from '@material-ui/icons/LocationOn';
// import EmailIcon from '@material-ui/icons/Email';
// import CallIcon from '@material-ui/icons/Call';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import YouTubeIcon from '@material-ui/icons/YouTube';

import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import location from "../../assets/location.svg";
import mail from "../../assets/mail.svg";
import youtube from "../../assets/youtube.svg";
import phone from "../../assets/phone.svg";
import send from "../../assets/send.svg";

import logo from '../../assets/logo.png';
// import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: 'flex',
    position: 'absolute',
    backgroundColor: 'white',
    flexWrap: 'wrap',
    marginBottom:"-20rem",
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  firstPaper: {
    width: '28%',
    height: '350px',
    boxShadow: 'none',
    marginLeft: '100px',
  },
  secondPaper: {
    width: '27%',
    height: '350px',
    boxShadow: 'none',
    marginLeft: '50px',
    marginTop: '40px',
    fontFamily: 'Poppins',
    fontWeight: '300',
    fontSize: '16px'
  },
  logo: {
    margin: '10px',
    height: '3rem',
    marginBottom: '25px'
  },
  Line: {
    width: "calc(100% - 100px)",
    height: "1px",
    backgroundColor: "#d8d8d8",
    margin: "30px auto 30px"
  },

  footerContactUs: {
    width: "300px",
    display: "flex",
    margin: "20px 0",
    // justify-content: space-between;
    alignItems: "flex-start",
    lineHeight: "1.6",
    fontFamily: 'Poppins',
    fontWeight: '300',
    fontSize: '16px'
  },

  iconStyle: {

    marginRight: '5px'
  },
  h4: {
    marginTop: '0px',
    fontSize: '24px',
  },
  poweredby: {
    display:"flex",
    flexDirection:"row",
    width:"100vw",
    fontFamily:"poppins",
    justifyContent:"center",
    height: '0%'

  },
  emailInput: {
    '& > *': {


      border: "none",
      outline: "none",
      background: "#f4f5f7",
      minHeight: "100%",
      width: "30%",
      padding: "0 10px",
    },
  }
}));

const Footer = () => {
  const classes = useStyles();
  const [{ userData }] = useStateValue();

  return (
    <div style={{marginBottom:"-30rem",}}>
      <div className={classes.root}>
        <div className={classes.Line}></div>
        <Paper className={classes.firstPaper}>
          <img src={logo} alt="SIDMACH LOGO" className={classes.logo} />
          <p className={classes.footerContactUs}><img src={location} alt="" style={{ marginTop: '4%' }} />
            <span style={{ marginLeft: '2%' }}>Plot 15, Block J, Otunba Jobi Fele Way, Central Business District, Alausa, Ikeja.</span></p>
          <p className={classes.footerContactUs}><img src={mail} alt="" style={{ marginTop: '1%' }} />
            <span style={{ marginLeft: '2%' }}>corporate@sidmach.com</span></p>
          <p className={classes.footerContactUs}> <img src={phone} alt="" style={{ marginTop: '4%' }} />
            <span style={{ marginLeft: '2%' }}>0908 719 7603, 0908 719 7604, 0908 734 9482</span>
          </p>
        </Paper>
        <Paper className={classes.secondPaper}>
          <h3 style={{ fontWeight: '800', fontSize: '24px' }}> Products and Services<br /><br /></h3>
          <p>Office 365 <br /><br />
            Exchange Online <br /><br />
            Microsoft Teams  <br /><br />
            Skype for Business <br /><br />
            Sharepoint Online  </p><br /><br />
        </Paper>
        <Paper className={classes.secondPaper}>
          <h3 style={{ fontWeight: '800', fontSize: '24px' }}> Stay Connected</h3>
          <div style={{
            marginTop: "9%",
            marginBottom: "18%",
          }}>
            <a href="https://www.facebook.com/SidmachTechnologies/">
              <img src={facebook} alt="" style={{ paddingRight: "10px" }} />
            </a>

            <a href="https://www.instagram.com/officialsidmach/">
            <img src={instagram} alt="" style={{ paddingRight: "10px" }} />
            </a>

            <a href="https://twitter.com/Sidmach">
            <img src={twitter} alt="" style={{ paddingRight: "10px" }} />
            </a>

            <a href="https://ng.linkedin.com/in/sidmach-technologies">
            <img src={linkedin} alt="" style={{ paddingRight: "10px" }} />
            </a>
            
            <a href="https://www.youtube.com/channel/UCbTal2r7lE3Tfp0ahXgK-KA">
            <img src={youtube} alt="" style={{ paddingRight: "10px" }} />
            </a>
          </div>
          {/* <Link to="/ContactUs" style={{ color: "#282E52", textDecoration: 'none' }}><h3 style={{ marginBottom: '20px', marginTop: '-35px' }}>Contact Us</h3></Link> */}
          <h3 style={{ fontWeight: '800', fontSize: '24px' }}> Stay Updated</h3>
          <form style={{
            marginTop: "25px"
          }}>
            <input type="email" defaultValue={userData && userData.email} placeholder="Enter your email" style={{

              border: "none",
              outline: "none",
              background: "#f4f5f7",
              height: "48px",
              width: "240px",
              padding: "0 10px"

            }} />
            <button style={{

              border: "none",
              outline: "none",
              background: "#282E52",
              height: "48px",

              padding: "0 10px"

            }}><img src={send} alt="" /></button>
          </form>
        </Paper>
           <div className={classes.poweredby}>
              <Typography style={{color:'#000000',fontSize:"15px", fontWeight: '700'}}>
              Powered By : Sidmach Technologies Nigeria Limited Copyright 2021 - Cloud Solution Provider
              </Typography>
              {/* <img src={logo} alt="sidmach" style={{marginLeft:'1rem', height: '2em'}}/> */}
            </div>
      </div>
      
    </div>
  );
}

export default Footer;