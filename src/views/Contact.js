import React from 'react'
require('../styles/contact.css')

export default function Contact (props) {
  return(
      	<div id="contact-container">
        <div id="contact-container-inner">
      			<p>
      			Available for contract work & commisions, please get in touch:
      			</p>

      			<div id="icons-container">
                <a href="https://www.artstation.com/aballo">
                  <img width="25" height="50" src="../../public/artstationBlack.svg" className="fa" id="artstationIcon"></img>
                  <p id="artstationLink">Artstation</p>
                </a>
                <a href="https://www.linkedin.com/in/aleksander-w-ballo-27467061/">
                  <i className="fa fa-linkedin"></i>
                  <p>LinkedIn</p>
                </a>
                <a href="../../public/AlexBalloCV.pdf" download="AlexBalloCV.pdf" >
                  <img src="../../public/cvBlack.svg" className="fa" id="cvIco"></img>
                  <p id="cvlink">CV Link</p>
                </a>
                <a href="mailto:aleksander.ballo@gmail.com">
                  <i className="fa fa-envelope-o"></i>
                <p>Send Email</p>
                </a>
            </div>
      	</div>
      </div>
  )
}
