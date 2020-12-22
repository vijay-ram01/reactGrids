import React from 'react'
import './main.css'
import Filters from './filters.js'
import Grid from './grid'

function Main() {
    return(

        <main id="main-area">

        <section id="latest-posts">
        <h3>Latest Posts</h3>
        <Filters />
        <Grid />
        </section>

        </main>

        

    );
}

export default Main;