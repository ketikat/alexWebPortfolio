import React, {Component} from 'react'
import {Link} from 'react-router-dom'
require('../styles/mobilemenu.css')

export default class MobileMenu extends Component {

	constructor(props){
    super(props)
    this.state = {
    	isProjectsClicked: false
    }
     this.clicked = this.clicked.bind(this)
  }

 	clicked(e){
 		this.setState({isProjectsClicked: !this.state.isProjectsClicked})
 	}

  render() {
  	return (
			  <nav className="mobile-nav">
				  <div id="menuToggle">
				    <input type="checkbox" />
				    <span></span>
				    <span></span>
				    <span></span>
				    <ul id="menu">

						    <div className="mobile-logo">
									<Link to="/">
                    <h3>Alex W. Ballo</h3>
                    <h5>3D Artist</h5>
                    </Link>
								</div>
								<p onClick={this.clicked}><Link to="/">portfolio</Link></p>
							{
								this.state.isProjectsClicked
								?
								(<div>
								    			<p className="offsetItem"><Link to="knightfall" >knightfall</Link></p>
													<p className="offsetItem"><Link to="x-men" replace>x-men</Link></p>
													<p className="offsetItem"><Link to="aged_man"replace >aged man study</Link></p>
													<p className="offsetItem"><Link to="skanderbeg">skanderbeg</Link></p>
													<p className="offsetItem"><Link to="skull_sermon">skull sermon</Link></p>
													<p className="offsetItem"><Link to="pilot">femme pilot</Link></p>
													<p className="offsetItem"><Link to="gun">gun</Link></p>
													<p className="offsetItem"><Link to="mech_suit">mech suit</Link></p>
													<p className="offsetItem"><Link to="knights_armor">knight's armor</Link></p>
													<p className="offsetItem"><Link to="anime">anime girl</Link></p>
													<p className="offsetItem"><Link to="bridge">bridge</Link></p>
													<p className="offsetItem"><Link to="tunnel">tunnnel level</Link></p>
								</div>)
								:
								null
							}
								<p><Link to="contact">contact</Link></p>
								<p><Link to="about">about</Link></p>

				    </ul>
				  </div>
				</nav>
		)
	}
}


  						// 	<div className="mobile-logo">
								// 	<Link to="/">
								// 	 	<img src="images/alexballoname.svg" />
								// 	</Link>
								// 	<h1 className="hide">Alex Ballo - 3D Artist</h1>
								// </div>
