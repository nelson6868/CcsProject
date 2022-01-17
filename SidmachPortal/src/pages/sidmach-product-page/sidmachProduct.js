import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import Carousel from '../../components/courasel/productPageCarousel';

import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { useStateValue } from '../../pages/productdetails/Stateprovider';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { blue } from '@material-ui/core/colors';
import axios from 'axios';
import * as ReactBootStrap from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
    root2: {
        width: "20rem",
        margin: '1%',
        marginBottom: "10%",
        marginTop: '40px'
    },
    media2: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: blue[500],
    },
    h1: {
        textAlign: 'center',
        paddingTop: '40px',
        paddingBottom: '40px',
    },
    cardStyles: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    bodyContainer: {
        position: 'relative',
        marginTop: '150px',
        paddingTop: '50px',
        maxWidth: 1200,
    },

    formControl: {
        margin: theme.spacing(1),
        minWidth: 250,
        top: 0,
        marginLeft: '10%'
    },
    Media: {
        height: '35vh',
        width: '100%'
    },

    Circle: {
        position: 'relative',
        width: '200px',
        height: '200px',
        background: 'blue',
        borderRadius: '50%',
    },

    button: {
        color: '#fff',
        width: '200px',
        marginLeft: '44%',
        backgroundColor: '#022b5f',
        marginTop: '10%',
        marginBottom: '5%'
    },


}));

const SidmachProduct = () => {
    const classes = useStyles();

    const [productCategories, setProductCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [{ userData }] = useStateValue();

    // const { productId } = useParams();

    const [saveditem, setSavedItem] = useState([])
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    //function to get value of selected category in dropdown
    const getInitialState = () => {
        const value = "Sidmach Products";
        return value;
    };
    const [value, setValue] = useState(getInitialState);

    // Functions and useStates for API consumption

    // get product categories
    const getProductCategoriesData = () => {
        try {
            axios.get("products/get-category-details/", {
                // method: "GET",
                // url: "https://catfact.ninja/fact",
            }).then(res => {
                const productCategories = res.data;
                setProductCategories(productCategories)

                // console.log('res', res.data)
            })

        } catch (error) {
            console.log("error", error);
        }
    }

    useEffect(() => {
        getProductCategoriesData();
    }, [])


    // get all products 
    const getProductData = async () => {
        try {
            await axios.get("products/sidmach-products/", {
                // method: "GET",
                // url: "https://catfact.ninja/fact",
            }).then(res => {
                const products = res.data;
                console.log(products)
                setProducts(products)


            });
            setLoading(true)

        } catch (error) {
            console.log("error", error);
        }
    }

    useEffect(() => {
        getProductData();
        // eslint-disable-next-line
    }, [])

    const getSavedItem = () => {
        try {
            axios.get("products/saved-items/", {
                headers: {
                    // "Access-Control-Allow-Origin": "*",
                    Authorization: `Bearer ${userData.token}`
                }
            }).then(res => {
                // const saveddata = res.data;
                setSavedItem(res.data)
                console.log('res', res.data)
            })

        } catch (error) {
            console.log("error", error);
        }
    }

    useEffect(() => {
        getSavedItem();
        //eslint-disable-next-line
    }, [])


    const newProducts = products.map((product, index) => {
        let newProduct = saveditem.find((item) => item.product.id === product.id)
        // console.log(newProduct)
        if (newProduct) {
            let toBeSavedProduct = { ...product, is_favourite: newProduct.is_favourite }
            console.log(toBeSavedProduct)
            return toBeSavedProduct

        }
        // console.log(product)
        return product;
    });


    // End of Functions for API Consumption

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };


    const addToFavourite = (el) => {
        // debugger

        let newCart1 = [...saveditem]
        let itemInSaved = newCart1.find((item) => item.product.id === el.id);
        let product = el.id

        console.log(itemInSaved)
        if (itemInSaved) {

            try {



                axios.delete(`products/saved-items/${itemInSaved.id}`,



                    {
                        headers: {
                            // "Access-Control-Allow-Origin": "*",
                            Authorization: `Bearer ${userData.token}`
                        }
                    }).then(res => {
                        itemInSaved.is_favourite = false
                        setProducts(newProducts)

                    })
                    .catch(error => {
                        // setLoading(false)
                        console.log(error);
                    })

            } catch (error) {
                console.log("error", error);
            }

        }
        else {
            el.is_favourite = el.is_favourite ? false : true
            try {
                // setLading(true)
                // setProduct(el.id)

                const data = {
                    product

                }

                axios.post("products/saved-items/", data,


                    // console.log(basket[0].quantity)
                    {
                        headers: {
                            // "Access-Control-Allow-Origin": "*",
                            Authorization: `Bearer ${userData.token}`
                        }
                    }).then(res => {
                        setProducts(newProducts)




                    }).catch(error => {
                        // setLoading(false)
                        console.log(error);

                    })

            } catch (error) {
                console.log("error", error);
            }
        }

    }





    console.log(loading)

    return (
        <div>
            <Carousel />
            <CssBaseline>
                <Container maxWidth="md" className={classes.bodyContainer}>
                    <Typography component="div" style={{ backgroundColor: '#fff', height: '100%' }}>
                        <div>

                            {/* {productCategories
                                .map((item, i) => */}

                            <h1 className={classes.h1}>{value}</h1>

                            {/* )} */}
                            {/* <h1 className={classes.h1}>Email & Collaboration</h1> */}
                        </div>
                        <div>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-controlled-open-select-label">Select Product Categories</InputLabel>
                                <Select
                                    labelId="demo-controlled-open-select-label"
                                    id="demo-controlled-open-select"
                                    open={open}
                                    onClose={handleClose}
                                    onOpen={handleOpen}
                                    value={productCategories.id}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">
                                        <em>All</em>
                                    </MenuItem>
                                    {productCategories
                                        .map((item, i) =>
                                            <MenuItem value={item.name} key={i}>{item.name}</MenuItem>
                                        )}
                                    {/* <MenuItem value={productCategories.id}>{productCategories.map(productCategories => (
                                        <MenuItem>{productCategories.name}</MenuItem>
                                    ))}</MenuItem> */}


                                </Select>
                            </FormControl>
                        </div>


                        <div className={classes.cardStyles}>
                            <Grid container direction="row"
                                justify="center"
                                alignItems="center">

                                {loading ? newProducts
                                    // .filter((item, i) => i < 3)
                                    .map((item, i) => (
                                        <Grid item md={4} lg={4} sm={6} xs={12} style={{ display: "flex", justifyContent: 'center' }}>
                                            <Card className={classes.root2} key={item.id} >
                                                <CardHeader
                                                    avatar={
                                                        <Avatar aria-label="recipe" className={classes.avatar}>
                                                            <p style={{ fontSize: '60%', marginTop: '40%' }}>{item.percentage_discount === null ? '0' : item.percentage_discount}%</p>
                                                        </Avatar>
                                                    }
                                                />
                                                <CardMedia>
                                                    <Link to={`/productdetails/${item.id}/`} >
                                                        <img className={classes.Media} src={item.product_image} alt={item.slug} style={{

                                                            objectFit: 'contain'
                                                        }} />
                                                    </Link>
                                                </CardMedia>
                                                <CardContent>
                                                    <div>
                                                        <StarIcon style={{ color: '#FFDF00' }} />
                                                        <StarIcon style={{ color: '#FFDF00' }} />
                                                        <StarIcon style={{ color: '#FFDF00' }} />
                                                        <StarIcon style={{ color: '#FFDF00' }} />

                                                    </div>
                                                    <Typography variant="body2" color="textSecondary" component="h2">
                                                        {item.name}
                                                    </Typography>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        ₦{item.regular_price === null ? '0.00(Free)' : item.regular_price}
                                                    </Typography>
                                                </CardContent>

                                                <CardActions disableSpacing style={{ marginTop: '-12%' }}>
                                                    <IconButton aria-label="add to favorites" key={item.id} onClick={() => addToFavourite(item)}>


                                                        {

                                                            item.is_favourite ? <FavoriteIcon color="secondary" /> : <FavoriteIcon />}

                                                    </IconButton>
                                                    <IconButton aria-label="share">
                                                        <ShareIcon />
                                                    </IconButton>
                                                    {/* <IconButton color="primary" aria-label="add to shopping cart" style={{ marginBottom: '3%' }}>
                                                        {/* <Link to={`/productdetails/${productId}`}>
                                                        <span style={{ fontSize: '50%' }} ><AddShoppingCartIcon /> Add to cart </span>
                                                        {/* </Link> 
                                                    </IconButton> */}
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                    )) : <ReactBootStrap.Spinner animation="border" />
                                }

                            </Grid>
                        </div>

                    </Typography>

                </Container>
            </CssBaseline>
            {/* <div>
                <Button variant="contained" className={classes.button}>Show More</Button>
            </div> */}

        </div>
    );
}

export default SidmachProduct;