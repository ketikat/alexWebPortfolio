import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PreLoader from '../components/PreLoader'
require('../styles/gallery.css')

import ReactRpg from '../components/Grid'

export default class AllProjects extends Component {
	constructor(props){
		super(props)
		this.state = {
		}
	}

	render() {
		let allProjectsThumbs = []

		let names = ["aged_man", "anime", "bridge", "gun", "knightfall", "knights_armor", "mech_suit", "pilot", "skanderbeg", "skull_sermon", "tunnel", "x-men"]

		for(let i = 0; i < names.length; i++) {
				allProjectsThumbs.push( {url:`../../images/allprojects/${names[i]}.jpg` } )
			}

		console.log(allProjectsThumbs)

		return (
			<div className="gallery">
				<div style={{width: '80%', margin: '6em auto 100px'}}>
					<p>text in gallery</p>
					 <ReactRpg imagesArray={allProjectsThumbs}/>
				</div>
			</div>

		)
	}
}
