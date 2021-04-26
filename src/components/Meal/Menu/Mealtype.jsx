import React from 'react';
import Recipe from './Recipe';

function Mealtype({ recipes }) {
    
    console.log('recipes', recipes)

    return (
        <div className="Carousel card-group">
                { !recipes ? (<p>Loading..</p>) : (
                    recipes.map(recipe =>
                    <div className="card">
                        <Recipe key={recipe.label} recipe={recipe} />
                    </div>)
                )   
                }
        </div>
    );
}

export default Mealtype;