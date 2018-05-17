import React from 'react'
require('../styles/about.css')

export default function About(props) {

	return (
	   <div id="about-container">

	    <div id="about-container-inner">
				<p>
					Hi I'm Alex, and I'm a 3D Artist living and working in Culver City, LA.
				</p>

				<p>
					Over last few years I have gained experience in a wide range of areas like 3D digital asset creation, post production, VFX, VR and video games.
				</p>

				<p>
					My primary skills lie in 3D modeling (characters and environments, high and low poly), texturing, lighting, rendering and compositing.
				</p>

				<p>
					Some of the software I use includes ZBrush, MAYA, Photoshop, NUKE, After Effects, Unreal Engine, Unity, Substance Painter, Marvelous Designer and VRay.
				</p>

				<p>Please <Link to='/contact'><u>get in touch</u></Link> if you'd like to work on something together
        </p>
			</div>
		</div>
	)
}


