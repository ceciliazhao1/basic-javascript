// src/Article.js
import React from 'react';
import '../style/article.css';
import bepart from '../img/bepart.jpg';
import tours from '../img/tours.jpg';
import feast from '../img/feast.jpg';
import sherlock from '../img/sherlock.jpg';


export const Article = () => {
    return(
        <div>
            <article className='article'>
            
                <div className="image-container">
                <img src={feast} alt="" style={{ width: '200px', height: 'auto' }} />
                </div>
                <div>
                    <h2>Shop, Play & Feast in London</h2>
                    <p>Throughout the streets of the Fair discover the finest hand made crafts, delicious foods, and lively characters – learn more below! Of special note, enjoy 5 traditional English Public Houses. Each of these delightful “Pubs” has its own unique personality, history & menu. And new Experiences can be found throughout London this season, including Port & Chocolate Tastings at The Green Man Inn, and a mysterious Pub Crawl with Jekyll & Hyde and the Elixir of Madness. </p>
                </div>
            </article>
            <article className='article'>
                
                
                <div className="image-container">
                <img src={bepart} alt="" style={{ width: '200px', height: 'auto' }} />
                </div>
                <div>
                <h2>Be Part of the Celebration!</h2>
                <p>Visit London at the historic Cow Palace Exhibition Halls! Enter the winding lanes of Victorian London and immerse yourself in a world of music halls, theatres, pubs, dance parties, and charming shops overflowing with hand-made holiday treasures. Enticing aromas of roasted chestnuts and hearty foods fill the air. Discover holiday revelry in this lamp-lit city brimming with hundreds of lively and colorful characters from the imagination of Charles Dickens, the pages of history, and the sometimes saucy world of the Victorian stage.</p>
                </div>
            </article>
            <article className='article'>
                
                <div className="image-container">
                <img src={tours} alt="" style={{ width: '200px', height: 'auto' }} />
                </div>
                <div>
                <h2>Tours of London</h2>
                <p>Use the map found within The Illustrated London Chimes (program provided at Front Gate) to make your way to the Grand Concourse where you will meet your tour guides, the marvelous inhabitants of Victorian’ London, including characters from the works of Mr. Dickens himself! Select one of several guided tours, each highlighting a new and different way to enjoy your day in London.
                </p>
                <p>A CHILDREN’S TOUR OF LONDON Follow this self-guided, delightful excursion highlighting the amazing amusements and amusing amazements found throughout London. Designed for our younger guests but any and all may wish to play along! Also found in The Illustrated London Chimes.</p>
                </div>
            </article>
            <article className='article'>
                
                <div className="image-container">
                <img src={sherlock} alt="" style={{ width: '200px', height: 'auto' }} />
                </div>
                <div>
                <h2>The SHERLOCK HOLMES Experience</h2>
                <p>Calling all sleuths! London is rife with crime and Holmes has enlisted you to help with his latest case to assist Scotland Yard. As a fledgling detective, your job is to follow the clues through the streets of London, solve the perplexing puzzles and report back to Sherlock before it’s too late. Visit Sherlock’s office found on 221B Baker Street and you will be informed of your duties. You’ll be given a map as you set out to decipher codes and solve mysterious puzzles, unraveling malevolent misdeeds that take you into a world of international intrigue. Will you stop the nefarious villains before they strike again?</p>
                </div>
            </article>
        </div>
    );
}