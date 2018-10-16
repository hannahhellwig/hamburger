import React from "react"
import Grid from "lib/grid"

import "./style.css"

class Header extends React.Component {

  state = {
    isActive: false
  }

  toggleActive = () => {
    const currentActiveState = this.state.isActive
    this.setState({ isActive: !currentActiveState }) // ! means the oposit //
  }

  render() {
    // let hamburgerClass = "hamburger"
    // if (this.stateisActive) {
    //   hamburgerClass = "hamburger active"
    // }

    return (
      <header>
        <input id="hamburger" className="hamburger-checkbox" type="checkbox" />
        {/* <label className={hamburgerClass}> */}
        {/* change all .hamburger-checkbox:checked ~  into .active */}
        <label htmlFor="hamburger" className="hamburger-label">
          <div className="bar1" />
          <div className="bar2" />
          <div className="bar3" />
        </label>
        <Grid className="header-grid">
          <a href="http://technigo.io">Technigo</a>
          <a href="http://technigo.io">Boot Camp</a>
          <a href="http://technigo.io">Stories</a>
          <a href="http://technigo.io">About</a>
        </Grid>
      </header>
    )
  }
}

export default Header
