import React from 'react'
import CV from './CV'
require('../styles/contact.css')

export default function Contact (props) {
  return(
      	<div id="contact-container">
        <div id="contact-container-inner">
      			<p>
      			Available for contract work & commisions, please get in touch:
            <br/>
            aleksander.ballo@gmail.com
            <br/>
            (617) 699-9754
      			</p>

      			<div id="icons-container">
                <a href="https://www.artstation.com/aballo" target="_blank">
                  <img width="25" height="50" src="../../public/artstation.svg" className="fa" id="artstationIcon"></img>
                  <p id="artstationLink">Artstation</p>
                </a>
                <a href="https://www.linkedin.com/in/aleksander-w-ballo-27467061/" target="_blank">
                  <i className="fa fa-linkedin"></i>
                  <p>LinkedIn</p>
                </a>
                <a href="../../public/AlexBalloCV.pdf" download="AlexBalloCV.pdf" >
                  <img src="../../public/cv.svg" className="fa" id="cvIco"></img>
                  <p id="cvlink">CV Link</p>
                </a>



            </div>
            {/*<CV />*/}
      	</div>
      </div>
  )
}





// <a href="mailto:aleksander.ballo@gmail.com">
// <i className="fa fa-envelope-o"></i>
// <p>Send Email</p>
// </a>
