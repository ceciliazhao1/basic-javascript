import React from "react"
import "../style/header.css"
import logo from "../img/logo.png"

export const Header = () => {
  return (
   
      <header  className="header">
        <div className="img-container">
            <img src={logo} alt="" style={{ width: '500px', height: 'auto' }} />
        </div>
        <h1>Join us for An Astounding Adventure!</h1>
        <p>Visit London at the historic Cow Palace Exhibition Halls! Enter the winding lanes of Victorian London and immerse yourself in a world of music halls, theatres, pubs, dance parties, and charming shops overflowing with hand-made holiday treasures. Enticing aromas of roasted chestnuts and hearty foods fill the air. Discover holiday revelry in this lamp-lit city brimming with hundreds of lively and colorful characters from the imagination of Charles Dickens, the pages of history, and the sometimes saucy world of the Victorian stage.
        </p>
        <p className="italic-text">“…There is nothing in the world so irresistibly contagious as laughter and good-humor.”
~ Charles Dickens, A Christmas Carol</p>
        <hr style={{ borderTop: '2px solid #084606' }} />
        <h3>Join us in 2023 for Five Weekends Nov. 18 - Dec. 17, 10am - 6pm at the Historic Cow Palace!</h3>
  
        <a className="linkStyle" href="https://dickensfair.ticketspice.com/the-great-dickens-christmas-fair-2023" target="_blank" rel="noopener noreferrer">
        Order Tickets to Dickens’ London Today!</a>

      </header>

  )
}