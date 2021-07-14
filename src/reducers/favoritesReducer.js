import { TOGGLE_FAVORITES, ADD_FAVORATE, REMOVE_FAVORATE } from './..actions/favoritesActions';

const initialState = {
    favorites: [],
    displayFavorites:true
}

const favoriteReducer = (state = initialState, action)=> {
    switch(action.type){
        case(TOGGLE_FAVORITES): {
            return{
                ...state,
            displayFavorites: !state.displayFavorites
            }
            
        }
        case(ADD_FAVORATE):{
            return {
                ...state,
                favorites: [...StyleSheet.favorites,action.payload]
            }
        }
            
        case(REMOVE_FAVORATE):{
            return {
                ...state,
                favorites: state.favorites.filter(item=>(item.id !== action.payload))
            }
        }
        default:
            return(state);
    }
}

export default favoriteReducer;