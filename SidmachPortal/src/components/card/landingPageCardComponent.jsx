import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import Grid from '@material-ui/core/Grid';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import HP7B2 from '../../assets/HP7B2.svg'
import Ellipse6 from '../../assets/Ellipse6.svg'
import CloudSolution1 from '../../assets/CloudSolution1.svg'
import Cybersecurity1 from '../../assets/Cybersecurity1.svg'
import DataAna1 from '../../assets/DataAna1.svg'
import axios from 'axios';
import * as ReactBootStrap from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        margin: '10px 10px',
        height: '55vh'
    },
    h1: {
        textAlign: 'center',
        paddingTop: '40px',
        paddingBottom: '40px',
        fontFamily: 'Poppins',
        fontWeight: 1000
    },


    cardStyles: {
        display: 'flex',
        justifyContent: 'center'
    },
    bodyContainer: {
        paddingBottom: '300px',
        maxWidth: 1200,
    },

    Media: {
        height: '250px',
        width: '100%'
    },

    Circle: {
        position: 'absolute',
        width: '62px',
        height: '62px',
        left: '402px',
        top: '614px',
        background: '#282E52',
    },

    button: {
        position: 'relative',
        color: '#fff',
        width: '200px',
        display: 'flex',
        justifyContent: 'center',
        marginLeft: '20%',
        backgroundColor: '#022b5f',
        marginTop: '10px',
        marginBottom: '40px',
        fontFamily: 'Poppins',
    }

}));

const LandingCard = () => {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [value, setValue] = useState(2);

    const getProductData = () => {
        // debugger
        // restoreProductSaveDefault();

        try {
            axios.get("products/sidmach-products/", {
                // method: "GET",
                // url: "https://catfact.ninja/fact",
            }).then(res => {
                const products = res.data;
                setProducts(products);
                console.log(res.data)


            });

            setLoading(true)

        }
        catch (error) {
            console.log("error", error);
        }
    }

    useEffect(() => {
        getProductData();
    }, [])
    return (
        <div>
            <CssBaseline>
                <Container maxWidth="md" className={classes.bodyContainer}>
                    <Typography component="div" style={{ backgroundColor: '#fff', height: '100vh' }}>
                        <div>
                            <h1 className={classes.h1}>Product Category</h1>
                        </div>

                        <div className={classes.cardStyles}>
                            <Grid container direction="row"
                                justify="center"
                                alignItems="center">
                                <Grid item md={3} lg={3} sm={6} xs={12}>
                                    <Card className={classes.root}>
                                        <CardActionArea>
                                            <Link to="/businessProductivity/">
                                                <CardMedia>
                                                    <img className={classes.Media} src={HP7B2} alt="Microsoft-img" />
                                                    <img className={classes.Circle} src={Ellipse6} alt="Microsoft-img" />
                                                </CardMedia>
                                            </Link>
                                            <CardContent>
                                            <Rating
                                                name="simple-controlled"
                                                value={value}
                                                onChange={(event, newValue) => {
                                                setValue(newValue);
                                                }}
                                            />
                                                <Typography variant="body2" color="textSecondary" component="h2" style={{ fontFamily: 'Poppins', fontWeight: '700', fontSize: '100%' }}>
                                                    <br />
                                                    Business Productivity
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                <Grid item md={3} lg={3} sm={6} xs={12}>
                                    <Card className={classes.root}>
                                        <CardActionArea>
                                            <Link to="/cloudsolution/">
                                                <CardMedia>
                                                    <img className={classes.Media} src={CloudSolution1} alt="Microsoft-img" />
                                                </CardMedia>
                                            </Link>
                                            <CardContent>
                                            <Rating
                                                name="simple-controlled"
                                                value={value}
                                                onChange={(event, newValue) => {
                                                setValue(newValue);
                                                }}
                                            />
                                                <Typography variant="body2" color="textSecondary" component="h5" style={{ fontFamily: 'Poppins', fontWeight: '700', fontSize: '100%' }}>
                                                    <br />
                                                    Cloud Solutions
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            </Grid>
                        </div>
                        <div className={classes.cardStyles}>
                            <Grid container direction="row"
                                justify="center"
                                alignItems="center">
                                <Grid item md={3} lg={3} sm={6} xs={12}>
                                    <Card className={classes.root}>
                                        <CardActionArea>
                                            <Link to="/productPage/">
                                                <CardMedia>
                                                    <img className={classes.Media} src={Cybersecurity1} alt="Microsoft-img" />
                                                </CardMedia>
                                            </Link>
                                            <CardContent>
                                            <Rating
                                                name="simple-controlled"
                                                value={value}
                                                onChange={(event, newValue) => {
                                                setValue(newValue);
                                                }}
                                            />                                                <Typography variant="body2" color="textSecondary" component="h5" style={{ fontFamily: 'Poppins', fontWeight: '700', fontSize: '100%' }}>
                                                    <br />
                                                    Microsoft Teams (Free)
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                <Grid item md={3} lg={3} sm={6} xs={12}>
                                    <Card className={classes.root}>
                                        <CardActionArea>
                                            <Link to="/dataAnalytics/">
                                                <CardMedia>
                                                    <img className={classes.Media} src={DataAna1} alt="Microsoft-img" />
                                                </CardMedia>
                                            </Link>
                                            <CardContent>
                                            <Rating
                                                name="simple-controlled"
                                                value={value}
                                                onChange={(event, newValue) => {
                                                setValue(newValue);
                                                }}
                                            />
                                                <Typography variant="body2" color="textSecondary" component="h5" style={{ fontFamily: 'Poppins', fontWeight: '700', fontSize: '100%' }}>
                                                    <br />
                                                    Data Analytics
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            </Grid>
                        </div>

                    </Typography>

                </Container>

                <Grid container direction="row"
                    justify="center"
                    alignItems="center">
                    <Grid item md={3} lg={3} sm={3} xs={12}>

                        <Link to="/productPage" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" className={classes.button}>Show More</Button>
                        </Link>
                    </Grid>
                </Grid>

                <Container maxWidth="md" className={classes.bodyContainer} style={{ marginTop: '-2rem' }}>
                    <Typography component="div" style={{ backgroundColor: '#fff', height: '100vh' }}>
                        <div>
                            <h1 className={classes.h1}>Sidmach Products</h1>
                        </div>
                        <div className={classes.cardStyles}>
                            <Grid container direction="row"
                                justify="center"
                                alignItems="center">

                                {loading ?
                                    products.map((item, i) => (
                                        <Grid item md={4} lg={4} sm={6} xs={12}>
                                            <Card className={classes.root}>
                                                <Link to={`/productdetails/${item.id}/`} style={{ textDecoration: 'none' }}>
                                                    <CardActionArea>
                                                        <CardMedia>
                                                            <img className={classes.Media} src={item.product_image} alt="Microsoft-img" />
                                                            <img className={classes.Circle} src={Ellipse6} alt="Microsoft-img" />
                                                        </CardMedia>
                                                        <CardContent>
                                                            <div>
                                                                <StarIcon style={{ color: '#FFDF00' }} />
                                                                <StarIcon style={{ color: '#FFDF00' }} />
                                                                <StarIcon style={{ color: '#FFDF00' }} />
                                                                <StarIcon style={{ color: '#FFDF00' }} />
                                                            </div>
                                                            <Typography variant="body2" color="textSecondary" component="h2" style={{ fontFamily: 'Poppins', fontWeight: '300', fontSize: '24px' }}>
                                                                <br />
                                                                {item.name}
                                                            </Typography>
                                                        </CardContent>
                                                    </CardActionArea>
                                                </Link>
                                            </Card>
                                        </Grid>
                                    ))
                                    : <ReactBootStrap.Spinner animation="border" />
                                }
                            </Grid>

                        </div>

                    </Typography>

                </Container>

                <Grid container direction="row"
                    justify="center"
                    alignItems="center">
                    <Grid item md={3} lg={3} sm={3} xs={12}>

                        <Link to="/sidmachProducts/" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" className={classes.button} style={{ fontFamily: 'Poppins', fontWeight: '300', fontSize: '16px' }}>Show More</Button>
                        </Link>
                    </Grid>
                </Grid>
            </CssBaseline>

        </div>
    );
}

export default LandingCard;


