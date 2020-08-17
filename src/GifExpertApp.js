import React, { useState } from 'react'

export const GifExpertApp = () => {

    // const categories = ['Dragon Ball, Bob Esponja, Mortal Kombat'];
    const [categories, SetCategories] = useState(['Dragon Ball', 'Bob Esponja', 'Mortal Kombat']);

    const handleAdd = () => {
        // SetCategories( [ 'Los Caballeros del Zodiaco', ...categories] );
        SetCategories(cats => [...cats, 'Los Caballeros del Zodiaco']);
    }
    return (
        <>
            <h2>Gif Expert App</h2>
            <hr />

            <button onClick={handleAdd}>Agregar</button>

            <ol>
                {
                    categories.map(category => {
                        return <li key={category}> {category}</li>
                    })
                }
            </ol>

        </>
    )
}
