import React, { Component } from 'react';
import './Recipe.css';

const Recipe = ({title, img, calories, ingredients}) => {
    return(
        <div className="Recipe">
            <div className="Container">
            <img src={img} alt=""/>
            
            <div className="Desc">
                <h2><strong>{title}</strong></h2>
                <hr></hr>
                <ul>
                    {ingredients.map( ingr => (
                        <li>{ingr.text}</li>
                    ))}
                </ul>
            </div>
            </div>            
        </div>
    );
}

export default Recipe;