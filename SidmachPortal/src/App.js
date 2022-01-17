/* eslint-disable no-sequences */
import './App.css';
import { Switch, Route, Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/header-component';
import Footer from './components/footer/footer-component';
import Landing from './pages/landingpage/Landing';
import Cart from './pages/productcart/Cart/Cart'
// import Checkout from './pages/productcart/Checkout'
import Carousel from './components/courasel/productPageCarousel'
import ProductDetails from './pages/productdetails/productdetails.js';
import ProductPage from './pages/productpage/productpage.component';
import DetailsEdit from './pages/profile/DetailsEdit';
import InboxPage from './pages/profile/InboxPage/Inbox';
import ChangePassword from './pages/profile/ChangePassword'
import UserRegistration from './pages/Register/UserRegistration';
import ProfilePage from './pages/profile/profilepage';
import AddressBook from './pages/profile/AddressBook';
import OrderPage from './pages/profile/orderPage/orderPage';
import ProfileComponent from './pages/profile/ProfileComponent';
// import ProfilePage from './pages/profile/profilepage';

import Login from './pages/Loginpage/login'
import ResetPassword from './pages/Loginpage/Resetpassword';
import CheckoutPage from './pages/productcart/Checkoutpage';
import ContactUs from './pages/ContactUs/ContactUs';
import Receipt from './pages/receiptpage/receipt';

import TransactionHistory from './pages/transactionhistorypage/transactionhistory';
import React from 'react';
import SavedItems from './pages/profile/saveditems';
import { useStateValue } from './pages/productdetails/Stateprovider';
// import PrivateRoute from './pages/Loginpage/ProtectRoute'
import ProfileTransaction from './pages/profile/ProfileTransaction';
import PaymentSuccessPage from './pages/PaymentSuccess-Failure page/paymentSuccess';
import SidmachProduct from './pages/sidmach-product-page/sidmachProduct';
import BusinessProductivity from './pages/business&productivity/business-productivity';
import DataAnalytics from './pages/dataanalytics-page/dataanalytics';
import CloudSolution from './pages/cloud-soln-page/cloudsoln';
import PasswordResetForm from './pages/Loginpage/PasswordResetForm';
import ScrollToTop from './components/ScrollToTop';


function App () {

  const [{ userData }] = useStateValue();

  return (
    <div className="App">
      <ScrollToTop/>
      <Header/>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route path="/productPage/" component={Carousel, ProductPage} /> 
          <Route path="/sidmachProducts/" component={Carousel, SidmachProduct} />
          <Route path="/businessProductivity/" component={Carousel, BusinessProductivity} />
          <Route path="/dataAnalytics/" component={Carousel, DataAnalytics} />
          <Route path="/cloudsolution/" component={Carousel, CloudSolution} />
          <Route path="/productdetails/:productId" component={ProductDetails}/>
          <Route path="/productcart" component={Cart}/>
          <Route path="/Login" component={Login}/>
          <Route path="/registerPage" component={UserRegistration} />
          <Route path="/Resetpassword" component={ResetPassword}/>
          <Route path="/PasswordResetForm" component={PasswordResetForm}/>

          {userData ? (
          <Route path="/ProfilePage" component={ProfilePage} />
          
          ) : (
            <Redirect to='/Login' />
          )}

          {userData ? (
          <Route path="/orderPage" component={OrderPage} />
          ) : (
            <Redirect to='/Login' />
          )}
          {userData ? (
          <Route path="/InboxPage" component={InboxPage} />
          ) : (
            <Redirect to='/Login' />
          )}
          {userData ? (
            <Route path="/AddressBook" component={AddressBook}/>
          ) :(
           <Redirect to='/Login'/>
          )}
         
          {userData ? (
          <Route path="/Checkoutpage" component={CheckoutPage} />
          ) : (
            <Redirect to='/Login' />
          )}


          {userData ? (
          <Route path="/paymentResult" component={PaymentSuccessPage} />
          ) : (
            <Redirect to='/Login' />
          )}

          {userData ? (
          <Route path="/receiptPage" component={Receipt} />
          ) : (
            <Redirect to='/Login' />
          )}

          {userData ? (
          <Route path="/transactionHistoryPage" component={TransactionHistory} />
        
          ) : (
            <Redirect to='/Login' />
          )}


          {userData ? (
            <Route path="/saveitem" component={SavedItems} />
          ) : (
            <Redirect to='/Login' />
          )}

  
          {userData ? (
          <Route path="/ContactUs" component={ContactUs} />
          
          ) : (
            <Redirect to='/Login' />
          )}


          {userData ? (
          <Route path="/DetailsEdit" component={DetailsEdit} />
          ) : (
            <Redirect to='/Login' />
          )}

          {userData ? (
          <Route path="/ChangePassword" component={ChangePassword} />
          ) : (
            <Redirect to='/Login' />
          )}

            
          {userData ? (
          <Route path="/ProfileTransaction" component={ProfileTransaction} />
          ) : (
            <Redirect to='/Login' />
          )}

          {/* <Route path="/ContactUs" component={ContactUs} /> */}
           <Route path="/ProfileComponent" component={ProfileComponent} /> 
        </Switch>
      <Footer />
      </div>
  );
}

export default App;