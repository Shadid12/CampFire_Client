import React from 'react'

// components
import Nav from '../Nav'

// lib
import $ from 'jquery'

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

		$.ajax({
		    type: "POST",
		    url: url,
		    data: d,
		    success: (res) => {
		      console.log(res)
		    }
		})
  	}

	render(){
		return(
			<div>
				<Nav />
				<div className="container">
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