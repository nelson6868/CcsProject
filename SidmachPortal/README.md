# Getting Started with CSP PORTAL

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### dependency tree error 
add --legacy-peer-deps

## INTRODUCTION TO CSP PORTAL
 CSP Portal is an E-commerce Website developed by Sidmach Technologies to sell their products and products of other tech companies they partner with such as, Microsoft, HP etc. This aspect of documentation deals with the Front end part, which React-Library is used to design the web page.

## INSTALLATION
The web app is a ReactApp which requires node packages to run its project. Node modules are installed and other plugins related to make the project suite the design of the Company as described on Figma Design Template(https://www.figma.com/file/RpLf8WNxhE9nnJ1AK5TURl/CSP?node-id=0%3A1). You can find all installed packages in package.json file.

## APIs
The APIs is connected to Sidmach Cloud where it has all its related data called in for the requirements of the project. Axios is used for API calls by Frontend to the backend server of the project. It has its general root declaring in index.js file section of the repository.

## INTEGRATIONS
 Made integrations from several dependencies that can work well with React-App in order to ensure fluid Design and other tools attributed to the development of the site.

## UTILITIES
Its a React-App that depends on node modules to run its features and also integrated with material ui and bootstrap features for its design. And its deployment is on Azure.

## WEB
A web-service that renders sales of technological products to improve productivity, analytics, cyber-security and cloud solutions. A web app hosted on Azure Cloud Service.

## RESOURCES
The Resources used in building the project includes Bootstrap, Material Ui, Scss, Css, Javascript, React dependencies etc. You can get more of the resources in package.json

## PAGES
The following includes the list of pages the project or web app entails:
1. [Landing page](#landing-page)
2. [Login page](#login-page)
3. [Register Page](#register-page)
4. [Forgot or Reset Password Page](#reset-password-page)
5. [Profile page](#profile-page)
6. [Product Page](#product-page)
7. [Business and Productivity Page](#business-and-productivity-page)
8. [Cloud Solutions Page](#cloud-solutions-page)
9. [Data Analytics Page](#data-analytics-page)
10. [Sidmach Products Page](#sidmach-products-page)
11. [Product Details Page](#product-details-page)
12. [Product Cart Page](#product-cart-page)
13. [Checkout Page](#checkout-page)
14. [Payment Success Page](#payment-success-page)
15. [Receipt Page](#receipt-page)
16. [Order Page](#order-page)
17. [Transaction History Page](#transaction-history-page)
18. [Support/ContactUs Page](#supportcontactus-page)

    In the project, there are folders that consist of several components which the project uses to put its building up and form several parts of the site.
    The public folder includes Favicon, index.html, logo. This favicon sets logo on the website to display your site logo rather than default react logo. Index.html is the default HTML root of the app.

    #### SRC Folder:
    SRC Folder consist of, api folder, assets folder, components folder, pages folder, service folder, app.css, app.js, index.css, index.js, logo.svg(React Logo) and other react packs. SRC Folder is also known as Source Folder which consist of components of things that our app is made up of. 

a. Api Folder: It is a sample of Api set-up incase developer prefers to follow Redux flow. This file shows how api can be consumed using its base controller and exporting api from service folder.

b. Service folder: This is where api for axios call is set up if Redux Saga is to be followed. Basically for the development of this web page, Redux flow wasn't really used in api consumption process. So, its base declaration for api root base url is in the index.js file in src folder.

c. Assets Folder: Assets folder consist of all assets like images used or needed during the development of the web page. Majority of these images are in svg, while some are stored in other image formats such as jpg, png.

d. Components Folder: Component consist of reusable components in React. i.e files/components that can still be used in development of other pages. Examples are card components, carousel component, footer, header component, forms etc.

e. Pages folder: Pages contains all the folder and files of pages designed in the webpage. For example, Product page, cart page, landing page, login page etc.

f. App.css: Universal Css Declaration for the web app

g. App.js: App.js is the root application file that gathers or comprises of all your react main components or pages, and it is there routing is done for this project. So, all page is routed in the app.js file

h. Index.css: Also a universal css declaration for this app.

i. Index.js: It brings in your main app i.e app.js. And other plugins associated with your web app. And they are; React-dom, bootstrap, React-Router-Dom(Browser Router), app.js, Reportwebvitals, stateprovider(this is generated inside our code to enable us use reducer with the stateprovider), cookies provider and axios.

### LANDING PAGE

#### Location: src\pages\landingpage\Landing.js
#### Description: 
Landing Page is the first page a customer is allowed to access whether customer is logged in or not logged in. Therefore, Landing page give the first attraction of the website. 

#### Code Usage: 
Landing.js consist of 4 components. 

    i. LandingCarousel: This represents the carousel slider in the opening of the landing page. Slick-Slider was used to design the carousel, slick slider gives more fluency to React Slides which has its own settings or properties of design. The Slick Slider plugin needs to be imported with its css too, so as to be able to use it effectively. The landing page carousel has its own CSS too which it uses for smooth transition. 
        Location: src\components\courasel\landingPage-carousel.jsx
    ii. ResponsiveDialogue: The responsive dialogue component is the one used for cookie acceptance condition. This enables user to accept cookies from the website and also allows developers to access a user cookie storage. It pops up once the user opens the landing page, and the user needs to accept before it can leave the user screen. But user still has access to do other things on the site while the user has not accepted the cookie term. The code in this file is dominated by javascript, for fluid transitioning. And it has scss styling dedicated for the transitions.
        Location: src\components\popup\landingPopup.jsx
    iii. LandingCard: Landing card consists of Product Category Cards, and Sidmach Products card in the landing page. This card displays each category of microsoft products and available sidmach products. It is a material ui design card.
        Location: src\components\card\landingPageCardComponent.jsx
    iv. ExploreLanding: ExploreLandingCardComponent is a marketing space to publisize the companies flexibility and cost effectives on the landing page of the portal. A part of the space uses slick carousel slider for the carousel in the explorelanding component. It has its own CSS known as explorecard css.
        Location: src\components\courasel\landingExploreCardComponent.jsx

### LOGIN PAGE

#### Location: src\pages\Loginpage\login.js
#### Description: 
Login Page is used for a user to have access to buy products from the portal. Therefore this web page requires you to login at the point where a user wants to check-out to buy a product. 
#### Code Usage: 
The login page uses a useStateValue from our reducer to access userdata and uses local storage to save login session for the user. A cookie storage is also set up in the login page, just in a case which any of both local and cookie storage is needed. No much components attached to the login page asides from the checkbox component that is used to remember user password etc. Other related plugins are, sweetalert, axios, react-router-dom, react-cookies and it has its dedicated css. 

### Register Page
#### Location: src\pages\Register\UserRegistration.js
#### Description: 
The Registerpage or UserRegistration page is used in getting user data to enable them to sign in to the webpage and verify validity of their mail and other userdata. This email verification process is done by the backend but inputed data are sent from the front-end to backend for user to complete its verification process.

#### Code Usage: 
The userRegistration page sends a post request of inputed data to the backend and the backend verifies the data. The data expected includes; email, first_name, last_name, phone_number and password. It uses sweetalert to fire response that communicates with the user on the error or expected parameters in input fields. Therefore, when all inputs are correct, the submit function in the code triggers when the sign up button is clicked. From Signup page you can navigate to login page if you already have an account. The register page also has its dedicated CSS which is Register.css will be found in thesame Register folder.

### Reset Password Page

#### Location: src\pages\Loginpage\Resetpassword.js
#### Description: 
The Reset password page is used to reset userpassword, once password is successfully reset, it takes to to input the password in Login page.

### Profile Page
#### Location: src\pages\profile\profilepage.js
#### Description: 
Profile page is used to edit and get user details or information on his personal details, transactions the user has made, his order items, to check if the customer has any pending items to be sorted, and customers can also have access to transaction receipts from profile page. Few pages associated with profile page includes, User Profile details, Address book page, Transaction History page, Order page, Saved Items.

#### Code Usage:
For the user profile page, it only displays like a dashboard where the user can see like a summary of his information that he has inputed during registration process and sees if he has any store credit available. From that dashboard, user can navigate to explore other option that is associated with the page.

### Product Page
#### Location: src\pages\productpage\productpage.component.jsx
#### Description: 
The product page is used to see the list of available products on the portal. This part of the page is connected to the backend because, it gets the list of the product it displays from backend.

#### Code Usage: 
The Product page consist of 2 components:

    i. Carousel Component: This component is used to make a form of carousel to the product page based on the figma template that was given for page design. The carousel has a static image in it.
    
    ii. Product Card: This component is like the origin or foundation of what makes the portal to kick off its purpose. In this component, the categories of product is displayed in a drop-down where you can select from any of the categories of the product a user wants displayed. If a user doesn't select any category, by default, the page displays all products regardless of the category they fall in. In each product, a user can be able to save the items to his local storage in order to have access to the product once he has successfully logged in, a user can see price, description, image and can click on the product image to see more details of the product in product details page. All these data generated in the product page is from the backend, and when you go to the page you can see the api connections for categories, products data, saved items etc. For the items to save in product page, the is_favorite icon needs to be triggered or clicked, when its clicked, then it fires the api that performs the function of saving items in the saved items page, and also changes color of the icon from gray to red to indicate that this particular product has been saved or marked as favorite. 

### Business and Productivity Page: 
#### Location: src\pages\business&productivity\business-productivity.js
#### Description: 
Business and Productivity is a category under microsoft products. This page is used to display products under business and productivity category of Microsoft Products. You can perform several functionalities in the page prior to what we have in product page, because it also shows list of products only displayed in a specific categorization.

#### Code Usage: 
The Business and Productivity page also consist of two components: 

i. Carousel Component: Used to make a form of carousel to the product page based on the figma template that was given for page design. The carousel has a static image in it.

ii. BusinessProductivity: In this component, the categories of product is displayed in a drop-down where you can select from any of the categories of the product a user wants displayed. If a user doesn't select any category, by default, the page displays all Business and Productivity category products. In each product, a user can be able to save the items to his local storage in order to have access to the product once he has successfully logged in, a user can see price, description, image and can click on the product image to see more details of the product in product details page. All these data generated in the business and productivity page is from the backend, and when you go to the page you can see the api connections for categories, products data, saved items etc. For the items to save in product page, the is_favorite icon needs to be triggered or clicked, when its clicked, then it fires the api that performs the function of saving items in the saved items page, and also changes color of the icon from gray to red to indicate that this particular product has been saved or marked as favorite. An Id of each product is passed to be able to access details of products once user clicks on image of a particular product.

### Cloud Solutions Page
#### Location: src\pages\cloud-soln-page\cloudsoln.js
#### Description:
This page is used to display Microsoft Products within the category of Cloud Services or Solutions.

#### Code Usage: 
The Cloud Solution page also consist of two components: 

i.  Carousel Component: Used to make a form of carousel to the product page based on the figma template that was given for page design. The carousel has a static image in it.

ii. CloudSolution: In this component, the categories of product is displayed in a drop-down where you can select from any of the categories of the product a user wants displayed. If a user doesn't select any category, by default, the page displays all Cloud Solution category services. In each service, a user can be able to save the items to his local storage in order to have access to the product once he has successfully logged in, a user can see price, description, image and can click on the product image to see more details of the service in product details page. All these data generated in the cloud solution page is from the backend, and when you go to the page you can see the api connections for categories, products data, saved items etc. For the items to save in product page, the is_favorite icon needs to be triggered or clicked, when its clicked, then it fires the api that performs the function of saving items in the saved items page, and also changes color of the icon from gray to red to indicate that this particular product has been saved or marked as favorite. An Id of each product service is passed to be able to access details of products once user clicks on image of a particular product.

### Data Analytics Page

#### Location: src\pages\dataanalytics-page\dataanalytics.js

#### Description: 
This page is used to display Microsoft Products within the category of Data Analytics.

#### Code Usage: 
Data Analytics Page consist of two components: 

i.  Carousel Component: Used to make a form of carousel to the product page based on the figma template that was given for page design. The carousel has a static image in it.

ii. DataAnalytics: In this component, the categories of product is displayed in a drop-down where you can select from any of the categories of the product a user wants displayed. If a user doesn't select any category, by default, the page displays all Data Analytics products. In each product, a user can be able to save the items to his local storage in order to have access to the product once he has successfully logged in, a user can see price, description, image and can click on the product image to see more details of the service in product details page. All these data generated in the Data Analytics page is from the backend, and when you go to the page you can see the api connections for categories, products data, saved items etc. For the items to save in product page, the is_favorite icon needs to be triggered or clicked, when its clicked, then it fires the api that performs the function of saving items in the saved items page, and also changes color of the icon from gray to red to indicate that this particular product has been saved or marked as favorite. An Id of each product service is passed to be able to access details of products once user clicks on image of a particular product.

### Sidmach Product Page

#### Location: src\pages\sidmach-product-page\sidmachProduct.js

#### Description: 
The sidmach product page is used to see the list of available products for sidmach on the portal. This part of the page is connected to the backend because, it gets the list of all sidmach products it displays from backend.

#### Code Usage: 
Sidmach Product Page consist of two components: 

i.  Carousel Component: Used to make a form of carousel to the product page based on the figma template that was given for page design. The carousel has a static image in it.

ii. SidmachProduct: In this component, the categories of product is displayed in a drop-down where you can select from any of the categories of product a user wants displayed. If a user doesn't select any category, by default, the page displays all Sidmach products. In each product, a user can be able to save the items to his local storage in order to have access to the product once he has successfully logged in, a user can see price, description, image and can click on the product image to see more details of the service in product details page. All these data generated in Sidmach Product page is from the backend, and when you go to the page you can see the api connections for categories, products data, saved items etc. For the items to save in product page, the is_favorite icon needs to be triggered or clicked, when its clicked, then it fires the api that performs the function of saving items in the saved items page, and also changes color of the icon from gray to red to indicate that this particular product has been saved or marked as favorite. An Id of each product service is passed to be able to access details of products once user clicks on image of a particular product.

### Product Details Page
#### Location: src\pages\productdetails\productdetails.js
#### Description:
Product details page shows the full details and description of a product, which the Id of each product in the product page generates the product details page when clicked on. From this page a user can decide to add his item to cart.

#### Code Usage:
This page has alot of functionalities attached to it, where a user can add to cart from this page and also Id's of several information about a product is passed. Product page has its own component where it performs mostly all its functionalities in the code base. And the component is named as Product. Api is connected in the productdetails page to generate product information by productId. That's where we have getProductByProductId in the code base. Whereby the usestate is setProduct and product. Product is used to call the information from backend.

The product component in this product details page consist of what makes a product function across the page as a product. Here the Id, and other related details of the product is used to interact across purchase of particular product. The functionality of adding to basket and adding to cart take place in this component. 

There's a customized reducer state in this component known as usestatevalue which is used as a context for the reducer, this useStateValue is named in Stateprovider.js. It is used to distribute the element in the basket around.
A function of addToBasket is declared which dispatches the basket, reducer type, and other product items.

Items stored in basket are also stored in the localStorage. So there is an alert triggerred when an item has been added to basket which the usestate of setShow and show is used in triggering the alert. Therefore, if item is added to basket, it shows item has been added successfully to basket. SweetAlert is used as the alert plugin. OnClick of Add to cart, the addToCart function triggers, so does the alert of successfully added shows too.

### Product Cart Page

#### Location: src\pages\productcart\Cart\Cart.js

#### Description: 
Cart page as commonly known is the heart of E-commerce project. Handling a cart in e-commerce is one of the most essential part of the project. The CSP cart page allows user to add to product quantity, reduce product quantity, store on reload or refresh of page, it also access user auth to be able to checkout on continuing purchase.

#### Code Usage: 

Cart.js comprises of so many things that hold the Cart page of the Sidmach CSP portal. 

Cart uses the useStateValue Reducer which access basket and userData to perform it functions on the page.
The getCartTotal function is used to get the amount of items in the basket for it to calculate the Unit Price, Quantity, Tenure(Monthly or Annually) and amount of the product. 

For the return statement, if basket length or number of products in basket is equal to 0, then it show that; Your Shopping Cart is Empty and an image of a cart displays in background. Therefore, refers user to a link to continue shopping.

For the second condition in the return statement, when basket has products in it, it then displays necessary information of the product added to cart from productDetails.js.  Before all this information is gathered, there is a component named as ProductCart2 function of ProductCart in  src\pages\productcart\Cart\ProductCart2.js. Here it show how the processes of information gathered in Cart page comes up

ProductCart2 component also used the useStateValue reducer to read items in basket to perform its functions or task. It has a check state which checks for the Tenure level of the items to make its calculation. Therefore, the removeItem function is used to dispatch the REMOVE_FROM_CART function from the reducer, addItem function is used to dispatch ADD_ITEM function from the Reducer, removeoneItem function is used to remove the last item in the cart which dispatches its function from reducer, the setAnnualCycle function is used to dispatch function of product set annually while the setMonthlyCycle is used to set the product to monthly cycle getting all its functionalities from Reducer.

There are useEffect in the code, the first one is used to store basket in localStorage for user to be able to retain his data on refresh of the page while he/she is not logged in. 
The second useeffect is used to set tenure check for annually to mark it to true.
While the third used effect is used to set tenure check monthly to set to true.

For the return statement the CancelIcon performs the removeItem Function. The image tag returns the product of the image. The input group performs the function of counting and adding and removing items in basket by its quantity. The p tag displays the unit_price of the product, While the ogther p tag displays subtotal of the product. The third p tag displays form to check if the billing cycle is annual or monthly billing. Here onChange of the event is checked to perform its annual cycle and monthly cycle functions.

With all these functions in the productCart2 components, it now maps throught the products in basket to get the number and properties of each.

The currency format part is used to format the total amount of the product coming from the basket. Where a value function is passed to perform the getCartTotal form basket function, and also display currency prefix as "₦".

So, from cart page there is a link to continue shopping, and also to Proceed to Checkout. The proceed to Checkout has a conditioned statement which checks if the user is signed in or not before he's able to checkout on purchased product. Therefore, if userData is false or if user is not loggedIn, it directs user to Login Page to ensure he/she LoggedIn before user can proceed to checkout page.

### Checkout Page
#### Location: src\pages\productcart\Checkoutpage.js

#### Description:

The CheckoutPage is used to verify user product, or its the final stage of user purchase, where user inputs or shows information on how to get his products delivered and how to have a smooth purchase. This page shows a brief summary of your items in cart and the user details too. To enable user proceed to payment of product.

#### Code Usage:

Checkout page has several components in it, that make the form validation and also show summary of user order. 

The checkout function has access to basket i.e to show the items user has in his cart. It entails userData, to pass in token to get further user details from the Address, company, city etc. 

The getCartTotal function is a javascript function used in getting the total amount of items a user has in cart to display below the order summary part. 

The payStackApi function is used to send items user have in the basket to the backend api for paystact to be able to access and generate receipt for payment of products purchased. It needs to pass in userData token for authorization.

The getUpdateDetails api functions is used to get user details of either existing or newly created detail from the form on the checkoutpage. So, it updates address etc.

The cartItemToApi function is used to check if the objects in the form to access userDetails is correct before user can proceed to payment. You need to parse in userData.token as the Authorization bearer, else it shows that user should please provide your valid informations.

For the return statement, a form of navigation that shows benefit of user buying product from the company is displayed.

The Checkoutform Component is the component that entails the form we have in the checkoutpage order information bar. The function call is Checkoutform, parse in getUpdateDetails and user information function. This component also performs the task of validating the form and its also connected to Api in order to read some informations if valid from backend data. There is a UpdateDetails function that shows already existing userDetails, and updates it if user wants to update from the checkoutpage. The FormValUpdate function is used to validate the form, and trigger sweetAlert if the form isn't filled well or left a vital information blank. So, once the information is all validated, it then sends a post request on saving the data to update details. 

For the return statement in the Checkoutform Component, there is the Order Information as the Card.Header which when clicked on leads to Address book in the user profile. There goes forms which leaves the basic userData uneditable from the checkout page, like FirstName, LastName, Email, and PhoneNumber (All placed defaultvalue as readOnly). Other userDetails are left editable from checkout form. It populates the data if it already exist and leaves it empty if the data does not exist, the functions have all been sorted from the api calls that set the states. Onclick of the save button, the FormValUpdate function triggers.

Back to checkoutpage.js now, the Paper div, has a card header that displays summary of user order i.e YOUR ORDER. In it, we have a list group item that maps through the items user has in basket and display its informations like the image, price, quantity, and tenure. The second group item shows a currency format of Naira. Displays the total and also shows if coupon is available for the product. The third list group item shows that user can contact support from the checkout page, incase they need any help before proceeding to payment. The last button then performs the cartItemToApi function that sends what the user has ordered, which takes them to the paystack to make payment. Check the cartItemToApi fuction to see how redirection to paystackApi is used as response (window.location = res.data.data.authorization_url).

### Payment Success Page

#### Location: src\pages\PaymentSuccess-Failure page\paymentSuccess.js

#### Description: 
The payment success page is used to show on the platform that a user payment for the products he ordered was successful, so after the paystack payment has been completed, the payment success page displays. 

#### Code Usage: 

Once the page is loaded its expected to perform a function of removing the items in basket. 

The return statement shows the column sessions to get the page centered and responsize in different screens. The img tag show the success mark, p tag show the text display for successfully completed payment, the second p tag is used to route the user back to continue shopping, i.e the product page. while the third p tag is used to refer user to generate receipt when user clicks on here text.

### Receipt Page

#### Location: src\pages\receiptpage\receipt.js

#### Description: 
Receipt page is used to show user a proof of his payment to be able to print and download it. The receipt page shows the reciept number for the user and the items he ordered and payment generated from payStack Api.

#### Code Usage: 
The receipt.js consist of a component known as ReceiptPrint. ReceiptPrint is under print.jsx.

The ReceiptPrint consist of a componentToPrint which is the Receipt form Component, it enables the print button to print out the form in the Receipt page.

The ReceiptForm component is the main component of the receipt page that generates all necessary things to be printed out from the print button command in the ReceiptPrint Component. ReactBootstrap table is used to structure the receipt table form. The getReceipt function is used to getReceipt details from the paystack abi generated by backend, the set state used in the getReceipt api is setReceipt and receipt, therefore receipt is used to call the data and also used to setTableData.

The return statement in the receipt form is wrapped basically in a container that divides its column to 3, and gave the middle one space of 9 in diffent screens. 

The tabledata is then used, where the table head maps through receipt data to get the transaction reference number. The table body is populated alse with the receipt data renamed to fit in tableData and to enable it map inside order_items for highlight of what was ordered which displays the item quantity, item unit price, and ReactBootStrap.Spinner was used when its yet to get the data from backend. The second table head in the code actually is to be like a footer which displays the total item amount in the receipt.

React print is the extension that was used to print out the receipt form.

### Order Page

#### Location: src\pages\profile\orderPage\orderPage.js

#### Description: 
The orderPage.js shows previews and highlights of order made by user. It also displays the status and progress of order. 

#### Code Usage: 
The OrderPage function is the parent function of the order page. This function has several useStates from the setModalShow, to setOpenOrders, to setCloseOrders, to setTempData that displays informations in the modal, to setLoading.

The getOpenOrders function is an api call function to get all openOrders to display on the openOrders tab in orderPage. setOpenOrders state was used to get its response data from backend.

The getClosedOrders function is an api call function to get all closedOrders to display on the closedOrders tab in orderPage. setClosedOrders state was used to get its response data from backend.

The logOut function is used to perform the function of logging out from the sideNav in the orderPage.

The return statement first group of div, shows the SideNavBar that leads to several places in the portal related to the user. 

The second session of the orderpage shows the Orders of the user whether open or closed. Bootstrap tabs was used to set the separation of openOrders and closedOrders. The first tab is the OpenOrder tab, the tab has a bootstrap card component that maps through each item the user has in open orders, and there's a conditional statement of if the openOrder lenght is equal to zero, it should display no open orders available. Therefore, it then maps through order item in the openOrders data response that enable it to display item orderNo, when the order was created, and see details button that triggers the modal to open when clicked.


The second tab is the ClosedOrder tab, the tab has a bootstrap card component that maps through each item the user has in closed orders, and there's a conditional statement of if the closedOrder lenght is equal to zero, it should display no closed orders available. Therefore, it then maps through order item in the closedOrders data response that enable it to display item orderNo, when the order was created, and see details button that triggers the modal to open when clicked.

The MyVerticallyCenteredModal function is the modal that is triggered when the See Details button is clicked. This modal uses the propitems from the tempData state where the setTempData has been set to items in each of the order classes i.e open and closed orders. The Modal Header consist of its title and a close button to close the Modal. Therefore, it maps through the itemsOrder to pick data to be displayed in the modal. And in the modal footer, the close botton exists to close the modal and go back to user order page.

### Transaction History Page
#### Location: src\pages\transactionhistorypage\transactionhistory.js

#### Description: 

Transaction History page is used to show the history of transactions the user has done on the portal. From this transaction history, a user can generate receipt of his transactions and can also get the status of there transactions whether its failed, successfull or pending.

#### Code Usage: 
The transactionHistory.js has a component called TransactionHistoryTable. In this component, material UI data table was used to display user transaction history. It has several use states too and useRef to handlePrint of receipt generate.

The handleClickOpen function has an api call that parse in id of a particular transaction and it generates the receipt for that transaction in a popup modal, then user is able to print or generate its receipt from there. handleClose function closes the modal.

getTransReceipt function is an api function that get transaction receipt based on the id of a particular transaction in the transactionHistory page. setTransReceipt is the state for the data response from api.

getTransactionHistory function is also an api function that get all transaction list that the user has done on the portal. For the response part of this api function call, setTransactionHistory state is used to get the material ui table data to display in a form where the res.data. is then mapped through to determine its row objects which is passed in as val i.e value, to access what information or data displays on each row. Therefore, for the columns part displays S/N, Description, Date, Account id/Order No, Account Type, amount, status, and actions which all shows their corresponding value to customBodyRender. For the actions part customBodyRender the value to be displayed has its own return statement because it will be returning a modal that generate or view receipt when the button is clicked on. It then fires the function of handleclickOpen that triggers the api and generate receipt by its id of that transaction. 

For the component main return statement, the materialUI dataTable functions to display all transaction history of user.

### Support/ContactUs Page
#### Location: src\pages\ContactUs\ContactUs.js

#### Description: 
The contactUs page is used to interact between the user and customer service or sales. This allows users to make enquires, or complaint on product they want, or on things related to the purpose of the portal.

#### Code Usage: 

The parent function is the ContactUs function which has several useStates that verifies userinfo and messages. 

The contact function is an api function that sends a post request to the api to post userFirstName, lastName, email, and message that the user sends. There are validation test for those parameters to be submitted in the contact api function which uses sweetAlert to fire its warnings.

The return statement for the supportpage shows all the designs and information needed to facilitate the support page functioning.