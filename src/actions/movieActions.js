export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_Movie";

export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload:id});
}

export const addMovie = movie=>{
    return({type: ADD_MOVIE, payload: movie});


}