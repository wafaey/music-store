//import { setArtists } from "../action/index";
const initialState = {
    artists: [],

  };
const rootReducer= (state = initialState, action)=>{
    // eslint-disable-next-line default-case
    switch(action.type){
        case 'SET_ARTISTS' :
        return Object.assign({},state,{artists: action.value});
        default:
        return state;
    }
} 
export default rootReducer; 
