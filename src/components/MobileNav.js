import React, {Component} from 'react'
import {Link} from 'react-router-dom'
require('../styles/mobile-nav.css')

export default class MobileMenu extends Component {

	constructor(props){
    super(props)
    this.state = {
      isBurgerClicked: false
    }
     this.burgerClicked = this.burgerClicked.bind(this)
  }

  burgerClicked(){
    this.setState({isBurgerClicked: !this.state.isBurgerClicked})
  }

  render() {
        let toggled = this.state.isBurgerClicked ? 'toggled' : ''

  return (
        <nav id="mobile-nav-container" className={toggled}>
				  <div id="menuToggle" className={toggled}>

            <div id="menuToggleSpans" onClick={this.burgerClicked} className={toggled}>
              <span className="bar1" />
				      <span className="bar2" />
				      <span className="bar3" />
            </div>
				    <ul id="mobile-nav" className={toggled}>
                <div className="mobile-title">
                  <Link to="/">
                    <p onClick={this.burgerClicked} id="mobile-name"> Alex Ballo</p>
                  </Link>
                  <p id="mobile-job">3D Artist</p>
                </div>

                <p className="mobileItems" onClick={this.burgerClicked}>
                  <Link to="/">portfolio</Link>
                </p>

                <p onClick={this.burgerClicked} className="mobileItems">
                  <Link to="/contact">contact</Link>
                </p>

                <p onClick={this.burgerClicked} className="mobileItems">
                  <Link to="/about">about</Link>
                </p>
				    </ul>
				  </div>
        </nav>
		)
	}
}
