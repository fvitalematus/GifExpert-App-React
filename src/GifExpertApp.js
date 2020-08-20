import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['Dragon Ball, Bob Esponja, Mortal Kombat'];
    const [categories, setCategories] = useState(['Rick and Morty']);

    // const handleAdd = () => {
    // setCategories( [ 'Los Caballeros del Zodiaco', ...categories] );
    // setCategories(cats => [...cats, 'Los Caballeros del Zodiaco']);
    // }

    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>

        </>
    )
}
