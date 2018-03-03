import React from 'react'

const styles = {
	wrapper: {
		width: '75%',
		float: 'right',
		height: '100%'
	},
	text: {
		width: '60%',
		float: 'left',
		padding: '100px 30px'
	},
	pic: {
		width: '40%',
		float: 'right'
	},
	img: {
		maxWidth: '80%',
		marginTop: -60,
  	marginLeft: -110,
  	transform: 'rotate(7deg)'
	}
}

export default ({}) => (
	<div style={styles.wrapper}>
		<div style={styles.text}>
			<p>

				Hi I'm Alex, and I'm a 3D Artist living and working in Culver City, LA.
			</p>
			<p>
				I use ZBrush, MAYA, Photoshop, NUKE, PFTrack, Unreal Engine, Unity, Keyshot, VRay, xNormal, Substance Painter, Quixel Suite, Topogun, KNald, 3DSMax, 3D Coat, Marmoset Toolbag, and Marvelous Designer.
			</p>
			<p>
				Please get in touch if you'd like to work on something together.
			</p>
		</div>
		<div style={styles.pic}>
			<img style={styles.img} src="../../public/images/alexphoto.jpg" />
			<footer style={{position: 'absolute', bottom: 8, left: '30%', padding: '5px 10px', background: 'black', color: 'white', borderRadius: 25}}>
				<p style={{fontSize: '0.4em'}}>designed with React.js</p>
			</footer>
		</div>
	</div>
)
