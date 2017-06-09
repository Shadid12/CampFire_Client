import React from 'react'

// libs
import $ from 'jquery'
import animate from 'animate.css'

// components
import Nav from '../Nav'

class Login extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		}
		this.handleEmail = this.handleEmail.bind(this)
		this.handlePass = this.handlePass.bind(this)
	}
	
	handleEmail(e){
  		this.setState({email: e.target.value})
  	}

  	handlePass(e){
  		this.setState({password: e.target.value})
  	}


	loginHandle = () => {

		var url = "https://react-like-a-boss-shadid121.c9users.io/user_token"
		var d = {
			'auth':{ 'email': this.state.email, 'password': this.state.password }
		}
		$.ajax({
		    type: "POST",
		    url: url,
		    data: d,
		    error: (res) => {
		    	$("#err").removeClass('animated bounceIn notification is-warning').html('')
		    	setTimeout( () => {
		    		$("#err").append("<div>User and Password combination is not found</div>")
		    		$("#err").addClass('animated bounceIn notification is-warning')
		    	} , 300)
		    },
		    success: (res) => {
		      window.localStorage.setItem('token', res.jwt)
		      window.location.href = "/"
		    }
		})
	}


	render(){
		if(window.localStorage.getItem('token') != ''){
			return(
				<div>
					<Nav />
					<div>You are Logged in</div>
				</div>
			)
		}else{
			return(
<div>
<Nav />
<div className="container">
<p id="err"></p>
<div className="columns">
<div className="column is-half">

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
	    <button className="button is-primary" onClick={this.loginHandle}>Login</button>
	  </p>
	</div>
	OR
	<hr />
	<div className="field is-grouped">
	  <p className="control">
	    <button className="button is-primary" onClick={ ()=> {window.location.href="/#/signup"} }>Signup</button>
	  </p>
	</div>



</div>

</div>
</div>
</div>
			)
		}
	}
}

export default Login