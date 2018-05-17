import React, {Component} from 'react'
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
			projectDescription: "",
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
			let projectDescription

			switch (folderName) {
							case 'batman_knightfall':
							  	imgNum=8
							 		projectName='Batman: Knightfall'
							 		projectDescription='Knightfall Volume One'
							break

							case 'jack_the_ripper':
							  	imgNum=15
							 		projectName='Jack the Ripper - Assassin of Black'
							 		projectDescription=' From the comic book and TV Show "Fate/Apocrypha"'
							break

							case 'pilot_and_mech':
							  	imgNum=17
							 		projectName='Pilot and Mech'
							 		projectDescription=''
							break

							case 'medieval_armour':
							  	imgNum=10
							 		projectName='Medieval Armour'
							 		projectDescription=''
							break

							case 'skanderbeg_statue':
							  	imgNum=8
							 		projectName='Skanderbeg Statue'
							 		projectDescription=''
							break

							case 'outworld_statue':
							  	imgNum=8
							 		projectName='Outworld Statue'
							 		projectDescription=''
							break

							case 'underground_tunnel':
							  	imgNum=8
							 		projectName='Underground Tunnel'
							 		projectDescription=''
							break

							case 'x-men':
							  	imgNum=9
							 		projectName='X-MEN: Fatal Attractions'
							 		projectDescription='X-MEN #25 - Fatal Attractions (page 42)'
							break

							case 'old_man':
							  	imgNum=7
							 		projectName='Study of an old man'
							 		projectDescription=''
							break
			}

				this.setState({
					projectName: projectName,
					projectDescription: projectDescription,
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
				<br/>
				<p className="gallery-description"> {this.state.projectDescription}</p>
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
