import React from 'react'

class Login extends React.Component{
	render(){
		return(

<div className="container">
<div className="columns">
<div className="column is-half">

	<div className="field center">
	  <p className="control has-icons-left has-icons-right">
	    <input className="input" type="text" placeholder="Email input"/>
	    <span className="icon is-small is-left">
	      <i className="fa fa-envelope"></i>
	    </span>
	  </p>

	</div>

	<div className="field center">
	  <p className="control has-icons-left has-icons-right">
	    <input className="input" type="password" placeholder="Password"/>
	    <span className="icon is-small is-left">
	      <i className="fa fa-key"></i>
	    </span>
	  </p>

	</div>

	<div className="field is-grouped">
	  <p className="control">
	    <button className="button is-primary">Login</button>
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
		)
	}
}

export default Login