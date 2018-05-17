import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
require('../styles/menu.css')

class Menu extends Component {

	constructor(props){
    super(props)
    this.state = {
      isProjectsClicked: false
    }
     this.clicked = this.clicked.bind(this)
  }

  clicked(){
    this.setState({isProjectsClicked: !this.state.isProjectsClicked})
  }

  render() {
    return (
      <div className="menu">
							<div className="menu-container">
								<div id="main-menu">
                  <div className="title">
                    <Link to="/">
                      <p id="name"> Alex Ballo</p>
                    </Link>
                    <p id="job">3D Artist</p>
                  </div>
                  <div className="items">
										<p onClick={this.clicked}><Link to="/">portfolio</Link></p>
										{
											this.state.isProjectsClicked
											?
											(
                        <div>
                          <p className="offsetItem">
                            <Link to="/jack_the_ripper">jack the ripper</Link>
                          </p>

                          <p className="offsetItem">
                            <Link to="/underground_tunnel">underground tunnel</Link>
                          </p>

                          <p className="offsetItem">
                            <Link to="/pilot_and_mech">pilot and mech</Link>
                          </p>

                          <p className="offsetItem">
                            <Link to="/outworld_statue">outworld statue</Link>
                          </p>

                          <p className="offsetItem">
                            <Link to="/medieval_armour">medieval armour</Link>
                          </p>

                          <p className="offsetItem">
                            <Link to="/old_man">old man</Link>
                          </p>

                          <p className="offsetItem">
                            <Link to="/batman_knightfall"> batman: knightfall</Link>
                          </p>

                          <p className="offsetItem">
                            <Link to="/x-men">x-men: fatal attractions</Link>
                          </p>

                          <p className="offsetItem">
                            <Link to="/skanderbeg_statue">skanderbeg statue</Link>
                          </p>
                        </div>
                      )
											:
											null
										}
										<p><Link to="/contact">contact</Link></p>
										<p><Link to="/about">about</Link></p>
                  </div>
								</div>

                  <div className="social">
                      <a href="https://www.artstation.com/aballo" rel="noopener noreferrer" target="_blank">
                       <img width="25" height="50" className="fa" id="artstationIco" src="../../public/artstation.svg" />
                      </a>
                      <a href="https://www.linkedin.com/in/aleksander-w-ballo-27467061/" target="_blank">
                        <i className="fa fa-linkedin" />
                      </a>
                      <a href="../../public/Alex_Ballo_Resume.pdf" download="AlexBalloCV.pdf">
                        <img src="../../public/cv.svg" className="fa" id="cvIco" />
                      </a>
                      <a href="mailto:aleksander.ballo@gmail.com">
                        <i className="fa fa-envelope-o" />
                      </a>
                  </div>

							</div>
						</div>
    )
  }
}
export default withRouter(Menu)

