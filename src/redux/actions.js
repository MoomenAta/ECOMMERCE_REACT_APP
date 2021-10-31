import axios from "axios";

export const requestdata = ()=>
{
    return {
        type : "REQUEST"
    }
}
export const respnsetdata = (data)=>
{
    return {
        type : "RESPONSE",
        payload : data
    }
}
export const addtocart = (pro)=>
{
    return {
        type : "ADDTOCART",
        payload : pro
    }
}
export const removefromcart = (pro)=>
{
    return {
        type : "REMOVEFROMCART",
        payload : pro
    }
}
export const searchvalue = (value)=>
{
    return {
        type : "SEARCHVALUE",
        payload : value
    }
}
export const categoryvalue = (value)=>
{
    return {
        type : "CATEGORYVALUE",
        payload : value
    }
}
export const addwishlist = (value)=>
{
    return {
        type : "ADDWISHLIST",
        payload : value
    }
}
export const deletewishlist = (value)=>
{
    return {
        type : "DELETEWISHLIST",
        payload : value
    }
}
export const loggin = ()=>
{
    return {
        type : "LOGGEDIN",
    }
}
export const logout = ()=>
{
    return {
        type : "LOGGEDOUT"
    }
}
export const userdata = (user)=>
{
    return {
        type : "USERDATA",
        payload : user
    }
}
export const fetchdata =()=>
{
    return (dispatch)=>
    {
        dispatch(requestdata);
        axios.get('https://fakestoreapi.com/products/')
        .then((res) =>
            {
                const products = res.data;
                console.log(products);
                dispatch(respnsetdata(products));
            })
    }
}