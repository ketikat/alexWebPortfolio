import React from 'react'


const styles = {
	wrapper: {
		width: '75%',
		float: 'right',
		height: '100%'
	},
	text: {
		fontFamily: 'Lato',
		width: '60%',
		float: 'left',
		padding: '100px 50px'
	},
	pic: {
		height: '40%',
		width: '40%',
		display: 'inline-block',
    boxSizing: 'border-box',
    padding: '0px 50px'
}
}

export default ({}) => (
	<div style={styles.wrapper}>
	<h1 className="hide">About</h1>
		<div style={styles.text}>


				<p style={{fontFamily: 'Lato', color: 'rgba(0,0,0,0.8)'}}>Hi I'm Alex, and I'm a 3D Artist living and working in Culver City, LA.</p>

				<p style={{fontFamily: 'Lato', color: 'rgba(0,0,0,0.8)'}} >I use ZBrush, MAYA, Photoshop, NUKE, PFTrack, Unreal Engine, Unity, Keyshot, VRay, xNormal, Substance Painter, Quixel Suite, Topogun, KNald, 3DSMax, 3D Coat, Marmoset Toolbag, and Marvelous Designer.</p>

				<p style={{fontFamily: 'Lato', color: 'rgba(0,0,0,0.8)'}} >Please get in touch if you'd like to work on something together &nbsp;
				<a href="mailto:aleksander.ballo@gmail.com">
          <i className="fa fa-envelope-o"></i>
        </a>
        </p>

		</div>
			<img style={styles.pic} src="../images/alexphoto.jpg" />
	</div>
)
