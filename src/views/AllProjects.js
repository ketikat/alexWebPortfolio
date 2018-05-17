import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import history from '../history'
require('../styles/gallery.css')

import Grid from '../components/Grid'

class AllProjects extends Component {
	constructor(props){
		super(props)
		this.state = {
		}
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(link){
		history.push(link)
	}

	render(){
		let allProjectsThumbs = []

		let names = ["jack_the_ripper", "underground_tunnel", "pilot_and_mech", "outworld_statue", "medieval_armour", "old_man", "batman_knightfall", "x-men", "skanderbeg_statue" ]

		for(let i = 0; i < names.length; i++) {
				allProjectsThumbs.push({
							url:`../../public/images/allprojects/${names[i]}.jpg`,
				      link:`/${names[i]}`
				})
		}
		return (
					<div className="gallery-container">
					<div id="all-gallery">
							<p className="gallery-title">Recent Work</p>
							 <Grid
							 clickHandler={this.handleClick}
							 imagesArray={allProjectsThumbs}
							 padding={5}
							 radius={3}
							 />
					</div>
				</div>
		)
	}
}

export default AllProjects
