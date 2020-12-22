import React from 'react'
import Cards from './card.js'
import './grid.css'

const props = {
    "id": "1",
    "img": "https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg",
    "title": "Fresh Graduate or IT professional Looking for a..",
    "author": "Amran Ahamed",
    "date": "05 Jul 2019",
    "description": "If you are a fresh graduate - or new to IT - looking for the next job, you need to read this. The last couple of years zekeLabs gave me a unique opportunity to assess technology.."
}

function Grid(props) {
    return(

        <section id="grid-section">

        <Cards data={props}/>

        </section>

    );
}

export default Grid;

