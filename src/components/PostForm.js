import React from 'react'

// components
import Nav from '../Nav'

// lib
import $ from 'jquery'
import animate from 'animate.css'

// css
import './styles/PostForm.css'

class PostForm extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			title: '',
			body: ''
		}

		this.handleTitle = this.handleTitle.bind(this)
		this.handleBody = this.handleBody.bind(this)
	}

	componentDidMount() {
		$("#pop").hide()
		$("#err").hide()
	}

	handleTitle(e){
  		this.setState({title: e.target.value})
  	}

  	handleBody(e){
  		this.setState({body: e.target.value})
  	}

  	handlePost = () => {
  		var url = "https://react-like-a-boss-shadid121.c9users.io/posts"
		var d = {
			'post':{ 'title': this.state.title, 'body': this.state.body }
		}
		var auth = 'bearer '+ window.localStorage.getItem('token')
		
		$.ajax({
		    type: "POST",
		    url: url,
		    beforeSend: function (xhr) {
    			xhr.setRequestHeader('Authorization', auth);
			},
		    data: d,
		    error: () => {
		    	$('#err').removeClass('animated bounceIn')
		    	$('#err').show()
		      	$('#err').html('')
		      	$('#err').append("<p>You are not authorized!! Login first please</p>")
		      	$('#err').addClass('animated bounceIn')
		    },
		    success: (res) => {
		      this.setState({ title: '', body: '' })
		      $('#pop').removeClass('animated bounceIn')
		      $('#pop').show()
		      $('#pop').html('')
		      $('#pop').append("<p>Message Created</p>")
		      $('#pop').addClass('animated bounceIn')
		      console.log(res)
		    }
		})
  	}

	render(){
		return(
			<div>
				<Nav />
				<div className="container">
				<div id="pop" className='notification is-primary'></div>
				<div id="err" className='notification is-danger'></div>
					<div className="field">
					  <p className="control">
					    <input className="input" type="text" placeholder="Title"
					    		value={this.state.title}
					    		onChange={this.handleTitle} />
					  </p>
					</div>
					<div className="field">
					  <p className="control">
					    <textarea className="textarea" placeholder="Description !!"
					    			value={this.state.body}
					    			onChange={this.handleBody}></textarea>
					  </p>
					</div>
					<div className="center">
						<p className="control">
						    <button className="button is-primary" onClick={this.handlePost}>Submit</button>
						</p>
					</div>
				</div>
			</div>
		)
	}
}

export default PostForm