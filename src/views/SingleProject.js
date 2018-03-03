import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PreLoader from '../components/PreLoader'
require('../styles/gallery.css')

import ReactRpg from '../components/Grid.js'
import Lightbox from 'react-images'
// import { Gallery, Image, Overlay } from 'react-stylish-gallery'

export default class AllProjects extends Component {
	constructor(props){
		super(props)
		this.state = {
			lightboxIsOpen: false,
			currentImage: 5,
		}

		this.closeLightbox = this.closeLightbox.bind(this)
		this.openLightbox = this.openLightbox.bind(this)
		this.gotoPrevious = this.gotoPrevious.bind(this)
		this.gotoNext = this.gotoNext.bind(this)
	}

	gotoPrevious() {
		this.setState({
			currentImage: this.state.currentImage -1
		})
	}

	gotoNext() {
		this.setState({
			currentImage: this.state.currentImage +1
		})
	}

	openLightbox(index) {
		this.setState({
			lightboxIsOpen: true,
			currentImage: index
		})

	}

	closeLightbox() {
		this.setState({
			lightboxIsOpen: false
		})
	}

	render() {
		let allProjectsThumbs = []


		let names = ["aged_man", "anime", "bridge", "gun", "knightfall", "knights_armor", "mech_suit", "pilot", "skanderbeg", "skull_sermon", "tunnel", "x-men"]

// HOW TO LINK EXAMPLE:
		// for(let i = 0; i < names.length; i++) {
		// 	allProjectsThumbs.push(	<Link to={`${names[i]}`}><img className="imageWrapper" width={"33%"} src={`images/allprojects/${names[i]}.jpg`} /></Link>)
		// }

// for thums for GRID
		for(let i = 0; i < names.length; i++) {
			allProjectsThumbs.push( {url:`../../images/allprojects/${names[i]}.jpg` } )
		}

// for LIGHTBOX:
		for(let i = 0; i < names.length; i++) {
			allProjectsThumbs.push({src: `../../images/allprojects/${names[i]}.jpg`})
		}

		console.log(allProjectsThumbs)

		return (

			<div className="gallery">

				<div style={{width: '80%', margin: '6em auto 100px'}}>
					<p>text in gallery</p>
					 <ReactRpg imagesArray={allProjectsThumbs}/>
				</div>

				<Lightbox
				 	isOpen={this.state.isOpen}
					images={allProjectsThumbs}
			    onClickPrev={this.gotoPrevious}
	        onClickNext={this.gotoNext}
		    	onClose={this.closeLightbox}
		    	currentImage={this.state.currentImage}
				/>

			</div>

		)
	}
}
