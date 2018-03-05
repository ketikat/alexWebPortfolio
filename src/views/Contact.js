import React from 'react'
require('../styles/about-contact.css')


const styles = {
	wrapper: {
		// display: 'inline-flex',
		width: '70%',
		float: 'right',
		// height: '100%'
	},
	text: {
		width: '80%',
		// float: 'left',
		padding: '100px 5px 5px 5px '
	}
}

export default ({}) => (
	<div style={styles.wrapper}>
		<h1 className="hide">Contact</h1>
		<div style={styles.pic} className="fade-bottom"></div>
		<div style={styles.text}>

			<p style={{fontFamily: 'Lato', color: 'rgba(0,0,0,0.8)'}}>
			Available for contract work & commisions, please get in touch:
			</p>

			<div id="icons-container">
          <a href="https://www.artstation.com/aballo">
            <img width="25" height="50" src="../../public/artstation.svg" className="fa" id="artstationIcon"></img>
            <p id="artstationLink">Artstation</p>
          </a>
          <a href="https://www.linkedin.com/in/aleksander-w-ballo-27467061/">
            <i className="fa fa-linkedin"></i>
            <p>LinkedIn</p>
          </a>
          <a href="../../public/AlexBalloCV.pdf" download="AlexBalloCV.pdf" >
            <img src="../../public/cv.svg" className="fa" id="cvIco"></img>
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


{/*
	<h1 style={{fontFamily: 'Lato', color: 'grey', paddingTop: 0}}><a href="mailto:aleksander.ballo@gmail.com">aleksander.ballo@gmail.com</a></h1>
*/}
