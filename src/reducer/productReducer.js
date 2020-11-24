import { PRODUCT_DATA,GET_ALL_PRODUCTS, DELETE_CART_ITEM, ADD_ONE_ITEM, SUB_ONE_ITEM } from '../actions/types';


const initialState = {
    allProducts: [
        {
            id: 1,
            name: "tachyons",
            img: "https://picsum.photos/seed/picsum/200/300",
            price: 100,
            available: 1
        },
        {
            id: 2,
            name: "Grayscale",
            img: "https://picsum.photos/200/300?grayscale",
            price: 30,
            available: 1
        },
        {
            id: 3,
            name: "Blur",
            img: "https://picsum.photos/200/300/?blur",
            price: 50,
            available: 1
        },
        {
            id: 4,
            name: "Blur - 2",
            img: "https://picsum.photos/id/870/200/300?grayscale&blur=2",
            price: 70,
            available: 1
        }
    ],
    cart: [
        {
            id: 2,
            name: "Grayscale",
            img: "https://picsum.photos/200/300?grayscale",
            price: 30,
            units: 1
        }
    ],
    cartSubtotal: 30,
};


export const productReducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_ALL_PRODUCTS:
            return state.allProducts;
        case PRODUCT_DATA:
            const existingProduct = state.cart.filter((cart) => cart.id === action.payload.id);
            if(existingProduct.length > 0){
                const withoutExistingProduct = state.cart.filter((p) => p.id !== action.payload.id);
                const updateUnits = {
                    ...existingProduct[0],
                    units: existingProduct[0].units + action.payload.units
                };
                return {
                    allProducts: state.allProducts,
                    cart: [...withoutExistingProduct,updateUnits],
                    cartSubtotal: (state.cartSubtotal + (existingProduct[0].units * action.payload.price))
                }
            }else{
                return{
                    allProducts: state.allProducts,
                    cart: [action.payload, ...state.cart],
                    cartSubtotal: (state.cartSubtotal + action.payload.price)
                }
                
            }
        
        case DELETE_CART_ITEM:
            const remaningCart = state.cart.filter((cart) => cart.id !== action.payload.id);
            return{
                allProducts: state.allProducts,
                ...state.cart,
                cart: remaningCart,
                cartSubtotal: (state.cartSubtotal - action.payload.price)
            }
        case ADD_ONE_ITEM:
            const existingCartItem = state.cart.filter((cart) => cart.id === action.payload.id);
            if(existingCartItem.length > 0){
               const withoutExistingCartItems = state.cart.filter((p) => p.id !== action.payload.id);
            const updateCartUnits = {
                ...existingCartItem[0],
                units: existingCartItem[0].units + 1
            };
            return{
                allProducts: state.allProducts,
                cart: [...withoutExistingCartItems, updateCartUnits],
                cartSubtotal: (state.cartSubtotal + action.payload.price)
            }
        }
        break
        case SUB_ONE_ITEM:
            const subExistingCartItem = state.cart.filter((cart) => cart.id === action.payload.id);
            if(subExistingCartItem.length > 0 && action.payload.units > 1){
               const subWithoutExistingCartItems = state.cart.filter((p) => p.id !== action.payload.id);
            const subUpdateCartUnits = {
                ...subExistingCartItem[0],
                units: subExistingCartItem[0].units - 1
            };
            return{
                allProducts: state.allProducts,
                cart: [...subWithoutExistingCartItems, subUpdateCartUnits],
                cartSubtotal: (state.cartSubtotal - action.payload.price)
            }
        }
        break
        default:
            return state;
    } 
}
