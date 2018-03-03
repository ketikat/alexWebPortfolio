import React from 'react'
require('../styles/contact.css')

const styles = {
	wrapper: {
		width: '75%',
		float: 'right',
		height: '100%'
	},
	text: {
		width: '100%',
		margin: '0 auto',
		textAlign: 'center'
	}
}

export default ({}) => (
	<div style={styles.wrapper}>
		<h1 className="hide">Contact</h1>
		<div style={styles.pic} className="fade-bottom"></div>
		<div style={styles.text}>
			<p style={{fontFamily: 'Lato', color: 'rgba(0,0,0,0.9)', padding: 40}}>Available for contract work & commisions</p>
			<h1 style={{fontFamily: 'Lato', color: 'grey', paddingTop: 0}}><a href="mailto:aleksander.ballo@gmail.com">aleksander.ballo@gmail.com</a></h1>
		</div>
	</div>
)
