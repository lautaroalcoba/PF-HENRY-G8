import reducerPublication from "./publication";

function combineReducer(state = {}, action) {
    return {
      publication: reducerPublication(state.publication,action),
      followers:{},
      follow:{}
    };
  }
  
  export default combineReducer;