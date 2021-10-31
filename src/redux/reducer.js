import { initialState } from "../index";

const reducer = (state = initialState ,action)=>
{
    switch (action.type)
    {
            case "REQUEST":
            {
                return state={...state};
            }
            case "RESPONSE":
            {
                return state={...state , products : action.payload};
            }
            case "ADDTOCART":
                return state={...state, cart : [ ...state.cart , action.payload]}
            case "REMOVEFROMCART":
                return state={...state, cart : [ ...state.cart ]}
            case "SEARCHVALUE":
                return state={...state, searchValue : action.payload }
            case "CATEGORYVALUE":
                return state={...state, categoryValue : action.payload }
            case "ADDWISHLIST":
                return state={...state, wishList : [ ...state.wishList , action.payload ] }
            case "DELETEWISHLIST":
                return state={...state, wishList : [...state.wishList] }
            case "LOGGEDIN":
                return state={ ...state, loggedIn : true }
            case "LOGGEDOUT":
                return state= { ...state, loggedIn : false }
            case "USERDATA":
                return state= { ...state, userData : [...state.userData , action.payload] }
            default :
            return state={...state};
    }   
}
export default reducer;