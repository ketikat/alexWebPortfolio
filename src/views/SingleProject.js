import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Grid from '../components/Grid.js'
import Lightbox from 'react-images'
require('../styles/gallery.css')

export default class SingleProject extends Component {
	constructor(props){
		super(props)
		this.state = {
			ligthboxIsOpen: false,
			currentImage: 1,
			projectName: "",
			folderName:"",
			imgNum:8
		}
		this.closeLightbox = this.closeLightbox.bind(this)
		this.openLightbox = this.openLightbox.bind(this)
		this.gotoPrevious = this.gotoPrevious.bind(this)
		this.gotoNext = this.gotoNext.bind(this)
	}

	componentDidMount(){
			const folderName = this.props.title
			let imgNum
			let projectName

			switch (folderName) {
							case 'batman_knightfall':
							  	imgNum=8
							 		projectName='Batman: Knightfall'
							break

							case 'jack_the_ripper':
							  	imgNum=15
							 		projectName='Jack the Ripper'
							break

							case 'pilot_and_mech':
							  	imgNum=17
							 		projectName='Pilot, Mech, and Gun'
							break

							case 'medieval_armour':
							  	imgNum=10
							 		projectName='Medieval Armour'
							break

							case 'skanderbeg_statue':
							  	imgNum=8
							 		projectName='Skanderbeg Statue'
							break

							case 'outworld_statue':
							  	imgNum=8
							 		projectName='Outworld Statue'
							break

							case 'underground_tunnel':
							  	imgNum=8
							 		projectName='Underground Tunnel'
							break

							case 'x-men':
							  	imgNum=9
							 		projectName='X-MEN: Fatal Attractions'
							break

							case 'old_man':
							  	imgNum=7
							 		projectName='Study of an old man'
							break
			}

				this.setState({
					projectName: projectName,
					folderName: folderName,
					imgNum: imgNum
				})
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

		let projectThumbs = []
		let lightboxImages = []

		// for thums for GRID
		for(let i = 1; i < this.state.imgNum+1; i++) {
			projectThumbs.push( {url:`../../public/images/${this.state.folderName}/thumbs/${this.state.folderName}${i}.jpg`} )
		}
		// for LIGHTBOX:
		for(let i = 1; i < this.state.imgNum+1; i++) {
			lightboxImages.push({src: `../../public/images/${this.state.folderName}/${this.state.folderName}${i}.jpg`})
		}

		return (

			<div className="gallery-container">
				<p className="gallery-title"> {this.state.projectName}</p>
				<div id="single-gallery">
					<Grid
						clickHandler={this.openLightbox}
						paddingBottom="50%"
						imgFitting="cover"
						columns={[1,1,1]}
						imagesArray={projectThumbs}
						radius={5}
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
		    	width={5000}
				/>

			</div>

		)
	}
}
