// import React from 'react' --> NO se utiliza a menos que se regrese un archivo JSX

import { useState } from "react"

export const useFetchGifs = () => {


    const [state, setState] = useState({
        data: [],
        loading: true
    });

    setTimeout(() => {
        setState({
            data: [1, 2, 3, 4, , 5, 6, 7],
            loading: false
        })
    }, 3000);

    return state; // {data[], loading: true };
}
