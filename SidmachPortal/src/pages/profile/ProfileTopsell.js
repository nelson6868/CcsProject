import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { useStateValue } from '../../pages/productdetails/Stateprovider';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


export default function ProfileTopSell() {
  const classes = useStyles();
  const [{ userData }] = useStateValue();
  const [recent, setRecent] = useState([])

  function FormRow() {
    const getRecentlyViewed = () => {

      try {
        // setLading(true)
        // setProduct(el.id)


        axios.get("https://sidcloud.azurewebsites.net/api/v1/products/recently-viewed/",


          // console.log(basket[0].quantity)
          {
            headers: {
              // "Access-Control-Allow-Origin": "*",
              Authorization: `Bearer ${userData.token}`
            }
          }).then(res => {
            console.log('res', res.data)
            const recent = res.data
            setRecent(recent)
          })
          .catch(error => {
            // setLoading(false)
            console.log(error);




          })

      } catch (error) {
        console.log("error", error);
      }
    }
    useEffect(() => {
      getRecentlyViewed();
    }, [])
    return (
      <React.Fragment >
        {recent.map((item) =>

          <Grid item xs={3}>
            <Paper className={classes.paper}>

              <div style={{ paddingRight: "20px", paddingLeft: "14px" }}>



                <Link to={`/productdetails/${item.product.id}/`}></Link>
                <img src={item.product.product_image} alt={item.product.slug} position="absolute" width="200" height="200" />
                <p><strong>{item.product.name}</strong></p>
                <p><strong> ₦{item.product.regular_price === null ? '0.00(Free)' : item.product.regular_price}</strong></p>
              </div>
            </Paper>
          </Grid>
        )}


      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>


      </Grid>
    </div>
  );
}