import React from 'react'


class Nav extends React.Component{
	

  constructor(props) {
    super(props);
  }

  render(){

    if(window.localStorage.getItem('token') != ''){
        return(


<nav className="nav">
  <div className="nav-left">
    <a className="nav-item">
      <img src="http://i.imgur.com/jXPv6xT.png" alt="Bulma logo" />
    </a>
  </div>

  <div className="nav-center">
    <a className="nav-item" href="https://github.com/Shadid12/CampFire">
      <span className="icon">
        <i className="fa fa-github"></i>
      </span>
    </a>
    <a className="nav-item">
      <span className="icon">
        <i className="fa fa-medium"></i>
      </span>
    </a>
  </div>

  <span className="nav-toggle">
    <span></span>
    <span></span>
    <span></span>
  </span>
  <div className="nav-right nav-menu">
    <a className="nav-item" href="/">
      Home
    </a>
    <a className="nav-item" href="">
      Profile
    </a>
    <a className="nav-item" 
        onClick={ () => {
          window.localStorage.setItem('token', '')
          window.location.href = "/"
        } }>
      Logout
    </a>
  </div>
</nav>



        )
    }else{
        return(


<nav className="nav">
  <div className="nav-left">
    <a className="nav-item">
      <img src="http://i.imgur.com/jXPv6xT.png" alt="Bulma logo" />
    </a>
  </div>

  <div className="nav-center">
    <a className="nav-item" href="https://github.com/Shadid12/CampFire">
      <span className="icon">
        <i className="fa fa-github"></i>
      </span>
    </a>
    <a className="nav-item">
      <span className="icon">
        <i className="fa fa-medium"></i>
      </span>
    </a>
  </div>

  <span className="nav-toggle">
    <span></span>
    <span></span>
    <span></span>
  </span>
  <div className="nav-right nav-menu">
    <a className="nav-item" href="/">
      Home
    </a>
    <a className="nav-item" href="/#/signup">
      Signup
    </a>
    <a className="nav-item" href="/#/login">
      Login
    </a>
  </div>
</nav>




        )
    }
	}
}

export default Nav