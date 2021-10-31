const reducerTwo = (state = [],action)=>
{
    switch (action.type)
    {
        case "REQUEST":
            {
                return state;
            }
            case "RESPONSE":
            {
                return state = action.payload;
            }
            default :
            return state;
    }
        
}
export default reducerTwo;