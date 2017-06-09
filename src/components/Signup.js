import React from 'react'

// libs
import $ from 'jquery'

// components
import Nav from '../Nav'


class Signup extends React.Component{
	
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			email: '',
			password: '',
			isLoggedin: false
		}

		this.handleName = this.handleName.bind(this)
		this.handleEmail = this.handleEmail.bind(this)
		this.handlePass = this.handlePass.bind(this)
	}

	handleName(event) {
    	this.setState({name: event.target.value})
  	}

  	handleEmail(e){
  		this.setState({email: e.target.value})
  	}

  	handlePass(e){
  		this.setState({password: e.target.value})
  	}

  	handleSignUp = () => {

		  var url = "https://react-like-a-boss-shadid121.c9users.io/users"
		  var d = {
		    'user':{
		      'name':this.state.name,
		      'email': this.state.email,
		      'password': this.state.password,
		      'password_confirmation': this.state.password
		    }
		  }
		  
		  $.ajax({
		    type: "POST",
		    url: url,
		    data: d,
		    success: this.handleLogin
		  })


	}

	handleLogin = () => {
		
		var url = "https://react-like-a-boss-shadid121.c9users.io/user_token"
		var d = {
			'auth':{ 'email': this.state.email, 'password': this.state.password }
		}
		$.ajax({
		    type: "POST",
		    url: url,
		    data: d,
		    success: (res) => {
		      window.localStorage.setItem('token', res.jwt)
		      console.log(window.localStorage.getItem('token'))
		      this.setState({ isLoggedin: !this.state.isLoggedin })
		    }
		})

	}


	render(){
		return(
<div>
<Nav />
{
	!this.state.isLoggedin ?
	<div>

<div className="container">
<div className="columns">
<div className="column is-half">

	<div className="field center">
	  <p className="control has-icons-left has-icons-right">
	    <input className="input" type="text" placeholder="Username" 
	    		value={ this.state.name } 
	    		onChange={ this.handleName }/>
	    <span className="icon is-small is-left">
	      <i className="fa fa-user-circle"></i>
	    </span>
	  </p>

	</div>


	<div className="field center">
	  <p className="control has-icons-left has-icons-right">
	    <input className="input" type="text" placeholder="Email input"
	    		value={ this.state.email } 
	    		onChange={ this.handleEmail}/>
	    <span className="icon is-small is-left">
	      <i className="fa fa-envelope"></i>
	    </span>
	  </p>

	</div>

	<div className="field center">
	  <p className="control has-icons-left has-icons-right">
	    <input className="input" type="password" placeholder="Password"
	    		value={ this.state.password } 
	    		onChange={ this.handlePass}/>
	    
	    <span className="icon is-small is-left">
	      <i className="fa fa-key"></i>
	    </span>
	  </p>

	</div>

	<div className="field is-grouped">
	  <p className="control">
	    <button className="button is-primary" onClick={this.handleSignUp}>Signup</button>
	  </p>
	</div>
	Already Have an Account ?
	<hr />
	<div className="field is-grouped">
	  <p className="control">
	    <button className="button is-primary" onClick={ ()=> {window.location.href="/#/login"} }>Login</button>
	  </p>
	</div>



</div>

</div>
</div>
	</div> 
	:
	<div>
		You are Loggen in
	</div>
}


</div>



		)
	}
}

export default Signup