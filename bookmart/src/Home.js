import React from 'react';
import Navigation from './Navigation';

function Home() {
    return (
        <div className='home'>
            <Navigation />
            <div className='intro'>
                <div className='intro-text'>
                    <p>Welcome to BookNest – your one-stop destination for buying, selling, and discovering books that inspire, enlighten, and entertain. 
                    Whether you’re looking to dive into a new novel, trade in a beloved classic, or explore hidden gems from indie authors, we’ve got 
                    something for every reader. At BookNest, we believe each book holds a world of possibilities – and we’re here to help you find yours.
                    <br/><br/>
                    Browse our curated collections, connect with fellow book lovers, and unlock exclusive deals on the stories that captivate you. Start 
                    your literary adventure with us today – where every turn of the page brings something new to discover!</p>
                </div>
            </div>
        </div>
    )
}

export default Home