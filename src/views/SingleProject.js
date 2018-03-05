import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PreLoader from '../components/PreLoader'
import Grid from '../components/Grid.js'
import Lightbox from 'react-images'
require('../styles/singleproject.css')

export default class SingleProject extends Component {
	constructor(props){
		super(props)
		this.state = {
			ligthboxIsOpen: false,
			currentImage: 1,
			projectName: ""
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
			ligthboxIsOpen: true,
			currentImage: index
		})
	}

	closeLightbox() {
		this.setState({
			ligthboxIsOpen: false
		})
	}

	render() {

		const folder = this.props.title

		let projectThumbs = []
		let lightboxImages = []

		// for thums for GRID
		for(let i = 1; i < 6; i++) {
			projectThumbs.push( {url:`../../public/images/${folder}/thumbs/${folder}${i}.jpg`} )
		}

		// for LIGHTBOX:
		for(let i = 1; i < 6; i++) {
			lightboxImages.push({src: `../../public/images/${folder}/${folder}${i}.png`})
		}

		return (

			<div className="gallery">

				<div style={{width: '80%', margin: '6em auto 100px'}} >
					<p>gallery under construction! </p>
					<Grid
						clickHandler={this.openLightbox}
						paddingBottom="40%"
						imgFitting="cover"
						columns={[1,1,1]}
						imagesArray={projectThumbs}
					/>
				</div>

				<Lightbox
				 	isOpen={this.state.ligthboxIsOpen}
					images={lightboxImages}
			    onClickPrev={this.gotoPrevious}
	        onClickNext={this.gotoNext}
		    	onClose={this.closeLightbox}
		    	currentImage={this.state.currentImage}
		    	backdropClosesModal={true}
		    	showImageCount={false}
		    	width="5000"
				/>

			</div>

		)
	}
}
