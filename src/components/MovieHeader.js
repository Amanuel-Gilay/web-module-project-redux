import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { TOGGLE_FAVORITES } from '../actions/favriteActions';

import { toggleFavorite } from '././actions/favoritesActions'

const MovieHeader = (props) => {
    const {appTitle, displayFavorites, toggleFavorite} = props;

    const handleClick = ()=>{
        TOGGLE_FAVORITES();
    }
    
    return(<div className="table-title">
        <div className="row">
        <div className="col-sm-6">
            <h2>{appTitle}</h2>
        </div>
        <div className="col-sm-6 headerBar">
            <div onClick={handleClick} className="btn btn-sm btn-primary"><span>{ displayFavorites ? "Hide" : "Show"} Favorites</span></div>
            <Link to="/movies" className="btn btn-sm btn-primary">View All Movies</Link>
            <Link to="/movies/add" className="btn btn-sm btn-success"><i className="material-icons">&#xE147;</i> <span>Add New Movie</span></Link>
        </div>
        </div>
    </div>);
}

const mapStateToProps = (state)=>{
    return({
        displayFavorites:state.favoriteReducer.displayFavorites,
        appTitle: state.movieReducer.appTitle
    });
}

export default connect(mapStateToProps, {toggleFavorite})(MovieHeader);