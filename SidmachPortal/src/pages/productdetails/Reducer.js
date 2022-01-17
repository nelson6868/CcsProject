const cartfromlocalstorage = localStorage.getItem('basket') ?
    JSON.parse(localStorage.getItem('basket')) : []

const userDatafromlocalstorage = localStorage.getItem('userData') ?
    JSON.parse(localStorage.getItem('userData')) : null


// const userDatafromlocalstorage = localStorage.removeItem('userData')
//helps to push data
export const initialState = {
    basket: cartfromlocalstorage,
    userData: userDatafromlocalstorage,


    // loggedinuser: null,
    // tenure: 1
    // userData: {
    //     id: "",
    //     first_name :"",
    //     last_name :"",
    //     email :"",
    //     token:""
    // }
}

// console.log(basket)
const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'ADD_TO_BASKET':

            let newCart1 = [...state.basket]
            let itemInCart = newCart1.find(item => item.id === action.item.id);
            console.log(itemInCart)

            if (itemInCart) {
                return {
                    ...state,
                    // basket: [{ ...itemInCart, quantity:itemInCart.quantity + 1 }]
                    basket: state.basket.map(item => item.id === action.item.id
                        ? {
                            ...itemInCart,
                            quantity: itemInCart.quantity + 1,

                        } : item
                    )
                }
            }

            else {
                return {
                    ...state,
                    basket: [...state.basket, action.item]

                }
            };





        case 'SET_LOGIN':
            // debugger
            console.log(action.userData);
            return {
                ...state,
                userData: { ...action.userData }
            }

        case 'SET_LOGOUT':
            console.log(action.userData)
            return {}

        // case 'USER_LOGIN_REQUEST':
        //     return {
        //         loading: true
        //     }

        // case 'USER_LOGIN_SUCCESS':
        //     return {
        //         loading: false, userInfo: action.userData
        //     }

        // case 'USER_LOGIN_FAIL':
        //     return {
        //         loading: false, error: action.userData
        //     }

        // case 'USER_LOGOUT':
        //     return {}

        //end of login reducer
        case 'REMOVE_FROM_CART':
            let newcart = [...state.basket]
            const index = state.basket.findIndex((basket) => basket.id === action.id)
            if (index >= 0) {
                //remove item
                newcart.splice(index, 1)
            }
            else {
                console.log("error removing product")
            }
            return { ...state, basket: newcart }
        case 'ADD_ITEM':
            let newCart2 = [...state.basket]
            let addedItem1 = newCart2.find(item => item.id === action.id)
            // addedItem1.quantity += 1

            return {
                ...state,
                basket: state.basket.map(item => item.id === action.id
                    ? {
                        ...addedItem1,
                        quantity: addedItem1.quantity + 1,
                    } : item
                )
            }


        case 'REMOVE_ITEM':
            const updatedCart = state.basket.map((item) => {
                if (item.id === action.id) {
                    return { ...item, quantity: item.quantity - 1 }
                }
                return item;
            }).filter((item) => {
                return item.quantity !== 0
            });
            return { ...state, basket: updatedCart }
        // return state
        // let newCart3 = [...state.basket]
        // let addedItem = newCart3.find(item => item.id === action.id)
        // //if the qt == 0 then it should be removed
        // if (addedItem.quantity === 1) {
        //     let new_items = newCart3.filter(item => item.id !== action.id);
        //     return {
        //         state,
        //         new_items,
        //     }
        // }
        // else {

        //     return {
        //         ...state,
        //         basket: state.basket.map(item => item.id === action.id
        //             ? {
        //                 ...addedItem,
        //                 quantity: addedItem.quantity -= 1,
        //             } : item
        //         )
        //     }
        // }
        case 'BILL_CYCLE':
            let cartnew1 = [...state.basket]
            let addedItems1 = cartnew1.find(item => item.id === action.id)

            // addedItems1.tenure = 12

            return {
                ...state,
                basket: state.basket.map(item => item.id === action.id
                    ? {
                        ...addedItems1,
                        tenure: addedItems1.tenure = 12,
                    } : item
                )
            }



        case 'BILL_CYCLE2':
            let cartnew = [...state.basket]

            let addedItems2 = cartnew.find(item => item.id === action.id)

            return {
                ...state,

                basket: state.basket.map(item => item.id === action.id
                    ? {
                        ...addedItems2,
                        tenure: addedItems2.tenure = 1,
                    } : item
                )

            }

        case 'ADD_TO_SAVED':

            let saveditem = [...state.saveditem]
            let itemsaved = saveditem.find(item => item.id === action.item.id);


            if (itemsaved) {
                return {
                    ...state,
                    // basket: [{ ...itemInCart, quantity:itemInCart.quantity + 1 }]
                    saveditem: state.saveditem.map(item => item.id === action.item.id
                        ? {
                            ...itemsaved,

                        } : item
                    )
                }
            }

            else {
                return {
                    ...state,
                    saveditem: [...state.saveditem, action.item]

                }
            };

        default:
            return {
                ...state
            }
    }
}
export default reducer
